"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
   
    if (percent > 0) {  
        percent = +percent;
      } else if (percent != 0 || percent == 0) {
          return (`“Параметр "Процентная ставка" содержит неправильное значение ${percent}”.`);
      }
 
      if (contribution >= 0) {  
        contribution = +contribution;
      } else if (contribution !=  0) {
          return (`“Параметр "Начальный взнос" содержит неправильное значение ${contribution}”.`); 
      }
   
      if (amount >= 0) {  
        amount = +amount;
      } else if (amount !=  0) {
          return (`“Параметр "Общая стоимость" содержит неправильное значение ${amount}”.`); 
      }
    let currentDate  = new Date();  
    date = new Date(window.date.value); 
    let payPeriod = 0 - ((currentDate.getFullYear() -  date.getFullYear()) * 12) - (currentDate.getMonth() - date.getMonth());
    date = payPeriod; 
    let returnAmount = amount - contribution  
    percent = percent / 1200; 
    let monthlyPay = amount*(percent+percent/(((1+percent)**date)-1)); 
    let  totalAmount = monthlyPay * date;  
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
 }
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting = '';
  let onlyRusString = /[^а-яА-ЯёЁ\-\s]/;
  if (onlyRusString.test(name) || name === "" || name === String(undefined) || name === String(null)) {
    greeting = `Привет, мир! Меня зовут Аноним.`;
    console.log(greeting);
    return greeting;
  } else  {
      greeting = `Привет, мир! Меня зовут ${name}.`;
      console.log(greeting);
      return greeting; 
} 
}