let button = document.querySelector('button');
button.addEventListener('click', meditate);

function meditate() {
  let name = prompt("What is your name?");
  if (!name) {
      alert("Please enter your name.");
      return;
  }

  let email = prompt("What is your email address?");
  if (!email || !email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
  }

  let emoji = prompt("What is your favourite emoji?");
  if (!emoji) {
      alert("Please enter your favourite emoji.");
      return;
  }

  alert(`Thank you ${name}! Enjoy your peaceful meditation ${emoji}`);
}


