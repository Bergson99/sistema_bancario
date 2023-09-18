const { contas } = require('../bancodedados');
let { numeroConta } = require('../bancodedados');

const cadastroConta = (req, res) => {

  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

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

  const conta = {
    numero: numeroConta++,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    }
  }
  contas.push(conta);
  return res.status(204).json({})

}

module.exports = {
  cadastroConta
}