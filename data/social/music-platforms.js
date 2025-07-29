// Google Dorks Database - Music Platforms Social Media
export const musicPlatformsDorks = [
    // SoundCloud
    {
        title: "SoundCloud - Artistes",
        code: 'site:soundcloud.com "tracks" OR "followers" artist',
        description: "Trouve des artistes et créateurs SoundCloud",
        category: "social"
    },
    {
        title: "SoundCloud - Par genre",
        code: 'site:soundcloud.com "electronic" OR "hip-hop" OR "jazz"',
        description: "Recherche de musique par genre sur SoundCloud",
        category: "social"
    },
    {
        title: "SoundCloud - Playlists populaires",
        code: 'site:soundcloud.com "playlist" plays OR likes',
        description: "Trouve des playlists SoundCloud populaires",
        category: "social"
    },
    // Spotify
    {
        title: "Spotify - Artistes vérifiés",
        code: 'site:open.spotify.com "artist" verified OR "monthly listeners"',
        description: "Recherche d'artistes Spotify vérifiés",
        category: "social"
    },
    {
        title: "Spotify - Playlists publiques",
        code: 'site:open.spotify.com "playlist" followers OR "collaborative"',
        description: "Trouve des playlists Spotify populaires",
        category: "social"
    },
    // Other Music Platforms
    {
        title: "Apple Music - Artistes",
        code: '"apple music" "artist" OR "album" streams',
        description: "Recherche d'artistes sur Apple Music",
        category: "social"
    },
    {
        title: "Bandcamp - Musiciens indépendants",
        code: 'site:bandcamp.com "artist" OR "album" indie',
        description: "Trouve des musiciens indépendants sur Bandcamp",
        category: "social"
    }
];