import { Component, OnInit } from '@angular/core';
import { Comment } from 'less-offset-comments';

import { RootComment, DemoComment } from './types';
import { CommentService } from './comment.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  select = new FormControl(1);
  rootComment = new RootComment();
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  onSubmit() {
    const comment = new DemoComment(this.select.value);
    this.comments.unshift(comment);
  }
}
