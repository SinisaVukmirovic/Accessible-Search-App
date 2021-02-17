export const getSearchTerm = () => {
    const rawSearchTerm = document.querySelector('#searchInput').value.trim();
    // regex looking for multiple spaces in a row within the search term or phrase
    const regex = /[ ]{2,}/gi;
    // replacing regex with a single space
    const searchTerm = rawSearchTerm.replace(regex, ' ');

    return searchTerm;
};

export const retrieveSearchResults = (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);
};

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars();
};

// to do get max chars functionality