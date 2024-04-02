let clienteA = {
  nome: "João",
  endereco: "Rua Tal, 10 - Tabuleiro - Maceió - AL - CEP: 57000-000"
  
}

let clienteB = {
  nome: "Cleyton",
  rua:"y",
  numero:"15",
  bairro:"Mata do Rolo",
  cidade:"Rio largo",
  estado:"AL",
  cep:"57990-000",
}

let clienteC = {
  nome: "Ricardo",
  endereco:{
    rua: "Pé de Caju",
    numero:"400",
    bairro:"Caldeirão",
    cidade:"Pé de chá",
    estado:"AL",
    cep:"57000-000"
  }
}

//-------------------------------------------------------------------------------------------------------------- 
console.log(clienteA.endereco)
console.log(clienteB.cidade)
console.log(clienteC.endereco.cidade)
//-------------------------------------------------------------------------------------------------------------- 

let listaAlunos = [] 

let alunoE = {
  nome:"Daniel",
  disciplinas: ["POO","PWEB"]
}

console.log(alunoE.disciplinas)

alunoE.disciplinas.push("BD")

console.log(alunoE.disciplinas)
// console.log(alunoE.nome)
// console.log(alunoE.disciplinas)