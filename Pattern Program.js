
//pattern program

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ")
  }
  console.log()
}


for (let i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write(j.toString())
  }
  console.log()
}


for (let i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write(i.toString())
  }
  console.log()
}

function pattern(n) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i + 1; j++) {
      process.stdout.write("*")
    }
    console.log()
  }
}
pattern(6)

function pattern2() {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i + 1; j++) {
      process.stdout.write(j.toString())
    }
    console.log()
  }
}
pattern2(6)



function patern3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ")
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*")
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ")
    }
    console.log()
  }
}

patern3(6)


function pattern4(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ")
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      process.stdout.write("*")
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ")
    }
    console.log()
  }
}
pattern4(6)


function pattern5(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ")
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*")
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ")
    }
    console.log()
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ")
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      process.stdout.write("*")
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ")
    }
    console.log()
  }
}
pattern5(6)

function pattern7(n) {
  for (let i = 1; i <=2 * n + 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for(let j = 1 ;j<=stars;j++){
      process.stdout.write("*")
    }
    console.log()
  }
}
pattern7(6)


function pattern8(n){
  let start =1;
  for(let i=0;i<n;i++){
    if(i%2==0) start =1;
    else start =0
    for(let j=0;j<=i;j++){
      process.stdout.write(start)
      start=1-start
    }
    console.log()
  }
}
pattern8(6)


function pattern9(n){
  let space =2*(n-1);
  for(let i=0;i<=n;i++){
    for(let j=0;j<=i;j++){
      process.stdout.write(j.toString())
    }
    for(let j=1;j<=space;j++){
      process.stdout.write(" ")
    }
    for(let j=i;j>=1;j--){
      process.stdout.write(j.toString())
    }
    console.log()
    space-=2
  }
}
pattern9(6)

function pattern10(n){
  let num =1
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      process.stdout.write(num.toString()+ " ")
      num=num+1
    }
    console.log()
  }

}
pattern10(5)


function pattern12(n){
  for(let i =0;i<n;i++){
    let alpha=""
    for(let j =0;j<=(n-i-1);j++){
      alpha+=String.fromCharCode(65+j)+" "
    }
    console.log(alpha)
  }
}
pattern12(5)

function pattern13(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <=i ; j++) {
      row += String.fromCharCode(65+j)+""
    }
    console.log(row);
  }
}

pattern13(6);


function pattern14(n){
  for(let i=0;i<n;i++){
    let alpha=""
    for(let j=0;j<=n-i-1;j++){
       alpha+=String.fromCharCode(65+j)+" "
    }
    console.log(alpha)
  }
}
pattern14(5)


function pattern15(n){
  for(let i=0;i<n;i++){
    let row=""
    let ch =String.fromCharCode(65+i);
    for(let j=0;j<=i;j++){
      row+=ch+" "   //row=row+ch

    }
    console.log(row)
  }
}
pattern15(5)




function pattern16(N) {
  for (let i = 0; i < N; i++) {
    let row = '';
    for (let j = 0; j < N - i - 1; j++) {
      row += ' ';
    }
    let ch = 'A';
    let breakpoint = Math.floor((2 * i + 1) / 2);
    for (let j = 1; j <= 2 * i + 1; j++) {
      row += ch;
      if (j <= breakpoint) {
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
      } else {
        ch = String.fromCharCode(ch.charCodeAt(0) - 1);
      }
    }
    for (let j = 0; j < N - i - 1; j++) {
      row += ' ';
    }
    console.log(row);
  }
}
pattern16(5);

function pattern18(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    let startChar = String.fromCharCode('A'.charCodeAt(0) + n - 1 - i);
    for (let ch = startChar; ch <= 'E'; ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
      row += ch + ' ';
    }
    console.log(row);
  }
}

pattern18(5);

function pattern19(N) {
  let spaces = 0;
  for (let i = 0; i < N; i++) {
    let row = '';
    for (let j = 1; j <= N - i; j++) {
      row += '*';
    }
    for (let j = 0; j < spaces; j++) {
      row += ' ';
    }

    for (let j = 1; j <= N - i; j++) {
      row += '*';
    }
    spaces += 2;
    console.log(row);
  }

  spaces = 2*N-2
  for (let i = 1; i <= N; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    for (let j = 0; j < spaces; j++) {
      row += ' ';
    }
    for (let j = 1; j <= i; j++) {
      row += '*';
    }

    spaces -= 2;
    console.log(row);
  }
}
pattern19(5);


function pattern20(n){
  let spaces=2*n-2
  for(let i=1;i<=2*n-1;i++){
    let row='';

    let stars=i
    if(i>n) stars=2*n-i;
    for(let j=1;j<=stars;j++){
       row+="*"
    }
    for(let j=1;j<=spaces;j++){
      row+=" "
    }
    for(let j=1;j<=stars;j++){
      row+="*"
    }
    console.log(row)
   if(i<n) spaces -= 2;
   else spaces += 2 ;
  }
}
pattern20(5)

function pattern21(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n;j++){
      if(i===0 || j===0 || i===n-1 || j===n-1){
        row+="*"
      }else{
        row+=" "
      }
    }
    console.log(row)
  }
}
pattern21(5)


function pattern21(n){
  for(let i=0;i<2*n-1;i++){
    let row=""
    for(let j=0;j<2*n-1;j++){
      let top=i;
      let left=j;
      let right =(2*n-2)-j
      let down=(2*n-2)-i
      row+=(n-Math.min(Math.min(top,down),Math.min(left,right)))+" "
    }
    console.log(row)
  }
}
pattern21(5)
