export interface Photo {
	id: number;
	title: string;
	category: 'portrait' | 'landscape' | 'street' | 'nature' | 'events';
	image: string;
	description?: string;
	location?: string;
	date?: string;
	camera?: string;
	settings?: {
		aperture?: string;
		shutter?: string;
		iso?: string;
		focal?: string;
	};
}

export const photographyCategories = [
	{ id: 'all', name: 'All', count: 15 },
	{ id: 'portrait', name: 'Portrait', count: 4 },
	{ id: 'landscape', name: 'Landscape', count: 4 },
	{ id: 'street', name: 'Street', count: 3 },
	{ id: 'nature', name: 'Nature', count: 2 },
	{ id: 'events', name: 'Events', count: 2 }
];

export const photographyData: Photo[] = [
	// Portrait Photography
	{
		id: 1,
		title: "Golden Hour Portrait",
		category: "portrait",
		image: "/images/photography/portraits/golden-hour.jpg",
		description: "Natural light portrait capturing the warm glow of sunset",
		location: "Central Park, NYC",
		date: "2023-09-15",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/1.8",
			shutter: "1/200s",
			iso: "ISO 400",
			focal: "85mm"
		}
	},
	{
		id: 2,
		title: "Studio Headshot",
		category: "portrait",
		image: "/images/photography/portraits/studio-headshot.jpg",
		description: "Professional headshot with controlled lighting setup",
		location: "Studio, Brooklyn",
		date: "2023-08-22",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/2.8",
			shutter: "1/125s",
			iso: "ISO 200",
			focal: "85mm"
		}
	},
	{
		id: 3,
		title: "Street Portrait",
		category: "portrait",
		image: "/images/photography/portraits/street-portrait.jpg",
		description: "Candid portrait in urban environment",
		location: "SoHo, NYC",
		date: "2023-07-10",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/2.0",
			shutter: "1/160s",
			iso: "ISO 800",
			focal: "50mm"
		}
	},
	{
		id: 4,
		title: "Environmental Portrait",
		category: "portrait",
		image: "/images/photography/portraits/environmental.jpg",
		description: "Subject captured in their natural working environment",
		location: "Tech Office, Manhattan",
		date: "2023-06-18",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/1.4",
			shutter: "1/100s",
			iso: "ISO 1600",
			focal: "35mm"
		}
	},

	// Landscape Photography
	{
		id: 5,
		title: "Mountain Sunrise",
		category: "landscape",
		image: "/images/photography/landscapes/mountain-sunrise.jpg",
		description: "First light hitting mountain peaks in the Adirondacks",
		location: "Adirondack Mountains, NY",
		date: "2023-10-05",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/8.0",
			shutter: "1/30s",
			iso: "ISO 100",
			focal: "24mm"
		}
	},
	{
		id: 6,
		title: "Coastal Sunset",
		category: "landscape",
		image: "/images/photography/landscapes/coastal-sunset.jpg",
		description: "Dramatic sunset over the Atlantic coastline",
		location: "Montauk Point, NY",
		date: "2023-09-28",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/11",
			shutter: "1/60s",
			iso: "ISO 100",
			focal: "16mm"
		}
	},
	{
		id: 7,
		title: "Forest Path",
		category: "landscape",
		image: "/images/photography/landscapes/forest-path.jpg",
		description: "Misty morning trail through old growth forest",
		location: "Catskill Mountains, NY",
		date: "2023-09-12",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/5.6",
			shutter: "1/15s",
			iso: "ISO 400",
			focal: "35mm"
		}
	},
	{
		id: 8,
		title: "City Skyline",
		category: "landscape",
		image: "/images/photography/landscapes/city-skyline.jpg",
		description: "Manhattan skyline from Brooklyn Bridge at blue hour",
		location: "Brooklyn Bridge, NYC",
		date: "2023-08-15",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/8.0",
			shutter: "8s",
			iso: "ISO 100",
			focal: "24mm"
		}
	},

	// Street Photography
	{
		id: 9,
		title: "Urban Motion",
		category: "street",
		image: "/images/photography/street/urban-motion.jpg",
		description: "Capturing the energy of city life through motion blur",
		location: "Times Square, NYC",
		date: "2023-11-02",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/4.0",
			shutter: "1/15s",
			iso: "ISO 800",
			focal: "35mm"
		}
	},
	{
		id: 10,
		title: "Street Vendor",
		category: "street",
		image: "/images/photography/street/vendor.jpg",
		description: "Local vendor preparing food in afternoon light",
		location: "Chinatown, NYC",
		date: "2023-10-20",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/2.8",
			shutter: "1/125s",
			iso: "ISO 1000",
			focal: "50mm"
		}
	},
	{
		id: 11,
		title: "Architecture Lines",
		category: "street",
		image: "/images/photography/street/architecture.jpg",
		description: "Geometric patterns in modern urban architecture",
		location: "Financial District, NYC",
		date: "2023-10-08",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/8.0",
			shutter: "1/200s",
			iso: "ISO 200",
			focal: "16mm"
		}
	},

	// Nature Photography
	{
		id: 12,
		title: "Autumn Reflection",
		category: "nature",
		image: "/images/photography/nature/autumn-reflection.jpg",
		description: "Fall foliage reflected in still mountain lake",
		location: "Lake Placid, NY",
		date: "2023-10-15",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/11",
			shutter: "1/30s",
			iso: "ISO 100",
			focal: "70mm"
		}
	},
	{
		id: 13,
		title: "Wildflower Meadow",
		category: "nature",
		image: "/images/photography/nature/wildflowers.jpg",
		description: "Spring wildflowers in natural meadow setting",
		location: "Hudson Valley, NY",
		date: "2023-05-22",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/4.0",
			shutter: "1/250s",
			iso: "ISO 200",
			focal: "100mm"
		}
	},

	// Events Photography
	{
		id: 14,
		title: "Tech Conference",
		category: "events",
		image: "/images/photography/events/tech-conference.jpg",
		description: "Keynote presentation at annual tech conference",
		location: "Javits Center, NYC",
		date: "2023-09-30",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/2.8",
			shutter: "1/100s",
			iso: "ISO 3200",
			focal: "24mm"
		}
	},
	{
		id: 15,
		title: "Wedding Ceremony",
		category: "events",
		image: "/images/photography/events/wedding.jpg",
		description: "Intimate outdoor wedding ceremony moment",
		location: "Hudson Valley, NY",
		date: "2023-08-05",
		camera: "Canon EOS R5",
		settings: {
			aperture: "f/1.8",
			shutter: "1/200s",
			iso: "ISO 800",
			focal: "85mm"
		}
	}
];

export const getPhotosByCategory = (category: string): Photo[] => {
	if (category === 'all') {
		return photographyData;
	}
	return photographyData.filter(photo => photo.category === category);
};