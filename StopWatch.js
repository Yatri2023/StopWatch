const s = document.getElementById("start");
const st = document.getElementById("stop");
const r = document.getElementById("reset");
const l = document.getElementById("lap_btn");
st.disabled = true;
s.disabled = false;
r.disabled = true;
l.disabled = true;
var timer;
var min = 0;
var sec = 0;
var ms = 0;
var h = 0;
s.addEventListener("click", function () {
   timer = setInterval(() => {
      ms++;
      if (ms == 100) {
         sec++;
         ms = 0;
      }
      if (sec == 60) {
         min++;
         sec = 0;
      }
      if (min == 60) {
         h++;
         min = 0;
      }
      if (h == 24) {
         h = 0;
      }
      document.getElementById("mils").innerHTML = ms < 10 ? "0" + ms : ms;
      document.getElementById("secs").innerHTML = sec < 10 ? "0" +  sec : sec;
      document.getElementById("minute").innerHTML = min < 10 ? "0" + min : min;
      document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
   }, 10);
   s.disabled = true;
   st.disabled = false;
   r.disabled = true;
   l.disabled = false;
});
st.addEventListener("click", function () {
   s.innerHTML = "Resume";
   clearInterval(timer);
   st.disabled = true;
   s.disabled = false;
   r.disabled = false;
   l.disabled = true;
});
r.addEventListener("click", function () {
   min = 0;
   sec = 0;
   ms = 0;
   h = 0;
   document.getElementById("mils").innerHTML = "0" + ms;
   document.getElementById("secs").innerHTML = "0" + sec;
   document.getElementById("minute").innerHTML = "0" + min;
   document.getElementById("hours").innerHTML = "0" + h;
   document.getElementById("laps").innerHTML = "";
   r.disabled = true;
   l.disabled = true;
   s.innerHTML = "Start";
});
l.addEventListener("click",function(){
    let miles = ms < 10 ? "0" + ms : ms;
    let s = sec < 10 ? "0" + sec : sec;
    let m = min < 10 ? "0" + min : min;
    let ho = h < 10 ? "0" + h : h;
    let l1 = ho + " : " + m + " : " + s + " : " + miles;
    document.getElementById("laps").innerHTML += "<span>" + l1 + "</span><br>";
})