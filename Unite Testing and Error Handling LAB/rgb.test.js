const expect = require('chai').expect;
const assert = require('chai').assert;
const { rgbToHexColor } = require('./06-rgb-to-hex.js');

describe('Test to rgbToHexColor', () => {
    it('should return equal if input and ouput are valid', () => {
        expect(rgbToHexColor(0, 7, 255)).to.be.equal('#0007FF');
    });
    it('should return undefined if input is invalid', () => {
        expect(rgbToHexColor('z', 7, 255)).to.be.equal(undefined);
    });
    it('should return undefined if input is invalid', () => {
        expect(rgbToHexColor(0, -3, 233)).to.be.equal(undefined);
    });
    it('should return undefined if input is invalid', () => {
        expect(rgbToHexColor(0, 7, 270)).to.be.equal(undefined);
    });
    it('should return undefined if input is invalid', () => {
        expect(rgbToHexColor(0, 7)).to.be.equal(undefined);
    });
});