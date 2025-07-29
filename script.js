// Main application controller
import { SearchManager } from './search.js';
import { AssistantManager } from './assistant.js';
import { UIManager } from './ui.js';
import { dorksDatabase } from './data.js';

class GoogleDorksApp {
    constructor() {
        this.searchManager = new SearchManager();
        this.assistantManager = new AssistantManager();
        this.uiManager = new UIManager();
        
        // Make copyDork globally available for onclick handlers
        window.copyDork = (code) => this.uiManager.copyDork(code);
        
        /* @tweakable active tab when app loads (dorks|tutorial) */
        this.activeTab = 'dorks';
    }

    init() {
        this.uiManager.renderDorks(this.searchManager.getFilteredDorks());
        this.setupEventListeners();
        this.setupTabNavigation();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        searchInput.addEventListener('input', () => this.handleSearch());
        searchBtn.addEventListener('click', () => this.handleSearch());
        
        // Assistant functionality
        const toggleAssistant = document.getElementById('toggleAssistant');
        const closeAssistant = document.getElementById('closeAssistant');
        const sendMessage = document.getElementById('sendMessage');
        const assistantInput = document.getElementById('assistantInput');
        
        toggleAssistant.addEventListener('click', () => this.toggleAssistant());
        closeAssistant.addEventListener('click', () => this.closeAssistant());
        sendMessage.addEventListener('click', () => this.handleAssistantMessage());
        assistantInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAssistantMessage();
        });
        
        // Category filtering
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleCategoryFilter(btn));
        });
    }

    setupTabNavigation() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });
    }

    switchTab(tabName) {
        // Update active tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Show/hide tab content
        const dorksTab = document.querySelector('.dorks-grid');
        const tutorialTab = document.getElementById('tutorialTab');
        
        if (tabName === 'tutorial') {
            dorksTab.style.display = 'none';
            tutorialTab.style.display = 'block';
            this.activeTab = 'tutorial';
        } else {
            dorksTab.style.display = 'grid';
            tutorialTab.style.display = 'none';
            this.activeTab = 'dorks';
        }
    }

    handleSearch() {
        const query = document.getElementById('searchInput').value;
        const results = this.searchManager.handleSearch(query);
        this.uiManager.renderDorks(results);
    }

    handleCategoryFilter(btn) {
        const category = btn.dataset.category;
        const results = this.searchManager.handleCategoryFilter(category);
        this.uiManager.updateCategoryButtons(category);
        this.uiManager.renderDorks(results);
    }

    toggleAssistant() {
        const isVisible = this.assistantManager.toggleVisibility();
        this.uiManager.toggleAssistantPanel(isVisible);
    }

    closeAssistant() {
        this.assistantManager.close();
        this.uiManager.toggleAssistantPanel(false);
    }

    async handleAssistantMessage() {
        const input = document.getElementById('assistantInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Clear input immediately
        this.uiManager.clearAssistantInput();
        
        // Add user message to chat
        this.uiManager.addMessageToChat(message, 'user');
        
        // Send to assistant and get response
        const result = await this.assistantManager.sendMessage(message);
        
        if (result) {
            this.uiManager.addMessageToChat(result.botResponse, 'bot');
        }
    }
}

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
    const app = new GoogleDorksApp();
    app.init();
});