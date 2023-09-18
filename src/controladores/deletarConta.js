let { contas } = require('../bancodedados');

let cancelarConta = (req, res) => {
    const { numero } = req.query
    let nConta = contas.find((conta) => conta.numero == numero)

    if (nConta == undefined) {
        return res.status(400).json(' mensagem: falha na validação, conta inexistente');
    } if (nConta.saldo > 0) {
        return res.status(400).json({ mensagem: 'falha na validação, o saldo é maior que zero' });
    }
    contas.splice(contas.indexOf(nConta), 1)
    return res.status(204)

}


module.exports = {
    cancelarConta
}