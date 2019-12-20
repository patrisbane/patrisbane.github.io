const textview = document.getElementById('text');
const form = document.querySelector('#form');

let isAnswered = false;
const insert = (num) => {
    textview.value += num;
    if (isAnswered && Number.isInteger(num)) {textview.value = num; isAnswered = false};
    /*
    if (!isAnswered && Number.isInteger(num)) 
    else {
        isAnswered = false;
        textview.value = num;
    }*/
};
const clean = () => {
    textview.value = "";

};
const back = () => {
    //textview.value = textview.value.substring(0, exp.length - 1);
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1)
}
const equal = () => {
    if (textview.value) {
        textview.value = eval(textview.value).toFixed(2);
        isAnswered = true;
    }
}
