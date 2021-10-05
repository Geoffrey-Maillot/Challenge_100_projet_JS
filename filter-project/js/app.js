(function () {
    /**
     * Filter products items
     * @param e @event
     */
    var filterItem = function (e) {
        // Prevent the link from going to the top of the page
        e.preventDefault();
        // String for filter
        var filterValue = e.target.dataset.filter;
        // Filter =>
        productsItems.forEach(function (product) {
            // Dataset Value
            var item = product.dataset.item;
            // First, remove all class Hidden
            product.classList.remove("isHidden");
            if (filterValue === "all") {
                return;
            }
            // If filter value of button is different of dataset value of item, hide item
            if (filterValue !== item) {
                product.classList.add("isHidden");
            }
        });
        window.scroll(0, document.body.scrollHeight);
    };
    /**
     * Filter items by search
     *@param e @event
     */
    var searchItem = function (e) {
        var inputValue = e.target.value;
        productsItems.forEach(function (product) {
            var productName = product
                .getElementsByClassName("store-item-name")
                .item(0).innerHTML;
            if (productName.indexOf(inputValue) === -1) {
                product.classList.add("isHidden");
            }
            else {
                product.classList.remove("isHidden");
            }
        });
        window.scroll(0, document.body.scrollHeight);
    };
    // Get Element From DOM
    var filterLinkElem = document.querySelectorAll(".filter-btn");
    var searchInputElem = document.getElementById("search-item");
    var productsItems = document.querySelectorAll(".store-item");
    // Add Listener
    filterLinkElem.forEach(function (btn) { return btn.addEventListener("click", filterItem); });
    searchInputElem.addEventListener("keyup", searchItem);
})();
