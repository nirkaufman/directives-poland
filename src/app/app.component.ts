import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Angular Directives</h1>
      
      <video #video
             appWindow
             #player="player"
             width="400" 
             src="http://media.w3.org/2010/05/sintel/trailer.mp4"></video>
      
      <div>
          <button (click)="video.play()">Play</button>
          <button (click)="video.pause()">Pause</button>
          <button (click)="player.open()">Launch!</button>
          <button (click)="player.close()">Close</button>
      </div>
  `,

})
export class AppComponent {}
