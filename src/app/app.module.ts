import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThreadComponent } from './thread/thread.component';
import { CommentService } from './comment.service';

@NgModule({
  declarations: [AppComponent, ThreadComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
