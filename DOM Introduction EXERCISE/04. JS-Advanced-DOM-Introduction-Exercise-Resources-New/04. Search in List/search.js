function search() {
   // Implement the search function to bold and underline the items from the list which include the text from the search box.
   const towns = Array.from(document.querySelectorAll('#towns li'));
   const searchingText = document.getElementById('searchText').value;

   let matches = 0;

   towns.forEach(currTown => {

       if (currTown.textContent.includes(searchingText)) {
           currTown.style.fontWeight = 'bold';
           currTown.style.textDecoration = 'underline'

           return matches++;
       }
       currTown.style.fontWeight = '';
       currTown.style.textDecoration = 'none'

   })
   document.getElementById('result').textContent = `${matches} matches found`;
}
