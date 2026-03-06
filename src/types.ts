export interface ProjectGalleryCategory {
  name: string;
  images: (string | { url: string; caption: string })[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  galleries?: ProjectGalleryCategory[];
}

export const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'Serenity Hillview',
    category: 'Residential Plotted Development',
    imageUrl: 'https://i.postimg.cc/MKZPmGyX/HILLVIEW-NIGHT-(1).png',
    description: 'A premium residential plotted development offering lush green landscapes and modern amenities. Experience tranquil living with thoughtfully designed spaces that harmonize with nature.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/Z53YHYnZ/Entrance.png', caption: 'Entrance' },
          { url: 'https://i.postimg.cc/RZfCdChS/Entrance-Gateway-Vista.png', caption: 'Entrance Gateway Vista' },
          { url: 'https://i.postimg.cc/vZ98h8TQ/Landscape-Pathway.png', caption: 'Landscape Pathway' },
          { url: 'https://i.postimg.cc/jSNqcq2j/Main-Axis-Intersection.png', caption: 'Main Axis Intersection' },
          { url: 'https://i.postimg.cc/FK4rBtkF/Palm-Grove-Corner.png', caption: 'Palm Grove Corner' },
          { url: 'https://i.postimg.cc/Lsp9bdgY/Palm-Walkway.png', caption: 'Palm Walkway' },
          { url: 'https://i.postimg.cc/yNH1bq3Z/Quiet-Corner.png', caption: 'Quiet Corner' }
        ]
      }
    ]
  },
  {
    id: '2',
    number: '02',
    title: 'Amber',
    category: 'Apartment',
    imageUrl: 'https://i.postimg.cc/t44gbFFT/Whats_App_Image_2026_02_27_at_17_24_51.jpg',
    description: 'An elegant apartment complex featuring contemporary architecture and luxurious interiors. Designed for urban living with a perfect blend of comfort and sophistication.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/t44gbFFT/Whats_App_Image_2026_02_27_at_17_24_51.jpg', caption: 'Full view' }
        ]
      }
    ]
  },
  {
    id: '3',
    number: '03',
    title: 'Terragreens',
    category: 'Residential Farm Development',
    imageUrl: 'https://i.postimg.cc/HxH4WSzX/1-(5).png',
    description: 'A sprawling residential farm development that brings you closer to nature. Enjoy spacious farmhouses surrounded by organic gardens and serene landscapes.',
    galleries: [
      {
        name: 'Site Entrance',
        images: [
          { url: 'https://i.postimg.cc/RF4TvNfb/Aerial-Entrance-View.jpg', caption: 'Aerial Entrance View' },
          { url: 'https://i.postimg.cc/xdKRrKkw/Entrance-Gatehouse.jpg', caption: 'Entrance Gatehouse' },
          { url: 'https://i.postimg.cc/BvxgWx8d/Gate-Side-View.jpg', caption: 'Gate Side View' },
          { url: 'https://i.postimg.cc/s2Fc0n2h/Main-Entrance-Gate.jpg', caption: 'Main Entrance Gate' }
        ]
      },
      {
        name: 'Villa Areas',
        images: [
          { url: 'https://i.postimg.cc/RVgCR8XY/Front-Yard.png', caption: 'Front Yard' },
          { url: 'https://i.postimg.cc/QdV8nbzd/Garden-View.png', caption: 'Garden View' },
          { url: 'https://i.postimg.cc/kXTMcZf0/House-Exterior.png', caption: 'House Exterior' },
          { url: 'https://i.postimg.cc/jS9xVfV5/Outdoor-Seating.png', caption: 'Outdoor Seating' },
          { url: 'https://i.postimg.cc/8PZkH3tq/Side-Pond.png', caption: 'Side Pond' },
          { url: 'https://i.postimg.cc/m2mZwq8J/Swimming-Pool.png', caption: 'Swimming Pool' }
        ]
      }
    ]
  },
  {
    id: '4',
    number: '04',
    title: 'The Home with the Trapped Gardens',
    category: 'Individual Residence',
    imageUrl: 'https://i.postimg.cc/3NNGWzv0/Scene-6-(4).png',
    description: 'A unique individual residence built around internal courtyards and trapped gardens. Natural light and greenery seamlessly integrate into the living spaces.',
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
    id: '5',
    number: '05',
    title: 'Masons Desk',
    category: 'Furniture design',
    imageUrl: 'https://i.postimg.cc/LXCYdvbP/IMG-1025.png',
    description: 'A bespoke furniture design piece crafted with precision and elegance. Combining functional ergonomics with minimalist aesthetics for the modern workspace.',
    galleries: [
      {
        name: 'Office Interior',
        images: [
          { url: 'https://i.postimg.cc/GmxyhjCQ/Desk-Side-View.jpg', caption: 'Desk Side View' },
          { url: 'https://i.postimg.cc/DzfbWbfr/Full-Office-Perspective.png', caption: 'Full Office Perspective' },
          { url: 'https://i.postimg.cc/N0GryrGy/Office-Night-View.png', caption: 'Office Night View' },
          { url: 'https://i.postimg.cc/wBxstsxB/Office-Overview.png', caption: 'Office Overview' },
          { url: 'https://i.postimg.cc/N0GryrGf/Workspace-Top-Angle.png', caption: 'Workspace Top Angle' }
        ]
      },
      {
        name: 'Design & Furniture',
        images: [
          { url: 'https://i.postimg.cc/Vvzy11B4/Brick-Desk-Base.png', caption: 'Brick Desk Base' },
          { url: 'https://i.postimg.cc/NFQhYY7D/Desk-Surface-Close-up.png', caption: 'Desk Surface Close up' },
          { url: 'https://i.postimg.cc/C1GyWdDm/Table-Top-Detail.png', caption: 'Table Top Detail' }
        ]
      }
    ]
  },
  {
    id: '6',
    number: '06',
    title: 'White and Grey',
    category: 'Individual Residence',
    imageUrl: 'https://i.postimg.cc/CLXw39MP/Whats-App-Image-2025-08-06-at-12-20-19-PM-(2).jpg',
    description: 'A modern individual residence characterized by its striking monochromatic palette. Clean lines and minimalist design create a sophisticated and timeless home.',
    galleries: [
      {
        name: 'Exterior Views',
        images: [
          { url: 'https://i.postimg.cc/4dHJSJNm/Daytime-Exterior-Perspective.jpg', caption: 'Daytime Exterior Perspective' },
          { url: 'https://i.postimg.cc/yd3VbVYd/Night-time-Exterior-Perspective.jpg', caption: 'Night time Exterior Perspective' },
          { url: 'https://i.postimg.cc/85f101Pc/Side-Entrance-and-Garage-View.jpg', caption: 'Side Entrance and Garage View' }
        ]
      },
      {
        name: 'Kitchen & Dining',
        images: [
          { url: 'https://i.postimg.cc/FF2fmB2T/Formal-Dining-Area-and-Bar-Lounge.jpg', caption: 'Formal Dining Area and Bar Lounge' },
          { url: 'https://i.postimg.cc/RCj39Dkr/Kitchen-Perspective-with-Geometric-Ceiling-Detail.png', caption: 'Kitchen Perspective with Geometric Ceiling Detail' },
          { url: 'https://i.postimg.cc/SQwXqvww/Modern-Kitchen-Cabinetry.png', caption: 'Modern Kitchen Cabinetry' }
        ]
      },
      {
        name: 'Living Area',
        images: [
          { url: 'https://i.postimg.cc/fLVLQcC5/Living-Room-Lounge-with-Marble-Wall-Accents.jpg', caption: 'Living Room Lounge with Marble Wall Accents' },
          { url: 'https://i.postimg.cc/hjXjRLss/Main-Living-Area-Television-Feature-Wall.jpg', caption: 'Main Living Area Television Feature Wall' }
        ]
      }
    ]
  },
  {
    id: '7',
    number: '07',
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
    id: '8',
    number: '08',
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
        name: 'Villa 3',
        images: [
          { url: 'https://i.postimg.cc/jqySyQgP/Angular-Wing-Perspective.png', caption: 'Angular Wing Perspective' },
          { url: 'https://i.postimg.cc/L6T4b4F0/Garden-Elevation.png', caption: 'Garden Elevation' },
          { url: 'https://i.postimg.cc/zDTGTStn/Outdoor-Bar.png', caption: 'Outdoor Bar' },
          { url: 'https://i.postimg.cc/FF0H0gWc/Terrace-Perspective.png', caption: 'Terrace Perspective' },
          { url: 'https://i.postimg.cc/02x2nMFb/Veranda-Perspective.png', caption: 'Veranda Perspective' }
        ]
      }
    ]
  },
  {
    id: '9',
    number: '09',
    title: 'Number 10 Coffee Stall',
    category: 'Coffee Kiosk',
    imageUrl: 'https://i.postimg.cc/d00Z5z54/Gemini-Generated-Image-o6bk1eo6bk1eo6bk.png',
    description: 'A compact and stylish coffee kiosk designed for high-footfall urban areas. Efficient layout meets inviting aesthetics to create the perfect coffee stop.',
    galleries: [
      {
        name: 'Exterior Views',
        images: [
          { url: 'https://i.postimg.cc/cJpy929M/Isometric-Aerial-View.png', caption: 'Isometric Aerial View' },
          { url: 'https://i.postimg.cc/QM2G4w4T/Three-Quarter-Perspective.png', caption: 'Three Quarter Perspective' },
          { url: 'https://i.postimg.cc/VNxQGpGt/Wide-Exterior-Side-View.png', caption: 'Wide Exterior Side View' }
        ]
      },
      {
        name: 'Interior & Close-Up Views',
        images: [
          { url: 'https://i.postimg.cc/zBCMdBHs/Barista-Eye-Level-View.png', caption: 'Barista Eye Level View' },
          { url: 'https://i.postimg.cc/sXY8nXZd/Entrance-Branding-Close-Up.png', caption: 'Entrance Branding Close Up' },
          { url: 'https://i.postimg.cc/yx7G2HFH/Full-Frontal-View.png', caption: 'Full Frontal View' },
          { url: 'https://i.postimg.cc/QtQP6tWL/Left-Angle-Interior-Detail.png', caption: 'Left Angle Interior Detail' }
        ]
      }
    ]
  },
  {
    id: '10',
    number: '10',
    title: 'Aura',
    category: 'Restobar',
    imageUrl: 'https://i.postimg.cc/7YskgdT2/Scene-1(1)-effect-(1).png',
    description: 'A vibrant restobar featuring atmospheric lighting and contemporary design. The perfect setting for immersive dining and unforgettable evening experiences.',
    galleries: [
      {
        name: 'Exterior Views',
        images: [
          { url: 'https://i.postimg.cc/h4sgcS2q/Balcony-Pergola-Detail-(High-Angle-Close-up).png', caption: 'Balcony Pergola Detail (High Angle Close up)' },
          { url: 'https://i.postimg.cc/Kj0yNN1R/Entrance-and-Signage-Detail-(Angular-View).png', caption: 'Entrance and Signage Detail (Angular View)' },
          { url: 'https://i.postimg.cc/5ysM33XX/Front-Elevation-(Wide-Shot).png', caption: 'Front Elevation (Wide Shot)' },
          { url: 'https://i.postimg.cc/7hKyVV52/Front-Left-Corner-Perspective-(Street-View).png', caption: 'Front Left Corner Perspective (Street View)' },
          { url: 'https://i.postimg.cc/j2MrXXDC/Low-Angle-Facade-(Worm-s-Eye-View).png', caption: 'Low Angle Facade (Worm s Eye View)' },
          { url: 'https://i.postimg.cc/brmjTTZG/Main-Entrance-Facade-(Straight-on-View).png', caption: 'Main Entrance Facade (Straight on View)' },
          { url: 'https://i.postimg.cc/qq1dLLNy/Primary-Front-Perspective-(Full-View).png', caption: 'Primary Front Perspective (Full View)' }
        ]
      },
      {
        name: 'Interior / Transition Views',
        images: [
          { url: 'https://i.postimg.cc/d3HzdVft/Interior-to-Exterior-Transition-(View-through-Main-Doors).png', caption: 'Interior to Exterior Transition' }
        ]
      }
    ]
  },
  {
    id: '11',
    number: '11',
    title: 'Frames and Walls Office',
    category: 'Office space',
    imageUrl: 'https://i.postimg.cc/fyswrdws/1-(2).jpg',
    description: 'A modern office space designed to foster creativity and collaboration. Features open workspaces, elegant meeting rooms, and inspiring executive cabins.',
    galleries: [
      {
        name: 'Exterior Views',
        images: [
          { url: 'https://i.postimg.cc/SQVWbM8Z/Gemini-Generated-Image-m1wpodm1wpodm1wp.png', caption: 'Exterior View' }
        ]
      }
    ]
  },
  {
    id: '12',
    number: '12',
    title: 'Hampi House',
    category: 'Office space',
    imageUrl: 'https://i.postimg.cc/YChFpcHq/Scene-4-(1)-(1).png',
    description: 'A culturally inspired office space blending traditional elements with modern functionality. Designed to reflect heritage while supporting contemporary work styles.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/2mg16qjR/Scene-4-(1)-(3).png', caption: 'Exterior View' },
          { url: 'https://i.postimg.cc/sybMXBjt/Scene2-(1)-(1).png', caption: 'Interior Workspace' }
        ]
      }
    ]
  },
];
