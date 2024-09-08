import { NextApiRequest, NextApiResponse } from 'next';
import { connectionToDatabase } from './db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const db = await connectionToDatabase();
        const [rows] = await db.query('SELECT * FROM product');

        res.status(200).json({ product: rows });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}
