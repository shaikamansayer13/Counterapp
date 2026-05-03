const countnum = document.getElementById("count");
const incbtn = document.getElementById("inc");
const decbtn = document.getElementById("dec");
const resetbtn = document.getElementById("reset");

// let count = 0;

// incbtn.addEventListener("click", () => {
//   count++;
//   countnum.textContent = count;
// });

// decbtn.addEventListener("click", () => {
//   count--;
//   countnum.textContent = count;
// });

// resetbtn.addEventListener("click", () => {
//   count = 0;
//   countnum.textContent = count;
// });

//this is not done in rela world i knoiw this is simple but we use colusures in real worl d to make this code more secure and private but this is just a simple example to understand the concept of closures.

//now lets use clouusure and develop the code

function counter() {
  let count = localStorage.getItem("count")
    ? parseInt(localStorage.getItem("count"))
    : 0;

  //first load
  function ui() {
    countnum.textContent = count;
    localStorage.setItem("count", count);
  }

  ui();

  incbtn.addEventListener("click", () => {
    count++;
    ui();
  });

  decbtn.addEventListener("click", () => {
    count--;
    ui();
  });

  resetbtn.addEventListener("click", () => {
    count = 0;
    ui();
  });
}

counter();
