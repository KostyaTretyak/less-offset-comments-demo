import { Component, OnInit } from '@angular/core';
import { Comment } from 'less-offset-comments';

import { RootComment, DemoComment } from './comment';
import { CommentService } from './comment.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  control = new FormControl(1);
  rootComment = new RootComment();
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  onSubmit() {
    const comment = new DemoComment(this.control.value);
    this.comments.unshift(comment);
  }
}
