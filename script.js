var state= false;
function toggle() {
    if (state) {
    document.getElementById("one").setAttribute("type","password");
    document.getElementById("eye-1").className = "fas fa-eye-slash icon-password";
	state = false;
    } else {
        document.getElementById("one").setAttribute("type","text");
        document.getElementById("eye-1").className = "fas fa-eye icon-password";
        state = true;
    } 
}
var state2= false;
function toggle2() {
    if (state2) {
    document.getElementById("two").setAttribute("type","password");
    document.getElementById("eye-2").className = "fas fa-eye-slash icon-password";
	state2 = false;
    } else {
        document.getElementById("two").setAttribute("type","text");
        document.getElementById("eye-2").className = "fas fa-eye icon-password";
        state2 = true;
    } 
}
document.querySelector(".btn").onclick = function() {
    let inp1 = document.getElementById("one").value;
    let inp2 = document.getElementById("two").value;
    if(inp1 === inp2){
        alert(`You are welcome`);
    }
    else {
        document.querySelector(".out1").style.color = "red";
        document.querySelector(".out1").innerHTML = "Нужно ввести одинаковые значения";
    }
}