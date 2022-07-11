function timer(id, deadline) {

   function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t / (1000 * 60 * 60) % 24));
      const minutes = Math.floor((t / (1000 * 60) % 60));
      const seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function getZeros(num) {
      if(num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endtime) {
      const timer = document.querySelector(selector);
      const days = timer.querySelector('#days');
      const hours = timer.querySelector('#hours');
      const minutes = timer.querySelector('#minutes');
      const seconds = timer.querySelector('#seconds');
      const timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endtime);
         days.innerHTML = getZeros(t.days);
         hours.innerHTML = getZeros(t.hours);
         minutes.innerHTML = getZeros(t.minutes);
         seconds.innerHTML = getZeros(t.seconds); 
         if(t <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock(id, deadline);
}

export default timer;