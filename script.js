let timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitNewVal() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubbles() {
    let init = "";

    for (let i = 0; i <= 132; i++) {
        let value = Math.floor(Math.random() * 10);
        init += `<div class="bubbleBox" onclick="handleBubbleClick(this)">${value}</div>`;
    }

    document.querySelector("#bubblebtm").innerHTML = init;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#TimerValue").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#bubblebtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function handleBubbleClick(bubble) {
    var bubbleClickes = Number(bubble.textContent);
    if (!isNaN(bubbleClickes)) {
        if (bubbleClickes === hitrn) {
            increaseScore();
            makeBubbles();
            hitNewVal();
        }
    }
}

runTimer();
hitNewVal();
makeBubbles();





// let init = 0;
// let timer = 60;
// let score = 0;
// var hitrn;


// function increaseScore(){
//     score += 10;
//     document.querySelector("#scoreVal").textContent = score;
// }

// function setTime(){
//     setInterval(function(){
//         document.querySelector("#TimerValue").textContent = timer;
//         if(timer >=1){
//             timer--;
//         }else{
//             timer = 0;
//             clearInterval();
//         }
//     },1000)
// }




// function Hitvalue(){
//      hitrn =  Math.floor(Math.random()*10)
//     document.querySelector("#hitVal").innerHTML = hitrn;
   
// }


// document.querySelector("#bubblebtm").addEventListener("click",function(dets){
//        var hitscore = Number(dets.target.textContent);
//        console.log(hitscore)
//        if(hitscore === hitrn){
//         increaseScore();
//         Hitvalue();
//       }
// })

// function generateNum(){
//     for(let i=1; i<=132; i++){
//         var numMsg =  Math.floor(Math.random()*10)
//         init += `<div class="bubbleBox">${numMsg}</div>`
//         document.querySelector("#bubblebtm").innerHTML = init
        
//     }
// }


// setTime();
// Hitvalue();
// generateNum();


