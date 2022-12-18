window.onload = function () {
    const hands= document.getElementById("hands");
    const email= document.getElementById("email");
    const uname= document.getElementById("uname");
    const fullname=document.getElementById("fullname");
    const psw=document.getElementById("psw");
    const about=document.getElementById("about");
    const occ=document.getElementById("occ");
    const unameL= document.getElementById("unameL");
    const pswL=document.getElementById("pswL");
    const handsL= document.getElementById("handsL");

    email.addEventListener("mouseover", function(){
        hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    email.addEventListener("mouseout", function(){
        hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    uname.addEventListener("mouseover", function(){
        hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    uname.addEventListener("mouseout", function(){
        hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    fullname.addEventListener("mouseover", function(){
        hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    fullname.addEventListener("mouseout", function(){
        hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    psw.addEventListener("mouseover", function(){
        hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    psw.addEventListener("mouseout", function(){
        hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    about.addEventListener("mouseover", function(){
        hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    about.addEventListener("mouseout", function(){
        hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    occ.addEventListener("mouseover", function(){
        hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    occ.addEventListener("mouseout", function(){
        hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    unameL.addEventListener("mouseover", function(){
        handsL.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    unameL.addEventListener("mouseout", function(){
        handsL.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    pswL.addEventListener("mouseover", function(){
        handsL.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    pswL.addEventListener("mouseout", function(){
        handsL.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })
}

window.onload = function () {
 
    const unameL= document.getElementById("unameL");
    const pswL=document.getElementById("pswL");
    const handsL= document.getElementById("handsL");

    unameL.addEventListener("mouseover", function(){
        handsL.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    unameL.addEventListener("mouseout", function(){
        handsL.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    pswL.addEventListener("mouseover", function(){
        handsL.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    pswL.addEventListener("mouseout", function(){
        handsL.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })
}
