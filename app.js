const displayField = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let equal = document.querySelector(".equal");
let delet = document.querySelector(".delet");
let reset = document.querySelector(".reset");;


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayField.value += button.value;
  });
});

equal.addEventListener("click", () => {
  if (displayField.value !== "") {
    try {
      let solution = eval(displayField.value);
      displayField.value = solution;
    } catch (error) {
      displayField.value = "Invalid Input";
    }
  }
});

delet.addEventListener("click", () => {
  if (displayField.value !== "") {
  displayField.value = displayField.value.substring(0, displayField.value.length - 1);
}else{
  displayField.value = ""; 
}
});

reset.addEventListener("click", () => {
  displayField.value = "";
});

 
function mytimeFunction(hour,minute,second){

 let hours = new Date().getHours();
 let seconds = new Date().getSeconds();
 let minutes = new Date().getMinutes();
 let amPm = hours >= 12 ? "PM": 'AM';
 if (minutes <=9){
  minutes =`'0' + ${minutes}` ;
 }
document.getElementById("hour").innerHTML = `${hours}:`;
document.getElementById("minute").innerHTML = `${minutes}:`;
document.getElementById("second").innerHTML = seconds + " " +amPm;
return setInterval(timeFunction,1000);
 
}

mytimeFunction();