export const MOCK_PARTS = [
  {
    id: 1,
    name: 'Premium Ceramic Brake Pads',
    brand: 'Bosch',
    price: 2499,
    category: 'brakes',
    image: '/images/brake_pads.png',
    alternateImage: '/images/brake_pads_alt.png',
    inStock: true,
    rating: 4.8,
    description: 'High-performance ceramic brake pads designed to minimize dust and noise while providing exceptional stopping power. Perfect for everyday driving and demanding conditions.',
    specs: {
      material: 'Ceramic',
      position: 'Front',
      warranty: '1 Year',
      compatibility: 'Universal Fit (Check Manual)'
    }
  },
  {
    id: 2,
    name: 'High Performance Oil Filter',
    brand: 'Maruti Suzuki Genuine Parts',
    price: 350,
    category: 'filters',
    image: '/images/oil_filter.png',
    alternateImage: '/images/oil_filter_alt.png',
    inStock: true,
    rating: 4.5,
    description: 'Advanced synthetic blend media oil filter that traps 99% of harmful contaminants, protecting your engine and extending its lifespan.',
    specs: {
      type: 'Spin-On',
      threadSize: '3/4-16',
      warranty: '10,000 km',
      compatibility: 'Maruti Suzuki Models'
    }
  },
  {
    id: 3,
    name: 'Iridium Spark Plugs Set',
    brand: 'NGK',
    price: 1800,
    category: 'engines',
    image: '/images/spark_plugs.png',
    alternateImage: '/images/spark_plugs_alt.png',
    inStock: false,
    rating: 4.9,
    description: 'Laser Iridium spark plugs provide superior ignitability and long service life. The smallest tip diameter available ensures maximum engine performance.',
    specs: {
      material: 'Iridium',
      quantity: 'Set of 4',
      warranty: '60,000 km',
      compatibility: 'Universal'
    }
  },
  {
    id: 4,
    name: 'Gas Shock Absorber Front',
    brand: 'Tata Motors Original Spares',
    price: 3200,
    category: 'suspension',
    image: '/images/shock_absorber.png',
    alternateImage: '/images/shock_absorber_alt.png',
    inStock: true,
    rating: 4.2,
    description: 'OEM replacement gas-charged shock absorbers for improved ride comfort, stability, and control on rough Indian roads.',
    specs: {
      type: 'Gas Charged',
      position: 'Front (Left & Right)',
      warranty: '2 Years',
      compatibility: 'Tata Nexon / Tiago'
    }
  },
  {
    id: 5,
    name: 'Synthetic Engine Oil 5W-30 4L',
    brand: 'Castrol',
    price: 1950,
    category: 'engines',
    image: '/images/oil_filter.png', // Reused for mock
    alternateImage: '/images/oil_filter_alt.png',
    inStock: true,
    rating: 4.7,
    description: 'Premium full synthetic engine oil formulated for excellent wear protection and engine cleanliness in extreme temperatures.',
    specs: {
      grade: '5W-30',
      volume: '4 Liters',
      type: 'Full Synthetic',
      compatibility: 'Petrol & Diesel Engines'
    }
  },
  {
    id: 6,
    name: 'Brake Disc Rotor',
    brand: 'Mahindra Authentic Parts',
    price: 2800,
    category: 'brakes',
    image: '/images/brake_pads.png', // Reused for mock
    alternateImage: '/images/brake_pads_alt.png',
    inStock: true,
    rating: 4.6,
    description: 'High-carbon cast iron brake rotors built to withstand extreme heat and prevent warping, ensuring smooth and safe braking.',
    specs: {
      material: 'High-Carbon Iron',
      position: 'Front',
      warranty: '1 Year',
      compatibility: 'Mahindra XUV / Scorpio'
    }
  }
];
