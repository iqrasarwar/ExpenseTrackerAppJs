//add file script
let timeField = document.getElementsByName("time");
let x = new Date();
let date = x.getDate()+"/"+parseInt(parseInt(x.getMonth())+1)+"/"+x.getFullYear();
let day = x.getDay();
if(day == 0) day = "Monday";
else if(day == 1) day = "Tuesday";
else if(day == 2) day = "Wednesday";
else if(day == 3) day = "Thursday";
else if(day == 4) day = "Friday";
else if(day == 5) day = "Saturday";
else if(day == 6) day = "Sunday";
let time = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
timeField[0].placeholder = date + " " + day + " " +time;

let add = document.getElementById("add");
add.onclick = addExpense;

function addExpense()
{
   let summaryArray = [];
   let descArray = [];
   let amountArray = [];
   let typeArray = [];
   let timeArr = [];

   let summary = document.getElementById("summary").value;
   let desc = document.getElementsByName("desc")[0].value;
   let amount = document.getElementsByName("amount")[0].value;
   let typeExp = document.getElementsByName("type")[0].value;
   let timeExp = document.getElementsByName("time")[0].placeholder;

   if(summary == "" || desc == "" || amount == "" || typeExp == "")
      return;
   let summaryStore = localStorage.getItem("summary");
   let descStore = localStorage.getItem("desc");
   let amountStore = localStorage.getItem("amount");
   let typeStore = localStorage.getItem("type");
   let timeStore = localStorage.getItem("time");

   let expenseStore = [summaryStore, descStore, amountStore, typeStore, timeStore];
   let expensesArray = [summaryArray,descArray,amountArray,typeArray,timeArr];
   let expenseValue = [summary,desc,amount,typeExp,timeExp];
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
      expensesArray[i].push(expenseValue[i]);
      localStorage.setItem(expenseItems[i],JSON.stringify(expensesArray[i]));
      console.log(expensesArray[i]);
   }
}

document.getElementById("home").onclick = exit;

function exit()
{
   console.log("exit called");
   location.href = "index.html";
}


