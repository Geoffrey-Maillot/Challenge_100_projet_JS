
const letterAndNumber = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Get DOM Element
const btnElement = document.getElementById("btn");


/**
 * Generate color hexa
 * @returns {string}
 */
const generateColor = () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const n = Math.floor(Math.random() * letterAndNumber.length)
    color +=
      letterAndNumber[n];

  }
  return color;
}

/** Change background color on click */
const handlerOnClick = () => {
  const containerElement = document.getElementById("container");
  containerElement.style.background = generateColor();
};


// Add Listener
btnElement.addEventListener("click", handlerOnClick);
