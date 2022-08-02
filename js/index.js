
const dateEl = document.querySelectorAll(".date");
const lottoEl = document.querySelector(".lotto-number ul");
const startEl = document.querySelector("#start");

console.log(startEl);
// showTime();


function getTime(fullTime = true) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    if (fullTime) {
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }

    return `${year}/${month}/${date}`;
}


function showTime() {
    let now = getTime();
    dateEl[0].innerText = now.toString();

    setTimeout(() => {
        showTime();
    }, 1000);

}

startEl.addEventListener("click", () => {
    dateEl[1].innerText = "2022/7/28";
    console.log("click!2");
    lottoEl.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let numbers = getLottoNumber(1, 49, 6, true);
        console.log(numbers.join(" "));
        lottoEl.innerHTML += `<li>${numbers.join(" ")}</li>`;
    }
});


// 樂透function
function getLottoNumber(start, end, numbers, special = false) {
    let lotto = [];

    do {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        if (!lotto.includes(n)) {
            lotto.push(n);
        }
    } while (lotto.length < numbers);

    // 排序
    lotto.sort((a, b) => a - b);

    if (special) {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        lotto.push(n);
    }

    return lotto;
}

