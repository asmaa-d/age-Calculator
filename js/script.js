let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btn = document.getElementById("btn");
let age = document.getElementById("age");
let ageState = document.getElementById("ageState");

btn.addEventListener("click", function () {

    let birthDay = day.value;
    let birthMonth = month.value;
    let birthYear = year.value;

    let date = new Date();

    let monthNow = date.getMonth() +1 ;
    let yearNow = date.getFullYear() ;
    let dateNow = date.getDate() ;

    let yearAge = yearNow - birthYear;
    let monthAge;
    let dateAge;

    if (monthNow >= birthMonth)
        var monthAge = monthNow - birthMonth;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - birthMonth;
    }

    if (dateNow >= birthDay)
    var dateAge = dateNow - birthDay;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - birthDay;

  }

    age.innerHTML = "Your age is" + `<span class="span">${yearAge}</span>` + " year and" + `<span class="span">${monthAge}</span>` + " Months and" +
        `<span class="span">${dateAge}</span>` + " days";

})