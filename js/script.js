function runSpeechRecognition() {

    var myText = document.getElementById("speak").value;
    // get output div reference
    var result = document.getElementById("result");
     // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>Listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>Stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        // var confidence = event.results[0][0].confidence;
        output.innerHTML = transcript;
        if(transcript==myText){
            result.innerHTML = "Text Matched";
            result.style.color = "green";
            output.style.color = "green";
        }else{
            result.innerHTML = "Text Not Matched";
            result.style.color = "red";
            output.style.color = "red";
            output.style.borderColor = "red";
        }
        output.classList.remove("hide");
        result.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();
}