import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Car ID is required' });
  }

  try {
    const { rows } = await sql`SELECT * FROM cars WHERE id = ${id} LIMIT 1`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
