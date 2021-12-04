const arr2 = [-5,1,1,5,43,-321,54,3,333,-10023];

function sumDel2 (arr){
    let sum = 0;
    arr.forEach((el)=>{
        if(el > 0 && el % 2 == 0){
            sum+=el;
        }
    })
    return sum;
}
console.log(sumDel2(arr2));
const arr4 = [-5,1,1,5,43,1,54,3,333,1];
const ndsada = (arr) =>{
    let res = [];
    for(let value of arr){
        if(!res.includes(value)){
            res.push(value);
        }
    }
    return res;
}
console.log(ndsada(arr4));

// Написать функцию  которая будет принимать два массива, и в качестве
// результата будет возвращать только  те значения которые есть и в первом и во втором массиве.
const arrr = [1,2,3,4,5,6,7,84,4,4,4,6];
const arrr2 = [5,90,50,2,5,6,7,84,4,4,4,6];
const zad = (arr,arr2)=>{
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr[i] == arr2[j] && !res.includes(arr[i])){
            res.push(arr[i]);
        }
    }
}
return res;
}
console.log(zad(arrr,arrr2));