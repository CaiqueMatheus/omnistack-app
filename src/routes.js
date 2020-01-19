const {Router} = require('express');
const axios = require('axios');

const routes = Router();

// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criaçãoo ou alteração de registros)


routes.get('/dev', (request, response) => {
    console.log(request.query);
    return response.json({ message : "Hello World!"});
})

routes.post('/dev', async(request, response) => {
    const { github_username } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log('biscoito', apiResponse)

    const {name = github_username, avatar_url, bio} = apiResponse.data;

    console.log('Nome: ' + name, '\nAvatar URL:' +  avatar_url, '\nBio: ' + bio, '\nUsername: ' + github_username);

    return response.json({ message : "Hello World!"});
})

routes.put('/', (request, response) => {
    console.log(request.body);
    return response.json({ message : "Hello World!"});
})

routes.delete('/', (request, response) => {
    console.log(request.params);
    return response.json({ message : "Hello World!"});
})

module.exports = routes;