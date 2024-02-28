class Hero {
  constructor() {
    this.heroElement = document.getElementById("hero");
    this.left = Number(getComputedStyle(this.heroElement).left.split("px")[0]);
    this.speed = 10;
  }

  move(direction) {
    if (direction === "right") {
      this.heroElement.className = "right";
      this.setLeft(this.speed);
    } else if (direction === "left") {
      this.heroElement.className = "left";
      this.setLeft(-this.speed);
    }
  }

  setLeft(speed) {
    const newleft = this.left + speed;

    if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return;

    this.heroElement.style.left = newleft + "px";
    this.left = newleft;
  }

  stop() {
    this.heroElement.className = "stop";
  }
}
