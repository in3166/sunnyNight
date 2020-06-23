window.addEventListener('load', () => {
    //serviceWorker.register();

    var label2 = document.getElementById('la2');
    var label4 = document.getElementById('la4');
    let day = new Date(2020, 5, 13);
    let today = new Date();

    console.log("to: " + moment(today).format('YYYY MM DD HH:mm:ss'));
    console.log("day: " + moment(day).format('YYYY MM DD HH:mm:ss'));

    var cDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨
    var cMonth = cDay * 30; // 월 만듬
    var cYear = cMonth * 12; // 년 만듬

    var dif1 = today - day;
    var dif = parseInt(dif1 / cDay)

    var namu = dif;
    var text, text2;
    //console.log("dif: " + dif);
    console.log("일차이: " + parseInt(dif1 / cDay));

    namu = dif % 6;
    var na = (namu + 1) % 6;

    switch (namu) {
        case 0:
        case 1:
            text = "오전";
            break;
        case 2:
        case 3:
            text = "야간";
            break;
        case 5:
        case 4:
            text = "휴일";
            break;
        default:
            text = "??";
            break;
    }
    switch (na) {
        case 0:
        case 1:
            text2 = "오전";
            break;
        case 2:
        case 3:
            text2 = "야간";
            break;
        case 5:
        case 4:
            text2 = "휴일";
            break;
        default:
            text2 = "??";
            break;
    }

    label2.innerText = text;
    label4.innerText = text2;



});