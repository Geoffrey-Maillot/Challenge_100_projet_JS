(function App(): void {
  const letterAndNumber: Array<string | number> = [
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
  const btnElement = document.getElementById("btn") as HTMLButtonElement;

  /**
   * Generate color hexa
   * @returns {string}
   */
  const generateColor = (): string => {
    let color = "#";

    for (let i = 0; i < 6; i++) {
      const n = Math.floor(Math.random() * letterAndNumber.length);
      color += letterAndNumber[n];
    }
    return color;
  };

  /** Change background color on click */
  const handlerOnClick = (): void => {
    const containerElement = document.getElementById(
      "container"
    ) as HTMLDivElement;
    containerElement.style.background = generateColor();
  };

  // Add Listener
  btnElement.addEventListener("click", handlerOnClick);
})();
