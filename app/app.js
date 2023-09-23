const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { authRoutes, userRoutes } = require('../routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(logger(app.get('env') === 'development' ? 'dev' : 'short'));

app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    const errorCode = err.code || 500;
    const errorMessage = err.message || 'Internal server error';
    res.status(errorCode).json({ message: errorMessage });
});

module.exports = { app };
