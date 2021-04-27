let buttons = document.getElementsByTagName('button');
let screen = document.getElementById('screen');
let screenValue = ""
console.log(buttons);

for(i of buttons){
i.addEventListener('click',function(e){
    buttonText=e.target.innerText;
    console.log(buttonText);
  if(buttonText == "x"){
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
  }
  else if(buttonText == "C"){
      screenValue = "";
      screen.value = screenValue;
  }

  else if(buttonText == "="){
      screen.value = eval(screenValue);
      screenValue = screen.value;
  }

  else{
      screenValue += buttonText;
      screen.value = screenValue;
  }
})
}