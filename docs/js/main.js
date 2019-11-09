const typedArray = [
  'Lunar Web Development',
  'Custom Websites',
  'Local Business',
  'We Care.'
];

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set inital state of menu
let showMenu = false;

let toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
};

const heading = document.getElementById('typed-heading');
menuBtn.addEventListener('click', toggleMenu);

let i = 0;

const typeWriter = () => {
  if (i < typedArray.length) {
    setTimeout(() => {
      console.log(i);
      x = 0;
      heading.innerHTML = '';
      typer(typedArray[i]);
      i++;
      typeWriter();
    }, 3000);
  } else {
    i = 0;
    typeWriter();
  }
};

let x = 0;

const typer = text => {
  if (x < text.length) {
    heading.innerHTML += text.charAt(x);
    x++;
    setTimeout(typer.bind(this, text), 100);
  }
};
typeWriter();
