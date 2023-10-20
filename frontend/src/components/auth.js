// auth.js

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  
  export const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    return user;
  };
  