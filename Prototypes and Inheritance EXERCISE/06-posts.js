function posts() {
    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }

    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {

            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];

        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let comments = '';

            this.comments.forEach(el => {
                comments += '\n' + ' * ' + el;
            });

            let isComment = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:${comments}`;

            return this.comments.length !== 0 ? isComment.trim() : super.toString();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {

            super(title, content);
            this._views = Number(views);
        }

        get views() {
            return this._views;
        }
        
        view() {
            this._views++;

            return this;
        }

        toString() {

            return super.toString()+`\nViews: ${this.views}`;
        }
    }
    return { Post, SocialMediaPost, BlogPost };
}
const classes = posts();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost("TestTitle", "TestContent", 7);
bp.view();

console.log(bp.toString());;

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
