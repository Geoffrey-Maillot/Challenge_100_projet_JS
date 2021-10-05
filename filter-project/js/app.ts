(function () {
  /**
   * Filter products items
   * @param e @event
   */
  const filterItem = (e: Event): void => {
    // Prevent the link from going to the top of the page
    e.preventDefault();

    // String for filter
    const filterValue: String = (e.target as HTMLButtonElement).dataset.filter;

    // Filter =>
    productsItems.forEach((product: HTMLDivElement) => {
      // Dataset Value
      const { item } = product.dataset;

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
  const searchItem = (e: Event): void => {
    const inputValue = (e.target as HTMLInputElement).value;

    productsItems.forEach((product) => {
      const productName: string = product
        .getElementsByClassName("store-item-name")
        .item(0).innerHTML;

      if (productName.indexOf(inputValue) === -1) {
        product.classList.add("isHidden");
      } else {
        product.classList.remove("isHidden");
      }
    });

    window.scroll(0, document.body.scrollHeight);
  };

  // Get Element From DOM

  const filterLinkElem: NodeListOf<HTMLLinkElement> =
    document.querySelectorAll(".filter-btn");

  const searchInputElem = document.getElementById(
    "search-item"
  ) as HTMLInputElement;

  const productsItems: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".store-item");

  // Add Listener
  filterLinkElem.forEach((btn) => btn.addEventListener("click", filterItem));
  searchInputElem.addEventListener("keyup", searchItem);
})();
