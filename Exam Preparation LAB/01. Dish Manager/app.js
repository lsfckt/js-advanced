window.addEventListener("load", solve);

function solve() {

  // initialize 
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let genderInput = document.getElementById('genderSelect');
  let dishDescriptionInput = document.getElementById('task');
  let inProgress = document.getElementById('in-progress');
  let progressCount = document.getElementById('progress-count');
  const submitBtn = document.getElementById('form-btn').addEventListener('click', submitClick);
  const finishedUl = document.getElementById('finished');
  const clearBtn = document.getElementById('clear-btn');


  // submit click
  function submitClick(e) {
    e.preventDefault();

    // get values from input fields
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;
    let dishDescription = dishDescriptionInput.value;

    // validation

    if (!firstName || !lastName || !age || !gender || !dishDescription) {
      return;
    }

    progressCount.textContent = Number(progressCount.textContent) + 1;

    // create elements
    const li = document.createElement('li');
    li.className = 'each-line';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = `${firstName} ${lastName}`;

    const maleAndAgeParagraph = document.createElement('p');
    maleAndAgeParagraph.textContent = `${gender}, ${age}`;
    const dishParagraph = document.createElement('p');
    dishParagraph.textContent = `Dish description: ${dishDescription}`;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerText = 'Edit';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerText = 'Mark as complete';

    // append elements
    article.appendChild(h4);
    article.appendChild(maleAndAgeParagraph);
    article.appendChild(dishParagraph);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    inProgress.appendChild(li);

    // clear inputFields
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    dishDescriptionInput.value = '';

    // edit information

    editBtn.addEventListener('click', infoEdit);

    function infoEdit(e) {

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      dishDescriptionInput.value = dishDescription;

      inProgress.removeChild(li);

      progressCount.textContent = Number(progressCount.textContent) - 1;
    }

    // complete posts

    completeBtn.addEventListener('click', postComplete);

    function postComplete(e) {

      inProgress.removeChild(li);
      finishedUl.appendChild(li);

      progressCount.textContent = Number(progressCount.textContent) - 1;

      li.removeChild(editBtn);
      li.removeChild(completeBtn);
    }

    // clear posts

    clearBtn.addEventListener('click', clear);

    function clear() {

      finishedUl.removeChild(li);

    }
  }

}
