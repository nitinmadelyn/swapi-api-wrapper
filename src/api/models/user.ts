import mongoose from "mongoose";
import moment from "moment";

// An interface that describes the properties of User
export interface UserAttributes {
    name: string;
    email: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attribues: UserAttributes): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    name: string;
    email: string;
    updatedAt: number;
    createdAt: number;
}

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        updatedAt: {
            type: Number,
            required: false,
            default: () => moment.utc().unix()
        },
        createdAt: {
            type: Number,
            required: false,
            default: () => moment.utc().unix()
        }
    }
)

userSchema.statics.build = (attribues: UserAttributes) => {
    return new User(attribues);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
