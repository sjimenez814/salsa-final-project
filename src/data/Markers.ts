// src/data/markers.ts

export const markers = [
    {
        position: [40.645042, -73.956345] as [number, number], // Approximate location for 2230 Church Ave, Brooklyn
        title: 'Biltmore Ballroom',
        location: '2230 Church Ave, Brooklyn, NY',
        description: `The Biltmore Ballroom was a notable venue in Brooklyn, NY, known for hosting reggae performances in the 90s. One such event featured Captain Remo, a reggae artist who toured extensively across the U.S., Europe, and other continents during this time. His music emphasized world peace and love, drawing comparisons to bands addressing social justice, such as Calle Trece.
    
    A poster from this event reveals interesting cultural aspects of the time:
    - Doors opened at 10:30 P.M., but attendees likely arrived much later, reflecting nightlife patterns discussed by Prof. Washburne.
    - Single women were admitted for free, highlighting the gendered dynamics of event promotion during the era. This aligns with broader discussions about the portrayal and perception of women in reggae culture during the 90s.
    - The poster exclusively featured male artists and emphasized themes relevant to the Jamaican music scene.
    
    This event provides a lens into both the cultural norms of the 90s and the broader significance of reggae music in promoting peace, love, and social commentary.`,
        images: [
            '/assets/biltmore-ballroom.png',
            'https://64.media.tumblr.com/99a98143068744bef5becb3335f11f32/54c4ceeeda7367ee-b5/s500x750/f214d8d29082e0f607763b534da502f621d62699.jpg', // Additional placeholder images
            'https://via.placeholder.com/500x300',
        ], // Array of image URLs
    }
    ,
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
