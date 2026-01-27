// const buf = Buffer.from("Hello");
// console.log(buf);
// console.log(buf.toString());


// khali 10 byte buffer nilam
const myBuffer = Buffer.alloc(10);

// amr name likhlam
myBuffer.write("Siam");

// buffer ti print kora
console.log(myBuffer);

//buffer theke data read kora
console.log(myBuffer.toString());