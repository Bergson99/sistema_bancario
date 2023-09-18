const { contas } = require('../bancodedados');

const atualizarCadastro = (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'todos os campos são obrigatório' })

    }


    let validarCpf = contas.find((conta) => conta.usuario.cpf == cpf)

    if (validarCpf) {
        return res.status(400).json('mensagem: falha na validação, Já existe uma conta com o cpf informado!')
    };

    let validarEmail = contas.find((conta) => conta.usuario.email == email)

    if (validarEmail) {

        return res.status(400).json('mensagem: falha na validação, Já existe uma conta com 0 e-mail informado!')
    };
    const usuarioEncontrado = contas.find((usuario) => usuario.numero == numeroConta);

    if (!usuarioEncontrado) {
        return res.status(400).json('mensagem: falha na validação, Já existe uma conta com 0 e-mail informado!')
    };
    usuarioEncontrado.usuario.nome = nome
    usuarioEncontrado.usuario.cpf = cpf
    usuarioEncontrado.usuario.data_nascimento = data_nascimento
    usuarioEncontrado.usuario.telefone = telefone
    usuarioEncontrado.usuario.email = email
    usuarioEncontrado.usuario.senha = senha

    return res.status(203)
};

module.exports = {
    atualizarCadastro,
}