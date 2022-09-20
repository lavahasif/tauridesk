import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Storage from './services/Storage'
import { useEffect, useState } from 'react';
 function MyApp({ Component, pageProps }: AppProps) {
 

  // const db = await SQLite.open('./test.db')
  

// /** execute SQL */
// await db.execute(`
//     CREATE TABLE users (name TEXT, age INTEGER);
//     INSERT INTO users VALUES ('Alice', 42);
//     INSERT INTO users VALUES ('Bob', 69);
// `)

// /** execute SQL with params */
// await db.execute('INSERT INTO users VALUES (?1, ?2)', ['Jack', 18])

// /** batch execution SQL with params */
// await db.execute('INSERT INTO users VALUES (?1, ?2)', [
//   ['Allen', 20],
//   ['Barry', 16],
//   ['Cara', 28],
// ])

  return <Component {...pageProps} />
}

export default MyApp
