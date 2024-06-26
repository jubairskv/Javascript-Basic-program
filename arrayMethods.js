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
let first = numbers.find(myFunction);                 //The find() method returns the value of the first array element that passes a test function.                                                          //This example finds (returns the value of) the first element that is larger than 18:
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)


//findIndex
const numberss = [4, 9, 16, 25, 29];               //it is used to returns the index of the first array element that passes a test function.
let firsts = numbers.findIndex(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(firsts)


//findlast:
const temps = [27, 28, 30, 40, 42, 35, 30];   //it method that will start from the end of an array and return the value of the first element that satisfies a condition.
let high = temps.findLast(x => x > 40);                         
console.log(temps)



//findLastIndex:
const temp = [27, 28, 30, 40, 42, 35, 30];    //it is used to finds the index of the last element that satisfies a condition.
let pos = temp.findLastIndex(x => x > 40);
console.log(pos)


//Array Sort method
//Sort:
let sr =["b","d","e","f","a","c"]     //it sort the array elment alphabetic
sr.sort()
console.log(sr)

//Reverse:
let re = ["b","c","d","e","a"]        //it reverse the array element
let reve = re .reverse()
console.log(reve)

//toSorted:
const month = ["jan","feb","march","april","may"]   //it is a method as a safe way to sort an array without altering the original array.
const tos =month.toSorted()
console.log(tos)

//toReversed:
const months = ["jan","feb","march","april","may"]  //it is a method as a safe way to reverse an array without altering the original array.
const tor = months.toReversed();
console.log(tor)


//number sort:
let points = [40, 100, 1, 5, 25, 10];
points.sort((a,b)=>a-b)  //ascending order sort a-b     //descending order sort b-a
console.log(points)

//number reverse
let po =[1,2,3,4,5,6]
po.sort((a,b)=>b-a)     //sort by decending order
console.log(po)

//math.min:
let min =[1,2,3,4,5,6]
let minAns=Math.min(...min)      //it return min number
console.log(minAns)

//math.max:
let max=[1,2,3,4,5,6]
let maxAns=Math.max(...max)
console.log(maxAns)

//Array Iteration methdos:
//forEach:
let num =[1,2,3,4,5,6]
num.forEach((num)=>{  //it return iterator array without creating new array
console.log(num)
})

//map:
let nums=[1,2,3,4,5,6]
let newData = nums.map((a)=>{    //it return iterator array with creating new array
  console.log(a)
})

//flatMap:
let flatmap = nums.flatMap((a)=>console.log(a))

//filter:
let filter =nums.filter((a)=>a%2===0)
console.log(filter)

//reduce:
let total = nums.reduce((total,value)=>total+value)
console.log(total)

//every:
let eve =[1,2,3,4,5,6]                     //checks if all array values are larger than 6:
let every =eve.every((value)=>value>6)
console.log(every)


//some
let som =[1,2,3,4,5,6]
let some =som.some((value)=>value>5)       //checks if some array values are larger than 6:
console.log(some)


//from()
let strin="jubair"
let strAns =Array.from(strin)   //it return array of aoject
console.log(strAns)

//keys:
let obj = ["a","b","c","d","e"]
let objAns =obj.keys()              //it return key value for object
for(let key of objAns){
  console.log("key for Object",key)
}


//entries:
let entAns = obj.entries()
for(let entries of entAns){
  console.log(entries)           //it return object with key:value pair
}

//with:
let mon = ["jan","feb","mar","apr"]
let answer =mon.with(2,"jubair")                //it is used to update value in the array
console.log(answer)


//spread Operator:
let jubair=["jubair"]
let salman =["salman"]             //The ... operator expands an iterable (like an array) into more elements:
let kasim = ["kassim"]
let vagitha =["vagitha"]
const family =[...jubair,...salman, ...kasim,...vagitha]
console.log(family)