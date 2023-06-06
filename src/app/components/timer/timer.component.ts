import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public timerCount = 0
    public result = 0
    public interval: any
    public dateInterval: any
    public currentTime: any
    public idleTimer: any

    ngOnInit() {
        this.dateInterval = setInterval(() => {
            const currentDate = new Date(Date.now())
            const hours = currentDate.getHours()
            const minutes = currentDate.getMinutes()
            const seconds = currentDate.getSeconds()
            this.currentTime = seconds + (minutes * 60) + (hours * 3600)
            this.idleTimer = this.currentTime - this.result
        }, 1000)
    }

    startTimer() {
        if (!this.interval) this.interval = setInterval(() => {
            this.timerCount += 1
            this.result += 1
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.interval)
        this.interval = null
        this.timerCount = 0
    }
}
