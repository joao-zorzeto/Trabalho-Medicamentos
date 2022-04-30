const Medicamento = require('../model/MedicamentoSchema');

module.exports = {
    listar: async (req, res) => {
        Medicamento.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Medicamento(req.body);
        obj.save((err, obj) => {
        (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
        },
    alterar: async (req, res) => {
        let obj = new Medicamento(req.body);
        Medicamento.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    excluir: async (req, res) => {
        Medicamento.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },
    obterPeloId: async (req, res) => {
        const obj = await Medicamento.findOne({ _id: req.params.id }, function (err) {
            if (err)
                res.status(400).send(err);
        });
        res.status(200).json(obj);
    },
    
    filtrar: async (req, res) => {
        const objetos = await Medicamento.find({
            $or: [
                { nome: { $regex: req.params.filtro, $options: "i" } },
                { laboratorio: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err) {
            if (err)
                res.status(400).send(err);
        }).sort({ nome: -1 }); // -1 decrescente 1 crescente
        res.json(objetos);
        },
};


   