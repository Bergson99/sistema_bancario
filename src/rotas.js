const express = require('express');
const contas = require("./controladores/contasBancarias");
const cadastro = require('./controladores/cadastroClientes')
const cancelar = require('./controladores/deletarConta')
const atualizar = require('./controladores/atualizarCadastro')
const consultarConta = require('./controladores/consultaSaldo')
const deposito = require('./controladores/depositar')
const sacar = require('./controladores/sacar')
const transferir = require('./controladores/transferir')
const extrato = require('./controladores/extrato')


const rotas = express();

rotas.get('/', (req, res) => {

    res.send("servidor pronto ");
})

rotas.get('/contas', contas.totalDeContas);
rotas.post('/contas', cadastro.cadastroConta);
rotas.delete('/contas/:numeroConta', cancelar.cancelarConta)
rotas.put('/contas/:numeroConta/usuario', atualizar.atualizarCadastro)
rotas.get('/contas/senha', consultarConta.verificarSaldo)
rotas.get('/contas/extrato', extrato.extratoBancario)
rotas.post('/transacoes/depositar', deposito.realizarDeposito)
rotas.post('/transacoes/sacar', sacar.realizarsaque)
rotas.post('/transacoes/transferir', transferir.realizarTransferencia)

module.exports = rotas;

