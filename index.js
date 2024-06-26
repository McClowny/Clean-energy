const testSelect = document.getElementById("testselect");
const emissionBar = document.querySelector(".emissions .ruler-bar .percentage-bar");
const costBar = document.querySelector(".costs .ruler-bar .percentage-bar");
const timeBar = document.querySelector(".time .ruler-bar .percentage-bar");
const emissionPostBar = document.querySelector(".emissions .ruler-bar .post-percentage-bar");
const costPostBar = document.querySelector(".costs .ruler-bar .post-percentage-bar");
const timePostBar = document.querySelector(".time .ruler-bar .post-percentage-bar");
const transportSelect = document.getElementById("select-transport");
const changeTransportSelect = document.getElementById("change-transport");
const warning = document.querySelector("#warning");
const warningPhrase = document.querySelector("#warning p");
const calculateButton = document.getElementById("calculate");

const householdEnergy = [
    // Turn off unecessary lights //
    {
        id:document.getElementById("energy1"),
        value: [-5,-10,0]
    },
    // Hook up solar panels //
    {
        id:document.getElementById("energy2"),
        value: [-20,30,10]
    },
    // Change your transportation //
    {
        id:document.getElementById("energy3"),
        value: [0,0,0]
    }
]
const selector = {
    // Options List //
    Foot:[0,0,80],
    Bike:[0,5,65],
    Car:[60,65,25],
    "Electric Car":[30,75,25],
    Bus:[10,20,40],
    Train:[10,20,40]
}

let isCheckboxSelectorEnabled = 0;
let value1 = [0,0,0];
let value2 = [0,0,0];
let flip1 = 0;
let flip2 = 0;

calculateButton.onclick = checkSelector;

function checkCheckboxes(object) {
    if (object = 0) {
        if (flip1 == 0) {
            value1 =  householdEnergy[object]["value"];
            flip1 = 1;
        } else {
            value1 = [0,0,0];
            flip1 = 0;
        }
    } else if (object = 1) {
        if (flip2 == 0) {
            value2 = householdEnergy[object]["value"];
            flip2 = 1;
        } else {
            value2 = [0,0,0];
            flip2 = 0;
        }
    } else {
        console.log("Check your variables");
    }
}

function setValue(elmnt1, elmnt2, int) {
    const valuePool = elmnt1;
    const postValuePool = elmnt2;
    let width = window.innerWidth;
    if (int == 0) {
        barSlide(emissionBar, valuePool[0]);
        barSlide(emissionPostBar, valuePool[0]);
        barSlide(costBar, valuePool[1]);
        barSlide(costPostBar, valuePool[1]);
        barSlide(timeBar, valuePool[2]);
        barSlide(timePostBar, valuePool[2]);
    } else if (int == 1) {
        barSlide(emissionBar, clamp(valuePool[0] + value1[0] + value2[0],0,100));
        barSlide(costBar, clamp(valuePool[1] + value1[1] + value2[1],0,100));
        barSlide(timeBar, clamp(valuePool[2] + value1[2] + value2[2],0,100));
        barSlide(emissionPostBar, clamp(valuePool[0] + value1[0] + value2[0],0,100));
        barSlide(costPostBar, clamp(valuePool[1] + value1[1] + value2[1],0,100));
        barSlide(timePostBar, clamp(valuePool[2] + value1[2] + value2[2],0,100));
    } else {
        barSlide(emissionBar, clamp(valuePool[0] + value1[0] + value2[0],0,100));
        barSlide(costBar, clamp(valuePool[1] + value1[1] + value2[1],0,100));
        barSlide(timeBar, clamp(valuePool[2] + value1[2] + value2[2],0,100));
        barSlide(emissionPostBar, clamp(postValuePool[0] + value1[0] + value2[0],0,100));
        barSlide(costPostBar, clamp(postValuePool[1] + value1[1] + value2[1],0,100));
        barSlide(timePostBar, clamp(postValuePool[2] + value1[2] + value2[2],0,100));
    }
}

function clamp(n,lower,upper) {
    if (n == lower) {
        return lower;
    } else if (n == upper) {
        return upper;
    } else {
        return n;
    } 
}

function checkSelector() {
    const elmnt1 = transportSelect.value;
    const elmnt2 = changeTransportSelect.value;
    if (elmnt1.localeCompare("Select one")) {
    if (householdEnergy[2]["id"].checked) {
        if (`${elmnt2}`.localeCompare("Select one")) {
            if (!elmnt1.localeCompare(elmnt2)) {
                fade(warning, 100);
                warningPhrase.innerText = "You picked the same for both dropdowns. You don't need to enable this option!";
            } else if (selector[elmnt1][0]>=selector[elmnt2][0]) {
                warning.style.opacity = "0%";
                setValue(selector[elmnt1],selector[elmnt2],2);
            } else {
                fade(warning, 100);
                warningPhrase.innerText = "You picked an option worse for the environment. Pick something else!";
            }
        } else {
            fade(warning, 100);
            warningPhrase.innerText = "Please select something.";
        }
    } else {
        warning.style.opacity = "0%";
        setValue(selector[elmnt1],selector[elmnt2],1);
    }
    } else {
        fade(warning, 100);
        warningPhrase.innerText = "Please select something.";
    }
}

function barSlide(elmnt, end) {
    let id = null;
    let pos = 0;
    let inc = Math.round(end)/100;
    clearInterval(id);
    if (end==0) {
        elmnt.style.width = "0%";
    } else {
        id = setInterval(frame, 5);
        function frame() {
        if (Math.round(pos) == Math.round(end)) { 
            clearInterval(id);
        } else {
            pos += inc;
            elmnt.style.width = pos + "%";
        }
        }
    }
}

let isFadeAlreadyActive = null;

function fade(elmnt, end) {
    if (end == 100 && !isFadeAlreadyActive) {
        isFadeAlreadyActive = true;
        let id = null;
        let op = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (op == 100) {
                clearInterval(id);
                id = setInterval(fadeOut,3000)
                function fadeOut() {
                    clearInterval(id);
                    fade(elmnt, 0);
                }
            } else {
                op += 2;
                elmnt.style.opacity = op + "%";
            }
        }
    } else if (end == 0) {
        let id = null;
        let op = 100;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (op == 0) {
                clearInterval(id);
                isFadeAlreadyActive = null;
            } else {
                op -= 2;
                elmnt.style.opacity = op + "%";
            }
        }
    }
}
