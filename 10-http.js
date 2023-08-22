const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    } else if (req.url === '/about') {
        res.end('About page');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <a href='/'>Back home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
