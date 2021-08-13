import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TwodigitPipe } from './countdown-timer/pipes/twodigit.pipe';
import { ThreedigitPipe } from './countdown-timer/pipes/threedigit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    TwodigitPipe,
    ThreedigitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
