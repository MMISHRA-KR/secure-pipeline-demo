const userInput = "abc'; DROP TABLE users; --";
const query = `SELECT * FROM users WHERE name = '${userInput}'`;
console.log(query);
