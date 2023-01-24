$(document).ready(function(){
    
})
function mostrarMenu($event){
let menu = document.getElementById("menu")

if(getComputedStyle(menu).display =="none"){
    menu.style.display = "flex"  
}
else{
    menu.style.display = "none"
}
}
function login($event){
    let loginpage = document.getElementById("loginpage")
   
    if(getComputedStyle(loginpage).display =="none"){
        loginpage.style.display = "flex"  
    }
    else{
        loginpage.style.display = "none"
    }
}

function logar(){
    var login = document.getElementById("log").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert("Sucesso")
        location.href = "/Html/compras.html"
    }else{
    alert("Usuario ou senha incorretos")
    }
}
