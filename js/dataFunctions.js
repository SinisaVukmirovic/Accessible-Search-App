export const getSearchTerm = () => {
    const rawSearchTerm = document.querySelector('#searchInput').value.trim();
    // regex looking for multiple spaces in a row within the search term or phrase
    const regex = /[ ]{2,}/gi;
    // replacing regex with a single space
    const searchTerm = rawSearchTerm.replace(regex, ' ');

    return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);

    const wikiSearchResults = await requestData(wikiSearchString);

    let resultsArray = [];

    if (wikiSearchResults.hasOwnProperty('query')) {
        // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
        resultsArray = processWikiResults(wikiSearchResults.query.pages);
    }
    return resultsArray;
};

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars();

    const rowSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

    // we use encodeURI to replace invalid characters within a string, such as spaces...
    const searchString = encodeURI(rowSearchString);

    return searchString;
};

const getMaxChars = () => {
    const width = window.innerWidth || document.body.clientWidth;
    let maxChars;

    if (width < 414) maxChars = 105;
    if (width >= 414 && width < 1024) maxChars = 250;
    if (width >= 1024) maxChars = 550;
    return maxChars;
};

const requestData = async (searchString) => {
    try {
        const response = await fetch(searchString);
        const data = await response.json();

        return data;
    }catch (err) {
        console.error(err);
    }
};

const processWikiResults = (results) => {
    const resultsArray = [];

    Object.keys(results).forEach(key => {
        const id = key;
        const title = results[key].title;
        const text = results[key].extract;
        const img = results[key].hasOwnProperty('thumbnail') 
            ? results[key].thumbnail.source : null;

        const item = {
            id: id,
            title: title,
            text: text,
            img: img
        }

        resultsArray.push(item);
    });

    return resultsArray;
};