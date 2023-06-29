
const modal = document.querySelector('.modal')
const bookingBtn = document.querySelector('.bookingBtn')
const closeModal = document.querySelector('.modal-close')
const container = document.querySelector('.modal-container')


function openModal() {
  modal.classList.add('isOpen')
}
function closeBooking() {
  modal.classList.remove('isOpen')
}
function defaultPropagation(e) {
  e.stopPropagation()
}

bookingBtn.addEventListener('click', openModal)
closeModal.addEventListener('click', closeBooking)
modal.addEventListener('click', closeBooking)
modal.addEventListener('blur', closeBooking)
container.addEventListener('click', defaultPropagation)

//Rendering Calendar
const currentDate = document.querySelector('.current-date')
const daysTag = document.querySelector('.days')
const prevNextIcon = document.querySelectorAll('.arrow_calendar i')


let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

const renderCalendar = () => {

  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //Getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //Getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //Getting last day of prev month
    lastDateofPrevMonth = new Date(currYear, currMonth, 0).getDate() //Getting last date of prev month
  liTag = ""

  for (let i = firstDayofMonth; i > 0; i--) { //prev month last days
    liTag += `<li class="inactive">${lastDateofPrevMonth - i + 1}</li>`
  }

  for (let i = 1; i <= lastDateofMonth; i++) { //days of curr month
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
      && currYear === new Date().getFullYear() ? 'active' : ''
    liTag += `<li class=${isToday}>${i}</li>`
  }

  for (let i = lastDayofMonth; i < 6; i++) { //next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`
  daysTag.innerHTML = liTag
}
renderCalendar()

let daysTags = document.querySelectorAll('.days li')

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    icon.id === "prev" ? currMonth -= 1 : currMonth += 1
    console.log(currMonth);

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth)
      currYear = date.getFullYear()
      currMonth = date.getMonth()
    } else {
      date = new Date()
    }
    renderCalendar()
  })
})

// Calendar handler

const calendarSelector = document.querySelector('input.date')

const handleSelectDays = (e) => {
  const selectedDay = e.target.textContent
  if (selectedDay) {
    calendarSelector.value = `${selectedDay} ${currentDate.innerText}`
  }
}


daysTags.forEach((li, e) => {
  // console.log(li.innerHTML);
  li.addEventListener('click', (e, li) => handleSelectDays(e, li))
})












