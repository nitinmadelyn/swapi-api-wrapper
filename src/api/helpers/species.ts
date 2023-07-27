import config from 'config';
import axios from 'axios';
import { getDestructionFlag, getPlanet, getPlanets } from './planets';

const SWAPI_BASEURL: string = config.get('swapi.base_url');

const getSpecies = async (page) => {
    const species = (await axios.get(`${SWAPI_BASEURL}species/?page=${page}`)).data;
    const allPlanetsUrls = species.results.map((speci: any) => speci.homeworld).filter(url => url);
    const planets = await getPlanets(allPlanetsUrls);

    for (const [i, row] of species.results.entries()) {
        if (row.homeworld) {
            const is_destroy = await getDestructionFlag(row.homeworld);
            species.results[i].homeworld = planets[row.homeworld.toString()];
            species.results[i].homeworld.is_destroy = is_destroy;
        }
    }


    return species;
}

const getSpeciesDetail = async (id) => {
    const species = (await axios.get(`${SWAPI_BASEURL}species/${id}/`)).data;
    if (species.homeworld) {
        const is_destroy = await getDestructionFlag(species.homeworld);
        const planet = await getPlanet(species.homeworld);
        species.homeworld = planet;
        species.homeworld.is_destroy = is_destroy;
    }
    return species;
}

export { getSpecies, getSpeciesDetail };
