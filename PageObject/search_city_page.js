import { Selector, t } from 'testcafe';

class SearchCity {
    constructor () {
        this.searchInput = Selector('input[placeholder="Search city"]'); 
        this.searchButton = Selector('.button-round.dark'); 
        this.searchListDropdown = Selector('.search-dropdown-menu li');
        this.currentDateLabel = Selector('.current-container.mobile-padding span.orange-text');
        this.currentCityNameLabel = Selector('.current-container.mobile-padding h2');
        this.currentTempLabel = Selector('.current-temp')
    }

    async search_city (cityName) {
        await t
        .typeText(this.searchInput, cityName)
        .click(this.searchButton)
        .click(this.searchListDropdown);
    }
    
    async verify_current_date_is_available (dateTime) {
        await t  
        .expect(Selector(this.currentDateLabel).exists).ok()
        .expect(Selector(this.currentDateLabel).innerText).contains(dateTime)
        
    }

    async verify_city_name_is_right (cityName) { 
        await t   
        .expect(Selector(this.currentCityNameLabel).exists).ok()
        .expect(Selector(this.currentCityNameLabel).innerText).eql(cityName)
    }

    async verify_temperature_displayed () { 
        await t   
        .expect(Selector(this.currentTempLabel).exists).ok()
    }
    
}
export default new SearchCity();