(function App() {
    var letterAndNumber = [
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
    var btnElement = document.getElementById("btn");
    /**
     * Generate color hexa
     * @returns {string}
     */
    var generateColor = function () {
        var color = "#";
        for (var i = 0; i < 6; i++) {
            var n = Math.floor(Math.random() * letterAndNumber.length);
            color += letterAndNumber[n];
        }
        return color;
    };
    /** Change background color on click */
    var handlerOnClick = function () {
        var containerElement = document.getElementById("container");
        containerElement.style.background = generateColor();
    };
    // Add Listener
    btnElement.addEventListener("click", handlerOnClick);
})();
