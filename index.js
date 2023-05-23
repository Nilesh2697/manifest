document.addEventListener("DOMContentLoaded", () => {
  let timer = null;

  let timeValus = {
    hour: 0,
    min: 0,
    sec: 0,
  };
  let isTiemrOn = false;
  const display = document.getElementById("display");
  const inputs = document.getElementById("inputs");

  const hourInp = document.getElementById("hour-inp");
  const minInp = document.getElementById("min-inp");
  const secInp = document.getElementById("sec-inp");

  const submit = document.querySelector("#inputs > button");

  submit.addEventListener("click", () => {
    timerValues.sec = +secInp.value;
    timerValues.min = +minInp.value;
    timerValues.hour = +hourInp.value;
    isTiemrOn = true;

    inputs.style.display = "none";
    display.style.display = "block";
    startTimer();
  });

  function start() {
    setInterval(() => {
     
      timerValues.sec--;
      if(timerValues.sec<0){
      timerValues.sec = 59;
      timerValues.min--;
      }
      if(timerValues.min < 0){
      timerValues.min = 59
      timerValues.hour -- ;
      }
      if (
        timeValues.sec <= 0 &&
        timeValues.min <= 0 &&
        timerValues.hour <= 0
      ) {
        clearInterval(timer);
      }
    }, 1000);
  }
});
