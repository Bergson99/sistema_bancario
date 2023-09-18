const { contas } = require('../bancodedados');

const totalDeContas = (req, res) => {

    const { senha_banco } = req.query

    if (senha_banco === "Cubos123Bank") {
        return res.json(contas);
    }

    return res.status(400).json('mensagem: A senha do banco informada é inválida!');
}


module.exports = {
    totalDeContas

}

