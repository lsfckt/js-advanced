function generateReport() {

    let output = document.querySelector('#output');
    let checkBoxInputs = document.querySelectorAll('th input');
    let tableRows = document.querySelectorAll('tbody tr');

    let result = [];

    for (let i = 0; i < tableRows.length; i++) {
        let report = {};

        for (let j = 0; j < checkBoxInputs.length; j++) {

            if (checkBoxInputs[j].checked) {
                report[checkBoxInputs[j].name] = tableRows[i].children[j].textContent;
            }
        }
        result.push(report);
    }

    output.textContent = JSON.stringify(result);

}