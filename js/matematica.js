let titulo = document.querySelector('.titulo')

let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

// article da questao
let questao = document.querySelector('.questao')

let nQuestao = document.querySelector('#nQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

titulo.textContent = "Quiz"
let totalDeQuestoes = 0
numero.textContent  = 1

let pontos = 0
let placar = document.querySelector('.placar')

let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')



// ENDERECO DO ARQUIVO BACK END
const url = 'https://api-rest-quiz-sannyhl.herokuapp.com/questions/findByMateria?materia=MATEMATICA'

function pegarDados(i) {

  fetch(url).then(response =>{
      
        return response.json();

      }).then(data => {

        if(data.erro) {
          console.log("Erro ao acessar o JSON")
          return
        }
        
        // passar o quantidade de questoes para a variavel
        let qtdQuestoes = (data.length)
        // escrver a qtdQuestoes para total
        total.textContent = parseInt(qtdQuestoes)
        
        // passe o valor de i no parametro
        atribuirDados(data, i)

      })
      
} // fim pegarDados


function atribuirDados(data, i) {
  if(i >= data.length) {
    //console.log('Fim das questoes')
    i = 1
  }
    nQuestao.textContent = data[i].id
    pergunta.textContent = data[i].pergunta

    a.textContent = data[i].alternativaCorreta
    b.textContent = data[i].primeiraAlternativaIncorreta
    c.textContent = data[i].segundaAlternativaIncorreta
    d.textContent = data[i].terceiraAlternativaIncorreta
    
    numero.textContent = data[i].id
    
    let certa = document.querySelector('#correct')
    certa.value = data[i].alternativaCorreta
    //console.log(resposta)
}

