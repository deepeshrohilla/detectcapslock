document.addEventListener("keyup",(e)=>{
    if (e.getModifierState("CapsLock")) {
        document.getElementById("caps").innerText = "Caps Lock Is ON!"
    } else {
        document.getElementById("caps").innerText = ""
    }
})