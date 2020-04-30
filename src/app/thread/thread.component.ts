import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LessOffsetComments } from 'less-offset-comments';

import { DemoComment } from '../types';

@Component({
  selector: 'cst-thread',
  templateUrl: './thread.component.html',
})
export class ThreadComponent implements OnInit {
  @Input() comments: DemoComment[];
  select = new FormControl(1);

  ngOnInit() {
    if (this.comments) {
      this.comments.forEach((comment) => LessOffsetComments.updateOffset(comment));
    }
  }

  onSubmit(parent: DemoComment) {
    const child = new DemoComment(this.select.value, parent);

    LessOffsetComments.unshiftComment(parent, child);
  }

  onDelete(comment: DemoComment, index: number) {
    LessOffsetComments.deleteComment(this.comments, comment, index);
  }
}
