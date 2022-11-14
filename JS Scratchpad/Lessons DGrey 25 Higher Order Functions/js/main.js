// Higher Order Functions
// A higher order fuction is one that does at least one of the following:
// * Takes one or more fuctions as an argument (parameter).
// * Returns a function as the result

import { posts } from "./posts.js";

console.log(posts[0]);

/* posts.forEach((post) => {
    console.log(post);
}) */

const filteredPosts = posts.filter(posts => {
    return posts.userId === 10;
})
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
})
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
})
console.log(reducedPostsValue);


