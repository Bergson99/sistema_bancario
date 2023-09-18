const { contas } = require('../bancodedados')
const { format } = require('date-fns')
const transferencia = []
const realizarTransferencia = (req, res) => {

    const { numero_conta_origem, numero_conta_destino, senha_conta_origem, valor } = req.body

    if (!numero_conta_origem || !numero_conta_destino || !senha_conta_origem || !valor) {
        return res.status(400).json({ mensagem: "todos os dados  são obrigatórios!" })
    }

    const verificarcontaOrigem = contas.find((conta) => conta.numero == numero_conta_origem)
    const verificarcontaDestino = contas.find((conta) => conta.numero == numero_conta_destino)

    if (verificarcontaOrigem == undefined || verificarcontaDestino === undefined) {
        return res.status(400).json({ mensagem: 'Conta bancária não encontada!' })
    }

    const verificarSenhaOrigem = contas.find((conta) => conta.usuario.senha == senha_conta_origem)

    if (verificarSenhaOrigem == undefined) {
        return res.status(400).json({ mensagem: 'senha incorreta!' })
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Conta bancária não encontada!' })
    }

    if (verificarcontaOrigem.saldo < valor) {
        return res.status(400).json({ mensagem: 'saldo insuficiente' })
    }

    const data = format(new Date(), 'dd/MM/yyyy HH:mm')

    verificarcontaOrigem.saldo -= Number(valor)
    verificarcontaDestino.saldo += Number(valor)
    transferencia.push({ data, numero_conta_origem, numero_conta_destino, valor })
    return res.status(204).json({})


}

module.exports = {
    realizarTransferencia,
    transferencia
}