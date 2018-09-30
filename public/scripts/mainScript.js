function openMenu() {
  let nav = document.querySelectorAll('nav')[0],
    container = nav.parentElement;

  if(!document.querySelectorAll('.nav-background').length) {

    navBackground = document.createElement('DIV');
    navBackground.classList.add('nav-background');
    navBackground.addEventListener('click', closeWindow);
    container.insertBefore(navBackground, nav);

  } else {
    navBackground = document.querySelectorAll('.nav-background')[0];
  }

  nav.classList.add('right-menu');
  navBackground.style.display = 'block';
  navBackground.classList.remove('nav-background-closed');
}

function closeWindow() {
  let nav = document.querySelectorAll('nav')[0],
    navBackground = document.querySelectorAll('.nav-background')[0];

  nav.classList.remove('right-menu');
  navBackground.classList.add('nav-background-closed');

  setTimeout(() => {
    navBackground.style.display = 'none';
    navBackground.classList.remove('nav-background-closed');
  }, 300);
}

function trigger(element, png) {
  // Get the modal
  var modal = document.getElementById('speaker-modal');

  // Get the modal-content
  var modalImage = document.getElementById('modal-image');

  // Get the button that opens the modal
  var btn = document.getElementById('modal-button');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    modalImage.src = '../images/' + png;
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
