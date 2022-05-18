var input= document.getElementById("inp")
input.addEventListener("keyup",function name(e) {
    if (isNaN(input.value) || input.value=="") {
        input.classList="alert";
        
    }
    else{
        input.classList="";
    }
    
})