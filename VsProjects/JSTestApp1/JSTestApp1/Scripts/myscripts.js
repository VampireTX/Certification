function test() {
    var childElements = document.getElementById("nav1").getElementsByTagName("ul")[0].getElementsByTagName("li"),
        anz,
        newnav,
        text,
        testarray,
        i;

    anz = 0;
    for (i = 0; i < childElements.length; i++) {
        if (childElements[i].parentNode === document.getElementById("nav1").getElementsByTagName("ul")[0]) {
            anz++;
        }
    }
    anz++;

    newnav = document.createElement('li');
    text = document.createTextNode('Item ' + anz);
    newnav.appendChild(text);

    document.getElementById("nav1").getElementsByTagName("ul")[0].appendChild(newnav);

    testarray = new Array('a', 'b', 'c', 'd', 'e');

    testarray.splice(2, 1);

    alert(testarray.join(" "));
}

function test2() {
    var element = document.getElementById("li1");
    element.innerHTML = "neuer Button Text";
    element.focus();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    var latlon,
        img_url;

    latlon = position.coords.latitude + "," + position.coords.longitude;

    img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" +
        latlon + "&zoom=17&size=350x300&sensor=false";

    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
}

function emailValidation() {
    var input = document.getElementsByName("textInput1")[0].value,
        rex = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*.[a-zA-Z]+$/,
        errorMessage;
    if (input === '' || !rex.test(input)) {
        errorMessage = document.getElementById("errorText1");
        errorMessage.innerHTML = "<br>Email nicht gültig";
        return false;
    }

    return true;
}

function hideElement(id) {
    var e = document.getElementById(id);
    //e.style.display = 'none'; //einfache Art Element zu verstecken
    if (e.style.display !== 'none')
        e.style.display = 'none';
    else
        e.style.display.
        e.style.display = 'block';
}

function emailValidationOnBlur() {
    var input = document.getElementsByName("textInput1")[0].value,
        rex = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*.[a-zA-Z]+$/;
    var el = document.testForm.textInput1;
    var errorMessage;
    if (input === '' || !rex.test(input)) {
        //errorMessage = document.getElementById("errorText1");
        //errorMessage.innerHTML = "<br>Email nicht gültig";
        el.focus();
    }
    
}

window.onerror = function (errorMsg, url, lineNumber) {
    alert(errorMsg);
};
