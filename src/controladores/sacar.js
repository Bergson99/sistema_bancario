const { contas } = require('../bancodedados')
const { format } = require('date-fns')
const saque = []


const realizarsaque = (req, res) => {


    const { numero_conta, valor, senha } = req.body
    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" })
    }

    const verificarconta = contas.find((conta) => conta.numero == numero_conta)
    const verificarSenha = contas.find((conta) => conta.usuario.senha == senha)

    if (verificarconta == undefined) {
        return res.status(400).json({ mensagem: 'Conta bancária não encontada!' })
    }

    if (verificarSenha == undefined) {
        return res.status(400).json({ mensagem: 'senha incorreta!' })
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'O valor não pode ser menor que zero!' })
    }

    if (verificarconta.saldo < valor) {
        return res.status(400).json({ mensagem: 'saldo insuficiente' })
    }

    const data = format(new Date(), 'dd/MM/yyyy HH:mm')

    verificarconta.saldo -= Number(valor)

    saque.push({ data, numero_conta, valor })




    return res.status(204).json({})


}

module.exports = {
    realizarsaque,
    saque
}