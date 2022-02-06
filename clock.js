let name = prompt("Adınız nedir?")
document.getElementById("myName").innerHTML = name

let today = { weekday : "long"}

function showTime() {
        let d = new Date();
       document.getElementById("myClock").innerHTML = d.toLocaleTimeString() + " " +  new Intl.DateTimeFormat('tr-TR', today).format(d)
}
setInterval(showTime, 1000);

