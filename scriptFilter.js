document.getElementById("filterR").onclick = exit;
function exit()
{
   console.log("exit called");
   location.href = "index.html";
}

function search()
{
   let type =  document.getElementsByName("type")[0].value;
   let srange = document.getElementsByName("range1")[0].value;
   let erange = document.getElementsByName("range2")[0].value;
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
      let app = true;
      if(type != "")
      {
         if(typeArray[j]!=type)
            app = false;
      }
      if(srange != "")
      {
         if(amountArray[j]<parseInt(srange))
            app = false;
      }
      if(erange != "")
      {
         if(amountArray[j]>parseInt(erange))
            app = false;
      }
      if(app == true)
      {
         let toAppend = "<td>"+num+"</td><td>"+summaryArray[j]+"</td><td>"+descArray[j]+"</td><td> Rs."+amountArray[j]+"</td><td>"+typeArray[j]+"</td><td>"+timeArr[j]+'</td></tr>';
         newRow += toAppend;
      }
   }

   document.getElementById("tbody").innerHTML = newRow;
   if(document.getElementById("tbody").innerHTML == "")
   {
      document.getElementById("tbody").innerHTML = "No Row Found";
   }

}
document.getElementById("addNew").onclick = search;
function GoToMenu()
{
   location.href="index0.html";
}
