const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello, I'm homepage.");
        res.write("This is my node.js webpage");
        res.end();
    } else if (req.url === '/about') {
        res.write("Hello, I'm about me page.");
        res.end();
    } else {
        res.write("Sorry!! 404 page not found.");
        res.end();
    }
});

server.listen(3000, () => {
    console.log(`Server is staring port: 3000`);
})