// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Database from 'tauri-plugin-sql'
import SQLite from 'tauri-plugin-sqlite-api'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  const db = await Database.load('sqlite:test.db')

  res.status(200).json({ name: 'John Doe' })
}
