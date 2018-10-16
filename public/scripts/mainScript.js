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

function trigger(speakerObj) {
  // Get the modal
  var modal = document.getElementById('speaker-modal'),
      speakerFace = document.getElementById('speaker-face'),
      modalImage = document.getElementById('modal-image'),
      closeBtn = document.getElementById('close-btn'),
      speakerName = document.getElementById('speaker-name'),
      speakerTitle = document.getElementById('speaker-title'),
      speakerBio = document.getElementById('speaker-bio'),
      speakerTalkTitle = document.getElementById('speaker-talk-title'),
      speakerTalkSummary = document.getElementById('speaker-talk-summary');

  modal.style.display = 'block';
  speakerFace.style.backgroundImage = 'url("../images/' + speakerObj.picture + '")';
  speakerName.innerHTML = speakerObj.name;
  speakerTitle.innerHTML = speakerObj.title + " @ " + speakerObj.workplace;
  speakerBio.innerHTML = speakerObj.bio;
  speakerTalkTitle.innerHTML = speakerObj.talk_title;
  speakerTalkSummary.innerHTML = speakerObj.talk;

  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
