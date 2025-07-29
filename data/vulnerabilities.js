// Google Dorks Database - Vulnerabilities Category (Enhanced with new security-focused searches)
export const vulnerabilitiesDorks = [
    {
        title: "Fichiers de configuration",
        code: 'filetype:conf OR filetype:config OR filetype:ini',
        description: "Recherche des fichiers de configuration exposés",
        category: "vulnerabilities"
    },
    {
        title: "Annuaires ouverts",
        code: 'intitle:"index of" "parent directory"',
        description: "Trouve des répertoires listés publiquement",
        category: "vulnerabilities"
    },
    {
        title: "Erreurs de serveur",
        code: 'intext:"sql syntax near" OR intext:"syntax error has occurred"',
        description: "Recherche des pages avec des erreurs SQL visibles",
        category: "vulnerabilities"
    },
    {
        title: "Webcams publiques",
        code: 'inurl:"view/live" OR intitle:"Live View"',
        description: "Recherche des webcams accessibles publiquement",
        category: "vulnerabilities"
    },
    {
        title: "Fichiers de sauvegarde",
        code: 'filetype:bak OR filetype:backup OR filetype:old',
        description: "Trouve des fichiers de sauvegarde potentiellement sensibles",
        category: "vulnerabilities"
    },
    {
        title: "Logs de serveur",
        code: 'filetype:log "error" OR "failed" OR "exception"',
        description: "Trouve des fichiers de logs avec des erreurs",
        category: "vulnerabilities"
    },
    {
        title: "Pages FTP ouvertes",
        code: 'intitle:"index of" inurl:ftp',
        description: "Recherche des serveurs FTP avec listing ouvert",
        category: "vulnerabilities"
    },
    {
        title: "Mots de passe en clair",
        code: 'filetype:txt "password" OR "passwd" OR "pwd"',
        description: "Recherche des fichiers texte contenant des mots de passe",
        category: "vulnerabilities"
    },
    {
        title: "Erreurs PHP",
        code: 'intext:"Warning: mysql_connect()" OR "mysql_fetch_array()"',
        description: "Trouve des pages avec des erreurs PHP exposées",
        category: "vulnerabilities"
    },
    {
        title: "Configuration Apache",
        code: 'filetype:htaccess OR filetype:htpasswd',
        description: "Recherche des fichiers de configuration Apache",
        category: "vulnerabilities"
    },
    {
        title: "Variables d'environnement",
        code: 'filetype:env "DB_PASSWORD" OR "API_KEY" OR "SECRET"',
        description: "Trouve des fichiers d'environnement avec secrets",
        category: "vulnerabilities"
    },
    {
        title: "Dumps de base de données",
        code: 'filetype:sql "dump" OR filetype:dump',
        description: "Recherche des dumps de bases de données",
        category: "vulnerabilities"
    },

    // 🆕 NEW CRITICAL ADDITIONS
    {
        title: "Clés AWS exposées",
        code: 'filetype:xml "accessKeyId" OR "secretAccessKey"',
        description: "Fuites AWS dans XML - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Secrets OAuth",
        code: 'filetype:json "client_secret" OR "client_id"',
        description: "Secrets OAuth dans configs - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Clés privées YAML/ENV",
        code: 'filetype:yaml OR filetype:env "PRIVATE_KEY" OR "PRIVATE_TOKEN"',
        description: "Tokens ou clés privées dans YAML/.env - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Jetons API logs",
        code: '"Authorization: Bearer" filetype:txt OR filetype:log',
        description: "Jetons API dans logs/configs - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Mots de passe Python",
        code: 'filetype:py intext:password intext=connect',
        description: "Connexions avec mot de passe en dur - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Relevés bancaires",
        code: 'filetype:xlsx "relevé de compte" OR "extrait de compte"',
        description: "Fichiers bancaires personnels - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Documents contractuels",
        code: 'filetype:pdf "appel d\'offres" OR "cahier des charges"',
        description: "Documents contractuels/BTP - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Bases clients CSV",
        code: 'filetype:csv "liste des clients" OR "base de données clients"',
        description: "BDD clients dans fichiers plats - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Config réseau",
        code: 'filetype:cfg "hostname" OR "server" OR "port="',
        description: "Fichiers de config réseau - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Config SSH",
        code: 'filetype:conf "PermitRootLogin"',
        description: "Config SSH mal exposée - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Scripts déploiement",
        code: 'filetype:sh intext:scp intext:password',
        description: "Scripts de déploiement avec mdp - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Images sensibles",
        code: 'filetype:jpg OR filetype:png "confidential" OR "internal use only"',
        description: "Scans de documents sensibles - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Photos exposées",
        code: '"index of" inurl:photos intext:"jpg"',
        description: "Répertoires photos ouverts - LOW",
        category: "vulnerabilities"
    },
    {
        title: "Fichiers oubliés",
        code: 'inurl:backup OR inurl:old OR inurl:temp',
        description: "Fichiers anciens/sensibles - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Dumps SQL",
        code: 'inurl:/export/ intext:.sql',
        description: "Dumps SQL dans répertoires - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Archives sensibles",
        code: 'inurl:/dump/ intext:.zip OR .tar',
        description: "Archives sensibles exposées - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Données test",
        code: 'filetype:json "test_user" OR "dummy"',
        description: "Données test réalistes - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Scripts TODO",
        code: 'filetype:py OR filetype:js intext:"TODO" OR intext:"FIXME"',
        description: "Scripts non finis - LOW",
        category: "vulnerabilities"
    },
    {
        title: "Dashboards Grafana",
        code: 'intitle:"Grafana" inurl:/d/',
        description: "Dashboards Grafana ouverts - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Monitoring Prometheus",
        code: 'intitle:"Prometheus Time Series Collection"',
        description: "Monitoring Prometheus sans auth - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Interface Kibana",
        code: 'intitle:"Kibana" inurl:app/kibana',
        description: "Interface Kibana directe - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Zabbix accessible",
        code: 'intitle:"Zabbix Server" inurl:zabbix',
        description: "Interface Zabbix accessible - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Bases données perso",
        code: 'filetype:csv "nom" "prénom" "email"',
        description: "Bases données personnelles - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Contacts entreprise",
        code: 'filetype:xlsx "contact client" OR "fiche contact"',
        description: "Infos personnelles entreprise - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Scans identité",
        code: 'filetype:pdf "copie carte d\'identité"',
        description: "Scans d'identité - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Terraform secrets",
        code: 'filetype:tfvars "aws_access_key" OR "aws_secret_key"',
        description: "Secrets Terraform AWS - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Helm secrets",
        code: 'filetype:yaml "helm" "password" OR "secret"',
        description: "Secrets dans Helm charts - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "IBAN bancaires",
        code: 'filetype:txt OR filetype:csv "FR76" OR "DE89" OR "ES91"',
        description: "IBAN bancaires exposés - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "Données clients CRM",
        code: 'filetype:xlsx "customer" OR "client" "email" OR "phone"',
        description: "Données clients CRM - CRITICAL",
        category: "vulnerabilities"
    },
    {
        title: "EXIF géolocalisation",
        code: 'filetype:jpg "GPSLatitude" OR "GPSLongitude"',
        description: "Images avec géoloc - HIGH",
        category: "vulnerabilities"
    },
    {
        title: "Desktop.ini exposés",
        code: 'intitle:"index of" "desktop.ini"',
        description: "Partages Windows exposés - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Logs Jenkins",
        code: 'filetype:log "Started by user" OR "Finished: SUCCESS"',
        description: "Logs Jenkins sensibles - MEDIUM",
        category: "vulnerabilities"
    },
    {
        title: "Logs Elasticsearch",
        code: 'filetype:log "elasticsearch" "node started"',
        description: "Logs Elasticsearch - MEDIUM",
        category: "vulnerabilities"
    }
];