const expect = require('chai').expect;
const assert = require('chai').assert
const { isSymmetric } = require('./isSymmetric.js');

describe('Tests for isSymmetric(arr)', () => {
    describe('Regular cases', () => {
        //odd count - numbers only;
        it('should return true on isSymmetric array', () => {
            expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        });

        it('should return false on non-symmetric array', () => {
            expect(isSymmetric([2, 4, 2, 3])).to.be.false;
        });
        it('should return false on number arg', () => {
            expect(isSymmetric(3)).to.be.false;
        });
        it('should return false on string arg', () => {
            expect(isSymmetric('text')).to.be.false;
        });
        it('should return false on undefined arg', () => {
            expect(isSymmetric(undefined)).to.be.false;
        });

    });
});