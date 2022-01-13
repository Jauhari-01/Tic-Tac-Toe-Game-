// greeting
console.log("Welcome to Tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
const boxes = document.querySelectorAll(".box");


// function to change the turn
const changeTurn = () =>{
    return ((turn === "X")?"0":"X");
}

// function to check a win 
const checkWin = () =>{
    // all posibilties for win
    // box are grid
    // that is why this is working
    const boxtext = document.getElementsByClassName("boxText");
    
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !== ""))
        {
           
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector(".imageBox img").style.width = "14vw";
            
            
            boxes[e[0]].style.background = "#98f16abf";
            boxes[e[1]].style.background = "#98f16abf";
            boxes[e[2]].style.background = "#98f16abf";
            gameover.play();

        }
    })
}

// Game Logic
music.play();
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click",(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver)
                document.getElementsByClassName("info")[0].innerText= ("Turn for "+turn);
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener("click",()=>{
    const boxtexts = document.getElementsByClassName("boxText");
    Array.from(boxtexts).forEach(boxtext=>{
        boxtext.innerText = "";
    })

    turn = "X";
    document.getElementsByClassName("info")[0].innerText= ("Turn for "+turn);
    document.querySelector(".imageBox img").style.width = "0px";
    Array.from(boxes).forEach(e=>{
        e.style.background = "white";
    })

})