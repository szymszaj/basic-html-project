const pass = "dsx!dbg34";

if (pass.length > 10 && pass.includes("!")) {
  console.log("Masz dobre hasło");
} else if (pass.length > 10) {
  console.log("Masz za ok hasło");
} else {
  console.log("Masz za krótkie hasło");
}

const x = 50;
const y = 30;
if (x > y) {
  console.log(`${x} > ${y}`);
}

const color = "blue";
const newColor = "green";
if (color === newColor) {
  console.log("kolory sie zgadazaj ");
} else {
  console.log("kolory sie nie zgadazaj ");
}

const x1 = 100;
const y2 = 100;

if (x1 > y2) {
  console.log("x1>y2");
} else if (x1 === y2) {
  console.log("x1=y2");
} else {
  console.log("x1<y2");
}
