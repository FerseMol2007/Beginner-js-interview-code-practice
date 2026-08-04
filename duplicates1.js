function removeDup(arr){
    return [... new Set(arr)];
}
const array= [1,1,2,3,4,4,5,6,6,6];
console.log(removeDup(array));