var get = (x, elementId) => {
  console.log(x);
  if (x < 101) {
    let outer = document.querySelector(`.outer:has(#inner-${elementId})`);
    let inner = document.getElementById(`inner-${elementId}`);
    let y = 0;
    let progress = setInterval(() => {
      y++;
      outer.style.background = `conic-gradient(#3498db ${y}%,#d0d3d4 0%)`;
      inner.innerText = y + "%";
      if (y == x) {
        clearInterval(progress);
      }
    }, 30);
  }
}
let eventdel = document.getElementById("section").addEventListener("mouseover", () => {
  get(80, 1);
  setTimeout(() => get(60, 2), 500);
  setTimeout(() => get(80, 3), 1000);
  setTimeout(() => get(80, 4), 1500);
  setTimeout(() => get(70, 5), 2000);
  setTimeout(() => get(90, 6), 2500);
}, { once: true });
let typed = new Typed('#element', {
  strings: ['<i>PYTHON DEVELOPER</i>', '<i>FRONTEND DEVELOPER</i>', '<i>BACKEND DEVELOPER</i>', '<i>LEETCODE SOLVER</i>'],
  typeSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: '👩‍💻',
  autoInsertCss: true,
});