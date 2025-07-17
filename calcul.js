/*function calculate(a,b){
    let nb1 = document.getElementsByClassName("nbr1");
    let nb2 = document.getElementsByClassName("nbr2");
    const op = document.getElementsByClassName("operatorbtn");
    switch (op){
        case '+':
            y=Number(nb1.value)+Number(nb2.value);
            document.getElementById("res").innerHTML=y;
            document.getElementById("result").value=y;
    }
    
    
    }*/

    //calculator program
const display = document.getElementById("display");


function appendTodisplay(input){
display.value +=input;

}


function clearAll(){
  display.value = "";
}
function calculate(){
try{
  display.value = eval(display.value);
}
catch(error)
{
  display.value = "Error";

}
}


/*

try{
   display.value = eval(display.value);
}
       catch(error){
        display.value = "Error";
    }
 
} */





     
     /*
    nbr1 = document.getElementById("nbr1").value;
    nbr2 = document.getElementById("nbr2").value;

    let operator;
document.write(nbr1+nbr2);}
        for (let i = 0; i < operatorButtons.length; i++) {
            if (operatorButtons[i].checked) {
                operator = operatorButtons[i].value;
                break;
            }
        }
  // 
  switch(operatorbtn) {
    case '+' :
      y=Number(nbr1.value)+Number(nbr2.value);
      break;
    case '-':
      y=Number(nbr1.value)-Number(nbr2.value);
   break;
    case '*':
        y=Number(nbr1.value)*Number(nbr2.value);     
      break;
      case '/':
        y=Number(nbr1.value)/Number(nbr2.value);
        break;
    default:
     
  }  
 */