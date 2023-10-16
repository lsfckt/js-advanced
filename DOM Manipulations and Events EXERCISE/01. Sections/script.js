function create(words) {
   const content = document.getElementById('content');

   words.forEach(string => {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');

      paragraph.textContent = string;
      paragraph.style.display = 'none';
      debugger;
      div.appendChild(paragraph);
      div.addEventListener('click', (e) => {
         paragraph.style.display = 'block';
      })

      content.appendChild(div);

   });
}