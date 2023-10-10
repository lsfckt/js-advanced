function solve() {

  const textToModify = document.getElementById('text').value;
  const requiredConvention = document.getElementById('naming-convention').value;
  let output = '';

  function errorMsg() {
    output = 'Error!';
    return document.getElementById('result').textContent = output;
  }

  function camelCase() {

    let lowerChars = textToModify
      .toLowerCase()
      .split(' ');

    let modifiedText = lowerChars[0];

    for (let i = 1; i < lowerChars.length; i++) {
      let firstChar = lowerChars[i]
        .substring(0, 1)
        .toUpperCase();

      let otherChars = lowerChars[i]
        .substring(1);

      modifiedText += firstChar.concat(otherChars);

    }

    output = modifiedText;
    document.getElementById('result').textContent = output;
  }

  function pascalCase() {

    let lowerChars = textToModify
      .toLowerCase()
      .split(' ');

    let modifiedText = '';

    for (let i = 0; i < lowerChars.length; i++) {
      let firstChar = lowerChars[i]
        .substring(0, 1)
        .toUpperCase();

      let otherChars = lowerChars[i]
        .substring(1);

      modifiedText += firstChar.concat(otherChars);

    }
    output = modifiedText;
    document.getElementById('result').textContent = output;
  }

  if (requiredConvention === 'Camel Case') {
    return camelCase();
  } else if (requiredConvention === 'Pascal Case') {
    return pascalCase();
  } else {
    return errorMsg();
  }

}