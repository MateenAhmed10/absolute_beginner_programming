interface POST {
    title: string,
    body: string
};

const posts: POST[] = [
    {title: "First Post", body: "This is first post"},
    {title: "Second Post", body: "This is second post"},
];

const showPost = () => {
    setTimeout(() => {
        posts.forEach((post, index) => console.log(index, post.title, ': ', post.body, '\n'));
    }, 1000);
};

const createPost = (post: POST, callBack: Function ) => {
    setTimeout(() => {
        posts.push(post);
        callBack();
    }, 2000);
};

createPost({title: "Third Post", body: "This is third post"}, showPost)