const testSelect = document.getElementById("testselect");
const redBar = document.querySelector(".emissions .percentage-bar");
const greenBar = document.querySelector(".costs .percentage-bar");
const blueBar = document.querySelector(".time .percentage-bar");

let transportSelect = document.getElementById("select-transport");

const householdEnergy = [
    // Turn off unecessary lights //
    {
        id:document.getElementById("energy1"),
        value:document.getElementById("energy1").value,
        isChecked:document.getElementById("energy1").checked
    },
    // Hook up solar panels //
    {
        id:document.getElementById("energy2"),
        value:document.getElementById("energy2").value,
        isChecked:document.getElementById("energy2").checked
    },
    // Change your transportation //
    {
        id:document.getElementById("energy3"),
        value:document.getElementById("energy3").value,
        isChecked:document.getElementById("energy3").checked
    }
]
const Selector = {
    Foot:[20,24,12],
    Bike:[14,63,28],
    Car:[74,28,30],
    "Electric Car":[14,18,73],
    Bus:[53,28,72],
    Train:[43,91,3]
}

transportSelect.onclick = setValue;

function setValue() {
    const valuePool = Selector[transportSelect.value];
    redBar.style.width = valuePool[0] + "%";
    greenBar.style.width = valuePool[1] + "%";
    blueBar.style.width = valuePool[2] + "%";
}
