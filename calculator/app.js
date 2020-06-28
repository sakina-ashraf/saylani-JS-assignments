function getNumber(num) {
    var result = document.getElementById("result")
    result.value += num;
}

function clearValue() {
    var result = document.getElementById("result")
    result.value = "0";
}

function getValue() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function one() {
    var result = document.getElementById("result")
    result.value = "0";
}
