const testSelect = document.getElementById("testselect");
const transportSelector = document.getElementById("select-transport");
const householdEnergy = [
// Fossil Fuels //
    {
        id:document.getElementById("energy1"),
        value:document.getElementById("energy1").value
    },
// Solar Panels //
    {
        id:document.getElementById("energy2"),
        value:document.getElementById("energy2").value
    },
// Water Wheel //
    {
        id:document.getElementById("energy3"),
        value:document.getElementById("energy3").value
    },
// Power Grid //
    {
        id:document.getElementById("energy4"),
        value:document.getElementById("energy4").value
    }
]

textSelect.innerText = transportSelector.value;