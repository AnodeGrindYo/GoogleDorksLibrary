// Google Dorks Database - Community Platforms Social Media
export const communityPlatformsDorks = [
    // Reddit
    {
        title: "Profils Reddit - Utilisateurs",
        code: 'site:reddit.com inurl:user "karma" OR "posts"',
        description: "Trouve des profils d'utilisateurs Reddit",
        category: "social"
    },
    {
        title: "Reddit - Subreddits populaires",
        code: 'site:reddit.com "subreddit" "members" OR "subscribers"',
        description: "Recherche des subreddits par popularité",
        category: "social"
    },
    {
        title: "Reddit - Posts viraux",
        code: 'site:reddit.com "upvotes" OR "gold" OR "platinum"',
        description: "Trouve des posts Reddit populaires",
        category: "social"
    },
    {
        title: "Reddit - AMAs",
        code: 'site:reddit.com "AMA" OR "Ask Me Anything"',
        description: "Recherche des sessions AMA sur Reddit",
        category: "social"
    },
    // Other Community Platforms
    {
        title: "Mastodon - Instances populaires",
        code: '"mastodon" "instance" OR "@" "toot" followers',
        description: "Trouve des profils sur instances Mastodon",
        category: "social"
    },
    {
        title: "Mastodon - Par serveur",
        code: '"mastodon.social" OR "mas.to" OR "fosstodon.org"',
        description: "Recherche par instance Mastodon spécifique",
        category: "social"
    },
    {
        title: "Threads - Profils Meta",
        code: 'site:threads.net "@" OR "profile" followers',
        description: "Recherche des profils sur Threads (Meta)",
        category: "social"
    },
    {
        title: "BeReal - Contenus publics",
        code: '"bereal" "authentic" OR "real" public',
        description: "Trouve du contenu BeReal accessible",
        category: "social"
    },
    {
        title: "Clubhouse - Profils et rooms",
        code: '"clubhouse" "room" OR "speaker" OR "host"',
        description: "Recherche des profils et rooms Clubhouse",
        category: "social"
    }
];