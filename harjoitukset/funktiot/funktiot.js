/**document.querySelector("p").addEventListener("click", funktio)

function funktio(e) {

}**/


function sendMessage(msg, encoder) {

    msg = encoder(msg);

    console.log(msg);
}

const myEnc = function(msg) { //anonyymi-funktio jolla ei ole nimeä
    msg += "1234xcv";

    return msg;
}

function specialEncoder(msg) {
    msg += "special";

    return msg;
}

sendMessage("Hello!", myEncoder);