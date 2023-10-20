// Task 28

// function kvadrat(arr) {
//   let array2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     array2.push(arr[i] * arr[i]);
//   }
//   return array2
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = kvadrat(array1)
// console.log(array2);


// Task 29

// function positivelementsum(arr) {
    
//     let sum= 0
//     let allnegative = true;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>0) {
//             sum+= arr[i];
//             allnegative = false;

//         }

//         if (allnegative) {
//             return 0;
//         }
        
//     }
//     return sum;
    
// }
// let arr1 = [5, 19, -6, 3, -15, 27]
// let sum1 = positivelementsum(arr1);
// console.log(sum1)

// let arr2 = [-5, -19, -6, -3, -15, -27]
// let sum2 = positivelementsum(arr2);
// console.log(sum2)


// Task 30
// let arr = [5, 2, 8, 1, 3, 9, 4];
// function findMedianAndAvg(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
    
//     let median = (min + max) / 2;
//     let avg = sum / arr.length;

//     return { median, avg};


// }

// let result = findMedianAndAvg(arr)
// console.log("Median", result.median);
// console.log("Avg", result.avg);




// Task 31

// function combineCapitals(sentence) {
//     let result= ""
//     let words = sentence.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         result+= words[i][0]

//     }

//     return result;
    
// }

// let sentence= "My name is Gurban";
// let result = combineCapitals(sentence);
// console.log(result);


// Task 32
// Cümlədə olan bütün sözləri ixtisar edən proqram 
// tərtib edin. 
// Əgər söz 4 hərfdən azdırsa o qısaldılmır. 
// İxtisar zamanı başdakı və sondakı 
// hərflər saxlanılır, ortada olan hərflərin sayı 
// yazılır. Cümlədə heç bir durğu
//  işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, 
//  javascript-	j8t



function combineCapitals(sentence) {
    
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
      

        if (words.length<=4) {
           continue;

        }

        let firstletter = words[0];
        let lastletter = words[words.length - 1];
        let middleletternumber = words.length -2;
        let newWord= firstletter + middleletternumber + lastletter;
        
        words[i] = newWord;




    }
    let newSentence = words.join(" ");
    
    return newSentence;

   
    
}

let sentence= "stekan alma  Gurban";
let ixtisar = combineCapitals(sentence);
console.log(ixtisar);
