// Google Dorks Database - Information Category
export const infoDorks = [
    {
        title: "Adresses email",
        code: '"@gmail.com" OR "@yahoo.com" OR "@hotmail.com"',
        description: "Recherche des adresses email sur des domaines populaires",
        category: "info"
    },
    {
        title: "Numéros de téléphone",
        code: '"phone" OR "tel" OR "mobile" +33 OR +1 OR +44',
        description: "Recherche des numéros de téléphone avec indicatifs pays",
        category: "info"
    },
    {
        title: "Adresses physiques",
        code: '"address" OR "location" "street" OR "avenue" OR "boulevard"',
        description: "Trouve des adresses physiques et localisations",
        category: "info"
    },
    {
        title: "Informations de contact",
        code: '"contact us" OR "contact information" "email" OR "phone"',
        description: "Recherche des pages de contact avec coordonnées",
        category: "info"
    },
    {
        title: "Dates de naissance",
        code: '"date of birth" OR "born on" OR "birthday"',
        description: "Trouve des informations sur les dates de naissance",
        category: "info"
    },
    {
        title: "Numéros d'identification",
        code: '"social security" OR "ID number" OR "passport"',
        description: "Recherche des numéros d'identification (attention légale)",
        category: "info"
    },
    {
        title: "Informations professionnelles",
        code: '"job title" OR "company" OR "work at" OR "employed by"',
        description: "Trouve des informations sur l'emploi et carrière",
        category: "info"
    }
];