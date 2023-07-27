import { FastifyRequest } from "fastify";
import { UserAttributes } from "../models/user";

interface ModifyFastifyRequest extends FastifyRequest {
    user?: UserAttributes
}

interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: [string];
    films: [string];
    created: string;
    edited: string;
    url: string;
}

interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    language: string;
    homeworld: string | Planet;
    people: [string];
    films: [string];
    created: string;
    edited: string;
    url: string;
}

export { ModifyFastifyRequest, Species, Planet };