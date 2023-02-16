const yesBtn  = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function() {
    alert("sabias que ibas a decir que si LESLIE uwu")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover" ,function() {
    const randonX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randonX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%, -${randomY}%)`);
})