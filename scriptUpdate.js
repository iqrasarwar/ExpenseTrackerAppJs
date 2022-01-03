// update script
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


var indexx = location.search.substring(1);
if(indexx >= 0)
{
   loaded();
}
else
{
   history.pushState(null, "", location.href.split("?")[0]);
   location.href = "index.html";
}
function loaded()
{
   summaryArray = expensesArray[0];
   descArray = expensesArray[1];
   amountArray = expensesArray[2];
   typeArray = expensesArray[3];
   timeArr = expensesArray[4];
   document.getElementById("Usummary").value = summaryArray[indexx];
   document.getElementById("Udescribtion").value = descArray[indexx];
   document.getElementById("Uamount").value = amountArray[indexx];
   document.getElementById("Utype").value = typeArray[indexx];
   document.getElementById("Utime").value = timeArr[indexx];
}

document.getElementById("uhome").onclick = exit;
function exit()
{
   console.log("exit called");
   location.href = "index.html";
}

let update = document.getElementById("update");
update.onclick = updateExpense;

function updateExpense()
{

   let summary = document.getElementById("Usummary").value ;
   let desc = document.getElementById("Udescribtion").value;
   let amount = document.getElementById("Uamount").value;
   let typeExp = document.getElementById("Utype").value;
   let timeExp = document.getElementById("Utime").value;

   if(summary == "" || desc == "" || amount == "" || typeExp == "")
      return;

   let expenseValue = [summary,desc,amount,typeExp,timeExp];

   for(let i =0; i< expenseStore.length; i++)
   {
      expensesArray[i][indexx] = expenseValue[i];
   }

   for(let i =0; i< expenseStore.length; i++)
   {
      localStorage.setItem(expenseItems[i],JSON.stringify(expensesArray[i]));
      console.log(expensesArray[i]);
   }
}
