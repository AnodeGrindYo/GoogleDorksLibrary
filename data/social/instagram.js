// Google Dorks Database - Instagram Social Media
export const instagramDorks = [
    {
        title: "Profils Instagram généraux",
        code: 'site:instagram.com "bio" OR "followers"',
        description: "Recherche des profils Instagram avec bio visible",
        category: "social"
    },
    {
        title: "Instagram - Influenceurs",
        code: 'site:instagram.com "influencer" OR "blogger" followers',
        description: "Trouve des comptes d'influenceurs Instagram",
        category: "social"
    },
    {
        title: "Instagram - Par hashtag",
        code: 'site:instagram.com "#travel" OR "#food" OR "#fashion"',
        description: "Recherche par hashtags populaires Instagram",
        category: "social"
    },
    {
        title: "Instagram - Comptes vérifiés",
        code: 'site:instagram.com "verified" OR "✓" followers',
        description: "Trouve des comptes Instagram vérifiés",
        category: "social"
    },
    {
        title: "Instagram - Stories et Highlights",
        code: 'site:instagram.com "story" OR "highlight" OR "stories"',
        description: "Recherche du contenu Stories Instagram",
        category: "social"
    },
    {
        title: "Instagram - Cibler un compte précis (par pseudo)",
        code: 'site:instagram.com inurl:USERNAME',
        description: "Recherche directe vers le profil d’un utilisateur Instagram spécifique (remplacer USERNAME)",
        category: "social"
    },
    {
        title: "Instagram - Bio d’un utilisateur spécifique",
        code: 'site:instagram.com inurl:USERNAME "bio"',
        description: "Affiche les pages contenant la bio d’un compte Instagram précis",
        category: "social"
    },
    {
        title: "Instagram - Mentions du compte ailleurs",
        code: '"@USERNAME" site:*.com -site:instagram.com',
        description: "Trouve des pages extérieures mentionnant le compte Instagram (remplacer USERNAME)",
        category: "social"
    },
    {
        title: "Instagram - Liens vers publications d’un compte",
        code: 'site:instagram.com/USERNAME/ "likes" OR "comments"',
        description: "Affiche les publications d’un utilisateur (remplacer USERNAME par le pseudo)",
        category: "social"
    },
    {
        title: "Instagram - Stories & Highlights d’un compte",
        code: 'site:instagram.com/USERNAME/ "stories" OR "highlights"',
        description: "Recherche les stories/highlights d’un compte spécifique",
        category: "social"
    }
];