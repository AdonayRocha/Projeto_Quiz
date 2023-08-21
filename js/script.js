// Obtém elementos do DOM
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const resultElement = document.getElementById("result");

// Array de objetos de pergunta e resposta
const questions = [
{
    question: "(FUVEST - 2018 - 1ª FASE)\n Algorithms are everywhere. They play the stockmarket, decide whether you can have a mortgage and may one day drive your car for you. They search the internet when commanded, stick carefully chosen advertisements into the sites you visit and decide what prices to show you in online shops. (…) But what exactly are algorithms, and what makes them so powerful?\n An algorithm is, essentially, a brainless way of doing clever things. It is a set of precise steps that need no great mental effort to follow but which, if obeyed exactly and mechanically, will lead to some desirable outcome. Long division and column addition are examples that everyone is familiar with—if you follow the procedure, you are guaranteed to get the right answer. So is the strategy, rediscovered thousands of times every year by schoolchildren bored with learning mathematical algorithms, for playing a perfect game of noughts and crosses. The brainlessness is key: each step should be as simple and as free from ambiguity as possible. Cooking recipes and driving directions are algorithms of a sort. But instructions like “stew the meat until tender” or “it’s a few miles down the road” are too vague to follow without at least some interpretation.\n (…)\n No texto, um exemplo associado ao fato de algoritmos estarem por toda parte é",
    answers: ["O cartão de crédito", "O livre mercado", "A dieta", "O jogo de xadrez", "O comércio eletrônico"],
    correct: 4,
},
{
    question: "In this life\n Sitting on a park bench\n Thinking about a friend of mine\n He was only twenty-three\n Gone before he had his time.\n It came without a warning\n Didnꞌt want his friends to see him cry\n He knew the day was dawning\n And I didnꞌt have a chance to say goodbye\n A canção, muitas vezes, é uma forma de manifestar sentimentos e emoções da vida cotidiana. Por exemplo, o sofrimento retratado nessa canção foi causado.",
    answers: ["Pela morte precoce de um amigo jovem.", "Pelo término de um relacionamento amoroso.", "Pela mudança de um amigo para outro país.", "Pelo fim de uma amizade de mais de vinte anos.", "Pela traição por parte de pessoa próxima."],
    correct: 0,
},
{
    question: "The expression “dark doldrums” chills the hearts of renewable-energy engineers, who use it to refer to the lulls when solar panels and wind turbines are thwarted by clouds, night, or still air. On a bright, cloudless day, a solar farm can generate prodigious amounts of electricity. But at night solar cells do little, and in calm air turbines sit useless.\n The dark doldrums make it difficult for us to rely totally on renewable energy. Power companies need to plan not just for individual storms or windless nights but for difficulties that can stretch for days. Last year, Europe experienced a weekslong “wind drought,” and in 2006 Hawaii endured six weeks of consecutive rainy days. On a smaller scale, communities that want to go all-renewable need to fill the gaps. The obvious solution is batteries, which power everything from mobile phones to electric vehicles; they are relatively inexpensive to make and getting cheaper. But typical models exhaust their stored energy after only three or four hours of maximum output, and—as every smartphone owner knows—their capacity dwindles with each recharge. Moreover, it is expensive to collect enough batteries to cover longer discharges.\n We already have one kind of renewable energy storage: more than ninety per cent of the world’s energy-storage capacity is in reservoirs, as part of a technology called pumped-storage hydropower, used to smooth out sharp increases in electricity demand. Motors pump water uphill from a river or a reservoir to a higher reservoir; when the water is released downhill, it spins a turbine, generating power. A pumped-hydro installation is like a giant, permanent battery, charged when water is pumped uphill and depleted as it flows down. Some countries are expanding their use of pumped hydro, but the right geography is hard to find, permits are difficult to obtain, and construction is slow and expensive. The hunt is on for new approaches to energy storage.\n No texto, a expressão “dark doldrums” descreve",
    answers: ["As mudanças climáticas atribuídas ao fenômeno de aquecimento global.", "Os altos custos implicados na construção de fontes de energia renovável.", "Os debates entre ecologistas e defensores do emprego de energia nuclear.", "Os períodos de inatividade de geradores de energia como painéis solares.", "As dificuldades encontradas por comunidades rurais para distribuir eletricidade."],
    correct: 3,
},

{
    question: "Write two different reactions related to the decomposition of CaCO3 (s)\n A) Reaction 1 to decompose CaCO3 (s) (with heat): Surpise\n B) Reaction 2 to decompose CaCO3 (s) (with diluted acid): Astonished\n No meme, a inadequação da resposta à questão está baseada no efeito de sentido proveniente da presença de",
    answers: ["Metáfora", "Trocadilho", "Sinédoque", "Eufemismo.", "Comparação"],
    correct: 1,
},

];

let currentQuestionIndex = 0; //Indice da pergunta atual
let correctAnswers = 0; //Contador de respostas

// Função para exibir uma pergunta
function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].addEventListener("click", () => checkAnswer(index));
        answerButtons[index].classList.remove("incorrect");
    });
    resultElement.textContent = "";
}

//Função para a próxima pergunta
function showNextQuestion() {
    currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        questionElement.textContent = "Fim do Quiz";
        answerButtons.forEach(button => button.style.display = "none");
        resultElement.textContent = `Você acertou ${correctAnswers} de ${questions.length} perguntas.`;
    }
}

// Função para verificar a resposta selecionada
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        correctAnswers++;
    } else {
        resultElement.textContent = "Resposta incorreta. Tente novamente.";
        answerButtons[selectedIndex].classList.add("incorrect");
        setTimeout(() => {
            answerButtons[selectedIndex].classList.remove("incorrect");
        }, 500);
    return;
}


  showNextQuestion(); // Mostra a próxima pergunta
}

//Inicia o quiz
showQuestion(questions[currentQuestionIndex]);