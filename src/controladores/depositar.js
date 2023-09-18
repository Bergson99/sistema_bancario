
const { contas } = require('../bancodedados')
const { format } = require('date-fns')
const deposito = []
const realizarDeposito = (req, res) => {

    const { numero_conta, valor } = req.body
    if (!numero_conta || !valor) {
        return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" })
    }

    const verificarconta = contas.find((conta) => conta.numero == numero_conta)

    if (verificarconta === undefined) {
        return res.status(400).json({ mensagem: 'Conta bancária não encontada!' })
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'valor invalido !' })
    }

    const data = format(new Date(), 'dd/MM/yyyy HH:mm')

    verificarconta.saldo += Number(valor)
    deposito.push({ data, numero_conta, valor });

    return res.status(204).json({})

}

module.exports = {
    realizarDeposito,
    deposito
}