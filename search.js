// Search functionality module
import { dorksDatabase } from './data.js';

export class SearchManager {
    constructor() {
        this.filteredDorks = [...dorksDatabase];
        this.currentCategory = 'all';
    }

    handleSearch(query) {
        if (query.trim() === '') {
            this.filteredDorks = this.filterByCategory(dorksDatabase, this.currentCategory);
        } else {
            const baseResults = this.currentCategory === 'all' 
                ? dorksDatabase 
                : dorksDatabase.filter(dork => dork.category === this.currentCategory);
                
            this.filteredDorks = baseResults.filter(dork => 
                dork.title.toLowerCase().includes(query.toLowerCase()) ||
                dork.description.toLowerCase().includes(query.toLowerCase()) ||
                dork.code.toLowerCase().includes(query.toLowerCase()) ||
                dork.category.toLowerCase().includes(query.toLowerCase())
            );
        }
        
        return this.filteredDorks;
    }

    handleCategoryFilter(category) {
        this.currentCategory = category;
        this.filteredDorks = this.filterByCategory(dorksDatabase, category);
        return this.filteredDorks;
    }

    filterByCategory(dorks, category) {
        if (category === 'all') {
            return [...dorks];
        } else {
            return dorks.filter(dork => dork.category === category);
        }
    }

    getFilteredDorks() {
        return this.filteredDorks;
    }
}