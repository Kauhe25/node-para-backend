
import fs from 'fs';
import path from 'path';

const file = path.join(path.resolve(), 'teste.json');
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

data.lista.map( item => console.log(`${item.id} => ${item.title}`));