// Google Dorks Database - Video Platforms Social Media
export const videoPlatformsDorks = [
    // TikTok
    {
        title: "Profils TikTok",
        code: 'site:tiktok.com "@" "followers" OR "following"',
        description: "Trouve des profils TikTok avec statistiques",
        category: "social"
    },
    {
        title: "TikTok - Créateurs populaires",
        code: 'site:tiktok.com "creator" OR "viral" millions',
        description: "Recherche des créateurs TikTok populaires",
        category: "social"
    },
    {
        title: "TikTok - Par contenu",
        code: 'site:tiktok.com "dance" OR "comedy" OR "educational"',
        description: "Trouve des créateurs par type de contenu",
        category: "social"
    },
    // YouTube
    {
        title: "Profils YouTube - Chaînes",
        code: 'site:youtube.com inurl:channel OR inurl:user',
        description: "Recherche des chaînes et utilisateurs YouTube",
        category: "social"
    },
    {
        title: "YouTube - Par abonnés",
        code: 'site:youtube.com "subscribers" million OR thousand',
        description: "Trouve des chaînes par nombre d\'abonnés",
        category: "social"
    },
    {
        title: "YouTube - Par catégorie",
        code: 'site:youtube.com "gaming" OR "music" OR "education" channel',
        description: "Recherche des chaînes par catégorie",
        category: "social"
    },
    {
        title: "YouTube - Playlists publiques",
        code: 'site:youtube.com "playlist" "videos" public',
        description: "Trouve des playlists YouTube publiques",
        category: "social"
    },
    // Twitch
    {
        title: "Twitch - Streamers populaires",
        code: 'site:twitch.tv "streamer" OR "followers" viewers',
        description: "Recherche des streamers Twitch populaires",
        category: "social"
    },
    {
        title: "Twitch - Par jeu",
        code: 'site:twitch.tv "playing" "Fortnite" OR "Minecraft" OR "League"',
        description: "Trouve des streamers par jeu",
        category: "social"
    },
    {
        title: "Twitch - Clips viraux",
        code: 'site:twitch.tv "clip" views OR "highlight"',
        description: "Recherche des clips Twitch populaires",
        category: "social"
    },
    // Vimeo
    {
        title: "Vimeo - Créateurs",
        code: 'site:vimeo.com "videos" OR "channel" creator',
        description: "Recherche des créateurs de contenu Vimeo",
        category: "social"
    },
    {
        title: "Vimeo - Vidéos premium",
        code: 'site:vimeo.com "on demand" OR "premium" OR "pro"',
        description: "Trouve du contenu Vimeo premium",
        category: "social"
    }
];