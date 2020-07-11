function calculator(num)
{
 var myresult=document.getElementById("result")
  myresult.value+=num
}
function clearbtn()
{
    var myresult = document.getElementById("result")
    myresult.value = "" 
}
function getresult()
{
    var myresult = document.getElementById("result")
    myresult.value = eval(myresult.value) 
}