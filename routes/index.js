/** 生成 Swagger 套件 */
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');
const repositoryRouter = require('./repository');
const userRouter = require('./user');

module.exports = (app) => {
    app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));
    app.use('/repository', repositoryRouter);
    app.use('/user', userRouter);
};
