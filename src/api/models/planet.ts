import mongoose from "mongoose";
import moment from "moment";

// An interface that describes the properties of Planet
export interface PlanetAttributes {
    homeworld: string;
    is_destroy?: boolean;
}

// An interface that describes the properties
// that a Planet Model has
interface PlanetModel extends mongoose.Model<PlanetDoc> {
    build(attribues: PlanetAttributes): PlanetDoc;
}

// An interface that describes the properties
// that a Planet Document has
interface PlanetDoc extends mongoose.Document {
    homeworld: string;
    is_destroy: boolean;
    updatedAt: number;
    createdAt: number;
}

const planetSchema = new mongoose.Schema(
    {
        homeworld: {
            type: String,
            required: true,
            unique: true
        },
        is_destroy: {
            type: Boolean,
            required: false,
            default: false
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
    }, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;

            return ret;
        }
    }
}
)

planetSchema.statics.build = (attribues: PlanetAttributes) => {
    return new Planet(attribues);
};

const Planet = mongoose.model<PlanetDoc, PlanetModel>('Planet', planetSchema);

export { Planet };
