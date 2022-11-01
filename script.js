function beKatt(beker){
    var gomb = document.getElementById(beker.id);
    gomb.style.backgroundColor="lightblue";
}
function kiKatt(beker){
    var gomb = document.getElementById(beker.id);
    gomb.style.backgroundColor="white";
}
function raKatt(){
    document.getElementById("e-nev").innerHTML=document.getElementById("nev").value;
    document.getElementById("e-cim").innerHTML=document.getElementById("cim").value;
    document.getElementById("e-tel").innerHTML=document.getElementById("tel").value;
}