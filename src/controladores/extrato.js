const { contas } = require('../bancodedados')
const { deposito } = require('./depositar')
const { saque } = require('./sacar')
const { transferencia } = require('./transferir')

const { format } = require('date-fns')
const extrato = { saque, deposito, transferencia }

const extratoBancario = (req, res) => {

    const { numero_conta, senha } = req.query

    const verificarconta = contas.find((conta) => conta.numero == numero_conta)

    if (verificarconta == undefined) {
        return res.status(400).json({ mensagem: 'Conta bancária não encontada!' })
    }

    const verificarSenha = contas.find((conta) => conta.usuario.senha == senha)

    if (verificarSenha == undefined) {
        return res.status(403).json({ mensagem: 'senha inválida!' })
    }

    const extratoDeposito = extrato.deposito.filter(function (obj) {
        return obj.numero_conta == numero_conta
    })

    const extratoSaques = extrato.saque.filter(function (obj) {
        return obj.numero_conta == numero_conta
    })

    const extratoTransferenciaEnviadas = extrato.transferencia.filter(function (obj) {
        return obj.numero_conta_origem == numero_conta
    })

    const extratoTransferenciaRecebidas = extrato.transferencia.filter(function (obj) {
        return obj.numero_conta_destino == numero_conta
    })
    const extratoBanco = { extratoSaques, extratoDeposito, extratoTransferenciaEnviadas, extratoTransferenciaRecebidas }


    if (verificarconta.usuario.senha === senha) {

        return res.status(201).json({ extratoBanco })
    }

}

module.exports = {
    extratoBancario
}