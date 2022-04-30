const { Router } = require("express");

const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));

const medicamentoRout = require("./MedicamentoRout");

routes.use("/api", medicamentoRout);

module.exports = routes;