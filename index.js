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

calculateButton.onclick = checkSelector;

function checkCheckboxes(object) {
    if (object = 0) {
        if (householdEnergy[object]["id"].clicked) {
            return householdEnergy[object]["value"];
        } else {
            return [0,0,0];
        }
    } else if (object = 1) {
        if (householdEnergy[object]["id"].clicked) {
            return householdEnergy[object]["value"];
        } else {
            return [0,0,0];
        }
    } else {
        console.log("Check your variables");
    }
}

function setValue(elmnt1, elmnt2, int) {
    const valuePool = elmnt1;
    const postValuePool = elmnt2;
    value1 = checkCheckboxes(0);
    value2 = checkCheckboxes(1);
    if (int = 0) {
        emissionBar.style.width = valuePool[0] + "%";
        costBar.style.width = valuePool[1] + "%";
        timeBar.style.width = valuePool[2] + "%";
        emissionPostBar.style.width = "0%";
        costPostBar.style.width = "0%";
        timePostBar.style.width = "0%";
        console.log("Checking");
    } else if (int = 1) {
        emissionBar.style.width = valuePool[0] + value1[0] + value2[0] + "%";
        costBar.style.width = valuePool[1] + value1[1] + value2[1] + "%";
        timeBar.style.width = valuePool[2] + value1[2] + value2[2] + "%";
        emissionPostBar.style.width = "0%";
        costPostBar.style.width = "0%";
        timePostBar.style.width = "0%";
        calculateButton.innerText = value1[0];
    } else {
        emissionBar.style.width = valuePool[0] + "%";
        costBar.style.width = valuePool[1] + "%";
        timeBar.style.width = valuePool[2] + "%";
        emissionPostBar.style.width = postValuePool[0] + "%";
        costPostBar.style.width = postValuePool[1] + "%";
        timePostBar.style.width = postValuePool[2] + "%";
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
