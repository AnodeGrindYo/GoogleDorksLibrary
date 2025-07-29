// UI management and rendering module
import { getCategoryName } from './data.js';

export class UIManager {
    constructor() {
        this.copyNotification = null;
    }

    renderDorks(dorks) {
        const grid = document.getElementById('dorksGrid');
        
        if (dorks.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                    <h3>Aucun résultat trouvé</h3>
                    <p>Essayez de modifier votre recherche ou utilisez l'assistant IA</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = dorks.map(dork => `
            <div class="dork-card" onclick="window.copyDork('${dork.code}')">
                <div class="dork-title">${dork.title}</div>
                <div class="dork-code">${dork.code}</div>
                <div class="dork-description">${dork.description}</div>
                <div class="dork-category">${getCategoryName(dork.category)}</div>
            </div>
        `).join('');
    }

    copyDork(code) {
        navigator.clipboard.writeText(code).then(() => {
            this.showCopyNotification();
        });
    }

    showCopyNotification() {
        if (!this.copyNotification) {
            this.copyNotification = document.createElement('div');
            this.copyNotification.className = 'copy-notification';
            this.copyNotification.textContent = 'Dork copié dans le presse-papiers !';
            document.body.appendChild(this.copyNotification);
        }
        
        this.copyNotification.classList.add('show');
        setTimeout(() => {
            this.copyNotification.classList.remove('show');
        }, 2000);
    }

    addMessageToChat(message, sender) {
        const chat = document.getElementById('assistantChat');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'bot') {
            messageDiv.innerHTML = this.formatBotMessage(message);
        } else {
            messageDiv.textContent = message;
        }
        
        chat.appendChild(messageDiv);
        chat.scrollTop = chat.scrollHeight;
    }

    formatBotMessage(message) {
        // Format code blocks and backticks for better display
        return message
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    }

    updateCategoryButtons(activeCategory) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === activeCategory);
        });
    }

    toggleAssistantPanel(isVisible) {
        const panel = document.getElementById('assistantPanel');
        panel.classList.toggle('active', isVisible);
    }

    clearAssistantInput() {
        const input = document.getElementById('assistantInput');
        input.value = '';
    }

    clearSearchInput() {
        const input = document.getElementById('searchInput');
        input.value = '';
    }
}