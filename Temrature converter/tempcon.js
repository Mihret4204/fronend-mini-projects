
function convert(){
    let textBox=document.getElementById("textBox");
    let c2f=document.getElementById("c2f");
    let f2c=document.getElementById("f2c");
    let result=document.getElementById("result");
    let selected=document.querySelector('input[name="temp"]:checked');

    if(c2f==selected){
        let celsius=Number (textBox.value);
        let fahrenheit=(celsius*9/5)+32;
        result.innerHTML=`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit`;

    }
    else if(f2sc==selected){
        let fahrenheit=Number (textBox.value);
        let celsius=fahrenheit*5/9-32;
        result.innerHTML=`${fahrenheit} degree fahrenheit is equal to ${celsius} degree celsius`;

    }else{
        result.innerHTML="please select a unit";
    }
}