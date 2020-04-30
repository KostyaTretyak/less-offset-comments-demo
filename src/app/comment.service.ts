import { Injectable } from '@angular/core';

import { CommentsToTree } from '@ts-stack/comments-to-tree';
import { Comment } from 'less-offset-comments';

import { CommentFromDb } from './types';

@Injectable()
export class CommentService {
  private fakeId = 0;

  private commentsFromDb: CommentFromDb[] = [
    { userId: 1, commentId: ++this.fakeId },

    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 1, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },

    { userId: 4, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 1, parentId: this.fakeId - 1, commentId: ++this.fakeId },

    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 1, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 1, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 1, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },

    { userId: 3, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 3, parentId: this.fakeId, commentId: ++this.fakeId },
    { userId: 2, parentId: this.fakeId, commentId: ++this.fakeId },
  ];

  getComments(): Comment[] {
    // This is only for the demo, in real life reverse direct should come from database.
    this.commentsFromDb.reverse();

    return CommentsToTree.getTree<CommentFromDb>(this.commentsFromDb);
  }
}
