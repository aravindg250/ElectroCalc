

const form = document.getElementById("carSearchForm");
var user;
var budget;
var userEmail;
let table = document.getElementById("dataTable");
table.style.display="none";
form.addEventListener("submit", event =>
{
  event.preventDefault();
  user = `${form.firstName.value} ${form.lastName.value}`;
  userEmail = form.email.value;
  budget = form.budget.value;
  form.firstName.value="";
  form.lastName.value="";
  form.email.value="";
  form.budget.value="";
  
  console.log(budget);
  console.log(user);
  form.style.display = "none";
  
  assignCar();
     
    
});




function assignCar()
{

  table.style.display = "initial";
  
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var nameOfCar = document.getElementById("nameOfCar");
  var seats = document.getElementById("seats");
  var doors = document.getElementById("doors");
  var topSpeed = document.getElementById("topSpeed");
  var range = document.getElementById("range");
  var batteryCapacity = document.getElementById("batteryCapacity");
  var acceleration = document.getElementById("acceleration");
  var cash = document.getElementById("cash");
  var selling = document.getElementById("selling");
  var downPayment = document.getElementById("downPayment");
  var monthlyPayments = document.getElementById("monthlyPayments");
  var months = document.getElementById("months");
  var APR = document.getElementById("APR");

  if(findIndex() == 0) // Model 3
  {
    
    name.innerHTML += user;
    email.innerHTML += userEmail;
    nameOfCar.innerHTML += tesla.models.Tesla_Model_3.carName;
    seats.innerHTML += tesla.models.Tesla_Model_3.features.seats;
    doors.innerHTML += tesla.models.Tesla_Model_3.features.doors;
    topSpeed.innerHTML += tesla.models.Tesla_Model_3.features.topSpeed + " mph";
    range.innerHTML += tesla.models.Tesla_Model_3.features.range + " miles";
    batteryCapacity.innerHTML += tesla.models.Tesla_Model_3.features.batterySize + " kilowatt hours";
    acceleration.innerHTML += tesla.models.Tesla_Model_3.features.acceleration + " secs";
    cash.innerHTML += "$ " + tesla.models.Tesla_Model_3.cost.cash;
    selling.innerHTML += "$ " + tesla.models.Tesla_Model_3.cost.sellingPrice;
    downPayment.innerHTML += "$ " + tesla.models.Tesla_Model_3.cost.loan.downPayment;
    monthlyPayments.innerHTML += "$ " + tesla.models.Tesla_Model_3.cost.loan.monthlyPayments;
    months.innerHTML += tesla.models.Tesla_Model_3.cost.loan.months;
    APR.innerHTML += tesla.models.Tesla_Model_3.cost.loan.APR + "%";
  }
  else if(findIndex() == 1)// Model Y
  {
    
    name.innerHTML += user;
    email.innerHTML += userEmail;
    nameOfCar.innerHTML += tesla.models.Tesla_Model_Y.carName;
    seats.innerHTML += tesla.models.Tesla_Model_Y.features.seats;
    doors.innerHTML += tesla.models.Tesla_Model_Y.features.doors;
    topSpeed.innerHTML += tesla.models.Tesla_Model_Y.features.topSpeed + " mph";
    range.innerHTML += tesla.models.Tesla_Model_Y.features.range + " miles";
    batteryCapacity.innerHTML += tesla.models.Tesla_Model_Y.features.batterySize + " kilowatt hours";
    acceleration.innerHTML += tesla.models.Tesla_Model_Y.features.acceleration + " secs";
    cash.innerHTML += "$ " + tesla.models.Tesla_Model_Y.cost.cash;
    selling.innerHTML += "$ " + tesla.models.Tesla_Model_Y.cost.sellingPrice;
    downPayment.innerHTML += "$ " + tesla.models.Tesla_Model_Y.cost.loan.downPayment;
    monthlyPayments.innerHTML += "$ " + tesla.models.Tesla_Model_Y.cost.loan.monthlyPayments;
    months.innerHTML += tesla.models.Tesla_Model_Y.cost.loan.months;
    APR.innerHTML += tesla.models.Tesla_Model_Y.cost.loan.APR + "%";

  }
  else if(findIndex() == 2)// Model S
  {
    
    name.innerHTML += user;
    email.innerHTML += userEmail;
    nameOfCar.innerHTML += tesla.models.Tesla_Model_S.carName;
    seats.innerHTML += tesla.models.Tesla_Model_S.features.seats;
    doors.innerHTML += tesla.models.Tesla_Model_S.features.doors;
    topSpeed.innerHTML += tesla.models.Tesla_Model_S.features.topSpeed + " mph";
    range.innerHTML += tesla.models.Tesla_Model_S.features.range + " miles";
    batteryCapacity.innerHTML += tesla.models.Tesla_Model_S.features.batterySize + " kilowatt hours";
    acceleration.innerHTML += tesla.models.Tesla_Model_S.features.acceleration + " secs";
    cash.innerHTML += "$ " + tesla.models.Tesla_Model_S.cost.cash;
    selling.innerHTML += "$ " + tesla.models.Tesla_Model_S.cost.sellingPrice;
    downPayment.innerHTML += "$ " + tesla.models.Tesla_Model_S.cost.loan.downPayment;
    monthlyPayments.innerHTML += "$ " + tesla.models.Tesla_Model_S.cost.loan.monthlyPayments;
    months.innerHTML += tesla.models.Tesla_Model_S.cost.loan.months;
    APR.innerHTML += tesla.models.Tesla_Model_S.cost.loan.APR + "%";

  }
  else // Model X
  {
    
    name.innerHTML += user;
    email.innerHTML += userEmail;
    nameOfCar.innerHTML += tesla.models.Tesla_Model_X.carName;
    seats.innerHTML += tesla.models.Tesla_Model_X.features.seats;
    doors.innerHTML += tesla.models.Tesla_Model_X.features.doors;
    topSpeed.innerHTML += tesla.models.Tesla_Model_X.features.topSpeed + " mph";
    range.innerHTML += tesla.models.Tesla_Model_X.features.range + " miles";
    batteryCapacity.innerHTML += tesla.models.Tesla_Model_X.features.batterySize + " kilowatt hours";
    acceleration.innerHTML += tesla.models.Tesla_Model_X.features.acceleration + " secs";
    cash.innerHTML += "$ " + tesla.models.Tesla_Model_X.cost.cash;
    selling.innerHTML += "$ " + tesla.models.Tesla_Model_X.cost.sellingPrice;
    downPayment.innerHTML += "$ " + tesla.models.Tesla_Model_X.cost.loan.downPayment;
    monthlyPayments.innerHTML += "$ " + tesla.models.Tesla_Model_X.cost.loan.monthlyPayments;
    months.innerHTML += tesla.models.Tesla_Model_X.cost.loan.months;
    APR.innerHTML += tesla.models.Tesla_Model_X.cost.loan.APR + "%";

  }
}

function findIndex()
{

  const model3Diff = budget - tesla.models.Tesla_Model_3.cost.sellingPrice;
  const modelYDiff = Math.round(100*(budget - tesla.models.Tesla_Model_Y.cost.sellingPrice))/100;
  const modelSDiff = budget - tesla.models.Tesla_Model_S.cost.sellingPrice;
  const modelXDiff = budget - tesla.models.Tesla_Model_X.cost.sellingPrice;
  const carArray = [model3Diff, modelYDiff, modelSDiff, modelXDiff];
  
  var min = 0;
  for(let i = 0; i < carArray.length; i++)
  {
    console.log(carArray[i]);
    if((carArray[i] >= 0 && carArray[min] >= 0 )&& (carArray[i] <= carArray[min]) )
    {
      min = i;
    }
  }
  console.log(min);
  return min;
}
 