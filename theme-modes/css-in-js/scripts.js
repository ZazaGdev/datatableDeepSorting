let initNavigation = function () {
    // Get all list items
    let listItems = document.querySelectorAll("li[data-target]");

    let parentDivs = document.querySelectorAll("div[data-parent]");
    parentDivs.forEach(function (div) {
        div.style.display = "none";
    });

    document.querySelector("div[data-parent='checkboxes']").style.display = 'block';

    // Attach event to each list item
    listItems.forEach(function (listItem) {
        listItem.addEventListener("click", function () {
            // Get target from clicked list item
            let target = listItem.getAttribute("data-target");

            // Hide all divs
            let divs = document.querySelectorAll("div[data-parent]");
            divs.forEach(function (div) {
                div.style.display = "none";
            });

            // Show matching div
            let matchingDiv = document.querySelector('div[data-parent="' + target + '"]');
            if (matchingDiv) {
                matchingDiv.style.display = "block";
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    initNavigation()
});

