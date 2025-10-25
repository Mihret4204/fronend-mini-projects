let inc;
let dec;
let res;
let count = 0;

inc=document.getElementById("inc").onclick=function(){
    count++;
    document.getElementById("counter").textContent=count;
}
dec=document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("counter").textContent=count;
}
inc=document.getElementById("res").onclick=function(){
    count=0;
    document.getElementById("counter").textContent=count;
}