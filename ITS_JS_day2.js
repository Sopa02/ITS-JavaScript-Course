// Mouse events in javascript
// 1. Mouseover - when the mouse pointer moves over an element
// 2. Mouseout - when the mouse pointer moves out of an element
// 3. Mousemove - when the mouse pointer is moving while it is over an element
// 4. Mouseup - when a mouse button is released over an element
// 5. Mousedown - when a mouse button is pressed down over an element
// 6. Click - when a mouse button is clicked over an element
// 7. Dblclick - when a mouse button is double clicked over an element
// 8. Contextmenu - when the right mouse button is clicked over an element
// 9. Mouseenter - when the mouse pointer enters an element
// 10. Mouseleave - when the mouse pointer leaves an element
// 11. Mousewheel - when the mouse wheel rolls up or down over an element
// 12. DOMMouseScroll - when the mouse wheel rolls up or down over an element (Firefox)

// onresize event in javascript
// The onresize event occurs when the browser window has been resized.

// onsubmit event in javascript
// The onsubmit event occurs when a form is submitted.

// onreset event in javascript
// The onreset event occurs when a form is reset.

// Event listener in javascript
// addEventListener() method in javascript
// The addEventListener() method attaches an event handler to the specified element.
let button = document.getElementById("btn");
let output = document.getElementById("output");
let inputChange = document.getElementById("inputChange");
let buttonFocus = document.getElementById("btnFocus");
let buttonBlur = document.getElementById("btnBlur");



let div = document.getElementById("outputDiv");
function eventHandlerExample(){
    button.addEventListener("click", function () {
        output.innerHTML = "Hello World!";
    });
    // An object can have as many event handlers as needed.
    button.addEventListener("mouseover", function () {
        output.innerHTML = "You hovered over the button!";
    });
}

function task1() {
    // style property in javascript

    output.style.backgroundColor = "black";
    output.style.textAlign = "center";
    output.style.margin = "auto";
    output.style.width = "50%";
    output.style.border = "1px solid white";


    div.addEventListener("click", function() {
        // Setting the background color in javascript
        div.style.backgroundColor = "yellow";
        output.innerHTML = div.style.backgroundColor;
    });

    div.addEventListener("dblclick", function() {
        div.style.backgroundColor = "blue";
        output.innerHTML = div.style.backgroundColor;
    });
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "red";
        output.innerHTML = div.style.backgroundColor;
    });
    div.addEventListener("mouseout", function() {
        div.style.backgroundColor = "green";
        output.innerHTML = div.style.backgroundColor;
    });
    // When using addEventListener(), event names are
    // written without the "on" prefix.
}

function task2() {
    // onChange event in javascript
    // The onchange event occurs when the value of an element has been changed.
    inputChange.addEventListener("change", function () {
        alert("Text has been changed!");
    });
    // The focus event occurs when an element gets focus (when selected by a mouse
    // click or by "tab-navigating" to it).
    buttonFocus.addEventListener("focus", function () { 
        output.innerHTML = "Focus button has been focused!";
    });
    // The blur event occurs when an element loses focus.
    buttonBlur.addEventListener("blur", function () {   
        output.innerHTML = "Blur button has been blurred!";
    });
}

// task1();
// task2();

