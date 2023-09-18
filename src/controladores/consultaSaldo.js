const { contas } = require('../bancodedados')

const verificarSaldo = (req, res) => {
    const { numero_conta, senha } = req.query



    const verificarconta = contas.find((usuario) => usuario.numero == numero_conta)


    if (!verificarconta) {
        return res.status(400).json({ mensagem: 'Conta bancária não encontada!' })
    }

    if (verificarconta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'senha incorreta' })
    }

    return res.status(200).json({ saldo: verificarconta.saldo })


}


module.exports = {
    verificarSaldo

}