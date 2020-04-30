import { Component, OnInit, Input } from '@angular/core';

import { LessOffsetComments } from 'less-offset-comments';

import { DemoComment } from '../comment';

@Component({
  selector: 'cst-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css'],
})
export class ThreadComponent implements OnInit {
  @Input() comments: DemoComment[];

  ngOnInit() {
    if (this.comments) {
      this.comments.forEach((comment) => LessOffsetComments.updateOffset(comment));
    }
  }

  onSubmit(parent: DemoComment) {
    const child = new DemoComment(+parent.fromUserId, parent);

    LessOffsetComments.unshiftComment(parent, child);
  }

  onDelete(comment: DemoComment, index: number) {
    LessOffsetComments.deleteComment(this.comments, comment, index);
  }
}
