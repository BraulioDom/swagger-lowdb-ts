import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type Task = {
    id: string,
    name: string,
    description: string
}

type Schemas = {
    tasks: Task[]
}

let db: lowdb.LowdbSync<Schemas>;

export const createConnection = () => {
    const adapter = new FileSync<Schemas>('db.json');
    db = lowdb(adapter);
    db.defaults({tasks: []}).write();
}

export const getConnection = () => db;