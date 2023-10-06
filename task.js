var ElementOutput = document.getElementById("RangerValue");

ElementOutput.addEventListener('input', function (evt) {
    evt.preventDefault();
    ElementSelection(evt.target.value);
});

function ElementSelection(value) {
    var card1 = document.getElementsByClassName("element1")[0]; 
    var card2 = document.getElementsByClassName("element2")[0]; 
    var card3 = document.getElementsByClassName("element3")[0];

    if (value <= 10) {
        card1.classList.add("active-element");
        card2.classList.remove("active-element");
        card3.classList.remove("active-element");
    } else if (value <= 20) {
        card1.classList.remove("active-element");
        card2.classList.add("active-element");
        card3.classList.remove("active-element");
    } else if (value <= 30) {
        card1.classList.remove("active-element");
        card2.classList.remove("active-element");
        card3.classList.add("active-element");
    } else {
        card1.classList.remove("active-element");
        card2.classList.remove("active-element");
        card3.classList.remove("active-element");
    }
}

ElementSelection(ElementOutput.value);



var SubmitForm = document.getElementById('SubmitForm');
SubmitForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://forms.maakeetoo.com/formapi/591");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
    };

    const data = JSON.stringify({
        firstname: e.target.elements[0].value,
        email: e.target.elements[1].value,
        message: e.target.elements[2].value
    })
    if( e.target.elements[0].value == "" || e.target.elements[1].value == "" || e.target.elements[2].value == ""){
        alert("Empty Mail does not Submitted");
    } else {
        xhr.send(data);
        console.log(data);
        alert("Form Send SuccessFully");
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        e.target.elements[2].value = "";
    }
})