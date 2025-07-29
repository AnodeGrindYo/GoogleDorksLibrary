// Google Dorks Database - Login Category
export const loginDorks = [
    {
        title: "Pages de connexion",
        code: 'inurl:login OR inurl:signin OR "login page"',
        description: "Trouve des pages de connexion sur différents sites",
        category: "login"
    },
    {
        title: "Pages d'administration",
        code: 'inurl:admin OR inurl:administrator OR inurl:wp-admin',
        description: "Trouve des interfaces d'administration",
        category: "login"
    },
    {
        title: "Panneaux de contrôle",
        code: 'intitle:"control panel" OR intitle:"admin panel"',
        description: "Recherche des panneaux de contrôle admin",
        category: "login"
    },
    {
        title: "Pages d'authentification",
        code: 'inurl:auth OR inurl:authentication OR "sign in"',
        description: "Trouve diverses pages d'authentification",
        category: "login"
    },
    {
        title: "Interfaces CMS",
        code: 'inurl:wp-admin OR inurl:joomla OR inurl:drupal',
        description: "Recherche des interfaces d'administration CMS",
        category: "login"
    },
    {
        title: "Portails d'entreprise",
        code: 'intitle:"employee portal" OR intitle:"staff login"',
        description: "Trouve des portails de connexion employés",
        category: "login"
    },
    {
        title: "Webmail et email",
        code: 'inurl:webmail OR intitle:"mail login" OR "email access"',
        description: "Recherche des interfaces webmail",
        category: "login"
    }
];