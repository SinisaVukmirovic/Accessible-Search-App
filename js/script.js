import { setSearchFocus } from './searchInput.js'; 
import { searchTerm } from './dataFunctions.js'; 

document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    // set focus
    setSearchFocus();

    // 3 listeners clear text
    const form = document.querySelector('#searchBar');
    form.addEventListener('submit', submitTheSearch);
};

// procedural workflow function, calls other functions as needed
const submitTheSearch = (e) => {
    e.preventDefault();
    // delete search results

    // process the search
    processTheSearch();

    // set the focus
    setSearchFocus();
};

// procedural function
const processTheSearch = async () => {
    // clear the stats line
    const searchTerm = getSearchTerm();

    if (searchTerm === '') return;

    const resultArray = await retrieveSearchResults(searsearchTerm);
};