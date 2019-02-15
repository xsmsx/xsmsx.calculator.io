
let flag = 0;

function num(digit){
  let result = document.getElementById("res").innerText;
  if (flag === 1) {
    document.getElementById("res").innerText = "";
    document.getElementById("calc").innerText = result;
    flag = 0;
  }
  if (result != NaN){
    document.getElementById("res").innerText += digit;
  }
}
function op(op) {
    let res = document.getElementById("res").innerText;
    if (flag === 1) {
      //document.getElementById("res").innerText = "";
      document.getElementById("calc").innerText = res;
      flag = 0;
    }
    document.getElementById("res").innerText += op;
}
function answer() {
    let exp = document.getElementById("res").innerText;
    try{
      document.getElementById("res").innerText = eval(exp);
      document.getElementById("calc").innerText = exp;
      flag = 1;
    } catch(err){
      document.getElementById("res").innerText = "Error";
      flag = 1;
    }
}
function cl(){
    console.log("here");
    let ans = document.getElementById("res").innerText;
    if (flag === 1){
      document.getElementById("res").innerText = "";
      document.getElementById("calc").innerText = ans;
      flag = 0;
    }else{
      let length = ans.length;
      let a = ans.substr(0, length-1);
      document.getElementById("res").innerText = a;
    }
}
