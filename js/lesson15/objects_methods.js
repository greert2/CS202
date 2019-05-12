// object literals

let user = {
    name: 'justice',
    age: 30,
    email: 'justice@justicebanson.com',
    location: 'Bellingham',
    blogs: ['React and Angular Rules', '10 steps to become a web development'],
    login: function () {
        console.log('the user logged in');
    },
    logout: function () {
        console.log('the user logged out');
    },
    logBlogs: function () {
        // access the blogs here
    }
};

user.login();
user.logout();

const name = 'justice';
name.toUpperCase();