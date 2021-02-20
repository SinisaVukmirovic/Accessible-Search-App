import { setSearchFocus, showClearInputBtn, clearSearchText, clearPushListener } from './searchInput.js'; 
import { deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine } from './searchResults.js';
import { getSearchTerm, retrieveSearchResults } from './dataFunctions.js';

document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    // set focus
    setSearchFocus();
    // event listeners for showing the clear input field btn when typing
    const searchInput = document.querySelector('#searchInput');
    searchInput.addEventListener('input', showClearInputBtn);
    // clear search text functionality
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearSearchText);
    clear.addEventListener('keydown', clearPushListener);

    // 3 listeners clear text
    const form = document.querySelector('#searchBar');
    form.addEventListener('submit', submitTheSearch);
};

// procedural workflow function, calls other functions as needed
const submitTheSearch = (e) => {
    e.preventDefault();

    // delete search results
    deleteSearchResults();

    // process the search
    processTheSearch();

    // set the focus
    setSearchFocus();
};

// procedural function
const processTheSearch = async () => {
    clearStatsLine();

    const searchTerm = getSearchTerm();

    if (searchTerm === '') return;

    const resultsArray = await retrieveSearchResults(searchTerm);

    if (searchTerm.length) buildSearchResults(resultsArray);

    setStatsLine(resultsArray.length);
};