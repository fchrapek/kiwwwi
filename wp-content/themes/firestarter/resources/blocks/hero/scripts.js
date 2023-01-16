class Block {
  constructor(block) {
    this.el = block;
  }
}

document.querySelectorAll('[data-block="hero"]').forEach((block) => {
  new Block(block);
});
