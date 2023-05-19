const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
//const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
//const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
//const speechRecognitionList = new SpeechGrammarList();
 
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaValorChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div> Você disse </div>
        <span class="box"> ${chute} </span>
        `
}

recognition.addEventListener('end', () =>{
    recognition.start();
})