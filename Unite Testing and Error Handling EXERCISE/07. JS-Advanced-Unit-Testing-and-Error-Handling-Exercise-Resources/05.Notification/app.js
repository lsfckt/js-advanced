function notify(message) {

  const showDiv = document.querySelector('#notification');
  showDiv.textContent = message;
  showDiv.style.display = 'block';

  showDiv.addEventListener('click', (e) => {
    showDiv.style.display = 'none';
  });

}