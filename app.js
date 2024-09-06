//UI

const getmodal = document.querySelector('.modal');
const getmodalimg = document.querySelector('.modal-img');
const getcaption = document.querySelector('.caption');
const getbtnclose = document.querySelector('.btn-close');

function shownow(event) {
  getmodal.style.display = 'block'; // Show modal
  const imgSrc = event.target.src; // Get source of clicked image
  const imgAlt = event.target.alt; // Get alt text of clicked image

  getmodalimg.src = imgSrc; 
  getcaption.textContent = imgAlt; 
}

getbtnclose.addEventListener('click', function () {
  getmodal.style.display = 'none'; 
});