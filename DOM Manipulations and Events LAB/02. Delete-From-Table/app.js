function deleteByEmail() {

    const email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (const el of secondColumn) {

        if (el.textContent === email) {
            debugger;
            let row = el.parentNode;
            row.parentNode.removeChild(row);

            document.getElementById('result').textContent = 'Deleted.';
        } else {
            document.getElementById('result').textContent = 'Not found.'
        }
    }

}