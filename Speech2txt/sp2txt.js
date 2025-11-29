const results=document.getElementById("result");
let recognition;
function recordStart(){
   
    if('webkitSpeechRecognition' in window){
        recognition= new webkitSpeechRecognition();
        setUpRecognition(recognition);
        recognition.start(); 
    }  
}
function setUpRecognition(recognition){
    recognition.continuous =true;
    recognition.lang='en-US';
    recognition.interimResults=true;
    recognition.onresult=function(event){
        const {finalTranscript,interTranscript}= processResult(event.results);

        results.innerHTML=finalTranscript+interTranscript;
    }
    
}
function processResult(results){
    let finalTranscript='';
     let interTranscript='';

     for(let i=0;i<results.length;i++){
       let transcript=results[i][0].transcript;
       transcript=transcript.replace("\n","<br>");
       if(results[i].isFinal){
        finalTranscript+=transcript;
       } 
       else{
        interTranscript+=transcript;
       } 
       
     }
     return {finalTranscript,interTranscript};
}
function recordStop(){
    recognition.stop();
}
function restart(){
    if(recognition){
        recognition.stop();
    }
    results.innerHTML = '';
}