function extract(content) {

    let para = document.getElementById(content).textContent;
    let regExp = /\(([^)]+)\)/g;
    let result = [];

    let match = regExp.exec(para);
    
    while(match) {
        result.push(match[1]);

        match = regExp.exec(para);
    }
    return result.join('; ');
}
