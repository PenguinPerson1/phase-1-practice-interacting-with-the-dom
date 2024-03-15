let timerNumber = 0;
const likedNumbers = [[],[]]
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const form = document.querySelector("#comment-form")

let timerId = setInterval(timer, 1000);

function updateTimer() {
    document.querySelector("#counter").textContent=timerNumber;
}

function timer() {
    timerNumber++;
    updateTimer();
};

minus.addEventListener("click",()=>{
    timerNumber--;
    updateTimer();
});
plus.addEventListener("click",()=>{
    timerNumber++;
    updateTimer();
});
heart.addEventListener("click",()=>{
    const index = likedNumbers[0].indexOf(timerNumber);
    if (index===-1) {
        likedNumbers[0].push(timerNumber);
        likedNumbers[1].push(1);
        const li = document.createElement("li");
        li.textContent = `${timerNumber} has been liked 1 time`;
        document.querySelector(".likes").append(li);

    } else {
        likedNumbers[1][index]+=1;
        document.querySelectorAll(".likes li")[index].textContent = `${timerNumber} has been liked ${likedNumbers[1][index]} times`;
    }
});
pause.addEventListener("click",()=>{
    if (heart.disabled===false) {
        clearInterval(timerId);
        document.querySelector("#pause").textContent="resume"
        minus.disabled=true;
        plus.disabled=true;
        heart.disabled=true;
        form.submit.disabled=true;
    } else {
        timerId = setInterval(timer, 1000);
        document.querySelector("#pause").textContent="pause";
        minus.disabled=false;
        plus.disabled=false;
        heart.disabled=false;
        form.submit.disabled=false;
    }
});
form.addEventListener("submit", event=>{
    event.preventDefault();
    const p = document.createElement("p");
    p.textContent = form.comment.value;
    document.querySelector("#list").append(p);
    form.comment.value = "";
});