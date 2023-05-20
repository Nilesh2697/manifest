document.addEventListener("DOMContentLoaded",()=>{
    let timeValus = {
        hour:0,
        min:0,
        sec:0,
    }
    let isTiemrOn = false;
    const display = document.getElementById("display");
    const inputs = document.getElementById("inputs");

    const hourInp = document.getElementById("hour-inp");
    const minInp = document.getElementById("min-inp")
    const secInp = document.getElementById("sec-inp")
    
    const submit = document.querySelector("#inputs > button");

    submit.addEventListener("click",()=>{
        timerValues.sec = +secInp.value;
        timerValues.min = +minInp.value;
        timerValues.hour = +hourInp.value;
        isTiemrOn = true;
    })
})