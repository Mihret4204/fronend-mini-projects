// Fix: Correct spelling
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => play(key));  
});

function play(key) {
   
    const keyAudio = key.querySelector("audio");

    if (keyAudio) {
        keyAudio.currentTime = 0;  
        keyAudio.play();           
    }

   
    key.classList.add("active");
    setTimeout(() => {
        key.classList.remove("active");
    }, 200);
}