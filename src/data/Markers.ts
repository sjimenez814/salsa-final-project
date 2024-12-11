// src/data/markers.ts

export const markers = [
    {
        position: [40.73061, -73.935242] as [number, number],
        title: 'Venue 1',
        location: 'Brooklyn, NY',
        description: `This is a description of Venue 1.
        
        It has multiple lines to describe various aspects of the venue.
        You can include any information about the venue like events, schedule, or history.`,
        images: [
            'https://via.placeholder.com/500x300',
            'https://via.placeholder.com/500x300',
            'https://via.placeholder.com/500x300',
        ],  // Array of image URLs
    },
    {
        position: [40.7527, -73.9772] as [number, number],
        title: 'Venue 2',
        location: 'Manhattan, NY',
        description: `Venue 2 is a larger place with great acoustics.
        
        It hosts concerts, festivals, and other musical events. The venue also offers food and drinks during events.`,
        images: [
            'https://via.placeholder.com/500x300',
            'https://via.placeholder.com/500x300',
        ],
    },
    // Add more markers here...
];
