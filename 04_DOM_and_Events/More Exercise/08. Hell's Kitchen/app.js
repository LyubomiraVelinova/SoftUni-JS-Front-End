// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick () {
//       const inputs = document.getElementById('inputs');
//       const textArea = inputs.children[1];
//       const outputs = document.getElementById('outputs');
//       const bestRestaurantResult = document.getElementById('bestRestaurant').children[2];
//       const workersResult = document.getElementById('workers').children[2];
//       let restaurants = textArea.value;


//       bestRestaurantResult.textContent = `Name: ${name} Average Salary: ${avgSalary} Best Salary: ${bestSalary}`
//       workersResult.textContent = `Name: ${workerName} With Salary: ${workerSalary} Name: ${worker2name} With Salary: ${worker2 salary} Name: ${worker3 name} With Salary: ${worker3 salary}…`
//    }
// }

function solve(array) {
   array.forEach(res => {
      let restaurantName = res.split(' - ')[0];
      let workers = res.split(' - ')[1].split(', ')
      let restaurantObj = {};
      let workersObj = {};
      workers.forEach((line) => {
         let [person, salary]  = line.split(' ');
         salary = Number (salary);
         workersObj[person] = Number(salary)
      });
      
      restaurantObj[restaurantName] = workersObj
      console.log(restaurantObj)
   });
}

solve(["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"])