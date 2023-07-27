const mockSpeciesData = {
    results: {
        "count": 37,
        "next": "https://swapi.dev/api/species/?page=2",
        "previous": null,
        "results": [
            {
                "name": "Human",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "180",
                "skin_colors": "caucasian, black, asian, hispanic",
                "hair_colors": "blonde, brown, black, red",
                "eye_colors": "brown, blue, green, hazel, grey, amber",
                "average_lifespan": "120",
                "homeworld": "https://swapi.dev/api/planets/9/",
                "language": "Galactic Basic",
                "people": [
                    "https://swapi.dev/api/people/66/",
                    "https://swapi.dev/api/people/67/",
                    "https://swapi.dev/api/people/68/",
                    "https://swapi.dev/api/people/74/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T13:52:11.567000Z",
                "edited": "2014-12-20T21:36:42.136000Z",
                "url": "https://swapi.dev/api/species/1/"
            },
            {
                "name": "Droid",
                "classification": "artificial",
                "designation": "sentient",
                "average_height": "n/a",
                "skin_colors": "n/a",
                "hair_colors": "n/a",
                "eye_colors": "n/a",
                "average_lifespan": "indefinite",
                "homeworld": null,
                "language": "n/a",
                "people": [
                    "https://swapi.dev/api/people/2/",
                    "https://swapi.dev/api/people/3/",
                    "https://swapi.dev/api/people/8/",
                    "https://swapi.dev/api/people/23/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T15:16:16.259000Z",
                "edited": "2014-12-20T21:36:42.139000Z",
                "url": "https://swapi.dev/api/species/2/"
            },
            {
                "name": "Wookie",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "210",
                "skin_colors": "gray",
                "hair_colors": "black, brown",
                "eye_colors": "blue, green, yellow, brown, golden, red",
                "average_lifespan": "400",
                "homeworld": "https://swapi.dev/api/planets/14/",
                "language": "Shyriiwook",
                "people": [
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/80/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T16:44:31.486000Z",
                "edited": "2014-12-20T21:36:42.142000Z",
                "url": "https://swapi.dev/api/species/3/"
            },
            {
                "name": "Rodian",
                "classification": "sentient",
                "designation": "reptilian",
                "average_height": "170",
                "skin_colors": "green, blue",
                "hair_colors": "n/a",
                "eye_colors": "black",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/23/",
                "language": "Galatic Basic",
                "people": [
                    "https://swapi.dev/api/people/15/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T17:05:26.471000Z",
                "edited": "2014-12-20T21:36:42.144000Z",
                "url": "https://swapi.dev/api/species/4/"
            },
            {
                "name": "Hutt",
                "classification": "gastropod",
                "designation": "sentient",
                "average_height": "300",
                "skin_colors": "green, brown, tan",
                "hair_colors": "n/a",
                "eye_colors": "yellow, red",
                "average_lifespan": "1000",
                "homeworld": "https://swapi.dev/api/planets/24/",
                "language": "Huttese",
                "people": [
                    "https://swapi.dev/api/people/16/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T17:12:50.410000Z",
                "edited": "2014-12-20T21:36:42.146000Z",
                "url": "https://swapi.dev/api/species/5/"
            },
            {
                "name": "Yoda's species",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "66",
                "skin_colors": "green, yellow",
                "hair_colors": "brown, white",
                "eye_colors": "brown, green, yellow",
                "average_lifespan": "900",
                "homeworld": "https://swapi.dev/api/planets/28/",
                "language": "Galactic basic",
                "people": [
                    "https://swapi.dev/api/people/20/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-15T12:27:22.877000Z",
                "edited": "2014-12-20T21:36:42.148000Z",
                "url": "https://swapi.dev/api/species/6/"
            },
            {
                "name": "Trandoshan",
                "classification": "reptile",
                "designation": "sentient",
                "average_height": "200",
                "skin_colors": "brown, green",
                "hair_colors": "none",
                "eye_colors": "yellow, orange",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/29/",
                "language": "Dosh",
                "people": [
                    "https://swapi.dev/api/people/24/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/"
                ],
                "created": "2014-12-15T13:07:47.704000Z",
                "edited": "2014-12-20T21:36:42.151000Z",
                "url": "https://swapi.dev/api/species/7/"
            },
            {
                "name": "Mon Calamari",
                "classification": "amphibian",
                "designation": "sentient",
                "average_height": "160",
                "skin_colors": "red, blue, brown, magenta",
                "hair_colors": "none",
                "eye_colors": "yellow",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/31/",
                "language": "Mon Calamarian",
                "people": [
                    "https://swapi.dev/api/people/27/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:09:52.263000Z",
                "edited": "2014-12-20T21:36:42.153000Z",
                "url": "https://swapi.dev/api/species/8/"
            },
            {
                "name": "Ewok",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "100",
                "skin_colors": "brown",
                "hair_colors": "white, brown, black",
                "eye_colors": "orange, brown",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/7/",
                "language": "Ewokese",
                "people": [
                    "https://swapi.dev/api/people/30/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:22:00.285000Z",
                "edited": "2014-12-20T21:36:42.155000Z",
                "url": "https://swapi.dev/api/species/9/"
            },
            {
                "name": "Sullustan",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "180",
                "skin_colors": "pale",
                "hair_colors": "none",
                "eye_colors": "black",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/33/",
                "language": "Sullutese",
                "people": [
                    "https://swapi.dev/api/people/31/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:26:20.103000Z",
                "edited": "2014-12-20T21:36:42.157000Z",
                "url": "https://swapi.dev/api/species/10/"
            }
        ]
    },
    expected: {
        "count": 37,
        "next": "https://swapi.dev/api/species/?page=2",
        "previous": null,
        "results": [
            {
                "name": "Human",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "180",
                "skin_colors": "caucasian, black, asian, hispanic",
                "hair_colors": "blonde, brown, black, red",
                "eye_colors": "brown, blue, green, hazel, grey, amber",
                "average_lifespan": "120",
                "homeworld": {
                    "name": "Coruscant",
                    "rotation_period": "24",
                    "orbital_period": "368",
                    "diameter": "12240",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "cityscape, mountains",
                    "surface_water": "unknown",
                    "population": "1000000000000",
                    "residents": [
                        "https://swapi.dev/api/people/34/",
                        "https://swapi.dev/api/people/55/",
                        "https://swapi.dev/api/people/74/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/4/",
                        "https://swapi.dev/api/films/5/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T11:54:13.921000Z",
                    "edited": "2014-12-20T20:58:18.432000Z",
                    "url": "https://swapi.dev/api/planets/9/",
                    "is_destroy": false,
                },
                "language": "Galactic Basic",
                "people": [
                    "https://swapi.dev/api/people/66/",
                    "https://swapi.dev/api/people/67/",
                    "https://swapi.dev/api/people/68/",
                    "https://swapi.dev/api/people/74/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T13:52:11.567000Z",
                "edited": "2014-12-20T21:36:42.136000Z",
                "url": "https://swapi.dev/api/species/1/"
            },
            {
                "name": "Droid",
                "classification": "artificial",
                "designation": "sentient",
                "average_height": "n/a",
                "skin_colors": "n/a",
                "hair_colors": "n/a",
                "eye_colors": "n/a",
                "average_lifespan": "indefinite",
                "homeworld": null,
                "language": "n/a",
                "people": [
                    "https://swapi.dev/api/people/2/",
                    "https://swapi.dev/api/people/3/",
                    "https://swapi.dev/api/people/8/",
                    "https://swapi.dev/api/people/23/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T15:16:16.259000Z",
                "edited": "2014-12-20T21:36:42.139000Z",
                "url": "https://swapi.dev/api/species/2/"
            },
            {
                "name": "Wookie",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "210",
                "skin_colors": "gray",
                "hair_colors": "black, brown",
                "eye_colors": "blue, green, yellow, brown, golden, red",
                "average_lifespan": "400",
                "homeworld": {
                    "name": "Kashyyyk",
                    "rotation_period": "26",
                    "orbital_period": "381",
                    "diameter": "12765",
                    "climate": "tropical",
                    "gravity": "1 standard",
                    "terrain": "jungle, forests, lakes, rivers",
                    "surface_water": "60",
                    "population": "45000000",
                    "residents": [
                        "https://swapi.dev/api/people/13/",
                        "https://swapi.dev/api/people/80/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:32:00.124000Z",
                    "edited": "2014-12-20T20:58:18.442000Z",
                    "url": "https://swapi.dev/api/planets/14/",
                    "is_destroy": false,
                },
                "language": "Shyriiwook",
                "people": [
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/80/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T16:44:31.486000Z",
                "edited": "2014-12-20T21:36:42.142000Z",
                "url": "https://swapi.dev/api/species/3/"
            },
            {
                "name": "Rodian",
                "classification": "sentient",
                "designation": "reptilian",
                "average_height": "170",
                "skin_colors": "green, blue",
                "hair_colors": "n/a",
                "eye_colors": "black",
                "average_lifespan": "unknown",
                "homeworld": {
                    "name": "Rodia",
                    "rotation_period": "29",
                    "orbital_period": "305",
                    "diameter": "7549",
                    "climate": "hot",
                    "gravity": "1 standard",
                    "terrain": "jungles, oceans, urban, swamps",
                    "surface_water": "60",
                    "population": "1300000000",
                    "residents": [
                        "https://swapi.dev/api/people/15/"
                    ],
                    "films": [],
                    "created": "2014-12-10T17:03:28.110000Z",
                    "edited": "2014-12-20T20:58:18.458000Z",
                    "url": "https://swapi.dev/api/planets/23/",
                    "is_destroy": false,
                },
                "language": "Galatic Basic",
                "people": [
                    "https://swapi.dev/api/people/15/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T17:05:26.471000Z",
                "edited": "2014-12-20T21:36:42.144000Z",
                "url": "https://swapi.dev/api/species/4/"
            },
            {
                "name": "Hutt",
                "classification": "gastropod",
                "designation": "sentient",
                "average_height": "300",
                "skin_colors": "green, brown, tan",
                "hair_colors": "n/a",
                "eye_colors": "yellow, red",
                "average_lifespan": "1000",
                "homeworld": {
                    "name": "Nal Hutta",
                    "rotation_period": "87",
                    "orbital_period": "413",
                    "diameter": "12150",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "urban, oceans, swamps, bogs",
                    "surface_water": "unknown",
                    "population": "7000000000",
                    "residents": [
                        "https://swapi.dev/api/people/16/"
                    ],
                    "films": [],
                    "created": "2014-12-10T17:11:29.452000Z",
                    "edited": "2014-12-20T20:58:18.460000Z",
                    "url": "https://swapi.dev/api/planets/24/",
                    "is_destroy": false,
                },
                "language": "Huttese",
                "people": [
                    "https://swapi.dev/api/people/16/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T17:12:50.410000Z",
                "edited": "2014-12-20T21:36:42.146000Z",
                "url": "https://swapi.dev/api/species/5/"
            },
            {
                "name": "Yoda's species",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "66",
                "skin_colors": "green, yellow",
                "hair_colors": "brown, white",
                "eye_colors": "brown, green, yellow",
                "average_lifespan": "900",
                "homeworld": {
                    "name": "unknown",
                    "rotation_period": "0",
                    "orbital_period": "0",
                    "diameter": "0",
                    "climate": "unknown",
                    "gravity": "unknown",
                    "terrain": "unknown",
                    "surface_water": "unknown",
                    "population": "unknown",
                    "residents": [
                        "https://swapi.dev/api/people/20/",
                        "https://swapi.dev/api/people/23/",
                        "https://swapi.dev/api/people/29/",
                        "https://swapi.dev/api/people/32/",
                        "https://swapi.dev/api/people/75/"
                    ],
                    "films": [],
                    "created": "2014-12-15T12:25:59.569000Z",
                    "edited": "2014-12-20T20:58:18.466000Z",
                    "url": "https://swapi.dev/api/planets/28/",
                    "is_destroy": false,
                },
                "language": "Galactic basic",
                "people": [
                    "https://swapi.dev/api/people/20/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-15T12:27:22.877000Z",
                "edited": "2014-12-20T21:36:42.148000Z",
                "url": "https://swapi.dev/api/species/6/"
            },
            {
                "name": "Trandoshan",
                "classification": "reptile",
                "designation": "sentient",
                "average_height": "200",
                "skin_colors": "brown, green",
                "hair_colors": "none",
                "eye_colors": "yellow, orange",
                "average_lifespan": "unknown",
                "homeworld": {
                    "name": "Trandosha",
                    "rotation_period": "25",
                    "orbital_period": "371",
                    "diameter": "0",
                    "climate": "arid",
                    "gravity": "0.62 standard",
                    "terrain": "mountains, seas, grasslands, deserts",
                    "surface_water": "unknown",
                    "population": "42000000",
                    "residents": [
                        "https://swapi.dev/api/people/24/"
                    ],
                    "films": [],
                    "created": "2014-12-15T12:53:47.695000Z",
                    "edited": "2014-12-20T20:58:18.468000Z",
                    "url": "https://swapi.dev/api/planets/29/",
                    "is_destroy": false,
                },
                "language": "Dosh",
                "people": [
                    "https://swapi.dev/api/people/24/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/"
                ],
                "created": "2014-12-15T13:07:47.704000Z",
                "edited": "2014-12-20T21:36:42.151000Z",
                "url": "https://swapi.dev/api/species/7/"
            },
            {
                "name": "Mon Calamari",
                "classification": "amphibian",
                "designation": "sentient",
                "average_height": "160",
                "skin_colors": "red, blue, brown, magenta",
                "hair_colors": "none",
                "eye_colors": "yellow",
                "average_lifespan": "unknown",
                "homeworld": {
                    "name": "Mon Cala",
                    "rotation_period": "21",
                    "orbital_period": "398",
                    "diameter": "11030",
                    "climate": "temperate",
                    "gravity": "1",
                    "terrain": "oceans, reefs, islands",
                    "surface_water": "100",
                    "population": "27000000000",
                    "residents": [
                        "https://swapi.dev/api/people/27/"
                    ],
                    "films": [],
                    "created": "2014-12-18T11:07:01.792000Z",
                    "edited": "2014-12-20T20:58:18.471000Z",
                    "url": "https://swapi.dev/api/planets/31/",
                    "is_destroy": false,
                },
                "language": "Mon Calamarian",
                "people": [
                    "https://swapi.dev/api/people/27/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:09:52.263000Z",
                "edited": "2014-12-20T21:36:42.153000Z",
                "url": "https://swapi.dev/api/species/8/"
            },
            {
                "name": "Ewok",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "100",
                "skin_colors": "brown",
                "hair_colors": "white, brown, black",
                "eye_colors": "orange, brown",
                "average_lifespan": "unknown",
                "homeworld": {
                    "name": "Endor",
                    "rotation_period": "18",
                    "orbital_period": "402",
                    "diameter": "4900",
                    "climate": "temperate",
                    "gravity": "0.85 standard",
                    "terrain": "forests, mountains, lakes",
                    "surface_water": "8",
                    "population": "30000000",
                    "residents": [
                        "https://swapi.dev/api/people/30/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/3/"
                    ],
                    "created": "2014-12-10T11:50:29.349000Z",
                    "edited": "2014-12-20T20:58:18.429000Z",
                    "url": "https://swapi.dev/api/planets/7/",
                    "is_destroy": false,
                },
                "language": "Ewokese",
                "people": [
                    "https://swapi.dev/api/people/30/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:22:00.285000Z",
                "edited": "2014-12-20T21:36:42.155000Z",
                "url": "https://swapi.dev/api/species/9/"
            },
            {
                "name": "Sullustan",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "180",
                "skin_colors": "pale",
                "hair_colors": "none",
                "eye_colors": "black",
                "average_lifespan": "unknown",
                "homeworld": {
                    "name": "Sullust",
                    "rotation_period": "20",
                    "orbital_period": "263",
                    "diameter": "12780",
                    "climate": "superheated",
                    "gravity": "1",
                    "terrain": "mountains, volcanoes, rocky deserts",
                    "surface_water": "5",
                    "population": "18500000000",
                    "residents": [
                        "https://swapi.dev/api/people/31/"
                    ],
                    "films": [],
                    "created": "2014-12-18T11:25:40.243000Z",
                    "edited": "2014-12-20T20:58:18.474000Z",
                    "url": "https://swapi.dev/api/planets/33/",
                    "is_destroy": false,
                },
                "language": "Sullutese",
                "people": [
                    "https://swapi.dev/api/people/31/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:26:20.103000Z",
                "edited": "2014-12-20T21:36:42.157000Z",
                "url": "https://swapi.dev/api/species/10/"
            }
        ]
    },
    planets: [
        {
            "count": 60,
            "next": "https://swapi.dev/api/planets/?page=2",
            "previous": null,
            "results": [
                {
                    "name": "Tatooine",
                    "rotation_period": "23",
                    "orbital_period": "304",
                    "diameter": "10465",
                    "climate": "arid",
                    "gravity": "1 standard",
                    "terrain": "desert",
                    "surface_water": "1",
                    "population": "200000",
                    "residents": [
                        "https://swapi.dev/api/people/1/",
                        "https://swapi.dev/api/people/2/",
                        "https://swapi.dev/api/people/4/",
                        "https://swapi.dev/api/people/6/",
                        "https://swapi.dev/api/people/7/",
                        "https://swapi.dev/api/people/8/",
                        "https://swapi.dev/api/people/9/",
                        "https://swapi.dev/api/people/11/",
                        "https://swapi.dev/api/people/43/",
                        "https://swapi.dev/api/people/62/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/1/",
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/4/",
                        "https://swapi.dev/api/films/5/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-09T13:50:49.641000Z",
                    "edited": "2014-12-20T20:58:18.411000Z",
                    "url": "https://swapi.dev/api/planets/1/"
                },
                {
                    "name": "Alderaan",
                    "rotation_period": "24",
                    "orbital_period": "364",
                    "diameter": "12500",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "grasslands, mountains",
                    "surface_water": "40",
                    "population": "2000000000",
                    "residents": [
                        "https://swapi.dev/api/people/5/",
                        "https://swapi.dev/api/people/68/",
                        "https://swapi.dev/api/people/81/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/1/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T11:35:48.479000Z",
                    "edited": "2014-12-20T20:58:18.420000Z",
                    "url": "https://swapi.dev/api/planets/2/"
                },
                {
                    "name": "Yavin IV",
                    "rotation_period": "24",
                    "orbital_period": "4818",
                    "diameter": "10200",
                    "climate": "temperate, tropical",
                    "gravity": "1 standard",
                    "terrain": "jungle, rainforests",
                    "surface_water": "8",
                    "population": "1000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/1/"
                    ],
                    "created": "2014-12-10T11:37:19.144000Z",
                    "edited": "2014-12-20T20:58:18.421000Z",
                    "url": "https://swapi.dev/api/planets/3/"
                },
                {
                    "name": "Hoth",
                    "rotation_period": "23",
                    "orbital_period": "549",
                    "diameter": "7200",
                    "climate": "frozen",
                    "gravity": "1.1 standard",
                    "terrain": "tundra, ice caves, mountain ranges",
                    "surface_water": "100",
                    "population": "unknown",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/2/"
                    ],
                    "created": "2014-12-10T11:39:13.934000Z",
                    "edited": "2014-12-20T20:58:18.423000Z",
                    "url": "https://swapi.dev/api/planets/4/"
                },
                {
                    "name": "Dagobah",
                    "rotation_period": "23",
                    "orbital_period": "341",
                    "diameter": "8900",
                    "climate": "murky",
                    "gravity": "N/A",
                    "terrain": "swamp, jungles",
                    "surface_water": "8",
                    "population": "unknown",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/2/",
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T11:42:22.590000Z",
                    "edited": "2014-12-20T20:58:18.425000Z",
                    "url": "https://swapi.dev/api/planets/5/"
                },
                {
                    "name": "Bespin",
                    "rotation_period": "12",
                    "orbital_period": "5110",
                    "diameter": "118000",
                    "climate": "temperate",
                    "gravity": "1.5 (surface), 1 standard (Cloud City)",
                    "terrain": "gas giant",
                    "surface_water": "0",
                    "population": "6000000",
                    "residents": [
                        "https://swapi.dev/api/people/26/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/2/"
                    ],
                    "created": "2014-12-10T11:43:55.240000Z",
                    "edited": "2014-12-20T20:58:18.427000Z",
                    "url": "https://swapi.dev/api/planets/6/"
                },
                {
                    "name": "Endor",
                    "rotation_period": "18",
                    "orbital_period": "402",
                    "diameter": "4900",
                    "climate": "temperate",
                    "gravity": "0.85 standard",
                    "terrain": "forests, mountains, lakes",
                    "surface_water": "8",
                    "population": "30000000",
                    "residents": [
                        "https://swapi.dev/api/people/30/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/3/"
                    ],
                    "created": "2014-12-10T11:50:29.349000Z",
                    "edited": "2014-12-20T20:58:18.429000Z",
                    "url": "https://swapi.dev/api/planets/7/"
                },
                {
                    "name": "Naboo",
                    "rotation_period": "26",
                    "orbital_period": "312",
                    "diameter": "12120",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "grassy hills, swamps, forests, mountains",
                    "surface_water": "12",
                    "population": "4500000000",
                    "residents": [
                        "https://swapi.dev/api/people/3/",
                        "https://swapi.dev/api/people/21/",
                        "https://swapi.dev/api/people/35/",
                        "https://swapi.dev/api/people/36/",
                        "https://swapi.dev/api/people/37/",
                        "https://swapi.dev/api/people/38/",
                        "https://swapi.dev/api/people/39/",
                        "https://swapi.dev/api/people/42/",
                        "https://swapi.dev/api/people/60/",
                        "https://swapi.dev/api/people/61/",
                        "https://swapi.dev/api/people/66/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/4/",
                        "https://swapi.dev/api/films/5/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T11:52:31.066000Z",
                    "edited": "2014-12-20T20:58:18.430000Z",
                    "url": "https://swapi.dev/api/planets/8/"
                },
                {
                    "name": "Coruscant",
                    "rotation_period": "24",
                    "orbital_period": "368",
                    "diameter": "12240",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "cityscape, mountains",
                    "surface_water": "unknown",
                    "population": "1000000000000",
                    "residents": [
                        "https://swapi.dev/api/people/34/",
                        "https://swapi.dev/api/people/55/",
                        "https://swapi.dev/api/people/74/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/4/",
                        "https://swapi.dev/api/films/5/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T11:54:13.921000Z",
                    "edited": "2014-12-20T20:58:18.432000Z",
                    "url": "https://swapi.dev/api/planets/9/"
                },
                {
                    "name": "Kamino",
                    "rotation_period": "27",
                    "orbital_period": "463",
                    "diameter": "19720",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "ocean",
                    "surface_water": "100",
                    "population": "1000000000",
                    "residents": [
                        "https://swapi.dev/api/people/22/",
                        "https://swapi.dev/api/people/72/",
                        "https://swapi.dev/api/people/73/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/5/"
                    ],
                    "created": "2014-12-10T12:45:06.577000Z",
                    "edited": "2014-12-20T20:58:18.434000Z",
                    "url": "https://swapi.dev/api/planets/10/"
                }
            ]
        },
        {
            "count": 60,
            "next": "https://swapi.dev/api/planets/?page=3",
            "previous": "https://swapi.dev/api/planets/?page=1",
            "results": [
                {
                    "name": "Geonosis",
                    "rotation_period": "30",
                    "orbital_period": "256",
                    "diameter": "11370",
                    "climate": "temperate, arid",
                    "gravity": "0.9 standard",
                    "terrain": "rock, desert, mountain, barren",
                    "surface_water": "5",
                    "population": "100000000000",
                    "residents": [
                        "https://swapi.dev/api/people/63/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/5/"
                    ],
                    "created": "2014-12-10T12:47:22.350000Z",
                    "edited": "2014-12-20T20:58:18.437000Z",
                    "url": "https://swapi.dev/api/planets/11/"
                },
                {
                    "name": "Utapau",
                    "rotation_period": "27",
                    "orbital_period": "351",
                    "diameter": "12900",
                    "climate": "temperate, arid, windy",
                    "gravity": "1 standard",
                    "terrain": "scrublands, savanna, canyons, sinkholes",
                    "surface_water": "0.9",
                    "population": "95000000",
                    "residents": [
                        "https://swapi.dev/api/people/83/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T12:49:01.491000Z",
                    "edited": "2014-12-20T20:58:18.439000Z",
                    "url": "https://swapi.dev/api/planets/12/"
                },
                {
                    "name": "Mustafar",
                    "rotation_period": "36",
                    "orbital_period": "412",
                    "diameter": "4200",
                    "climate": "hot",
                    "gravity": "1 standard",
                    "terrain": "volcanoes, lava rivers, mountains, caves",
                    "surface_water": "0",
                    "population": "20000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T12:50:16.526000Z",
                    "edited": "2014-12-20T20:58:18.440000Z",
                    "url": "https://swapi.dev/api/planets/13/"
                },
                {
                    "name": "Kashyyyk",
                    "rotation_period": "26",
                    "orbital_period": "381",
                    "diameter": "12765",
                    "climate": "tropical",
                    "gravity": "1 standard",
                    "terrain": "jungle, forests, lakes, rivers",
                    "surface_water": "60",
                    "population": "45000000",
                    "residents": [
                        "https://swapi.dev/api/people/13/",
                        "https://swapi.dev/api/people/80/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:32:00.124000Z",
                    "edited": "2014-12-20T20:58:18.442000Z",
                    "url": "https://swapi.dev/api/planets/14/"
                },
                {
                    "name": "Polis Massa",
                    "rotation_period": "24",
                    "orbital_period": "590",
                    "diameter": "0",
                    "climate": "artificial temperate ",
                    "gravity": "0.56 standard",
                    "terrain": "airless asteroid",
                    "surface_water": "0",
                    "population": "1000000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:33:46.405000Z",
                    "edited": "2014-12-20T20:58:18.444000Z",
                    "url": "https://swapi.dev/api/planets/15/"
                },
                {
                    "name": "Mygeeto",
                    "rotation_period": "12",
                    "orbital_period": "167",
                    "diameter": "10088",
                    "climate": "frigid",
                    "gravity": "1 standard",
                    "terrain": "glaciers, mountains, ice canyons",
                    "surface_water": "unknown",
                    "population": "19000000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:43:39.139000Z",
                    "edited": "2014-12-20T20:58:18.446000Z",
                    "url": "https://swapi.dev/api/planets/16/"
                },
                {
                    "name": "Felucia",
                    "rotation_period": "34",
                    "orbital_period": "231",
                    "diameter": "9100",
                    "climate": "hot, humid",
                    "gravity": "0.75 standard",
                    "terrain": "fungus forests",
                    "surface_water": "unknown",
                    "population": "8500000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:44:50.397000Z",
                    "edited": "2014-12-20T20:58:18.447000Z",
                    "url": "https://swapi.dev/api/planets/17/"
                },
                {
                    "name": "Cato Neimoidia",
                    "rotation_period": "25",
                    "orbital_period": "278",
                    "diameter": "0",
                    "climate": "temperate, moist",
                    "gravity": "1 standard",
                    "terrain": "mountains, fields, forests, rock arches",
                    "surface_water": "unknown",
                    "population": "10000000",
                    "residents": [
                        "https://swapi.dev/api/people/33/"
                    ],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:46:28.704000Z",
                    "edited": "2014-12-20T20:58:18.449000Z",
                    "url": "https://swapi.dev/api/planets/18/"
                },
                {
                    "name": "Saleucami",
                    "rotation_period": "26",
                    "orbital_period": "392",
                    "diameter": "14920",
                    "climate": "hot",
                    "gravity": "unknown",
                    "terrain": "caves, desert, mountains, volcanoes",
                    "surface_water": "unknown",
                    "population": "1400000000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/6/"
                    ],
                    "created": "2014-12-10T13:47:46.874000Z",
                    "edited": "2014-12-20T20:58:18.450000Z",
                    "url": "https://swapi.dev/api/planets/19/"
                },
                {
                    "name": "Stewjon",
                    "rotation_period": "unknown",
                    "orbital_period": "unknown",
                    "diameter": "0",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "grass",
                    "surface_water": "unknown",
                    "population": "unknown",
                    "residents": [
                        "https://swapi.dev/api/people/10/"
                    ],
                    "films": [],
                    "created": "2014-12-10T16:16:26.566000Z",
                    "edited": "2014-12-20T20:58:18.452000Z",
                    "url": "https://swapi.dev/api/planets/20/"
                }
            ]
        },
        {
            "count": 60,
            "next": "https://swapi.dev/api/planets/?page=4",
            "previous": "https://swapi.dev/api/planets/?page=2",
            "results": [
                {
                    "name": "Eriadu",
                    "rotation_period": "24",
                    "orbital_period": "360",
                    "diameter": "13490",
                    "climate": "polluted",
                    "gravity": "1 standard",
                    "terrain": "cityscape",
                    "surface_water": "unknown",
                    "population": "22000000000",
                    "residents": [
                        "https://swapi.dev/api/people/12/"
                    ],
                    "films": [],
                    "created": "2014-12-10T16:26:54.384000Z",
                    "edited": "2014-12-20T20:58:18.454000Z",
                    "url": "https://swapi.dev/api/planets/21/"
                },
                {
                    "name": "Corellia",
                    "rotation_period": "25",
                    "orbital_period": "329",
                    "diameter": "11000",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "plains, urban, hills, forests",
                    "surface_water": "70",
                    "population": "3000000000",
                    "residents": [
                        "https://swapi.dev/api/people/14/",
                        "https://swapi.dev/api/people/18/"
                    ],
                    "films": [],
                    "created": "2014-12-10T16:49:12.453000Z",
                    "edited": "2014-12-20T20:58:18.456000Z",
                    "url": "https://swapi.dev/api/planets/22/"
                },
                {
                    "name": "Rodia",
                    "rotation_period": "29",
                    "orbital_period": "305",
                    "diameter": "7549",
                    "climate": "hot",
                    "gravity": "1 standard",
                    "terrain": "jungles, oceans, urban, swamps",
                    "surface_water": "60",
                    "population": "1300000000",
                    "residents": [
                        "https://swapi.dev/api/people/15/"
                    ],
                    "films": [],
                    "created": "2014-12-10T17:03:28.110000Z",
                    "edited": "2014-12-20T20:58:18.458000Z",
                    "url": "https://swapi.dev/api/planets/23/"
                },
                {
                    "name": "Nal Hutta",
                    "rotation_period": "87",
                    "orbital_period": "413",
                    "diameter": "12150",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "urban, oceans, swamps, bogs",
                    "surface_water": "unknown",
                    "population": "7000000000",
                    "residents": [
                        "https://swapi.dev/api/people/16/"
                    ],
                    "films": [],
                    "created": "2014-12-10T17:11:29.452000Z",
                    "edited": "2014-12-20T20:58:18.460000Z",
                    "url": "https://swapi.dev/api/planets/24/"
                },
                {
                    "name": "Dantooine",
                    "rotation_period": "25",
                    "orbital_period": "378",
                    "diameter": "9830",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "oceans, savannas, mountains, grasslands",
                    "surface_water": "unknown",
                    "population": "1000",
                    "residents": [],
                    "films": [],
                    "created": "2014-12-10T17:23:29.896000Z",
                    "edited": "2014-12-20T20:58:18.461000Z",
                    "url": "https://swapi.dev/api/planets/25/"
                },
                {
                    "name": "Bestine IV",
                    "rotation_period": "26",
                    "orbital_period": "680",
                    "diameter": "6400",
                    "climate": "temperate",
                    "gravity": "unknown",
                    "terrain": "rocky islands, oceans",
                    "surface_water": "98",
                    "population": "62000000",
                    "residents": [
                        "https://swapi.dev/api/people/19/"
                    ],
                    "films": [],
                    "created": "2014-12-12T11:16:55.078000Z",
                    "edited": "2014-12-20T20:58:18.463000Z",
                    "url": "https://swapi.dev/api/planets/26/"
                },
                {
                    "name": "Ord Mantell",
                    "rotation_period": "26",
                    "orbital_period": "334",
                    "diameter": "14050",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "plains, seas, mesas",
                    "surface_water": "10",
                    "population": "4000000000",
                    "residents": [],
                    "films": [
                        "https://swapi.dev/api/films/2/"
                    ],
                    "created": "2014-12-15T12:23:41.661000Z",
                    "edited": "2014-12-20T20:58:18.464000Z",
                    "url": "https://swapi.dev/api/planets/27/"
                },
                {
                    "name": "unknown",
                    "rotation_period": "0",
                    "orbital_period": "0",
                    "diameter": "0",
                    "climate": "unknown",
                    "gravity": "unknown",
                    "terrain": "unknown",
                    "surface_water": "unknown",
                    "population": "unknown",
                    "residents": [
                        "https://swapi.dev/api/people/20/",
                        "https://swapi.dev/api/people/23/",
                        "https://swapi.dev/api/people/29/",
                        "https://swapi.dev/api/people/32/",
                        "https://swapi.dev/api/people/75/"
                    ],
                    "films": [],
                    "created": "2014-12-15T12:25:59.569000Z",
                    "edited": "2014-12-20T20:58:18.466000Z",
                    "url": "https://swapi.dev/api/planets/28/"
                },
                {
                    "name": "Trandosha",
                    "rotation_period": "25",
                    "orbital_period": "371",
                    "diameter": "0",
                    "climate": "arid",
                    "gravity": "0.62 standard",
                    "terrain": "mountains, seas, grasslands, deserts",
                    "surface_water": "unknown",
                    "population": "42000000",
                    "residents": [
                        "https://swapi.dev/api/people/24/"
                    ],
                    "films": [],
                    "created": "2014-12-15T12:53:47.695000Z",
                    "edited": "2014-12-20T20:58:18.468000Z",
                    "url": "https://swapi.dev/api/planets/29/"
                },
                {
                    "name": "Socorro",
                    "rotation_period": "20",
                    "orbital_period": "326",
                    "diameter": "0",
                    "climate": "arid",
                    "gravity": "1 standard",
                    "terrain": "deserts, mountains",
                    "surface_water": "unknown",
                    "population": "300000000",
                    "residents": [
                        "https://swapi.dev/api/people/25/"
                    ],
                    "films": [],
                    "created": "2014-12-15T12:56:31.121000Z",
                    "edited": "2014-12-20T20:58:18.469000Z",
                    "url": "https://swapi.dev/api/planets/30/"
                }
            ]
        },
        {
            "count": 60,
            "next": "https://swapi.dev/api/planets/?page=5",
            "previous": "https://swapi.dev/api/planets/?page=3",
            "results": [
                {
                    "name": "Mon Cala",
                    "rotation_period": "21",
                    "orbital_period": "398",
                    "diameter": "11030",
                    "climate": "temperate",
                    "gravity": "1",
                    "terrain": "oceans, reefs, islands",
                    "surface_water": "100",
                    "population": "27000000000",
                    "residents": [
                        "https://swapi.dev/api/people/27/"
                    ],
                    "films": [],
                    "created": "2014-12-18T11:07:01.792000Z",
                    "edited": "2014-12-20T20:58:18.471000Z",
                    "url": "https://swapi.dev/api/planets/31/"
                },
                {
                    "name": "Chandrila",
                    "rotation_period": "20",
                    "orbital_period": "368",
                    "diameter": "13500",
                    "climate": "temperate",
                    "gravity": "1",
                    "terrain": "plains, forests",
                    "surface_water": "40",
                    "population": "1200000000",
                    "residents": [
                        "https://swapi.dev/api/people/28/"
                    ],
                    "films": [],
                    "created": "2014-12-18T11:11:51.872000Z",
                    "edited": "2014-12-20T20:58:18.472000Z",
                    "url": "https://swapi.dev/api/planets/32/"
                },
                {
                    "name": "Sullust",
                    "rotation_period": "20",
                    "orbital_period": "263",
                    "diameter": "12780",
                    "climate": "superheated",
                    "gravity": "1",
                    "terrain": "mountains, volcanoes, rocky deserts",
                    "surface_water": "5",
                    "population": "18500000000",
                    "residents": [
                        "https://swapi.dev/api/people/31/"
                    ],
                    "films": [],
                    "created": "2014-12-18T11:25:40.243000Z",
                    "edited": "2014-12-20T20:58:18.474000Z",
                    "url": "https://swapi.dev/api/planets/33/"
                },
                {
                    "name": "Toydaria",
                    "rotation_period": "21",
                    "orbital_period": "184",
                    "diameter": "7900",
                    "climate": "temperate",
                    "gravity": "1",
                    "terrain": "swamps, lakes",
                    "surface_water": "unknown",
                    "population": "11000000",
                    "residents": [
                        "https://swapi.dev/api/people/40/"
                    ],
                    "films": [],
                    "created": "2014-12-19T17:47:54.403000Z",
                    "edited": "2014-12-20T20:58:18.476000Z",
                    "url": "https://swapi.dev/api/planets/34/"
                },
                {
                    "name": "Malastare",
                    "rotation_period": "26",
                    "orbital_period": "201",
                    "diameter": "18880",
                    "climate": "arid, temperate, tropical",
                    "gravity": "1.56",
                    "terrain": "swamps, deserts, jungles, mountains",
                    "surface_water": "unknown",
                    "population": "2000000000",
                    "residents": [
                        "https://swapi.dev/api/people/41/"
                    ],
                    "films": [],
                    "created": "2014-12-19T17:52:13.106000Z",
                    "edited": "2014-12-20T20:58:18.478000Z",
                    "url": "https://swapi.dev/api/planets/35/"
                },
                {
                    "name": "Dathomir",
                    "rotation_period": "24",
                    "orbital_period": "491",
                    "diameter": "10480",
                    "climate": "temperate",
                    "gravity": "0.9",
                    "terrain": "forests, deserts, savannas",
                    "surface_water": "unknown",
                    "population": "5200",
                    "residents": [
                        "https://swapi.dev/api/people/44/"
                    ],
                    "films": [],
                    "created": "2014-12-19T18:00:40.142000Z",
                    "edited": "2014-12-20T20:58:18.480000Z",
                    "url": "https://swapi.dev/api/planets/36/"
                },
                {
                    "name": "Ryloth",
                    "rotation_period": "30",
                    "orbital_period": "305",
                    "diameter": "10600",
                    "climate": "temperate, arid, subartic",
                    "gravity": "1",
                    "terrain": "mountains, valleys, deserts, tundra",
                    "surface_water": "5",
                    "population": "1500000000",
                    "residents": [
                        "https://swapi.dev/api/people/45/",
                        "https://swapi.dev/api/people/46/"
                    ],
                    "films": [],
                    "created": "2014-12-20T09:46:25.740000Z",
                    "edited": "2014-12-20T20:58:18.481000Z",
                    "url": "https://swapi.dev/api/planets/37/"
                },
                {
                    "name": "Aleen Minor",
                    "rotation_period": "unknown",
                    "orbital_period": "unknown",
                    "diameter": "unknown",
                    "climate": "unknown",
                    "gravity": "unknown",
                    "terrain": "unknown",
                    "surface_water": "unknown",
                    "population": "unknown",
                    "residents": [
                        "https://swapi.dev/api/people/47/"
                    ],
                    "films": [],
                    "created": "2014-12-20T09:52:23.452000Z",
                    "edited": "2014-12-20T20:58:18.483000Z",
                    "url": "https://swapi.dev/api/planets/38/"
                },
                {
                    "name": "Vulpter",
                    "rotation_period": "22",
                    "orbital_period": "391",
                    "diameter": "14900",
                    "climate": "temperate, artic",
                    "gravity": "1",
                    "terrain": "urban, barren",
                    "surface_water": "unknown",
                    "population": "421000000",
                    "residents": [
                        "https://swapi.dev/api/people/48/"
                    ],
                    "films": [],
                    "created": "2014-12-20T09:56:58.874000Z",
                    "edited": "2014-12-20T20:58:18.485000Z",
                    "url": "https://swapi.dev/api/planets/39/"
                },
                {
                    "name": "Troiken",
                    "rotation_period": "unknown",
                    "orbital_period": "unknown",
                    "diameter": "unknown",
                    "climate": "unknown",
                    "gravity": "unknown",
                    "terrain": "desert, tundra, rainforests, mountains",
                    "surface_water": "unknown",
                    "population": "unknown",
                    "residents": [
                        "https://swapi.dev/api/people/49/"
                    ],
                    "films": [],
                    "created": "2014-12-20T10:01:37.395000Z",
                    "edited": "2014-12-20T20:58:18.487000Z",
                    "url": "https://swapi.dev/api/planets/40/"
                }
            ]
        }
    ],
    singleResult: {
        "name": "Human",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "caucasian, black, asian, hispanic",
        "hair_colors": "blonde, brown, black, red",
        "eye_colors": "brown, blue, green, hazel, grey, amber",
        "average_lifespan": "120",
        "homeworld": "https://swapi.dev/api/planets/9/",
        "language": "Galactic Basic",
        "people": [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/"
        ],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T13:52:11.567000Z",
        "edited": "2014-12-20T21:36:42.136000Z",
        "url": "https://swapi.dev/api/species/1/"
    },
    singlePlanet: {
        "name": "Coruscant",
        "rotation_period": "24",
        "orbital_period": "368",
        "diameter": "12240",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "cityscape, mountains",
        "surface_water": "unknown",
        "population": "1000000000000",
        "residents": [
            "https://swapi.dev/api/people/34/",
            "https://swapi.dev/api/people/55/",
            "https://swapi.dev/api/people/74/"
        ],
        "films": [
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T11:54:13.921000Z",
        "edited": "2014-12-20T20:58:18.432000Z",
        "url": "https://swapi.dev/api/planets/9/"
    },
    sortedSpecies: [
        {
            "name": "Droid",
            "classification": "artificial",
            "designation": "sentient",
            "average_height": "n/a",
            "skin_colors": "n/a",
            "hair_colors": "n/a",
            "eye_colors": "n/a",
            "average_lifespan": "indefinite",
            "homeworld": null,
            "language": "n/a",
            "people": [
                "https://swapi.dev/api/people/2/",
                "https://swapi.dev/api/people/3/",
                "https://swapi.dev/api/people/8/",
                "https://swapi.dev/api/people/23/"
            ],
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ],
            "created": "2014-12-10T15:16:16.259000Z",
            "edited": "2014-12-20T21:36:42.139000Z",
            "url": "https://swapi.dev/api/species/2/"
        },
        {
            "name": "Yoda's species",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "66",
            "skin_colors": "green, yellow",
            "hair_colors": "brown, white",
            "eye_colors": "brown, green, yellow",
            "average_lifespan": "900",
            "homeworld": {
                "name": "unknown",
                "rotation_period": "0",
                "orbital_period": "0",
                "diameter": "0",
                "climate": "unknown",
                "gravity": "unknown",
                "terrain": "unknown",
                "surface_water": "unknown",
                "population": "unknown",
                "residents": [
                    "https://swapi.dev/api/people/20/",
                    "https://swapi.dev/api/people/23/",
                    "https://swapi.dev/api/people/29/",
                    "https://swapi.dev/api/people/32/",
                    "https://swapi.dev/api/people/75/"
                ],
                "films": [],
                "created": "2014-12-15T12:25:59.569000Z",
                "edited": "2014-12-20T20:58:18.466000Z",
                "url": "https://swapi.dev/api/planets/28/",
                "is_destroy": false,
            },
            "language": "Galactic basic",
            "people": [
                "https://swapi.dev/api/people/20/"
            ],
            "films": [
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ],
            "created": "2014-12-15T12:27:22.877000Z",
            "edited": "2014-12-20T21:36:42.148000Z",
            "url": "https://swapi.dev/api/species/6/"
        },
        {
            "name": "Ewok",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown",
            "hair_colors": "white, brown, black",
            "eye_colors": "orange, brown",
            "average_lifespan": "unknown",
            "homeworld": {
                "name": "Endor",
                "rotation_period": "18",
                "orbital_period": "402",
                "diameter": "4900",
                "climate": "temperate",
                "gravity": "0.85 standard",
                "terrain": "forests, mountains, lakes",
                "surface_water": "8",
                "population": "30000000",
                "residents": [
                    "https://swapi.dev/api/people/30/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T11:50:29.349000Z",
                "edited": "2014-12-20T20:58:18.429000Z",
                "url": "https://swapi.dev/api/planets/7/",
                "is_destroy": false,
            },
            "language": "Ewokese",
            "people": [
                "https://swapi.dev/api/people/30/"
            ],
            "films": [
                "https://swapi.dev/api/films/3/"
            ],
            "created": "2014-12-18T11:22:00.285000Z",
            "edited": "2014-12-20T21:36:42.155000Z",
            "url": "https://swapi.dev/api/species/9/"
        },
        {
            "name": "Mon Calamari",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "160",
            "skin_colors": "red, blue, brown, magenta",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "unknown",
            "homeworld": {
                "name": "Mon Cala",
                "rotation_period": "21",
                "orbital_period": "398",
                "diameter": "11030",
                "climate": "temperate",
                "gravity": "1",
                "terrain": "oceans, reefs, islands",
                "surface_water": "100",
                "population": "27000000000",
                "residents": [
                    "https://swapi.dev/api/people/27/"
                ],
                "films": [],
                "created": "2014-12-18T11:07:01.792000Z",
                "edited": "2014-12-20T20:58:18.471000Z",
                "url": "https://swapi.dev/api/planets/31/",
                "is_destroy": false,
            },
            "language": "Mon Calamarian",
            "people": [
                "https://swapi.dev/api/people/27/"
            ],
            "films": [
                "https://swapi.dev/api/films/3/"
            ],
            "created": "2014-12-18T11:09:52.263000Z",
            "edited": "2014-12-20T21:36:42.153000Z",
            "url": "https://swapi.dev/api/species/8/"
        },
        {
            "name": "Rodian",
            "classification": "sentient",
            "designation": "reptilian",
            "average_height": "170",
            "skin_colors": "green, blue",
            "hair_colors": "n/a",
            "eye_colors": "black",
            "average_lifespan": "unknown",
            "homeworld": {
                "name": "Rodia",
                "rotation_period": "29",
                "orbital_period": "305",
                "diameter": "7549",
                "climate": "hot",
                "gravity": "1 standard",
                "terrain": "jungles, oceans, urban, swamps",
                "surface_water": "60",
                "population": "1300000000",
                "residents": [
                    "https://swapi.dev/api/people/15/"
                ],
                "films": [],
                "created": "2014-12-10T17:03:28.110000Z",
                "edited": "2014-12-20T20:58:18.458000Z",
                "url": "https://swapi.dev/api/planets/23/",
                "is_destroy": false,
            },
            "language": "Galatic Basic",
            "people": [
                "https://swapi.dev/api/people/15/"
            ],
            "films": [
                "https://swapi.dev/api/films/1/"
            ],
            "created": "2014-12-10T17:05:26.471000Z",
            "edited": "2014-12-20T21:36:42.144000Z",
            "url": "https://swapi.dev/api/species/4/"
        },
        {
            "name": "Human",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "caucasian, black, asian, hispanic",
            "hair_colors": "blonde, brown, black, red",
            "eye_colors": "brown, blue, green, hazel, grey, amber",
            "average_lifespan": "120",
            "homeworld": {
                "name": "Coruscant",
                "rotation_period": "24",
                "orbital_period": "368",
                "diameter": "12240",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "cityscape, mountains",
                "surface_water": "unknown",
                "population": "1000000000000",
                "residents": [
                    "https://swapi.dev/api/people/34/",
                    "https://swapi.dev/api/people/55/",
                    "https://swapi.dev/api/people/74/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T11:54:13.921000Z",
                "edited": "2014-12-20T20:58:18.432000Z",
                "url": "https://swapi.dev/api/planets/9/",
                "is_destroy": false,
            },
            "language": "Galactic Basic",
            "people": [
                "https://swapi.dev/api/people/66/",
                "https://swapi.dev/api/people/67/",
                "https://swapi.dev/api/people/68/",
                "https://swapi.dev/api/people/74/"
            ],
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ],
            "created": "2014-12-10T13:52:11.567000Z",
            "edited": "2014-12-20T21:36:42.136000Z",
            "url": "https://swapi.dev/api/species/1/"
        },
        {
            "name": "Sullustan",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "pale",
            "hair_colors": "none",
            "eye_colors": "black",
            "average_lifespan": "unknown",
            "homeworld": {
                "name": "Sullust",
                "rotation_period": "20",
                "orbital_period": "263",
                "diameter": "12780",
                "climate": "superheated",
                "gravity": "1",
                "terrain": "mountains, volcanoes, rocky deserts",
                "surface_water": "5",
                "population": "18500000000",
                "residents": [
                    "https://swapi.dev/api/people/31/"
                ],
                "films": [],
                "created": "2014-12-18T11:25:40.243000Z",
                "edited": "2014-12-20T20:58:18.474000Z",
                "url": "https://swapi.dev/api/planets/33/",
                "is_destroy": false,
            },
            "language": "Sullutese",
            "people": [
                "https://swapi.dev/api/people/31/"
            ],
            "films": [
                "https://swapi.dev/api/films/3/"
            ],
            "created": "2014-12-18T11:26:20.103000Z",
            "edited": "2014-12-20T21:36:42.157000Z",
            "url": "https://swapi.dev/api/species/10/"
        },
        {
            "name": "Trandoshan",
            "classification": "reptile",
            "designation": "sentient",
            "average_height": "200",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "yellow, orange",
            "average_lifespan": "unknown",
            "homeworld": {
                "name": "Trandosha",
                "rotation_period": "25",
                "orbital_period": "371",
                "diameter": "0",
                "climate": "arid",
                "gravity": "0.62 standard",
                "terrain": "mountains, seas, grasslands, deserts",
                "surface_water": "unknown",
                "population": "42000000",
                "residents": [
                    "https://swapi.dev/api/people/24/"
                ],
                "films": [],
                "created": "2014-12-15T12:53:47.695000Z",
                "edited": "2014-12-20T20:58:18.468000Z",
                "url": "https://swapi.dev/api/planets/29/",
                "is_destroy": false,
            },
            "language": "Dosh",
            "people": [
                "https://swapi.dev/api/people/24/"
            ],
            "films": [
                "https://swapi.dev/api/films/2/"
            ],
            "created": "2014-12-15T13:07:47.704000Z",
            "edited": "2014-12-20T21:36:42.151000Z",
            "url": "https://swapi.dev/api/species/7/"
        },
        {
            "name": "Wookie",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "210",
            "skin_colors": "gray",
            "hair_colors": "black, brown",
            "eye_colors": "blue, green, yellow, brown, golden, red",
            "average_lifespan": "400",
            "homeworld": {
                "name": "Kashyyyk",
                "rotation_period": "26",
                "orbital_period": "381",
                "diameter": "12765",
                "climate": "tropical",
                "gravity": "1 standard",
                "terrain": "jungle, forests, lakes, rivers",
                "surface_water": "60",
                "population": "45000000",
                "residents": [
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/80/"
                ],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T13:32:00.124000Z",
                "edited": "2014-12-20T20:58:18.442000Z",
                "url": "https://swapi.dev/api/planets/14/",
                "is_destroy": false,
            },
            "language": "Shyriiwook",
            "people": [
                "https://swapi.dev/api/people/13/",
                "https://swapi.dev/api/people/80/"
            ],
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "created": "2014-12-10T16:44:31.486000Z",
            "edited": "2014-12-20T21:36:42.142000Z",
            "url": "https://swapi.dev/api/species/3/"
        },
        {
            "name": "Hutt",
            "classification": "gastropod",
            "designation": "sentient",
            "average_height": "300",
            "skin_colors": "green, brown, tan",
            "hair_colors": "n/a",
            "eye_colors": "yellow, red",
            "average_lifespan": "1000",
            "homeworld": {
                "name": "Nal Hutta",
                "rotation_period": "87",
                "orbital_period": "413",
                "diameter": "12150",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "urban, oceans, swamps, bogs",
                "surface_water": "unknown",
                "population": "7000000000",
                "residents": [
                    "https://swapi.dev/api/people/16/"
                ],
                "films": [],
                "created": "2014-12-10T17:11:29.452000Z",
                "edited": "2014-12-20T20:58:18.460000Z",
                "url": "https://swapi.dev/api/planets/24/",
                "is_destroy": false,
            },
            "language": "Huttese",
            "people": [
                "https://swapi.dev/api/people/16/"
            ],
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/3/"
            ],
            "created": "2014-12-10T17:12:50.410000Z",
            "edited": "2014-12-20T21:36:42.146000Z",
            "url": "https://swapi.dev/api/species/5/"
        }
    ]
}

export { mockSpeciesData };