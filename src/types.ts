export interface ProjectGalleryCategory {
  name: string;
  images: (string | { url: string; caption: string; objectPosition?: string })[];
}

export interface ProjectDetails {
  brochureUrl?: string;
  masterPlanUrl?: string;
  masterPlanImages?: (string | { url: string; crop?: { scale: string; marginLeft: string; marginTop: string; marginBottom: string } })[];
  floorPlanUrl?: string;
  floorPlanImages?: (string | { url: string; title?: string; crop?: { scale: string; marginLeft: string; marginTop: string; marginBottom: string } })[];
  hideFloorPlan?: boolean;
  hideBrochure?: boolean;
  hideMasterPlan?: boolean;
  masterPlanLabel?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  galleries?: ProjectGalleryCategory[];
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'Serenity Hillview',
    category: 'Residential Plotted Development',
    imageUrl: 'https://i.postimg.cc/2mhsmbyd/HILLVIEW-NIGHT-(1).png',
    description: 'A premium residential plotted development offering lush green landscapes and modern amenities. Experience tranquil living with thoughtfully designed spaces that harmonize with nature.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/GdgBcH1B/Entrance.png', caption: 'Entrance' },
          { url: 'https://i.postimg.cc/WTYD2hPk/Entrance-Gateway-Vista.png', caption: 'Entrance Gateway Vista' },
          { url: 'https://i.postimg.cc/2r9qzVfB/Landscape-Pathway.png', caption: 'Landscape Pathway' },
          { url: 'https://i.postimg.cc/B478qXG2/Main-Axis-Intersection.png', caption: 'Main Axis Intersection' },
          { url: 'https://i.postimg.cc/LmqJh2HP/Palm-Grove-Corner.png', caption: 'Palm Grove Corner' },
          { url: 'https://i.postimg.cc/6B78Tt90/Palm-Walkway.png', caption: 'Palm Walkway' },
          { url: 'https://i.postimg.cc/x9kXqn0t/Quiet-Corner.png', caption: 'Quiet Corner' }
        ]
      }
    ],
    details: {
      brochureUrl: 'https://heyzine.com/flip-book/588af4707e.html#page/18',
      masterPlanImages: ['/Serenity Hillview Master Plan.jpg'],
      hideFloorPlan: true,
    }
  },
  {
    id: '2',
    number: '02',
    title: 'Amber',
    category: 'Apartment',
    imageUrl: 'https://i.postimg.cc/nLjNgT8k/Day-Exterior-Front-Elevation-Wide.png',
    description: 'An elegant apartment complex featuring contemporary architecture and luxurious interiors. Designed for urban living with a perfect blend of comfort and sophistication.',
    galleries: [
      {
        name: 'Exterior & Architectural Views',
        images: [
          { url: 'https://i.postimg.cc/nLjNgT8k/Day-Exterior-Front-Elevation-Wide.png', caption: 'Day Exterior Front Elevation (Wide)' },
          { url: 'https://i.postimg.cc/y8rwLtGt/Upper-Terrace-Branding-Close-up.png', caption: 'Upper Terrace Branding (Close-up)' }
        ]
      },
      {
        name: 'Rooftop & Terrace Amenities',
        images: [
          { url: 'https://i.postimg.cc/qqDf6v97/Rooftop-Interior-Co-working-Lounge-Area.png', caption: 'Rooftop Interior Co-working Lounge Area' },
          { url: 'https://i.postimg.cc/d3NMZVzh/Rooftop-Lifestyle-Lawns-Outdoor-Seating.png', caption: 'Rooftop Lifestyle Lawns Outdoor Seating' },
          { url: 'https://i.postimg.cc/3NfM0xPJ/Terrace-Detail-Lounge-Area-with-Laser-Cut-Screening.png', caption: 'Terrace Detail Lounge Area with Laser Cut Screening' }
        ]
      }
    ],
    details: {
      brochureUrl: 'https://heyzine.com/flip-book/917c2aa29a.html',
      masterPlanLabel: 'Site Plan',
      masterPlanImages: [{ url: '/Amber Site.jpg?v=2', crop: { scale: '170%', marginLeft: '0%', marginTop: '-8%', marginBottom: '-3%' } }],
      floorPlanImages: [
        { url: '/amber stlit floor plan.jpg', title: 'Stilt Floor Plan', crop: { scale: '100%', marginLeft: '0%', marginTop: '0%', marginBottom: '0%' } },
        { url: '/amber first floor plan.jpg', title: 'First Floor Plan', crop: { scale: '100%', marginLeft: '0%', marginTop: '0%', marginBottom: '-62%' } },
        { url: '/amber second and fourth floor plan.jpg', title: 'Second & Fourth Floor Plan', crop: { scale: '100%', marginLeft: '0%', marginTop: '0%', marginBottom: '-62%' } },
      ],
    }
  },
  {
    id: '3',
    number: '03',
    title: 'The Home with the Trapped Gardens',
    category: 'Individual Residence',
    imageUrl: 'https://i.postimg.cc/3NNGWzv0/Scene-6-(4).png',
    description: 'A unique individual residence built around internal courtyards and trapped gardens. Natural light and greenery seamlessly integrate into the living spaces.',
    details: {
      hideBrochure: true,
      hideMasterPlan: true,
      floorPlanImages: [
        { url: '/Hattangadi Ground Floor.jpg', title: 'Ground Floor Plan', crop: { scale: '60%', marginLeft: '20%', marginTop: '0%', marginBottom: '0%' } },
        { url: '/Hattangadi First Floor.jpg', title: 'First Floor Plan', crop: { scale: '60%', marginLeft: '20%', marginTop: '0%', marginBottom: '0%' } },
        { url: '/Hattangadi Second Floor.jpg', title: 'Second Floor Plan', crop: { scale: '60%', marginLeft: '20%', marginTop: '0%', marginBottom: '-15%' } },
        { url: '/Hattangadi Third Floor.jpg', title: 'Third Floor Plan', crop: { scale: '60%', marginLeft: '20%', marginTop: '0%', marginBottom: '-8%' } },
      ],
    },
    galleries: [
      {
        name: 'Exterior & Entrance',
        images: [
          { url: 'https://i.postimg.cc/sDsqXgP6/House-Front-at-Night.png', caption: 'House Front at Night' },
          { url: 'https://i.postimg.cc/ZK42R5Pf/House-Side-View.png', caption: 'House Side View' },
          { url: 'https://i.postimg.cc/dtwp1VRn/Main-House-Front-View.png', caption: 'Main House Front View' },
          { url: 'https://i.postimg.cc/wTgZvj5b/Small-Entry-Gate.png', caption: 'Small Entry Gate' }
        ]
      },
      {
        name: 'Balcony & Stairs',
        images: [
          { url: 'https://i.postimg.cc/pL9ZVwSk/Entry-Steps.png', caption: 'Entry Steps' },
          { url: 'https://i.postimg.cc/Njy4G3nP/Main-Balcony-View.png', caption: 'Main Balcony View' },
          { url: 'https://i.postimg.cc/QxYm38f0/Railing-Close-up.png', caption: 'Railing Close up' }
        ]
      },
      {
        name: 'Ground Level & Garden',
        images: [
          { url: 'https://i.postimg.cc/nrc4yg75/Car-Parking-Space.png', caption: 'Car Parking Space' },
          { url: 'https://i.postimg.cc/D0jrn6dM/Indoor-Garden-Seat.png', caption: 'Indoor Garden Seat' }
        ]
      }
    ]
  },
  {
    id: '4',
    number: '04',
    title: 'Masons Desk',
    category: 'Furniture design',
    imageUrl: 'https://i.postimg.cc/13ZQSGzv/Night-Scene-Hero-View.png',
    description: 'A bespoke furniture design piece crafted with precision and elegance. Combining functional ergonomics with minimalist aesthetics for the modern workspace.',
    galleries: [
      {
        name: 'Office Interiors',
        images: [
          { url: 'https://i.postimg.cc/zXhr4tqC/High-Angle.png', caption: 'High Angle' },
          { url: 'https://i.postimg.cc/T1L6dQgY/Low-Angle-Ceiling-Detail.png', caption: 'Low Angle Ceiling Detail' },
          { url: 'https://i.postimg.cc/Vvr8f4n5/Macro-Material-Detail.png', caption: 'Macro Material Detail' },
          { url: 'https://i.postimg.cc/13ZQSGzv/Night-Scene-Hero-View.png', caption: 'Night Scene Hero View' },
          { url: 'https://i.postimg.cc/Gt8CLzGL/Side-Eye-Level-View.png', caption: 'Side Eye Level View' },
          { url: 'https://i.postimg.cc/Gt8CLzGr/Wide-Corner-Perspective.png', caption: 'Wide Corner Perspective' }
        ]
      },
      {
        name: 'Office Exterior',
        images: [
          { url: 'https://i.postimg.cc/qvnvXBNZ/Straight-Front-Elevation.png', caption: 'Straight Front Elevation' }
        ]
      }
    ]
  },
  {
    id: '5',
    number: '05',
    title: 'The Spanish Dream',
    category: 'Villa Interiors',
    imageUrl: 'https://i.postimg.cc/d0nDd4v3/Enscape-2020-11-19-11-07-36-(1).png',
    description: 'Luxurious villa interiors inspired by classic Spanish architecture. Warm tones, rustic textures, and elegant detailing bring Mediterranean charm to life.',
    galleries: [
      {
        name: 'Kitchen Area',
        images: [
          { url: 'https://i.postimg.cc/9FZsNDdG/Kitchen-Corner-Perspective.png', caption: 'Kitchen Corner Perspective' },
          { url: 'https://i.postimg.cc/TYgBHKVV/Kitchen-Entrance-View.png', caption: 'Kitchen Entrance View' },
          { url: 'https://i.postimg.cc/ncBNwX47/Kitchen-Island-Detail-View.png', caption: 'Kitchen Island Detail View' },
          { url: 'https://i.postimg.cc/Qx1vnFQ1/Kitchen-Sink-Counter-View.png', caption: 'Kitchen Sink Counter View' }
        ]
      },
      {
        name: 'Living & Dining Areas',
        images: [
          { url: 'https://i.postimg.cc/MTHDkFgg/Dining-Area-Perspective-View.png', caption: 'Dining Area Perspective View' },
          { url: 'https://i.postimg.cc/SsRr0vHv/Formal-Living-Room-Front-View.png', caption: 'Formal Living Room Front View' },
          { url: 'https://i.postimg.cc/rmsJ6Pvc/Lounge-Arched-Reading-Nook.png', caption: 'Lounge Arched Reading Nook' },
          { url: 'https://i.postimg.cc/qRqLf5WY/Lounge-Center-View.png', caption: 'Lounge Center View' },
          { url: 'https://i.postimg.cc/NMF4hzZn/Open-Plan-Dining-Lounge.png', caption: 'Open Plan Dining Lounge' }
        ]
      }
    ]
  },
  {
    id: '6',
    number: '06',
    title: 'Riverstones',
    category: 'Residential Farm Development',
    imageUrl: 'https://i.postimg.cc/fWfQD02q/Scene-6-(2).png',
    description: 'An exclusive residential farm development featuring premium villas. Nestled along a gentle river, offering a perfect retreat with resort-style amenities.',
    galleries: [
      {
        name: 'Entrance',
        images: [
          { url: 'https://i.postimg.cc/SNncy9Tc/Entrance-Aerial-Top-View.png', caption: 'Entrance Aerial Top View' },
          { url: 'https://i.postimg.cc/yYD0VRQ3/Entrance-Front-Elevation.png', caption: 'Entrance Front Elevation' },
          { url: 'https://i.postimg.cc/TYBghPFB/Entrance-Night-View.png', caption: 'Entrance Night View' },
          { url: 'https://i.postimg.cc/Kv1tZTqB/Entrance-Perspective-(Daylight).png', caption: 'Entrance Perspective (Daylight)' },
          { url: 'https://i.postimg.cc/nVRvb2km/Water-Feature-Detail-View.png', caption: 'Water Feature Detail View' }
        ]
      },
      {
        name: 'Villa 1',
        images: [
          { url: 'https://i.postimg.cc/9FDnwJFG/Lily-Pond-Close-up.png', caption: 'Lily Pond Close up' },
          { url: 'https://i.postimg.cc/sDMNGwD4/Side-Perspective-Dusk.png', caption: 'Side Perspective Dusk' },
          { url: 'https://i.postimg.cc/4NjF6Vm8/Site-Plan-Aerial-View.png', caption: 'Site Plan Aerial View' },
          { url: 'https://i.postimg.cc/8P70ftPd/Veranda-Perspective-View.png', caption: 'Veranda Perspective View' },
          { url: 'https://i.postimg.cc/fTVrSBTC/Villa-Front-Elevation.png', caption: 'Villa Front Elevation' }
        ]
      },
      {
        name: 'Villa 2',
        images: [
          { url: 'https://i.postimg.cc/J0sCn82n/Courtyard-Daylight-View.png', caption: 'Courtyard Daylight View' },
          { url: 'https://i.postimg.cc/fL2hDyBZ/Courtyard-Evening-View.png', caption: 'Courtyard Evening View' },
          { url: 'https://i.postimg.cc/G271dtz5/Poolside-Perspective.png', caption: 'Poolside Perspective' },
          { url: 'https://i.postimg.cc/PJCnxHRr/Villa-Rear-Elevation.png', caption: 'Villa Rear Elevation' },
          { url: 'https://i.postimg.cc/qqNHRr5q/Wing-Perspective.png', caption: 'Wing Perspective' }
        ]
      },
      {
        name: 'Villa 3 Option 1',
        images: [
          { url: 'https://i.postimg.cc/KcXtgnp3/Full-Front-Elevation.png', caption: 'Full Front Elevation' },
          { url: 'https://i.postimg.cc/mL1QDdjF/Landscape-Feature-Pod-Close-Up.png', caption: 'Landscape Feature Pod Close Up' },
          { url: 'https://i.postimg.cc/v8R56W21/Outdoor-Bar-and-Deck-Perspective.png', caption: 'Outdoor Bar and Deck Perspective' },
          { url: 'https://i.postimg.cc/J7wjBbYs/Rear-Perspective-View.png', caption: 'Rear Perspective View' }
        ]
      },
      {
        name: 'Villa 3 Option 2',
        images: [
          { url: 'https://i.postimg.cc/Jmbk2Hd2/Front-Elevation-Landscape-View.png', caption: 'Front Elevation Landscape View' },
          { url: 'https://i.postimg.cc/rcSrPRYB/Front-Perspective-View.png', caption: 'Front Perspective View' },
          { url: 'https://i.postimg.cc/37gvc0b6/Outdoor-Deck-and-Bar-Close-Up.png', caption: 'Outdoor Deck and Bar Close Up' },
          { url: 'https://i.postimg.cc/tyhxMnm8/Rear-Patio-and-Garden-View.png', caption: 'Rear Patio and Garden View' },
          { url: 'https://i.postimg.cc/JMMkV7fm/Side-Perspective-View.png', caption: 'Side Perspective View' }
        ]
      }
    ],
    details: {
      brochureUrl: 'https://heyzine.com/flip-book/b0019a192e.html',
      masterPlanImages: [{ url: '/riverstone masterplan.jpg', crop: { scale: '60%', marginLeft: '20%', marginTop: '0%', marginBottom: '0%' } }],
      floorPlanImages: [
        { url: '/Villa 1 Floor Plan.jpg', title: 'Villa 1 Floor Plan', crop: { scale: '80%', marginLeft: '10%', marginTop: '5%', marginBottom: '5%' } },
        { url: '/Villa 2 Floor Plan.jpg', title: 'Villa 2 Floor Plan', crop: { scale: '80%', marginLeft: '10%', marginTop: '0%', marginBottom: '0%' } },
      ],
    }
  },
  {
    id: '7',
    number: '07',
    title: 'Number 10 Coffee Stall',
    category: 'Coffee Kiosk',
    imageUrl: 'https://i.postimg.cc/DwCvQCF5/External-Isometric-Overview.png',
    description: 'A compact and stylish coffee kiosk designed for high-footfall urban areas. Efficient layout meets inviting aesthetics to create the perfect coffee stop.',
    galleries: [
      {
        name: 'External & Overview',
        images: [
          { url: 'https://i.postimg.cc/DwCvQCF5/External-Isometric-Overview.png', caption: 'External Isometric Overview' },
          { url: 'https://i.postimg.cc/pL0WQ0xG/Front-Perspective-Wide.png', caption: 'Front Perspective Wide' }
        ]
      },
      {
        name: 'Internal & Close-ups',
        images: [
          { url: 'https://i.postimg.cc/ZqMqmwDD/Internal-Barista-Station.png', caption: 'Internal Barista Station' },
          { url: 'https://i.postimg.cc/vmNmy0Sk/Internal-Front-Counter.png', caption: 'Internal Front Counter' },
          { url: 'https://i.postimg.cc/VNVNwKH3/Internal-Main-Counter-Eye-Level.png', caption: 'Internal Main Counter Eye Level' },
          { url: 'https://i.postimg.cc/CKQK0c6t/Internal-Pastry-Display-Detail.png', caption: 'Internal Pastry Display Detail' }
        ]
      }
    ]
  },
  {
    id: '8',
    number: '08',
    title: 'Aura',
    category: 'Restobar',
    imageUrl: 'https://i.postimg.cc/BJcNqmgY/Bird-s-Eye-Perspective.png',
    description: 'A vibrant restobar featuring atmospheric lighting and contemporary design. The perfect setting for immersive dining and unforgettable evening experiences.',
    galleries: [
      {
        name: 'External Views',
        images: [
          { url: 'https://i.postimg.cc/BJcNqmgY/Bird-s-Eye-Perspective.png', caption: 'Birds Eye Perspective' },
          { url: 'https://i.postimg.cc/hKqpWkLq/Front-Elevation-Eye-Level.png', caption: 'Front Elevation Eye Level' },
          { url: 'https://i.postimg.cc/mTG8fvQ0/Front-Perspective-Wide-View.png', caption: 'Front Perspective Wide View' }
        ]
      },
      {
        name: 'External Detailed',
        images: [
          { url: 'https://i.postimg.cc/D26Ccx4X/Pergola-Detail-Close-up.png', caption: 'Pergola Detail Close up' },
          { url: 'https://i.postimg.cc/gYsMKgLL/Terrace-View-Mid-Shot.png', caption: 'Terrace View Mid Shot' }
        ]
      }
    ]
  },
  {
    id: '9',
    number: '09',
    title: 'Frames and Walls Office',
    category: 'Office space',
    imageUrl: 'https://i.postimg.cc/sfFNNvKZ/Front-View.png',
    description: 'A modern office space designed to foster creativity and collaboration. Features open workspaces, elegant meeting rooms, and inspiring executive cabins.',
    galleries: [
      {
        name: 'Exterior Views',
        images: [
          { url: 'https://i.postimg.cc/pxMk8Qdt/Gemini-Generated-Image-m1wpodm1wpodm1wp.png', caption: 'Front Elevation Dusk View', objectPosition: 'bottom' },
          { url: 'https://i.postimg.cc/FmXGcbK4/Gemini-Generated-Image-mh2qh7mh2qh7mh2q.png', caption: 'Front Perspective Daytime View' },
          { url: 'https://i.postimg.cc/dvcndRVX/Screenshot-2026-03-05-182720.png', caption: 'Aerial Top View', objectPosition: 'top' }
        ]
      }
    ]
  },
  {
    id: '10',
    number: '10',
    title: 'Hampi House',
    category: 'Office space',
    imageUrl: 'https://i.postimg.cc/FzzdFbCB/Full-building-Landscaping.png',
    description: 'A culturally inspired office space blending traditional elements with modern functionality. Designed to reflect heritage while supporting contemporary work styles.',
    galleries: [
      {
        name: 'Exterior',
        images: [
          { url: 'https://i.postimg.cc/FzzdFbCB/Full-building-Landscaping.png', caption: 'Full-building Landscaping' },
          { url: 'https://i.postimg.cc/wMMyx54X/Left-Angle-Perspective.png', caption: 'Left Angle Perspective' },
          { url: 'https://i.postimg.cc/Gtt83Pgq/Mesh-detail-Planters.png', caption: 'Mesh detail Planters' },
          { url: 'https://i.postimg.cc/4yy74v25/Showroom-Entrance.png', caption: 'Showroom Entrance' },
          { url: 'https://i.postimg.cc/zvQLyL4d/Urban-context-Solar-roof.png', caption: 'Urban context Solar roof' }
        ]
      }
    ]
  },
  {
    id: '11',
    number: '11',
    title: 'Ranka Oasis',
    category: 'Residential Plotted Development',
    imageUrl: 'https://i.postimg.cc/XjF68bLm/Front-Elevation-of-Twin-Villas.png',
    description: 'A serene gated residential community nestled in lush greenery. Ranka Oasis features elegantly designed twin villas and row homes with a grand entrance, landscaped streetscapes, and resort-style open spaces — offering a peaceful retreat from city life.',
    galleries: [
      {
        name: 'Entrance & Landscape',
        images: [
          { url: 'https://i.postimg.cc/NgZwmM6K/Main-Entrance-Gate-and-Statue-View.png', caption: 'Main Entrance Gate and Statue View' },
          { url: 'https://i.postimg.cc/Gc61G2FP/Security-Pavilion-and-Gate-Detail.png', caption: 'Security Pavilion and Gate Detail' },
          { url: 'https://i.postimg.cc/YpTwY96Z/Gate-and-Landscape-Master-Plan-View.png', caption: 'Gate and Landscape Master Plan View' }
        ]
      },
      {
        name: 'Villas',
        images: [
          { url: 'https://i.postimg.cc/XjF68bLm/Front-Elevation-of-Twin-Villas.png', caption: 'Front Elevation of Twin Villas' },
          { url: 'https://i.postimg.cc/CFRgRDqS/Row-Villa-Perspective-View.png', caption: 'Row Villa Perspective View' }
        ]
      }
    ],
    details: {
      brochureUrl: 'https://heyzine.com/flip-book/7e8d72e63f.html',
      masterPlanUrl: 'https://drive.google.com/file/d/1sfTPYhBjpLSosOn2G3H26dYoQgqgBwEP/preview',
    }
  },
];
