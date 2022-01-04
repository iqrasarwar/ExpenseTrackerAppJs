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

summaryArray = expensesArray[0];
descArray = expensesArray[1];
amountArray = expensesArray[2];
typeArray = expensesArray[3];
timeArr = expensesArray[4];

let EducationAmount = 0;
let EntertainmentAmount = 0;
let FoodAmount = 0;
let GroceryAmount = 0;
let OthersAmount = 0;

console.log(EducationAmount);
window.onload = renderGraph;
let monthS = document.getElementById("month");
let yearS = document.getElementById("year");
monthS.addEventListener('change',renderGraph);
yearS.addEventListener('change',renderGraph);

function renderGraph()
{
	let selectedMonth = "";
	let selectedYear = "";
	let EducationAmount = 0;
	let EntertainmentAmount = 0;
	let FoodAmount = 0;
	let GroceryAmount = 0;
	let OthersAmount = 0;
	var selectedOption = this[this.selectedIndex];
	if(this!=window)
	{
		if(this.id == "month")
		{
			selectedMonth = selectedOption.text;
		}
		else if(this.id == "year")
		{
			selectedYear = selectedOption.text;
		}
	}

	for(let i =0; i< summaryArray.length; i++)
	{
		addThis = true;
		timeStamp = timeArr[i];
		datee = timeStamp.split('/');
		mon = parseInt(datee[1]);
		mon = getMonthName(mon);
		year = parseInt(datee[2]);

		if(monthS.selectedIndex != "" && yearS.selectedIndex != "")
		{

			let monthOption = monthS.options[monthS.selectedIndex].value;
			let yearOption = yearS.options[yearS.selectedIndex].value;
			console.log(monthOption);
			console.log(yearOption);
			if(monthOption != mon || yearOption != year)
				addThis = false;
		}
		else if(selectedYear != "")
		{
			if(year!=selectedYear)
				addThis = false;
		}
		else if(selectedMonth != "")
		{
			if(mon!=selectedMonth)
				addThis = false;
		}

		if(addThis == true)
		{
			if(typeArray[i] == "Education")
				EducationAmount+=parseInt(amountArray[i]);
			else if(typeArray[i] == "Entertainment")
				EntertainmentAmount+=parseInt(amountArray[i]);
			else if(typeArray[i] == "Food")
				FoodAmount+=parseInt(amountArray[i]);
			else if(typeArray[i] == "Grocery")
				GroceryAmount+=parseInt(amountArray[i]);
			else
				OthersAmount+=parseInt(amountArray[i]);
		}
	}
	const Education = { label: "Education", y: parseInt(EducationAmount)};
	const Grocery = { label: "Grocery ", y: parseInt(GroceryAmount) };
	const Food = { label: "Food", y: parseInt(FoodAmount)};
	const Entertainment= { label: "Entertainment", y: parseInt(EntertainmentAmount) };
	const Others = { label: "Others", y: parseInt(OthersAmount) };
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		  axisY: {
			includeZero: true,
			title: "Expenses Amount"
		 },
		 axisX: {
			title: "Expense Types"
		 },
		data: [{
			type: "column",
			indexLabel: "{y}",
			indexLabelFontColor: "#ff0000",
			indexLabelFontSize: 10,
			indexLabelPlacement: "outside",
			dataPoints: [Education,Food,Grocery,Entertainment,Others]
		}]
	});
	chart.render();
}

document.getElementById("home").onclick = exit;
function exit()
{
   console.log("exit called");
   location.href = "index.html";
}

function getMonthName(num)
{
	if(num == 1 ) return "January";
	else if(num == 2) return "Feburary";
	else if(num == 3) return "March";
	else if(num == 4) return "April";
	else if(num == 5) return "May";
	else if(num == 6) return "June";
	else if(num == 7) return "July";
	else if(num == 8) return "Augest";
	else if(num == 9) return "September";
	else if(num == 10) return "October";
	else if(num == 11) return "November";
	else if(num == 12) return "December";
}

function GoToMenu()
{
   location.href="index0.html";
}
