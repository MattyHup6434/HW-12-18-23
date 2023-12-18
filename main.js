
let num = 0;

pgUp = () => {
    num += 1
    onCounter()
}


pgDown = () => {

    if (num > 0) {
        num -= 1
    }

    onCounter()
}

pgCls = () => {

    num = 0
    onCounter()
}

const onCounter = () => {

    result.innerText = num;
}

const result = document.getElementById("num");