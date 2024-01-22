

function clock() {
  
   let monthName = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September", "October", "November", "December"];
   let dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   let today = new Date();

   
   document.getElementById('Date').innerHTML = `${dayName[today.getDay()]} ${today.getDate()} ${monthName[today.getMonth()]} ${today.getFullYear()}`;

   let h = today.getHours();
   let m = today.getMinutes(); // Corrected method name
   let s = today.getSeconds();
   let day = h < 11? 'PM' :'AM';


   document.querySelector(".hours").innerText=h;
   document.querySelector(".min").innerText=m;
   document.querySelector(".sec").innerText=s;

}

setInterval(()=>{
clock();

},1000)