function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const textAreaInput = document.getElementById('inputs').children[1];
      const input = Array.from(JSON.parse(textAreaInput.value));

      const bestRestaurantResult = document.getElementById('bestRestaurant').children[2];
      const workersResult = document.getElementById('workers').children[2];

      let biggestAverageSalary = 0;
      let biggestSalary = 0;
      let bestRestaurantName = '';
      let workers = null;

      input.forEach((res) => {
         let [restaurantName, workersString] = res.split(' - ');
         let workers = workersString.split(', ');
         let workersObj = {};

         workers.forEach((line) => {
            let [person, salary] = line.split(' ');
            workersObj[person] = Number(salary);
         });
         let totalSalaries = Object.values(workersObj).reduce((a, b) => a + b, 0);
         let averageSalary = totalSalaries / Object.keys(workersObj).length;

         if (averageSalary > biggestAverageSalary) {
            biggestAverageSalary = averageSalary;
            biggestSalary = Math.max(...Object.values(workersObj));
            bestRestaurantName = restaurantName;
            workers = workersObj;
         }
      });

      bestRestaurantResult.textContent = `Name: ${bestRestaurantName} Average Salary: ${biggestAverageSalary.toFixed(2)} Best Salary: ${biggestSalary.toFixed(2)}`;
      let bestRestaurantWorkers = ''
      console.log(workers)
      for (const worker in workers) {
         bestRestaurantWorkers += `Name: ${worker} With Salary: ${workers[worker]} `
      }
      console.log(bestRestaurantWorkers)
      workersResult.textContent = bestRestaurantWorkers;
   }
}

// function solve(array) {
//    let biggestAverageSalary = 0;
//    let biggestSalary = 0;
//    let bestRestaurantName = '';
//    let workers = [];

//    array.forEach(res => {
//       let [restaurantName, workersString] = res.split(' - ');
//       let workers = workersString.split(', ');
//       let workersObj = {};

//       workers.forEach((line) => {
//          let [person, salary] = line.split(' ');
//          workersObj[person] = Number(salary);
//       });
//       let totalSalaries = Object.values(workersObj).reduce((a, b) => a + b, 0);
//       let averageSalary = totalSalaries / Object.keys(workersObj).length;

//       if (averageSalary > biggestAverageSalary) {
//          biggestAverageSalary = averageSalary;
//          biggestSalary = Math.max(...Object.values(workersObj));
//          bestRestaurantName = restaurantName;
//       }
//    });
//    console.log(`Name: ${bestRestaurantName} Average Salary: ${biggestAverageSalary.toFixed(2)} Best Salary: ${biggestSalary.toFixed(2)} `);
// }

// solve(["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 100, Jane 200"])