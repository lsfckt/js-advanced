function requestValidator(obj) {

    const values = Object.values(obj);
    const keys = Object.keys(obj);

    if (keys[0] !== 'method' || values[0] !== 'GET' && values[0] !== 'POST' && values[0] !== 'DELETE' && values[0] !== 'CONNECT') {
        throw new Error(`Invalid request header: Invalid Method`);
    };

    const uriRegExp = new RegExp(/^[\w||\d||.]+$/gm);

    if (keys[1] !== 'uri' || !values[1].match(uriRegExp) && values[1] !== '*') {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (keys[2] !== 'version' || values[2] !== 'HTTP/0.9' && values[2] !== 'HTTP/1.0' && values[2] !== 'HTTP/1.1' && values[2] !== 'HTTP/2.0') {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    const specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (keys[3] !== 'message' && values[3] !== '') {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    for (const iterator of obj.message) {
        if (specialChars.includes(iterator)) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }

    return obj;
}
const validation = requestValidator({
    method: 'POST',
    uri: '*',
    version: 'HTTP/2.0',
    message: '"',
});
console.log(validation);