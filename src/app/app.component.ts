import { Component, OnInit } from '@angular/core';

const round2 = (num) => Math.round(num * 100) / 100;
const throttle = (delay, callback) => {
  let lastCall = null;
  return function () {
    const time = new Date().getTime();
    if (!lastCall || (time - lastCall) >= delay) {
      lastCall = time;
      callback.apply(null, arguments);
    }
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './nox-logo.html',
  styleUrls: ['./nox-logo.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {}

  ngOnInit() {
    const frame = (document.querySelector('.frame') as HTMLElement);
    const logo = (document.querySelector('.logo') as HTMLElement);
    document.onmousemove = throttle(100, (e: any) => {
      const x = round2((e.clientX / window.screen.width * 8) - 2);
      const y = round2((e.clientY / window.screen.height * -4) + 2);

      frame.style.setProperty('--x', `${ x + 0.01 }deg`);
      frame.style.setProperty('--y', `${ y + 0.01 }deg`);
      // logo.style.setProperty('--x', `${ x * 3 }px`);
      // logo.style.setProperty('--y', `${ y * 3 }px`);
    });
  }
}
