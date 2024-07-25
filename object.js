// //javascript object

// const object ={
//     name:"jubair",
//     father:"kasim",
//     mother:"vagitha banu"
// }
// console.table(object)     //table shows table formate data

// let obj =[
//     {
//         Name:"jubair",
//         lastName:"kasim",
//         age:25
//     },
//     {
//         Name:"Salman",
//         lastName:"Kasim",
//         age:27
//     },
//     {
//         Name:"Vagitha banu",
//         lastName:"Kasim",
//         age:55
//     }
// ]

// obj[0].lastName="Kasim"

// obj.push({Name:"kasim",lastName:"suliman",age:"expired"})
// obj[3].age="58"

// console.table(obj[0].Name="Jubair Kasim")
// console.table(obj[0].Name="Jubair")
// console.table(obj)
// let age =obj.filter(e=>e.age<=30)
// console.table(age)
// let name=obj.filter(e=>e.Name==="Jubair" && "Salman" )
// console.table(name)

// let names=obj.filter(e=>e.lastName=="Kasim")
// console.table(names)

// let it =obj.map(e=>{
//     console.log(e.Name +":" , e.age)
// })

// let red =obj.reduce((sum,person)=>sum+person.age)
// console.log(red)

// obj[1].Name="Jubair"
// console.table(obj)
// let fil = obj.filter(e=>e.Name=="Jubair")
// console.table(fil)

// let del =obj.splice(0,2)
// console.table(obj)

// let obj2={
//     Name:"jubair",
//     Age:25,
//     DOB:"21/12/199",
//     Add:[
//         {
//             Name:"jubair",
//             Number:1
//         },
//         {
//             Name:"salman",
//             Number:2
//         }
//     ]
// }
// console.table(obj2.Add[0].Name="jubair kasim")
// console.table(obj2)

const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zip: {
      code: "12345",
      plus4: "6789",
    },
  },
  hobbies: ["reading", "traveling"],
};

// Accessing nested properties
console.table((user.address.city = "salem"));
console.table((user.address.city = ""));
console.table((user.address.city = "wonderland"));
console.table(user);
const json = JSON.stringify(user);
const jsObject = JSON.parse(json);
console.table(json);
console.table(jsObject);

let obj = [
  {
    Name: "jubair",
    lastName: "kasim",
    age: 25,
  },
  {
    Name: "Salman",
    lastName: "Kasim",
    age: 27,
  },
  {
    Name: "Vagitha banu",
    lastName: "Kasim",
    age: 55,
  },
];

console.log(obj.filter((data) => data.age >= 27));
const update = (obj[1].Name = "Jubair");
console.log(Object.values(obj));
console.log(Object.keys(obj[0]));
obj.forEach((item) => {
  console.log(Object.keys(item));
});



let obj2={
      Name:"jubair",
      Age:25,
      DOB:"21/12/199",
      Add:[
          {
              Name:"jubair",
              Number:1
          },
          {
              Name:"salman",
              Number:2
          }
      ],
      person:[
        {
          Name: "jubair",
          lastName: "kasim",
          age: 25,
        },
        {
          Name: "Salman",
          lastName: "Kasim",
          age: 27,
        },
        {
          Name: "Vagitha banu",
          lastName: "Kasim",
          age: 55,
        },
      ]  
  } 


  console.table(Object.values(obj2.per))