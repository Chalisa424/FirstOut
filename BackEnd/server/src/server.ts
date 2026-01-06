import http from 'http';
import app from './app';

const port = 5002;
const server = http.createServer(app);
server.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
});
