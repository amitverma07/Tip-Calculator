let element = document.getElementById("myBtn");
element.addEventListener("click", function (e) {
  e.preventDefault();
  let x = document.getElementById("bills").value;
  let p = document.getElementById("persons").value;
  var s = document.getElementById("select");
  var strUser = s.options[s.selectedIndex];
  if(strUser.value == 30){
    var print = ((x/100)*strUser.value)/p;
    print = "$ "+print+ " each";
    document.getElementById("demo").innerHTML = print;
  }
  else if(strUser.value == 20){
    var print = ((x/100)*strUser.value)/p;
    print = "$ "+print+ " each";
    document.getElementById("demo").innerHTML = print;
  }
  else if(strUser.value == 15){
    var print = ((x/100)*strUser.value)/p;
    print = "$ "+print+ " each";
    document.getElementById("demo").innerHTML = print;
  }
  else if(strUser.value == 10){
    var print = ((x/100)*strUser.value)/p;
    print = "$ "+print+ " each";
    document.getElementById("demo").innerHTML = print;
  }
  else if(strUser.value == 5){
    var print = ((x/100)*strUser.value)/p;
    print = "$ "+print+ " each";
    document.getElementById("demo").innerHTML = print;
  }
  else{
    alert("Select option");
  }
});