var HoneyMakerBee = function() {
  Grub.call(this);
  this.age = 10;
  this.job = "make honey";
  this.color = "yellow";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;