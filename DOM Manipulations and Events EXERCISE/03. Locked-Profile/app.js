function lockedProfile() {

    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {

            let childs = btn.parentNode.children;

            if (!childs[2].checked && btn.textContent === 'Show more') {

                btn.previousElementSibling.style.display = 'inline-block';
                btn.textContent = 'Hide it';
                return;
            }

            if (!childs[2].checked && btn.textContent === 'Hide it') {

                btn.previousElementSibling.style.display = 'none';
                btn.textContent = 'Show more';
                return;
            }
        })
    });
}