window.addEventListener("load", solve);

function solve() {

  // GET ELEMENTS
  const firstNameInputEl = document.getElementById('first-name');
  const lastNameInputEl = document.getElementById('last-name');
  const ageInputEl = document.getElementById('age');
  const genreInputEl = document.getElementById('genre');
  const storyTitleInputEl = document.getElementById('story-title');
  const storyTextInputEl = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  const previewListEl = document.getElementById('preview-list');

  // CREATE ELEMENTS

  const li = document.createElement('li');
  li.className = 'story-info';
  const article = document.createElement('article');
  const h4 = document.createElement('h4');
  const pAge = document.createElement('p');
  const pTitle = document.createElement('p');
  const pGenre = document.createElement('p');
  const pStory = document.createElement('p');

  const saveBtn = document.createElement('button');
  saveBtn.className = 'save-btn';
  saveBtn.innerText = 'Save Story';
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.innerText = 'Edit Story';
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerText = 'Delete Story';

  publishBtn.addEventListener('click', function (e) {

    // GET VALUES
    const firstNameValue = firstNameInputEl.value;
    const lastNameValue = lastNameInputEl.value;
    const ageValue = ageInputEl.value;
    const genreValue = genreInputEl.value;
    const storyTitleValue = storyTitleInputEl.value;
    const storyTextValue = storyTextInputEl.value;

    // VALIDATION
    if (!firstNameValue || !lastNameValue || !ageValue || !genreValue || !storyTitleValue || !storyTextValue) {
      return;
    }

    // APPEND ELEMENTS  
    previewListEl.appendChild(li);
    li.appendChild(article);
    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // ADD TEXT CONTENT
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    pAge.textContent = `Age: ${ageValue}`;
    pTitle.textContent = `Title: ${storyTitleValue}`;
    pGenre.textContent = `Genre: ${genreValue}`;
    pStory.textContent = storyTextValue;

    // CLEAR INPUT FIELDS
    firstNameInputEl.value = '';
    lastNameInputEl.value = '';
    ageInputEl.value = '';
    genreInputEl.value = '';
    storyTitleInputEl.value = '';
    storyTextInputEl.value = '';

    publishBtn.disabled = true;

    // EDIT 
    editBtn.addEventListener('click', function (e) {

      let [name, names] = h4.textContent.split('Name: ');
      const [firstName, lastName] = names.split(' ');
      firstNameInputEl.value = firstName;
      lastNameInputEl.value = lastName;
      const [ageStr, age] = pAge.textContent.split('Age: ');
      ageInputEl.value = age;
      const [genreStr, genre] = pGenre.textContent.split('Genre: ');
      genreInputEl.value = genre;
      const [titleStr, title] = pTitle.textContent.split('Title: ');
      storyTitleInputEl.value = title;
      storyTextInputEl.value = pStory.textContent;

      publishBtn.disabled = false;

      li.remove();
    });

    // SAVE
    saveBtn.addEventListener('click', function (e) {

      const inputFieldsDiv = document.querySelector('.form-wrapper');
      const previewDiv = document.querySelector('#side-wrapper');
      const main = document.getElementById('main');

      inputFieldsDiv.remove();
      previewDiv.remove();

      const h1 = document.createElement('h1');
      main.appendChild(h1);

      h1.textContent = "Your scary story is saved!";

    });

    // DELETE
    deleteBtn.addEventListener('click', function (e) {

      li.remove();
      publishBtn.disabled = false;

    });
  });
}
