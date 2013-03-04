var age = 28;
var oldAge = 60;
var perDay = 2;

var days = (oldAge - age) * 365;
var total = perDay * days;
if(total > 40000) {
    alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
} else {
    alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
}