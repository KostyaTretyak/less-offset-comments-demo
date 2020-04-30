import { DefaultCommentFromDb } from '@ts-stack/comments-to-tree';

export class RootComment {
  public userId = 1;
}

export class DemoComment {
  /**
   * `true` if user want delete comment.
   */
  wantDel: boolean;
  hasOffset?: boolean;

  constructor(public userId: number, public parent: DemoComment = null, public children: DemoComment[] = []) {}
}

export interface CommentFromDb extends DefaultCommentFromDb {
  userId: number;
}
