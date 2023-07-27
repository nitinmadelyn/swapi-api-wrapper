import config from 'config';
import { Planet } from "../interfaces/interface";
import axios from "axios";
import { Planet as PlanetModel } from '../models/planet';
import errorHandler from '../middlewares/error-handler';

const SWAPI_BASEURL: string = config.get('swapi.base_url');

const getPlanets = async (planetsUrls) => {
    const planetIds = planetsUrls.map(planet => planet.split('/').filter(Boolean).pop());
    const fromPage = Math.ceil(Math.min(...planetIds) / 10);
    const toPage = Math.ceil(Math.max(...planetIds) / 10);

    const planets: Planet[] = [];
    let page = fromPage;
    while (page <= toPage) {
        const res = await getPlanet(`${SWAPI_BASEURL}planets/?page=${page}`);
        planets.push(...trimResults(res.results));
        if (!res.next) {
            break;
        }
        page++;
    }
    return mergeResultsByUrl(planets);
}

const getPlanet = async (url) => {
    const req = await axios.get(url);
    return req.data;
}

const getDestructionFlag = async (homeworld) => {
    const result = await PlanetModel.findOneAndUpdate(
        { homeworld },
        { $setOnInsert: { homeworld } },
        { upsert: true, new: true }
    );
    return result.is_destroy;
}

const trimResults = (results) => {
    return results.map(result => ({ [result.url]: result })).flat();
};

const mergeResultsByUrl = (planets) => {
    return planets.reduce((acc, planet) => {
        const url = Object.keys(planet)[0];
        const planetData = planet[url];
        return { ...acc, [url]: planetData };
    }, {});
};

export { getPlanets, getPlanet, getDestructionFlag };