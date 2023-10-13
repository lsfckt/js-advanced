function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const studentsData = Array.from(document.querySelectorAll('.container tbody tr'));
      const inputText = document.getElementById('searchField').value;

      studentsData.forEach(row => {
         row.className = '';
      });

      const filteredRows = studentsData.filter(row => {
         let values = Array.from(row.children);

         if (values.some(td => td.textContent.includes(inputText))) {
            row.className = 'select';
         }
      });

      inputText.value = '';
   }
}