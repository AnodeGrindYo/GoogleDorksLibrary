// Google Dorks Database - Gaming Platforms Social Media
export const gamingPlatformsDorks = [
    // Steam
    {
        title: "Steam - Profils de joueurs",
        code: 'site:steamcommunity.com "profile" OR "id" games',
        description: "Trouve des profils de joueurs Steam",
        category: "social"
    },
    {
        title: "Steam - Groupes de jeu",
        code: 'site:steamcommunity.com "group" members OR "community"',
        description: "Recherche des groupes et communautés Steam",
        category: "social"
    },
    // Console Platforms
    {
        title: "Epic Games - Profils publics",
        code: '"epic games" "profile" OR "fortnite" public',
        description: "Trouve des profils Epic Games accessibles",
        category: "social"
    },
    {
        title: "Xbox Live - Gamertags",
        code: '"xbox live" "gamertag" OR "profile" achievements',
        description: "Recherche des profils Xbox Live",
        category: "social"
    },
    {
        title: "PlayStation Network - Profils",
        code: '"playstation" "PSN" OR "gamer profile" trophies',
        description: "Trouve des profils PlayStation Network",
        category: "social"
    },
    {
        title: "Nintendo - Codes d'ami",
        code: '"nintendo" "friend code" OR "switch" profile',
        description: "Recherche des profils et codes Nintendo",
        category: "social"
    }
];