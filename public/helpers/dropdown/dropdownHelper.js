/*
Dependencies:

Select2 Libraries:
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<link rel="stylesheet" type="text/css" href="stylesheets/dropdown"
*/

/**
 * Creates an empty dropdown menu
 * @param {String} divElementID The ID of a \<div\> element to be populated with the dropdown menu
 */
function createDropdown(divElementID) {
    convertDivElementToSelect(divElementID)
    divElementID = convertElementIDToJQueryFormat(divElementID)  // Some jQuery boilerplate

    $(divElementID).addClass("js-example-basic-single") // This class is from the Select2 library and required to initialize the div as a dropdown menu
    $(divElementID).select2() // Initialize the element as a select2 dropdown
    // Fix for dropdown menu not focusing on the search bar instantly
    $(document).on('select2:open', () => {
        document.querySelector('.select2-search__field').focus();
    })
}

/**
 * Binds an array of dropdown options to the dropdown menu
 * @param {Array} arrayOfOptions An array of options in the required dropdown option format (see method logic for example)
 * @param {String} divElementID The ID of the dropdown's \<div\> element
 */
function bindOptionsToDropdown(arrayOfOptions, divElementID) {
    divElementID = convertElementIDToJQueryFormat(divElementID)

    /*
    An option in the array must be in the following Object format:
    {
        id: index,
        text: coin.tickerSymbol + " " + coin.name
    }
    */

    $(divElementID).select2({
        data: arrayOfOptions
    })
}

/**
 * Sets a function as a listener for whenever an option is selected from the dropdown. The selected option object will be passed to the function as a parameter.
 * @param {Function} listener A function to be executed whenever an option is selected.
 * @param {*} divElementID The ID of the dropdown's \<div\> element
 */
function setOnChangeListenerForDropdown(listener, divElementID) {
    divElementID = convertElementIDToJQueryFormat(divElementID)

    // Set on change listener
    $(divElementID).on('change', () => {
        // Retrieve the selected option object
        value = $(divElementID).select2('data')[0]
        // Executes the listener, with the option object passed as a parameter
        listener(value)
    });
}

function changeInputFieldPlaceholderText(text, divID) {
    const jqueryID = "#" + divID

    $(jqueryID).on("select2:open", function () {
        $(".select2-search__field").attr("placeholder", text);
    })
    $(jqueryID).on("select2:close", function () {
        $(".select2-search__field").attr("placeholder", null);
    })
}

/**
 * Converts an element ID into JQuery selector format (it's just boilerplate code)
 * @param {String} elementID The ID of an element
 */
function convertElementIDToJQueryFormat(elementID) {
    return "#" + elementID
}

/**
 * Converts a \<div\> element into a \<select\> element by changing the HTML tag
 * @param {String} divElementID The ID of a \<div\> element
 */
function convertDivElementToSelect(divElementID) {
    divElement = document.getElementById(divElementID)

    resultSelectElement = document.createElement("select")
    for (const attr of divElement.attributes) {
        resultSelectElement.setAttribute(attr.name, attr.value)
    }
    resultSelectElement.innerHTML = divElement.innerHTML
    divElement.replaceWith(resultSelectElement)
}

/**
 * Selects a default option for the dropdown menu
 * @param {Number} index The index of the option to select
 */
function setDefaultOption(index, divElementID) {
    divElementID = convertElementIDToJQueryFormat(divElementID)
    $(divElementID).val(index).trigger('change');
}

function requireMinimumNumberOfKeysToDisplayOptions(number, divElementID) {
    divElementID = convertElementIDToJQueryFormat(divElementID)
    $(divElementID).select2({
        minimumInputLength: number
    });
}
