import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    // Create the table
    await sql`
      CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        brand VARCHAR(255),
        price VARCHAR(255),
        image VARCHAR(255),
        type VARCHAR(255),
        condition VARCHAR(255),
        fuel VARCHAR(255),
        power VARCHAR(255),
        transmission VARCHAR(255),
        seller_name VARCHAR(255),
        seller_location VARCHAR(255),
        seller_response VARCHAR(255),
        seller_member_since VARCHAR(255),
        info_marca VARCHAR(255),
        info_modello VARCHAR(255),
        info_versione VARCHAR(255),
        info_carburante VARCHAR(255),
        info_chilometri VARCHAR(255)
      );
    `;

    // Seed mock data
    await sql`
      INSERT INTO cars (
        name, brand, price, image, type, condition, fuel, power, transmission,
        seller_name, seller_location, seller_response, seller_member_since,
        info_marca, info_modello, info_versione, info_carburante, info_chilometri
      ) VALUES (
        'AUDI Q5 SPB SportBack S tronic S line #Tetto', 'AUDI', '₹ 53,80,000', 
        'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=1200', 
        'SUV', 'New', 'Hybrid - BS6', '163 BHP', 'Automatic',
        'CHENNAI MOTORS LTD.', 'Chennai (TN)', '78%', '3 years',
        'AUDI', 'Q5', 'Q5 35 TDI S tronic S line', 'Hybrid (Diesel/Electric)', '16,919'
      );
    `;

    return res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
