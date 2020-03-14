

//Ask for input
const name = prompt("What is your name?");
const degFahren = prompt("enter degrees in fahrenheit");
const degCel = toCelsius(degFahren);
fahrenMsg(degFahren);
// Convert input


function toCelsius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32);
}

function fahrenMsg(fahrenheit){
    let msg = degFahren + "\xB0 Fahrenheit is " + degCel + "\xB0 ";      
    if (fahrenheit < 69) {
        alert(msg + "\n Oh that's cold!");
      } else if (fahrenheit > 69 && fahrenheit < 83) {
        alert(msg + "\n Temperature is just right!");
      } else {
        alert(msg + "\n Its way too hot!");
      }

}
