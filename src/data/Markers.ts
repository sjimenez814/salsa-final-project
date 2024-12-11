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
            '/assets/Biltmore-Ballroom-vid.mp4',
        ], // Array of image URLs
    }
    ,
    {
        position: [40.7313, -73.9826] as [number, number], // Approximate location for 181 2nd Avenue, East Village, NYC
        title: 'Negril Nightclub',
        location: '181 2nd Avenue, East Village, NYC',
        description: `The Negril Nightclub was a legendary venue located in the basement of 181 2nd Avenue in the East Village, NYC. With a capacity of 200 people, this small but influential club was a hotspot for diverse crowds, with people from different backgrounds, religions, and ethnicities coming together to party.

        Known for its exceptional advertising, the Negril Nightclub became a vital part of New York's nightlife scene. It helped popularize hip hop music, with events like "hip-hop nights" attracting new faces and fostering a unique cultural exchange.

        The club’s impact on the rise of hip hop music in the U.S. is significant, as it provided a space where reggae-influenced hip hop artists could connect with the public and spread the genre across the country.`,
        images: [
            'https://media.villagepreservation.org/wp-content/uploads/2023/09/12151408/181-2nd-Ave-1975.jpg', // Replace with relevant images or use placeholders
            'https://media.villagepreservation.org/wp-content/uploads/2023/09/12150923/1982-negrill-flier.jpg',
        ],  // Array of image URLs
    },
    // Add more markers here...
];
