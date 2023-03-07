import express from 'express';
const app = express();
import cors from 'cors';
import route from './nextPage.js';

app.set('name', 'test');
console.log(app.get('name'));
app.use(cors());
app.use('/', route);

app.listen(5000, () => {
    console.log('connected at port 5000');
})