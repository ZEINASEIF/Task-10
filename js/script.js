var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var previous = document.getElementById("previous");
var submit = document.getElementById("submit");

next1.onclick = function(){
    form2.style.display = "block";
    form1.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
}

previous.onclick = function(){
    form2.style.display = "none";
    form1.style.display = "block";
    form3.style.display = "none";
    form4.style.display = "none";
}

next2.onclick = function(){
    form2.style.display = "none";
    form1.style.display = "none";
    form3.style.display = "block";
    form4.style.display = "none";
}

submit.onclick = function(){
    form2.style.display = "none";
    form1.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "block";
}