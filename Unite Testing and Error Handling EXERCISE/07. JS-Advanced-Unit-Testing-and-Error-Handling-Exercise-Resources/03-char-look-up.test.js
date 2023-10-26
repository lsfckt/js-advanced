const expect = require('chai').expect;
const assert = require('chai').assert;
const { lookupChar } = require('./03-char-look-up.js');

describe('charLookUp', () => {
    describe('Check string and index type', () => {
        it('should return undefined', () => {
            assert.equal(undefined, lookupChar(7, 7));
            assert.equal(undefined, lookupChar('text', 'text'));
            assert.equal(undefined, lookupChar('text', 7.7));
            assert.equal(undefined, lookupChar(['text'], 7));
            assert.equal(undefined, lookupChar({}, 7));
            assert.equal(undefined, lookupChar('text', [7]));
        });
    });

    describe('Check index length', () => {
        it('should return Incorrect index', () => {
            assert.equal('Incorrect index', lookupChar('text', 4));
            assert.equal('Incorrect index', lookupChar('text', -1));
            assert.equal('Incorrect index', lookupChar('text', 7));
        });
    });
    describe('Happy case', () => {
        it('should return correct result', () => {
            assert.equal('t', lookupChar('text', 0));
            assert.equal('t', lookupChar('text', 3));
            assert.equal('e', lookupChar('text', 1));
        });
    });
});