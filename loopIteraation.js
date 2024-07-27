// // How loop is working
for (let i = 0; i <= 4; i++) {
  console.log(i);
}

for (let i = 4; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i < 4; i++) {
  console.log(i);
}

for (let i = 4; i > 0; i--) {
  console.log(i);
}

let arr = [1, 2, 3, 4, 5];
//index based loop:
for (let x in arr) {
  console.log("index" ,x);
}
//value bassed loop:
for (let x of arr) {
  console.log("value" ,x);
}
