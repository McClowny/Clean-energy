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
            calculateButton.innerText = "yes";
        } else {
            value1 = [0,0,0];
            flip1 = 0;
            calculateButton.innerText = "no";
        }
    } else if (object = 1) {
        if (flip2 == 0) {
            value2 = householdEnergy[object]["value"];
            flip2 = 1;
            calculateButton.innerText = "yes";
        } else {
            value2 = [0,0,0];
            flip2 = 0;
            calculateButton.innerText = "no";
        }
    } else {
        console.log("Check your variables");
    }
}

function setValue(elmnt1, elmnt2, int) {
    const valuePool = elmnt1;
    const postValuePool = elmnt2;
    if (int == 0) {
        emissionBar.style.width = valuePool[0] + "%";
        costBar.style.width = valuePool[1] + "%";
        timeBar.style.width = valuePool[2] + "%";
        emissionPostBar.style.width = "0%";
        costPostBar.style.width = "0%";
        timePostBar.style.width = "0%";
    } else if (int == 1) {
        emissionBar.style.width = clamp(valuePool[0] + value1[0] + value2[0],0,100) + "%";
        costBar.style.width = clamp(valuePool[1] + value1[1] + value2[1],0,100) + "%";
        timeBar.style.width = clamp(valuePool[2] + value1[2] + value2[2],0,100) + "%";
        emissionPostBar.style.width = "0%";
        costPostBar.style.width = "0%";
        timePostBar.style.width = "0%";
    } else {
        emissionBar.style.width = clamp(valuePool[0] + value1[0] + value2[0],0,100) + "%";
        costBar.style.width = clamp(valuePool[1] + value1[1] + value2[1],0,100) + "%";
        timeBar.style.width = clamp(valuePool[2] + value1[2] + value2[2],0,100) + "%";
        emissionPostBar.style.width = clamp(postValuePool[0] + value1[0] + value2[0],0,100) + "%";
        costPostBar.style.width = clamp(postValuePool[1] + value1[1] + value2[1],0,100) + "%";
        timePostBar.style.width = clamp(postValuePool[2] + value1[2] + value2[2],0,100) + "%";
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
    if (householdEnergy[2]["id"].checked) {
        if (!elmnt1.localeCompare(elmnt2)) {
            warning.style.opacity = "100%";
            warningPhrase.innerText = "You picked the same for both dropdowns. You don't need to enable this option!";
        } else if (selector[elmnt1][0]>=selector[elmnt2][0]) {
            warning.style.opacity = "0%";
            setValue(selector[elmnt1],selector[elmnt2],2);
        } else {
            warning.style.opacity = "100%";
            warningPhrase.innerText = "You picked an option worse for the environment. Pick something else!";
        }
    } else {
        warning.style.opacity = "0%";
        setValue(selector[elmnt1],selector[elmnt2],1);
    }
}
