import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  countDownDate = new Date("May 25, 2022 14:20:00").getTime();
  months = 0;
  monthsString: string;
  weeks = 0;
  weeksString: string;
  days = 0;
  daysString: string;
  hours = 0;
  hoursString: string;
  minutes = 0;
  minutesString: string;
  seconds = 0;
  secondsString: string;
  milliseconds = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateCountdown();
  }
  updateCountdown() {
    setInterval(() => {
      let now = new Date().getTime();
      let timeTillEnd = this.countDownDate - now;
      this.days = Math.floor(timeTillEnd / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeTillEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeTillEnd % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeTillEnd % (1000 * 60)) / 1000);
      this.milliseconds = Math.floor((timeTillEnd % (1000)));
      this.months = Math.floor(this.days / 30);
      this.weeks = Math.floor((this.days % 30 / 7));
      this.days = (this.days - ((this.months * 30) + (this.weeks * 7)));
      if (this.months < 2) {
        this.monthsString = "month";
      } else if (this.months >= 2) {
        this.monthsString = "months";
      }
      if (this.weeks < 2) {
        this.weeksString = "week";
      } else if (this.months >= 2) {
        this.weeksString = "weeks";
      }
      if (this.days < 2) {
        this.daysString = "day";
      } else if (this.months >= 2) {
        this.daysString = "days";
      }
      if (this.hours < 2) {
        this.hoursString = "hour";
      } else if (this.months >= 2) {
        this.hoursString = "hours";
      }
      if (this.minutes < 2) {
        this.minutesString = "minute";
      } else if (this.months >= 2) {
        this.minutesString = "minutes";
      }
      if (this.seconds < 2) {
        this.secondsString = "second";
      } else if (this.months >= 2) {
        this.secondsString = "seconds";
      }
    }, 1);
  }
}
