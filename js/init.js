document.addEventListener("keydown", function (e) {
  const heroLeft = getComputedStyle(heroElement).left;
  console.log("용사의 왼쪽 값 =>", heroLeft);

  if (e.keyCode === 37) {
    heroElement.style.left = "0px";
  } else if (e.keyCode === 39) {
    heroElement.style.left = "765px";
  }
});
