function checkAge(age) {

     n = age;

    if (n >= 13 && n <= 19) {
        console.log('Teenager');
    } else {
        console.log('Not a Teenager');
    }
}


// checkAge(19);

// let n = 5;

// for(let i = 0; i<=n; i++){  
//     let str = " ";
//     for(let j = i; j<n; j++){
//         str += " ";
//     }
//     for(let k=0; k<=(2*i-1); k++){
//         str += "*";
//     }
//     console.log(str);
// }

// for (let i = n - 1; i >= 1; i--) {
//     let str = "";

//     for (let j = n; j > i; j--) {
//         str += " ";
//     }

//     for (let k = 1; k <= (2 * i - 1); k++) {
//         str += "*";
//     }

//     console.log(str);
// }
// console.log((null || "nikki" || "0") && "hello");


// function calculate(operation, nums) {
//   let result = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (operation === "add") result += nums[i];
//     else if (operation === "subtract") result -= nums[i];
//     else if (operation === "multiply") result *= nums[i];
//     else if (operation === "divide") result /= nums[i];
//   }

//   return result;
// }
