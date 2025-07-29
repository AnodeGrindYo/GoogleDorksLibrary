// AI Assistant functionality module (Enhanced with new configuration options)
import { dorksDatabase } from './data.js';

export class AssistantManager {
    constructor() {
        this.conversationHistory = [];
        this.isVisible = false;
        /* @tweakable maximum number of conversation messages to keep in history */
        this.maxHistoryLength = 8;
        /* @tweakable number of example dorks to show in system prompt */
        this.exampleDorksCount = 30;
        /* @tweakable include GPG/SSH key searches in examples */
        this.showCryptoKeys = true;
        /* @tweakable include JWT token searches */
        this.showJWT = true;
        /* @tweakable include cloud infrastructure searches */
        this.showCloudInfra = true;
        /* @tweakable include log file searches */
        this.showLogFiles = true;
        /* @tweakable include personal data searches */
        this.showPersonalData = true;
        /* @tweakable include development secrets searches */
        this.showDevSecrets = true;
        /* @tweakable include medical data searches */
        this.showMedicalData = true;
        /* @tweakable include academic/educational data searches */
        this.showAcademicData = true;
        /* @tweakable include surveillance/camera searches */
        this.showCameraAccess = true;
        /* @tweakable include internal tools access searches */
        this.showInternalTools = true;
        /* @tweakable include authentication/cookie searches */
        this.showAuthHeaders = true;
        /* @tweakable include financial/tax document searches */
        this.showFinancialDocs = true;
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible;
        return this.isVisible;
    }

    close() {
        this.isVisible = false;
        return this.isVisible;
    }

    async sendMessage(message) {
        if (!message.trim()) return null;
        
        // Add user message to history
        this.conversationHistory.push({
            role: "user",
            content: message
        });
        
        try {
            // Call AI with enhanced prompt
            const completion = await websim.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: this.getSystemPrompt()
                    },
                    ...this.conversationHistory.slice(-8)
                ]
            });
            
            const response = completion.content;
            this.conversationHistory.push(completion);
            
            return {
                userMessage: message,
                botResponse: response
            };
            
        } catch (error) {
            return {
                userMessage: message,
                botResponse: "Désolé, je rencontre un problème technique. Veuillez réessayer dans quelques instants."
            };
        }
    }

    getSystemPrompt() {
        return `Tu es un expert en Google Dorks et en OSINT (Open Source Intelligence). Tu aides les utilisateurs à trouver les bons dorks pour leurs recherches légales et éthiques.

        NOUVELLES CATÉGORIES AJOUTÉES (2024):
        
        🔐 CRYPTOS & TOKENS
        - Clés GPG/PGP privées
        - Jetons JWT (JSON Web Tokens)
        - Clés SSH privées
        
        🏗️ INFRASTRUCTURE CLOUD
        - Terraform configs avec secrets
        - Helm charts secrets
        - Buckets cloud mal configurés
        
        📊 LOGS & MONITORING
        - Logs Apache/Nginx sensibles
        - Logs Jenkins/Elasticsearch
        - Logs d'accès avec données
        
        🏢 DONNÉES ENTREPRISE
        - IBAN bancaires
        - Données clients CRM
        - Fichiers de paie
        
        🛠️ DEV & DEVOPS
        - Scripts de déploiement
        - Fichiers .npmrc/.pypirc
        - Docker configs secrets
        
        ⚠️ RAPPEL ÉTHIQUE CRUCIAL:
        - Tous ces dorks sont pour USAGE LÉGAL UNIQUEMENT
        - Recherche de vulnérabilités pour rapports de sécurité
        - Tests de pénétration autorisés
        - Audit de sécurité interne
        
        FORMAT RÉPONSE:
        - 2-3 dorks pertinents avec EXPLICATIONS
        - Variations pour contourner les protections
        - Tags de sévérité (LOW/MEDIUM/HIGH/CRITICAL)
        - Bonnes pratiques de reporting
        
        Base de données: ${dorksDatabase.length} dorks
        
        Exemples nouveaux:
        - Clés GPG: \`filetype:asc "BEGIN PGP PRIVATE KEY BLOCK"\`
        - JWT: \`filetype:txt "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"\`
        - Terraform: \`filetype:tfvars "aws_access_key"\`
        - IBAN: \`filetype:csv "FR76" OR "DE89"\``;
    }

    getConversationHistory() {
        return this.conversationHistory;
    }

    clearHistory() {
        this.conversationHistory = [];
    }
}