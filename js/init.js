document.addEventListener("keydown", function (e) {
  const heroLeft = heroElement.style.left;
  // console.log("용사의 왼쪽 값 =>", heroLeft);

  const heroLeftWithoutPx = parseInt(heroLeft.split("px")[0]);

  if (e.keyCode === 37) {
    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    // console.log(heroLeftWithoutPx - 1);
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    // console.log(heroLeftWithoutPx + 1);
  }
});
