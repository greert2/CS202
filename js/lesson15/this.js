// object literals

let user = {
    name: 'justice',
    age: 30,
    email: 'justice@justicebanson.com',
    location: 'Bellingham',
    blogs: ['React and Angular Rules', '10 steps to become a web development', 'Designing your website'],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        // access the blogs here
        // console.log(this);
        console.log('this user has written these blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

// console.log(this.login;
user.logBlogs();