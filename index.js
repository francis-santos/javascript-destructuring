// Cenário complexo
function criarContaBancaria(banco, agencia, numero) {
  console.log(banco, agencia, numero);
}

// Algumas dezenas de linhas de código depois...

criarContaBancaria('001', '0101-1', '0101-1');
// Não dá para saber o que é agência e o que é número da conta.

// -------------------------------------------------------------------------- //

// Cenário refatorado e legível
function criarContaBancaria({ banco, agencia, numero }) {
  console.log(banco, agencia, numero);
}

// Algumas dezenas de linhas de código depois...
criarContaBancaria({ banco: '001', agencia: '0101-1', numero: '0101-1' });

// Usando o operador spread (...)
const contaBancaria = { banco: '001', agencia: '0101-1', numero: '0101-1' };
criarContaBancaria({ ...contaBancaria });