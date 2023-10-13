function toggle() {

    let tButton = document.querySelector('.button');
    let text = document.getElementById('extra');

    tButton.textContent = tButton.textContent === 'More' ? 'Less' : 'More';

    text.style.display = text.style.display === 'none' ? 'block' : 'none';
}