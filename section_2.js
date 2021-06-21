/*====================== [SECTION 1] Javascript in terminal ========================*/

/*======================= Part # 1 change color of button when clicked==============*/

document.getElementById("button1").addEventListener('click', function() {
    this.style.backgroundColor = "green";
})

/*=============== Part # 2 value in textarea to UPPERCASE ========================*/

const mytextarea2 = document.getElementById("textarea2");
const mybutton2 = document.getElementById("button2");

mybutton2.addEventListener("click", () => {
    mytextarea2.value = mytextarea2.value.toUpperCase(); //.value = to select value from textarea

});

/*================== Part #3 value in textarea to BACKWARDS ======================*/

const myTextArea3 = document.getElementById("myTextArea3");
const mybutton3 = document.getElementById("button3");

mybutton3.addEventListener("click", () => {
    myTextArea3.value = myTextArea3.value.split("").reverse("").join(""); //.value = to select value from textarea

});

/*============================ Part #4 FETCH =============================*/

const myUl = document.getElementById("ul");
const mybutton4 = document.getElementById("button4");

    function getFilms() {
        fetch("https://swapi.dev/api/films/")
        .then(res => res.json())
        .then(data => {    
            myUl.innerHTML = `<li>${data.results}</li>`;
            console.log(data.results);
        })
    }

    mybutton4.addEventListener("click", getFilms);

// listeners
/*
mybutton4.addEventListener("click" () => {
    fetch("")
})
*/

/*============================ Part #5 CANVAS =============================*/

var x = 0;

function draw() {
    window.requestAnimationFrame(draw);
    const myCanvas = document.getElementById("canvas");
    const ctx = myCanvas.getContext("2d");  

    ctx.clearRect(0, 0, myCanvas.width, canvas.height);

    ctx.font = "50px Verdana";  
    ctx.fillStyle = "red";
    ctx.fillText("AMALIA", 150, 150 ); // the text is centered

    ctx.fillRect(x, 150, 50, 50);
    x += 2;
}

draw();