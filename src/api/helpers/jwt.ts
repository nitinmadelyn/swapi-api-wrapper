import config from 'config';
import jwt from 'jsonwebtoken';

const JWT_EXPIRES_IN: string = config.get('jwt.expires_in');

export const generateJWTToken = ({ name, email }) => {
    return jwt.sign({
        name,
        email
    },
        process.env.JWT_KEY,
        { expiresIn: JWT_EXPIRES_IN }
    );
}