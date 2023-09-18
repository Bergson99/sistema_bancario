
# projeto piloto sistema bancário

Esse é um projeto piloto de um sistema bancario. onde é possivel realizar diversas funcionalidades como cadastro, saques entre outras funções.

# Tecnologias 

## Javascript
## Node.js 
## Express
## Nodemon
## Date-fn 

# ferramentas

## visaul studio code 
## insomnia

# iniciar sistema

para iniciar o sistema é preciso no terminal o comando npm run dev que irar subir o servidor 

# Endpoint

## Consultar contas 

 Esse Endpoint é responsável pela consultas de todas as contas cridas do sistema, rota com a porta 3000 http://localhost:3000/contas?senha_banco=Cubos123Bank

 senha de acasse: Cubos123Bank
 ser feito atravez de query params

 ## Cadastro de clientes 

 A funcionalidade desse link é fazer o cadastro de novo clientes onde todos os campos são obrigatórios obs. o cpf e email são unicos, ou seja, caso ele ja estives cadastrado o sistema informa que eles ja estão cadastrados. rota de acesso http://localhost:3000/contas

 ##  Deletar conta 

 Esse Endpoint serve para deletar contas inativas que o seu saldo é igual a zero caso tente fazer o cancelamento de uma conta com saldo diferente de zero o sistema não permite a exclusão da conta e a exclusão é feira pela url com o numero da conta de query params. rota acesso http://localhost:3000/contas/:numeroConta

 ## Atualizar conta 

Esse Endpoint serve para  Atualizar os dados de contas exluidas. rota de acesso http://localhost:3000/contas/:numeroConta/usuario

## Consulta de saldo

Esse Endpoint serve para verificar o saldo das contas com o numero da conta e senha atravez do query params caso a conta seja invalida ou senha errada o sistema retorna o erro informando o campo que esta errado. rota de acesso http://localhost:3000/contas/senha

## extrato bancario

Esses Endpoint serve para verificar todas as transações de saques,depositos,  tranferencias feitas e tranferencias recebidas e para realizar é preciso informar o numero da conta e senha. caso informe a senha ou conta errada o sistema informa o status. rotas de acesso http://localhost:3000/contas/extrato

## depositar 

Esse Endpoint ira realizar depositos bancarios e para fazer a transações é necessarios informa o numero da conta e o valor. rota de acesso http://localhost:3000/transacoes/depositar

## sacar 

Esse Endpoint serve para realizar saques da conta onde é necessarios para informar a senha, numero da conta, e o valor  do saque os valores não pode ser menor que zero e nem superior a o saldo. rota de acesso http://localhost:3000/transacoes/sacar

## tranferir 

Esse Endpoint serve para fazer transferencias onde vai ser informa o numero da conta de origem, numero da conta de destino, valor e senha onde é obrigatório os numeros de ambas contas serem validos rota de acesso http://localhost:3000/transacoes/transferir
 




