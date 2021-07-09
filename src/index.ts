import app from './app';

import {createConnection} from './db';

createConnection();
app.listen(app.get('port'));

console.log('server on port 3000');
