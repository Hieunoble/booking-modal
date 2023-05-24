
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
container.addEventListener('click', defaultPropagation)