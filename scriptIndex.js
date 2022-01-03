let summaryArray = [];
let descArray = [];
let amountArray = [];
let typeArray = [];
let timeArr = [];

let summaryStore = localStorage.getItem("summary");
let descStore = localStorage.getItem("desc");
let amountStore = localStorage.getItem("amount");
let typeStore = localStorage.getItem("type");
let timeStore = localStorage.getItem("time");

let expenseStore = [summaryStore, descStore, amountStore, typeStore, timeStore];
let expensesArray = [summaryArray,descArray,amountArray,typeArray,timeArr];
let expenseItems = ["summary","desc","amount","type","time"];

for(let i =0; i< expenseStore.length; i++)
{
   if(expenseStore[i] == null)
   {
      expensesArray[i] = [];
   }
   else
   {
      expensesArray[i] = JSON.parse(expenseStore[i]);
   }
}
let newRow = "";
summaryArray = expensesArray[0];
descArray = expensesArray[1];
amountArray = expensesArray[2];
typeArray = expensesArray[3];
timeArr = expensesArray[4];
for(let j =0; j< summaryArray.length; j++)
{
   let num = j+1;
   let toAppend = "<td>"+num+"</td><td>"+summaryArray[j]+"</td><td>"+descArray[j]+"</td><td> Rs."+amountArray[j]+"</td><td>"+typeArray[j]+"</td><td>"+timeArr[j]+'</td><td><button id="update" onclick="updateRow('+j+')">update</button><button id="delete" onclick="deleteRow('+j+')">delete</button></td></tr>';
   newRow += toAppend;
}

document.getElementById("tbody").innerHTML = newRow;
if(document.getElementById("tbody").innerHTML == "")
{
   document.getElementById("tbody").innerHTML = "No Row Found";
}
document.getElementById("addNew").onclick = function()
{
   location.href = "add.html";
}

function deleteRow(indexToDel)
{
   summaryArray.splice(indexToDel,1);
   descArray.splice(indexToDel,1);
   amountArray.splice(indexToDel,1);
   typeArray.splice(indexToDel,1);
   timeArr.splice(indexToDel,1);
   expensesArray = [summaryArray,descArray,amountArray,typeArray,timeArr];
   for(let i =0; i< expenseStore.length; i++)
   {
      localStorage.setItem(expenseItems[i],JSON.stringify(expensesArray[i]));
   }
   location.href = "index.html";
}
function updateRow(indexToUpdate)
{
   location.href = "update.html?" + indexToUpdate;
}



