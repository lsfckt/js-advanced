function extractText() {

    const itemsNodes = document.querySelectorAll('ul#items li');
    const textArea = document.querySelector('#result');
    
    for (const node of itemsNodes) {
        textArea.value += node.textContent + '\n';
    }
}