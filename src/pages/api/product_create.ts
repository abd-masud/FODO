import { connectionToDatabase } from './db'


export default async function handler(req: { method: string; body: { name: any; category: any; price: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    const db = await connectionToDatabase();

    try {
        if (req.method === 'POST') {
            const { name, category, price } = req.body;
            const [result] = await db.query('INSERT INTO product (name, category, price) VALUES (?, ?, ?)', [name, category, price]);
            res.status(200).json({ message: 'Product Added Successfully' });
        }
    } catch (error) {
        console.error(error);
    }

}