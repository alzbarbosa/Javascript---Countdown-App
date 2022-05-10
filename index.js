const btnStart = document.getElementById("btn-start")
const inputDate = document.getElementById("input-date")
const dayCount = document.getElementById("day")
const hourCount = document.getElementById("hour")
const minuteCount = document.getElementById("minute")
const secondCount = document.getElementById("second")
const days = document.getElementById("days")
const months = document.getElementById("months")
const years = document.getElementById("years")
const dateUser = document.getElementById("date-user")

const descriptionDate = document.getElementById("descripton-date")

let executeCountdown
let endDated

btnStart.addEventListener("click", function() {    

clearInterval(executeCountdown)

let dayEnd = days.value
let monthEnd = months.value
let yearEnd = years.value
let displayDate = descriptionDate.value

console.log(displayDate)

endDated = `${monthEnd}/${dayEnd}/${yearEnd}`

let endDate = new Date(`${endDated} 0:00:00`).getTime()

if (endDate < new Date().getTime()) {
  return document.getElementById("demo").innerHTML = "Please Add a future date"
} else {
  document.getElementById("demo").innerHTML = "The countdown started!"
}

executeCountdown = setInterval(() => {

let now = new Date().getTime()

let countdown = endDate - now

  let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countdown % (1000 * 60)) / 1000);

dayCount.textContent = days  
hourCount.textContent = hours < 10? `0${hours}` : hours
minuteCount.textContent = minutes < 10? `0${minutes}` : minutes
secondCount.textContent = seconds < 10? `0${seconds}` : seconds
dateUser.textContent = displayDate

if (countdown < 0) {
    clearInterval(executeCountdown);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

}, 1000)


})

const submit = document.getElementById("submit")
const output = document.getElementById("output")

submit.addEventListener("click", () => {
    let startDate = new Date(document.getElementById("date-start").value) 
    let endDate = new Date(document.getElementById("date-end").value)
    let difference = endDate - startDate

    if(startDate.getTime() && endDate.getTime()) {
        let totalDays = Math.abs(difference / (24*60*60*1000))
        output.innerHTML = `Result: ${totalDays} day${totalDays > 1? "s" : ""}`
    } else {
        output.innerHTML = `Please select valid dates`
    }

})

