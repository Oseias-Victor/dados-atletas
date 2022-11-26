class Atleta {
    constructor(dadosAtletas){
    this.dados = dadosAtletas
    }

  /* Para calcular a categoria
      Infantil: 9 a 11 anos
      Juvenil: 12 e 13 anos
      Intermediário: 14 e 15 anos
      Adulto: 16 a 30 anos
      Sem categoria: demais idades
  */   
  calculaCategoria(){
    let categoria = this.dados.map(function(dado){
      if(dado.idade > 9 && dado.idade <= 11){
          return "Infantil"
      }
      if(dado.idade <= 13){
          return "Juvenil"
      }
      if(dado.idade <= 15){
          return "Intermediário"
      }
      if(dado.idade <= 30){
          return "Adulto"
      }
      else {return "Sem categoria"}
     })
     return categoria
  }

  calculaIMC(){
let result = this.dados.map(function(dado){
    return dado.peso / (dado.altura*dado.altura)
})
return result
  }
   /* calculaMediaValida(), para calcular a média válida do atleta. */
   /*Para calcular a média válida
  
      Método: Utilize o metodologia abordada no Projeto de Certificação 1.
  
  */
  calculaMediaValida(){
    let soma = 0
    let media = this.dados.map(function(dado){
        let notasOrganizadas = dado.notas.sort()
        let notasComputadas = notasOrganizadas.slice(1,4)
        notasComputadas.map(function(nota){
        soma = soma + nota
    })
    return soma = soma/notasComputadas.length
})
return media
  }
     
  obtemNomeAtleta(){
  let nome = this.dados.map(function(dado){
    return dado.nome
  })
  return nome
  }
     
  obtemIdadeAtleta(){
  let idade = this.dados.map(function(dado){
    return dado.idade
  })
  return idade
  }
     
  obtemPesoAtleta(){
  let peso = this.dados.map(function(dado){
    return dado.peso
  })
  return peso
  }

  obtemAlturaAtleta(){
    let altura = this.dados.map(function(dado){
      return dado.altura
    })
    return altura
  }
     
  obtemNotasAtleta(){
  let notas = this.dados.map(function(dado){
    return dado.notas
  })
  return notas.join(" - ")
  }
  /* obtemCategoria(), que retorna a categoria do atleta */
  
  obtemCategoria(){
    let categoria = this.calculaCategoria();
    return categoria
  }

  obtemIMC(){
    let imc = this.calculaIMC()
    return imc
  }

     /* obtemMediaValida(), que retorna a média válida do atleta */
  obtemMediaValida(){
    let media = this.calculaMediaValida()
    return media
  }
  mostrarSaida(){
    console.log(`Nome: ${this.obtemNomeAtleta()}`)
    console.log(`Idade: ${this.obtemIdadeAtleta()}`)
    console.log(`Peso: ${this.obtemPesoAtleta()}`)
    console.log(`Altura: ${this.obtemAlturaAtleta()}`)
    console.log(`Notas: ${this.obtemNotasAtleta()}`)
    console.log(`Categoria: ${this.obtemCategoria()}`)
    console.log(`IMC: ${this.obtemIMC()}`)
    console.log(`Médai Válida: ${this.obtemMediaValida()}`)
 }

  
  }
 
// -------------------------------------------------------------------------------------------------------------------------------------
  let dadosAtletas = [{
  nome: "Cesar Abascal",
  idade: 30,
  peso: 80,
  altura: 1.7,
  notas: [10,9.34,8.42,10,7.88]
  }]
  
//---------------------------------------------------------------------------------------------------------------------------------------
  // Declara o atleta
  let atletas = new Atleta(dadosAtletas)
  
  /*Exemplo de saída
  Nome: Cesar Abascal
  Idade: 30
  Peso: 80
  Altura: 1.7
  Notas: 10,9.34,8.42,10,7.88
  Categoria: Adulto
  IMC: 27.68166089965398
  Média válida: 8.766666666666666
  */
      
  atletas.mostrarSaida()
