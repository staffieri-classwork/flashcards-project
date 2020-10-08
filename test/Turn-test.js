const chai = require("chai");
const expect = chai.expect;

const dummyData = require("./dummy-data");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function() {
    let card, guess1, guess2, turn1, turn2;
    beforeEach(function() {
    card = new Card(dummyData.id, dummyData.question, dummyData.answers, dummyData.correctAnswer);
    guess1 = "5.0ft"
    guess2 = "left"
    turn1 = new Turn(guess1, card);
    turn2 = new Turn(guess2, card);
    });

it("should be a function", function() {
    expect(Turn).to.be.a("function");
});

it("should be an instance of Turn", function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

it("Should return a users guess", function() {
    expect(guess1).to.equal(turn1.returnGuess());
    expect(guess1).to.equal(turn1.returnGuess());
})

it("Should let the user know they have to submit a guess", function() {
    let turn3 = new Turn()
    expect(turn3.returnGuess()).to.equal("Take a guess!");
   
})

it("should return a flashcard", function () {
    expect(card).to.equal(turn1.returnCard());
    expect(card).to.equal(turn2.returnCard());
  });

it("should evaluate a users guess", function() {
    expect(turn1.evaluateGuess()).to.equal(false);
  });
});

