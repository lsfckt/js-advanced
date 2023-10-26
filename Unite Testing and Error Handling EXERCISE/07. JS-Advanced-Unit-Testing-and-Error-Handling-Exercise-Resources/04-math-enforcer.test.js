const expect = require('chai').expect;
const assert = require('chai').assert;
const { mathEnforcer } = require('./04-math-enforcer.js');

describe('mathEnforcer', function () {
    describe('addFive', function () {

        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.addFive('text'));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.addFive([2]));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.addFive({ obekt: 7 }));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.addFive());
        });
        it('should return 10.5', function () {
            expect(mathEnforcer.addFive(10.5)).to.be.closeTo(15.5, 0.01,);
        });
        it('should return 10', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('should return -8', function () {
            expect(mathEnforcer.addFive(-15)).to.be.equal(-10);
        });
    });

    describe('subtractTen', function () {

        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.subtractTen('text'));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.subtractTen([3]));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.subtractTen());
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.subtractTen({ obekt: 7 }));
        });
        it('should return 10.5', function () {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01,);
        });
        it('should return 0', function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('should return -25', function () {
            expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25);
        });
    });

    describe('sum', function () {

        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.sum('text', 7));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.sum(7, 'text'));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.sum([7], [3]));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.sum({ obekt: 7 }, { obekt: 8 }));
        });
        it('should return undefined', function () {
            assert.equal(undefined, mathEnforcer.sum());
        });
        it('should return 10.5', function () {
            expect(mathEnforcer.sum(1.3, 2.5)).to.be.closeTo(3.8, 0.01,);
        });
        it('should return 21', function () {
            expect(mathEnforcer.sum(7, 14)).to.be.equal(21);
        });
        it('should return -22', function () {
            expect(mathEnforcer.sum(-15, -7)).to.be.equal(-22);
        });
    });
});