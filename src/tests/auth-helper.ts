import { build } from '../server';

const server = build();

const getCookie = async () => {
    const response = await server
        .inject()
        .post('/token')
        .body({
            name: "John Doe",
            email: "johndoe@example.com"
        });
    const body = response.json();
    return body.data.token;
}

export { getCookie };