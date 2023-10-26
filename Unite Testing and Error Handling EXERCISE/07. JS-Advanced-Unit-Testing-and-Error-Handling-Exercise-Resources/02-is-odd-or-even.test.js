const expect = require('chai').expect;
const assert = require('chai').assert;
const { isOddOrEven } = require('./02-isOddOrEven.js');

describe('isOddOrEven', () => {
    describe('isValid Type', () => {

        it('should return undefined if input type is incorrect', () => {
            assert.equal(undefined, isOddOrEven(7));
        });

        it('should return undefined if input type is incorrect', () => {
            assert.equal(undefined, isOddOrEven([7, 23, '6']));
        });
    })

    describe('isOdd', () => {
        it('should return odd', () => {
            assert.equal('odd', isOddOrEven('opa'));
            assert.equal('odd', isOddOrEven('hello'));
            assert.equal('odd', isOddOrEven('bye'));
        });
    });

    describe('isEven', () => {
        it('should return even', () => {
            assert.equal('even', isOddOrEven('op'));
            assert.equal('even', isOddOrEven('hi'));
            assert.equal('even', isOddOrEven('what'));
        });
    });

});