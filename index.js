function left_img() {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img1").src="images/dice"+randomNumber1+".png";
    return randomNumber1
}
function right_img(){
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img2").src="images/dice" + randomNumber2 + ".png";
    return randomNumber2
}
left_img()
right_img()
if (left_img() > right_img()){
    document.querySelector("h1").innerText="🚩 Player 1 wins!";
}
else if (right_img() < left_img()){
    document.querySelector("h1").innerText="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerText="Draw!"
}