const testSelect = document.getElementById("testselect");
const emissionBar = document.querySelector(".emissions .percentage-bar");
const costBar = document.querySelector(".costs .percentage-bar");
const timeBar = document.querySelector(".time .percentage-bar");
const emissionPostBar = document.querySelector(".emissions .post-percentage-bar");
const costPostBar = document.querySelector(".costs .post-percentage-bar");
const timePostBar = document.querySelector(".time .post-percentage-bar");
const transportSelect = document.getElementById("select-transport");
const changeTransportSelect = document.getElementById("change-transport");

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
        value: [0,0,0]
    }
]
const selector = {
    Foot:[0,0,80],
    Bike:[0,5,65],
    Car:[60,65,25],
    "Electric Car":[30,75,25],
    Bus:[10,20,40],
    Train:[10,20,40]
}



transportSelect.onclick = setValue;

function setValue() {
    const valuePool = selector[transportSelect.value];
    const postValuePool = selector[changeTransportSelect.value];
    emissionBar.style.width = valuePool[0] + 20 + "%";
    costBar.style.width = valuePool[1] + 20 + "%";
    timeBar.style.width = valuePool[2] + 20 + "%";
    emissionPostBar.style.width = postValuePool[0] + 20 + "%";
    costPostBar.style.width = postValuePoolt[1] + 20 + "%";
    timePostBar.style.width = postValuePool[2] + 20 + "%";
}

changeTransportSelect.onclick = checkSelector;

function checkSelector() {
    const int = transportSelect.value.localeCompare(changeTransportSelect.value);
    if (int) {
    document.querySelector("#foreground").style.backgroundColor = "blue";
    } else {
    document.querySelector("#foreground").style.backgroundColor = "red";
    }
}
