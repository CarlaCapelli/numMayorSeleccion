let num1: string = document.getElementById("num1");
let num2: string = document.getElementById("num2");
let num3: string = document.getElementById("num3");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numUno: number = Number(num1.value);
  let numDos: number = Number(num2.value);
  let numTres: number = Number(num3.value);

  if (numUno > numDos && numUno > numTres) {
    console.log("el num mayor es", numUno);
  } else if (numDos > numUno && numDos > numTres) {
    console.log(" el num mayor es", numDos);
  } else if (numTres > numUno && numTres > numDos) {
    console.log(" el num mayor es", numTres);
  }
});
