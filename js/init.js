let player = new Hero();

function init() {
  document.addEventListener(
    "keydown",
    function (e) {
      checkKey(e, true);
    },
    false
  );

  document.addEventListener(
    "keyup",
    function (e) {
      checkKey(e, false);
    },
    false
  );

  setInterval(function () {
    let ghost = new Ghost();
    ghost.create();
  }, 2000);
}

function checkKey(e, isMoving) {
  if (isMoving) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        player.move("right");
        e.preventDefault();
        break;
      case 37: //left
        player.move("left");
        e.preventDefault();
        break;
    }
  } else {
    player.stop();
  }
}

init();
