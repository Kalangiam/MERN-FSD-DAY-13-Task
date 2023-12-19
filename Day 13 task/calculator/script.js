function d1(){
var one=parseInt(document.getElementById("button13").value);
var d =document.getElementById("d");
d_one=d.append(one);
document.body.append(d_one);
}
function d2(){
    var two=parseInt(document.getElementById("button14").value);
    var d =document.getElementById("d");
    d_two=d.append(two);
    document.body.append(d_two);
}
function d3(){
    var three=parseInt(document.getElementById("button15").value);
    var d =document.getElementById("d");
    d_three=d.append(three);
    document.body.append(d_three);
}
function d4(){
    var four=parseInt(document.getElementById("button9").value);
    var d =document.getElementById("d");
    d_four=d.append(four);
    document.body.append(four);
}
function d5(){
    var five=parseInt(document.getElementById("button10").value);
    var d =document.getElementById("d");
    d_four=d.append(five);
    document.body.append(five);
}
function d6(){
    var six=parseInt(document.getElementById("button11").value);
    var d =document.getElementById("d");
    d_six=d.append(six);
    document.body.append(six);
}
function d7(){
    var seven=parseInt(document.getElementById("button5").value);
    var d =document.getElementById("d");
    d_seven=d.append(seven);
    document.body.append(seven);
}
function d8(){
    var eight=parseInt(document.getElementById("button6").value);
    var d =document.getElementById("d");
    d_eight=d.append(eight);
    document.body.append(eight);
}
function d9(){
    var nine=parseInt(document.getElementById("button7").value);
    var d =document.getElementById("d");
    d_nine=d.append(nine);
    document.body.append(nine);
}
function add(){
    var add=document.getElementById("button16").value;
    var d =document.getElementById("d");
    adds =d.append(add);
    body.document.append(adds);
    d_add = d.target.innerText;
    d_adds=d.append(d_add);
    document.body.append(d_adds);
}
function equals(){
    var equal=document.getElementById("button19").value;
    var d =document.getElementById("d");
    d_equal=d.append(equal);
    document.body.append(d_equal);
    document.addEventListener("click",add)
}
