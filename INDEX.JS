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
get(80, 1);
get(60, 2);
get(80, 3);
get(80, 4);
get(70, 5);
get(90, 6);
let typed = new Typed('#element', {
  strings: ['<i>PYTHON DEVELOPER</i>', '<i>FRONTEND DEVELOPER</i>', '<i>BACKEND DEVELOPER</i>', '<i>LEETCODE SOLVER</i>'],
  typeSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: '👩‍💻',
  autoInsertCss: true,
});