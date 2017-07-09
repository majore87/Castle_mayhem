function Player(name) {
	this.name = name;
}

Player.prototype.logMessage = function() {
	computerText('Welcome ' + this.name + '.');
	computerText('You are in a dark place... Remember a man can be destroyed, but not defeated.');
}