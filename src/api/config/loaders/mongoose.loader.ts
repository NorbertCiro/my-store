import { Connection, createConnection } from 'mongoose';

export const mongooseLoader = (dbUri: string, dbName: string) => {
  createConnection(dbUri, {
    dbName: dbName,
    maxPoolSize: 10,
    autoCreate: true
  }).asPromise()
    .then((conn: Connection) => {
      conn.on('error', (err) => {
        console.log(`Database ${dbName} has an error`, err.message);
      })

      conn.on('connected', () => {
        console.log(`Database ${dbName} connected`);
      })

      conn.on('disconnected', () => {
        console.log(`Database ${dbName} disconnected`);
      })
    })
    .catch((err: Error) => {
      console.log(`Database ${dbName} connection error`, err.message);
      mongooseLoader(dbUri, dbName);
    })
}