//Array Methods:

//length:
let a =[1,2,3,4,5,6,7]   //used to find length of the array
console.log(a.length)

//toString:
let s=[1,2,3,4,5,6,7]    //it convert array to string value
console.log(s.toString())

//push():
let data =[1,2,3,4,5,6,7]
let push =data.push(8,9,10)   //it is used to add value in the end
console.log(data)

//pop:
let da=[1,2,3,4,5,6,7,8,9]
da.pop()                          //it remove last element in an array
console.log(da)

//shift:
let sdata=[1,2,3,4,5,6,7,8,9]
sdata.shift()                     //it remove 1st element in an array
console.log(sdata)


//unshift:
let undata=[1,2,3,4,5,6,7]
undata.unshift(0)              //it add element in at 1st
console.log(undata)

//at:
let adata=[1,2,3,4,5,6]
let ans = adata.at(0)           //it return index element of an array
console.log(ans)

//join:
let str=["a","b","c","d"]
let join=str.join(" ")         //it convert array to string and also it will space extra element in b/w value
console.log(join)

//delete:
let ddata=[1,2,3,4,5,6]       // ! Warning 
delete ddata[2]               //Using delete() leaves undefined holes in the array.
console.log(ddata)            //Use pop() or shift() instead.  recommended

//concat:
let condata=[1,2,3]
let arr=[7,8,9]
let arr2=[10,11,12]
console.log(condata.concat([4,5,6],arr,arr2))   //it is used to join the array multiple array

//copyWithin:
let cdata=["apple","banna","orange",'lemon']
cdata.copyWithin(1,2)                           //copyWithin() copies array elements to another position in an array, overwriting existing values
console.log(cdata)

//flat:
let matrix =[[1,2,3],[4,5,6],[7,8,9]]
let flat = matrix.flat()               //it is used to convert a multi-dimensional array into a one-dimensional array.
console.log(flat)

//slice:
let sldata = [1,2,3,4,5,6]
let slice=sldata.slice(1,4)   //it is used to  slices out a piece of an array into a new array
console.log(slice)

//splice:             it is used to remove elements without leaving "holes" in the array:
let spdata=[1,2,3,"apple","banna","orange",'lemon',6,7,8]            //The first parameter (0) defines the position where new elements should be added (spliced in).
spdata.splice(3,4,4,5)                                               //The second parameter (1) defines how many elements should be removed.
console.log(spdata)                                                  //The rest of the parameters are omitted. No new elements will be added.
                                                                    
//toSpliced:

let spl =["jan","feb","march","april","dec","sep"]   //The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
let spliced = spl.toSpliced(4,3)
console.log(spliced)


//Array search method:

//indexOf:
let string =["a","b","c","d","b"]  //the item is present more than once, it returns the position of the first occurrence.
let index=string.indexOf("b")
console.log(index)

//lasstIndexOf
let strings =["a","b","c","d","b"]    // it returns the position of the last occurrence of the specified element.
let indexs=string.lastIndexOf("b")
console.log(indexs)

//includes:
let list=["jubair","salman","kasi","vagitha"]         //This allows us to check if an element is present in an array (including NaN, unlike indexOf) 
let find=list.includes("salman") 
console.log(find)                                     //return boolean type data

//find:
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);                       //The find() method returns the value of the first array element that passes a test function.
                                                            //This example finds (returns the value of) the first element that is larger than 18:
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)


//findIndex
const numberss = [4, 9, 16, 25, 29];
let firsts = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(firsts)

//findlast:

const temps = [27, 28, 30, 40, 42, 35, 30];
let high = temps.findLast(x => x > 40);
console.log(temps)

//findLasstIndex:
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos)








