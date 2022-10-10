const rateState = document.getElementById('rating-state');
const thankState = document.getElementById('thank-you-state');
let id = null;
const resultElement = document.getElementById('result-text');
const radioBtns = document.querySelectorAll('.radio-btn');

// when user clicks Submit button
function formValidation() {
  // initial value of rating
  let selectedRating = null;
  // loop through radio btns to check if any are checked
  for (const radioBtn of radioBtns) {
    // if a radio is checked
    if (radioBtn.checked) {
      // assign user's selection to selectedRating
      selectedRating = radioBtn.value;
      // alter p.result-text in DOM
      resultElement.innerText = 'You have selected ' + selectedRating + ' out of 5';
      // call sliding animation
      formAnimation();
      // stop loop
      break;
    }
  }
  // if no radio btn is selected
  if (selectedRating === null) {
    // alert user to select
    window.alert('Please select a rating 1-5');
  }
  
}

function formAnimation() {
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1.5);
  function frame() {
    if (pos === -100) {
      clearInterval(id);
    } else {
      pos--;
      rateState.style.transform = "translateX(" + pos + "%)";
      thankState.style.transform = "translateX(" + pos + "%)";
    }
  }
}
