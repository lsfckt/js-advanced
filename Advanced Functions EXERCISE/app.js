function solve() {

    const addBtn = document.getElementById('add');
    const taskField = document.querySelector('#task');
    const descriptionField = document.querySelector('#description');
    const dateField = document.querySelector('#date');
    const openSection = document.querySelectorAll('section')[1].querySelectorAll('div')[1];

    addBtn.addEventListener('click', add);

    function add(e) {

        e.preventDefault();

        task = taskField.value;
        desc = descriptionField.value;
        date = dateField.value;

        if (task !== '' && description !== '' && date !== '') {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            const descP = document.createElement('p');
            const dateP = document.createElement('p');

            h3.textContent = task.value;
            descP.textContent = description.value;
            dateP.textContent = date.value;

            article.appendChild(h3);
            article.appendChild(descP);
            article.appendChild(dateP);

            const div = document.createElement('div')
            div.className = 'flex';
            const startBtn = document.createElement('button')
            startBtn.className = 'green';
            const deleteBtn = document.createElement('button')
            deleteBtn.className = 'red';

            startBtn.textContent = 'Start';
            deleteBtn.textContent = 'Delete';

            div.appendChild(startBtn);
            div.appendChild(deleteBtn);

            article.appendChild(div);

            openSection.appendChild(article);
        } else {
            return;
        }
    }

}