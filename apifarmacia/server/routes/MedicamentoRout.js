const express = require('express');

const routes = express.Router();

const controle = require('../controller/MedicamentoCont');

routes.route('/medicamentos').get(controle.listar);
routes.route('/medicamentos').post(controle.incluir);
routes.route('/medicamentos').put(controle.alterar);
routes.route('/medicamentos/:id').delete(controle.excluir);
routes.route('/medicamentos/:id').get(controle.obterPeloId);
routes.route('/medicamentos/filtro/:filtro').get(controle.filtrar);

module.exports = routes;