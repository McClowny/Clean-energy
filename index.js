const testSelect = document.getElementById("testselect");

let transportSelector = document.getElementById("select-transport");

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


transportSelector.onclick = setValue;

function setValue() {
    const name = transportSelector.value
    testSelect.innerText = name.slice(0,1).toUpperCase() + name.slice(1,Infinity);
}