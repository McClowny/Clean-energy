const testSelect = document.getElementById("testselect");
const redBar = document.querySelector(".emissions .percentage-bar");
const greenBar = document.querySelector(".costs .percentage-bar");
const blueBar = document.querySelector(".time .percentage-bar");
const transportSelect = document.getElementById("select-transport");
const changeTransportSelect = document.getElementById('change-transport')

const householdEnergy = [
    // Turn off unecessary lights //
    {
        id:document.getElementById("energy1"),
        isChecked:document.getElementById("energy1").checked,
        value: [-5,-10,0]
    },
    // Hook up solar panels //
    {
        id:document.getElementById("energy2"),
        isChecked:document.getElementById("energy2").checked,
        value: [-20,30,10]
    },
    // Change your transportation //
    {
        id:document.getElementById("energy3"),
        isChecked:document.getElementById("energy3").checked,
        value: [checkSelector, checkSelector, checkSelector]
    }
]
const Selector = {
    Foot:[0,0,80],
    Bike:[0,5,65],
    Car:[60,65,25],
    "Electric Car":[30,75,25],
    Bus:[10,20,40],
    Train:[10,20,40]
}

transportSelect.onclick = setValue;

function setValue() {
    const valuePool = Selector[transportSelect.value];
    redBar.style.width = valuePool[0] + "%";
    greenBar.style.width = valuePool[1] + "%";
    blueBar.style.width = valuePool[2] + "%";
}

