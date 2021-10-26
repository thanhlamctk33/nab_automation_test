import JSconfig from '../Config/config';
import searchCityObject from '../PageObject/search_city_page';
import searchData from '../Data/Test/search_city_data';
import { day, month } from '../Utilities/Utils';

fixture `Open Weather Map`;

test('Search City Page Test', async (t) => {
    await searchCityObject.search_city(searchData.city)
    await searchCityObject.verify_current_date_is_available(month + ' ' + day); 
    await searchCityObject.verify_city_name_is_right(searchData.city + ', ' + searchData.country);
    await searchCityObject.verify_temperature_displayed();
})
    .page(JSconfig.url);
