function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const arr = JSON.parse(document.querySelector('#inputs textarea').value);
      const firstOutput = document.querySelector('#outputs>#bestRestaurant>p');
      const secOutput = document.querySelector('#outputs>#workers>p');

      const restObj = {};

      arr.forEach(line => {
         const [currRestourant, currData] = line.split(' - ');
         const employeeData = currData.split(', ');

         if (!restObj[currRestourant]) {
            restObj[currRestourant] = {};
         }

         employeeData.forEach(line => {
            let [employee, salary] = line.split(' ');
            salary = Number(salary);

            restObj[currRestourant][employee] = salary;

         });

      });

      let avgSalary = 0;
      let bestSalary = 0;
      let bestRestourant = {};
      let entries = [];

      for (const restourant in restObj) {
         let salaries = Object.values(restObj[restourant]);

         const totalSalary = salaries.reduce((a, b) => a + b);
         avgSalary = totalSalary / salaries.length;

         bestSalary = salaries.sort((a, b) => b - a).shift();

         const keys = Object.keys(bestRestourant);

         if (keys.length === 0) {
            bestRestourant[restourant] = {
               avgSalary,
               bestSalary,
            };
         } else {
            for (const restourantB in bestRestourant) {
               let values = Object.values(bestRestourant[restourantB]);

               if (avgSalary > values[0]) {
                  delete bestRestourant[restourantB];

                  bestRestourant[restourant] = {
                     avgSalary,
                     bestSalary,
                  };
               }
            }
         }

         entries = Object.entries(restObj[restourant]);
         entries = entries.sort((a, b) => b[1] - a[1]);
      }

      for (const key in bestRestourant) {
         const [avg, best] = Object.values(bestRestourant[key]);
         firstOutput.innerHTML = `Name: ${key} Average Salary: ${avg.toFixed(2)} Best Salary: ${best.toFixed(2)}`;
      }
      debugger;
      let output = '';
      entries.forEach(el => {
         output += `Name: ${el[0]} With Salary: ${el[1]} `;
      });
      secOutput.textContent = output;
   }
}