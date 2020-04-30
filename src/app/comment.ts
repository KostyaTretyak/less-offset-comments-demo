import { Comment } from 'less-offset-comments';
import { DefaultCommentFromDb, DefaultComment, DefaultCommentsToTree } from '@ts-stack/comments-to-tree';

export class RootComment
{
  public userId: number = 1;
}

export class DemoComment
{
  /**
   * `true` if user want delete comment.
   */
  wantDel: boolean;

  constructor
  (
    public userId: number,
    public parent: DemoComment = null,
    public children: DemoComment[] = [],
    /**
     * Needs only for demo.
     */
    public fromUserId: number = 1,
  ){}
}

export interface CommentFromDb extends DefaultCommentFromDb
{
  userId: number;
}

export interface CommentTree extends DefaultComment, Comment {}
