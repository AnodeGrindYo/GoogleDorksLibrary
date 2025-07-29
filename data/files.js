// Google Dorks Database - Files Category
export const filesDorks = [
    {
        title: "Fichiers PDF sensibles",
        code: 'filetype:pdf "confidential" OR "secret" OR "internal"',
        description: "Recherche des fichiers PDF contenant des informations confidentielles",
        category: "files"
    },
    {
        title: "Documents Word sensibles",
        code: 'filetype:doc OR filetype:docx "private" OR "confidential"',
        description: "Trouve des documents Word avec informations privées",
        category: "files"
    },
    {
        title: "Documents Excel sensibles",
        code: 'filetype:xls OR filetype:xlsx "password" OR "confidential"',
        description: "Trouve des fichiers Excel avec des informations sensibles",
        category: "files"
    },
    {
        title: "Bases de données SQL",
        code: 'filetype:sql "INSERT INTO" OR "CREATE TABLE"',
        description: "Recherche des fichiers de base de données SQL",
        category: "files"
    },
    {
        title: "CV et résumés",
        code: 'filetype:pdf "curriculum vitae" OR "resume" OR "CV"',
        description: "Recherche des CV au format PDF",
        category: "files"
    },
    {
        title: "Présentations PowerPoint",
        code: 'filetype:ppt OR filetype:pptx "presentation" OR "slides"',
        description: "Trouve des présentations PowerPoint exposées",
        category: "files"
    },
    {
        title: "Archives et fichiers compressés",
        code: 'filetype:zip OR filetype:rar OR filetype:7z OR filetype:tar',
        description: "Recherche des archives potentiellement sensibles",
        category: "files"
    },
    {
        title: "Fichiers audio sensibles",
        code: 'filetype:mp3 OR filetype:wav "confidential" OR "meeting"',
        description: "Trouve des enregistrements audio potentiellement privés",
        category: "files"
    },
    {
        title: "Fichiers vidéo privés",
        code: 'filetype:mp4 OR filetype:avi "private" OR "internal"',
        description: "Recherche des vidéos marquées comme privées",
        category: "files"
    },
    {
        title: "Documents texte simples",
        code: 'filetype:txt "password" OR "login" OR "account"',
        description: "Trouve des fichiers texte avec informations sensibles",
        category: "files"
    }
];