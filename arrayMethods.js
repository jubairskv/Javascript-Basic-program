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

let spl =["jan","feb","march","april","dec","sep"]
let spliced = spl.toSpliced(4,3)
console.log(spliced)









