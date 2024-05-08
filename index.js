const testSelect = document.getElementById("testselect");
const redBar = document.querySelector(".red .percentage-bar");
const greenBar = document.querySelector(".green .percentage-bar");
const blueBar = document.querySelector(".blue .percentage-bar");

let transportSelect = document.getElementById("select-transport");

const householdEnergy = [
    // Fossil Fuels //
    {
        id:document.getElementById("energy1"),
        value:document.getElementById("energy1").value,
        isChecked:document.getElementById("energy1").checked
    },
    // Solar Panels //
    {
        id:document.getElementById("energy2"),
        value:document.getElementById("energy2").value,
        isChecked:document.getElementById("energy2").checked
    },
    // Water Wheel //
    {
        id:document.getElementById("energy3"),
        value:document.getElementById("energy3").value,
        isChecked:document.getElementById("energy3").checked
    },
    // Wind Turbine //
    {
        id:document.getElementById("energy4"),
        value:document.getElementById("energy4").value,
        isChecked:document.getElementById("energy4").checked
    },
    // Power Grid //
    {
        id:document.getElementById("energy5"),
        value:document.getElementById("energy5").value,
        isChecked:document.getElementById("energy5").checked
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