// Google Dorks Database - Main aggregator
import { filesDorks } from './data/files.js';
import { loginDorks } from './data/login.js';
import { infoDorks } from './data/info.js';
import { vulnerabilitiesDorks } from './data/vulnerabilities.js';
import { socialDorks } from './data/social/index.js';

// Combine all dorks from different modules
export const dorksDatabase = [
    ...filesDorks,
    ...loginDorks,
    ...infoDorks,
    ...vulnerabilitiesDorks,
    ...socialDorks
];

// Utility functions for categories
export const getCategoryName = (category) => {
    const names = {
        'files': 'Fichiers',
        'login': 'Connexion',
        'info': 'Information',
        'vulnerabilities': 'Vulnérabilités',
        'social': 'Réseaux Sociaux'
    };
    return names[category] || category;
};