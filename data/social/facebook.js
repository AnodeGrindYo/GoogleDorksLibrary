// Google Dorks Database - Facebook Social Media
export const facebookDorks = [
    {
        title: "Profils Facebook publics",
        code: 'site:facebook.com inurl:profile OR inurl:people',
        description: "Trouve des profils Facebook accessibles publiquement",
        category: "social"
    },
    {
        title: "Facebook - Pages d'entreprise",
        code: 'site:facebook.com "company" OR "business" "about"',
        description: "Recherche des pages d'entreprises Facebook",
        category: "social"
    },
    {
        title: "Facebook - Groupes publics",
        code: 'site:facebook.com "group" OR "community" "members"',
        description: "Trouve des groupes Facebook accessibles",
        category: "social"
    },
    {
        title: "Facebook - Événements",
        code: 'site:facebook.com "event" "date" OR "location"',
        description: "Recherche des événements Facebook publics",
        category: "social"
    }
];