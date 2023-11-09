(function solve() {

    String.prototype.ensureStart = function (startStr) {

        let newStr = '';
        return !this.startsWith(startStr) ? newStr = startStr.concat(this) : this.toString();
    }

    String.prototype.ensureEnd = function (endStr) {

        let newStr = '';
        return !this.endsWith(endStr) ? newStr = this.concat(endStr) : this.toString();
    }

    String.prototype.isEmpty = function () {

        return this.toString().length === 0 ? true : false;
    }

    String.prototype.truncate = function (n) {

        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {

            let lastSpaceIndex = this.length;
            lastSpaceIndex = this.lastIndexOf(' ', lastSpaceIndex - 1);

            while (lastSpaceIndex !== -1 && lastSpaceIndex + 3 < n) {
                return `${this.slice(0, lastSpaceIndex)}...`
            }
        }

        if (n > 3) {
            let string = `${this.slice(0, n - 3)}...`;
            return string;
        }
        return '.'.repeat(n)
    }

    String.format = function (string, ...params) {

        let splited = string.split(' ');
        splited.forEach(el => {

            if (el.includes('{') && params.length !== 0) {

                let firstEl = params.shift();
                splited.splice(splited.indexOf(el), 1, firstEl);
            }
        });

        return splited.join(' ');
    }

})();
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
