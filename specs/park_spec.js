const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  

  beforeEach(function () {
    park = new Park('Dino Park', 20)
    dinosaur1 = Dinosaur('Raptor', 'carnivore', 50)
    dinosaur2 = Dinosaur('Diplodocus', 'herbivore', 75)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Park');
  });
  
  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });


  it('should have a collection of dinosaurs', function () {
    const actual = park.parkStock.length;
    assert.strictEqual(actual, 0);
    

  });
    
  it('should be able to add a dinosaur to its collection', function (){

    park.addDinosaur(dinosaur2)
    const actual = park.parkStock.length;
    const expected = 1
    assert.strictEqual(actual, expected)
  });


  it('should be able to remove a dinosaur from its collection',function(){

  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);

  park.removeDinosuar(dinosaur2);
  const actual = park.parkStock.length;
  const expected = 1;
  assert.strictEqual(actual, expected);

  });





  it('should be able to find the dinosaur that attracts the most visitors');

 




  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
   
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);

    const actual = park.checkVisitors()
    const expected = 125
    assert.strictEqual(actual, expected)
  });
    



  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
