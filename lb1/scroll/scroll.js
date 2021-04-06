let scrolling = 0;
let windowHeight = window.innerHeight / 5 - 50;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const onPageLoaded = async () => {
  header = createElement('div', 'header', '');
  title = createElement('h1', 'fadeIn', 'Willkommen!');
  subtitle = createElement('h2', 'fadeIn', 'Bitte nach unten scrollen');
  header.appendChild(title);
  document.body.appendChild(header);
  await sleep(5000);
  await header.appendChild(subtitle);
}

const createElement = (tag, style, content) => {
  el = document.createElement(tag);
  el.innerHTML = content;
  el.classList.add(style);
  return el;
}

const slideIn = (direction) => {
  par = createElement('p', 'slideP', 'Hier könnte Ihre Werbung stehen');
  div = createElement('div', 'slideIn' + direction, '');
  div.appendChild(par);
  div.style.top = scrolling + window.innerHeight + 'px';
  document.body.appendChild(div);
}

const slideInLeft = () => slideIn('Left');
const slideInRight = () => slideIn('Right'); 

const onScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > (windowHeight + scrolling)) {
    (scrolling / windowHeight) % 2 === 1 ? slideInLeft() : slideInRight();
    scrolling += windowHeight;
  }
}

window.onload = onPageLoaded;
document.addEventListener('scroll', onScroll);