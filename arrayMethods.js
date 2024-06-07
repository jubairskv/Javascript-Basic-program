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





