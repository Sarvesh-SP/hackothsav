
var modal = document.getElementById("sponsorsModal");
var span = document.getElementsByClassName("close")[0];

function loadSponsors(sponsor) {
    modal.style.display = "block";
    var Content = document.getElementById(sponsor).getAttribute("content");
    var Url = document.getElementById(sponsor).getAttribute("viewmorelink");

    document.getElementById('sponsorsModalBody').innerHTML = Content;
    document.getElementById('sponsorsLink').href = Url;
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
