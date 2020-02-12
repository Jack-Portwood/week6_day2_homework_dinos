const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.parkStock = []

}

Park.prototype.numDinosaur = function() {
    return this. dinosaur.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.parkStock.push(dinosaur);
}

Park.prototype.removeDinosuar = function (dinosaur){
this.parkStock.splice(this.parkStock.indexOf(dinosaur), 1)
}

Park.prototype.checkVisitors = function(){

    let total = 0

    for (let dinosaur of this.parkStock) {
        total += dinosaur.guestsAttractedPerDay
    }
    return total
}


module.exports = Park;