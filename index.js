const findPeakvalues = (arr) =>{
    const arr2 = [];

    if(arr?.length === 1){
        arr2.push(0)
        return arr2
    }
    if(arr[0] > arr[1]){
        arr2.push(0)
    }

    for (let i =1; i< arr.length - 1 ; i++){
        if(arr[i]> arr[i - 1] && arr[i] > arr[i+1]){
            arr2.push(i)
        }
    }

    if(arr[arr.length - 1] > arr[arr.length - 2]){
        arr2.push(arr.length - 1);
    }

    return arr2

}

// find max peak number
const findmaxPeak = (a) => {
    return  findPeakvalues(a).reduce((acc, res) =>
        acc > res ? acc : res
      , -Infinity)
}

const a = [4,2,1,3,1,4,1]
console.log(findmaxPeak(a))


// check palindrome
const checkpalindrome = (arr) => {
const reversarr = arr.reduce((acc , res) => 
[res , ...acc]
    , []) 
  return JSON.stringify(arr) === JSON.stringify(reversarr);
}
const test2 = [1,2,3,2,1]
console.log(checkpalindrome(test2))


const encryptedString = (str , num) => {
    const strarr = str.split('')
    const start = strarr.splice(num)
    const end = strarr.splice(strarr.length - num)
    const ans = [...start , ...end].join('')
    return ans
}
    
console.log(encryptedString("yashvyas" , 4))
    