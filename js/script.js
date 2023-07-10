//Enter Code Here

var moods = document.querySelector("#moods");
var body = document.querySelector("body");

moods.addEventListener("change", function (e) {
    var mood = e.target.value;
    console.log(mood);
    if (mood === "happy") {
        body.classList.remove("sad");
        body.classList.remove("passionate")
        body.classList.add("happy");
    } else if (mood === "sad") {
        body.classList.add("sad");
        body.classList.remove("passionate");
        body.classList.remove("happy");
    } else if (mood === "passionate") {
         body.classList.remove("sad");
        body.classList.add("passionate");
        body.classList.remove("happy");
    }
});