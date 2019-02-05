module.exports = [{
    method: 'POST',
    path: '/createUser',
    config : {
        description: 'Creation utilisateur',
        notes: 'Route permettant de creer un utilisateur',
        tags: ['api'],
        handler: () => {
            return "hello";
        }
    }
}];
