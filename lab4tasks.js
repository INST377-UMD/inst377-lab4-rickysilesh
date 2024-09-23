// Task 1: Alert Me Section
function alertName() {
    var name = document.getElementById('nameInput').value;
    alert('Hi ' + name + '!');
}

// Task 2: Change Color Section
function changeColor() {
    var body = document.body;
    if (body.style.backgroundColor === 'blue') {
        body.style.backgroundColor = 'green';
    } else {
        body.style.backgroundColor = 'blue';
    }
}

// Task 3: Text Tester Section
function validateText() {
    var input = document.getElementById('textInput').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(input)) {
        alert('Text contains special characters');
    } else {
        alert('Text is valid');
    }
}

// Task 4: Add Text Section
function addTextToHeading() {
    var heading = document.getElementById('pageHeading');
    heading.innerHTML += ' Add Text';
}
