document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const bgBtn = document.getElementById('bg-btn'),
          clock = document.getElementById('clock'),
          hour = document.getElementById('hour'),
          minute = document.getElementById('minute'),
          second = document.getElementById('second');


    class Clock {
        constructor(hour, minute, second) {
            hour = this.hour;
            minute = this.minute;
            second = this.second;  
        }

        checkTimeLength(time) {
            if (time.toString().length == 1) {
                return '0' + time;
            }
            return time;
        }

        updateSecond(second) {
            let date = new Date();
            second.textContent = this.checkTimeLength(date.getSeconds());
        }

        setClock() {
            let date = new Date();
            hour.textContent = this.checkTimeLength(date.getHours());
            minute.textContent = this.checkTimeLength(date.getMinutes());
            setInterval(() => this.updateSecond(second), 1000);
        }
    }

    let clockObj = new Clock();
    clockObj.setClock(hour, minute, second);

    bgBtn.addEventListener('click', (e) => {
        document.body.classList.toggle('black');
        clock.classList.toggle('black');
        e.target.classList.toggle('black');
    });
})