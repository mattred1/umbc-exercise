const form = document.querySelector('input');
const searchBtn = document.querySelector('.btn-search');
const altLinks = document.querySelector('.alt-links');
const searchSection = document.querySelector('.search-section');
const btnClose1 = document.querySelector('#card-btn-1');
const btnClose2 = document.querySelector('#card-btn-2');
const btnClose3 = document.querySelector('#card-btn-3');
const cardBody1 = document.querySelector('#online-ms-is');
const cardBody2 = document.querySelector('#national-rank');
const cardBody3 = document.querySelector('#registration');
let resultItem = document.querySelector('#search-results');
let width = document.documentElement.clientWidth || window.innerWidth;



//====================================================================



// Expand search input on click based on screen size
searchBtn.addEventListener("click", function () {

    // Checks to see current screen size
    if (width <= 992) {  // Probably mobile

        // If input form is hidden
        if (form.classList.contains('d-none')) {
            form.classList.remove("d-none")
            searchBtn.classList.remove("ms-3")
            altLinks.classList.add("d-none")
            searchSection.classList.add("col-12")
            searchSection.classList.remove("col-3", "col-md-3")

        } else {
            form.classList.add("d-none")
            searchBtn.classList.add("ms-3")
            altLinks.classList.remove("d-none")
            searchSection.classList.add("col-3", "col-md-3")
            searchSection.classList.remove("col-12")
        }
    }
});



//====================================================================



// Show or hide cards depending on window size on load
document.addEventListener("DOMContentLoaded", function () {
    if (width <= 992) {
        cardBody1.classList.add('d-none')
        cardBody2.classList.add('d-none')
        cardBody3.classList.add('d-none')
    } else {
        cardBody1.classList.remove('d-none')
        cardBody2.classList.remove('d-none')
        cardBody3.classList.remove('d-none')
    }
})

// Toggle card body on btn 1 click
btnClose1.addEventListener('click', function () {
    cardBody1.classList.toggle('d-none')
});

// Toggle card body 2 on btn 2 click
btnClose2.addEventListener('click', function () {
    if (cardBody2.classList.contains('d-none')) {
        cardBody2.classList.remove('d-none')
    } else {
        cardBody2.classList.add('d-none')
    }
});

// Toggle card body 3 on btn 3 click
btnClose3.addEventListener('click', function () {
    if (cardBody3.classList.contains('d-none')) {
        cardBody3.classList.remove('d-none')
    } else {
        cardBody3.classList.add('d-none')
    }
});




// If window Resizes, check width -- not functional yet
// window.addEventListener('resize', function (e) {
//     console.log(e)
//     if (width <= 992) {
//         console.log("small")
//         cardBody1.classList.add('d-none')
//         cardBody2.classList.add('d-none')
//         cardBody3.classList.add('d-none')
//     } else {
//         console.log("large")
//         cardBody1.classList.remove('d-none')
//         cardBody2.classList.remove('d-none')
//         cardBody3.classList.remove('d-none')
//     }
// });




//====================================================================



// Search bar

// Capture user input event
form.addEventListener("input", (e) => {
    let value = e.target.value

    // Check if input exists and if input is larger than 0
    if (value && value.trim().length > 0) {

        // Redefine 'value' to exclude white space and change input to all lowercase
        value = value.trim().toLowerCase()

        // Return results

    } else {
        console.log("Invalid input")
    }
})



// Display results in a list
function setList(results) {

    for (const searchTerm of results) {
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(searchTerm.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}


form.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the searchTerm's name
        setList(suggestions.filter(searchTerm => {
            return searchTerm.name.includes(value)
        }))
    }
})





// Error message if no results
// function noResults() {
//     // create an element for the error; a list item ("li")
//     const error = document.createElement('li')
//     // adding a class name of "error-message" to our error element
//     error.classList.add('error-message')

//     // creating text for our element
//     const text = document.createTextNode('No results found. Sorry!')
//     // appending the text to our element
//     error.appendChild(text)
//     // appending the error to our list element
//     list.appendChild(error)
// }