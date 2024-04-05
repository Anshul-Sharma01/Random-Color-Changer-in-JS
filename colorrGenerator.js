
const btn = document.querySelector("button");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let code = "#";
    for(let i = 0; i < 6; i++){
        code = code + val[Math.floor(Math.random() * 16)];
    }
    return code;
};

console.log(randomColor());

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click',changeRandomColor);