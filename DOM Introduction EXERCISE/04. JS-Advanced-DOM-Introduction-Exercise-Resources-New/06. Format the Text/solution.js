function solve() {
  // Create a functionality that gets a text from textarea

  const textStr = document.getElementById('input').value;
  let output = document.getElementById('output');
  debugger;
  let textArr = textStr.split('.').filter((x) => x.length > 0);

  for (let i = 0; i < textArr.length; i += 3) {
    const outputArr = [];

    for (let j = 0; j < 3; j++) {
      if (textArr[i + j]) {
        outputArr.push(textArr[i + j]);
      }
    }
    let paragraph = outputArr.join(`. `) + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}