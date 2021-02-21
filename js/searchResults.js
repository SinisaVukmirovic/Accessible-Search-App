export const deleteSearchResults = () => {
    const parentElem = document.querySelector('#searchResults');

    let childElem = parentElem.lastElementChild;

    while(childElem) {
        parentElem.removeChild(childElem);

        childElem = parentElem.lastElementChild;
    }
};

export const buildSearchResults = (resultsArray) => {
    resultsArray.forEach(result => {
        const resultItem = createResultItem(result);

        const resultContent = document.createElement('div');
        resultContent.classList.add('resultContents');
        if (result.img) {
            const resultImage = createResultImage(result);

            resultContent.append(resultImage);
        }
        const resultText = createResultText(result);
        resultContent.append(resultText);

        resultItem.append(resultContent);

        const searchResults = document.querySelector('#searchResults');
        searchResults.append(resultItem);
    });
};

const createResultItem = (result) => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('resultItem');

    const resultTitle = document.createElement('div');
    resultTitle.classList.add('resultTitle');

    const link = document.createElement('a');
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = '_blank';

    resultTitle.append(link);
    
    resultItem.append(resultTitle);

    return resultItem;
}

const createResultImage = (result) => {
    const resultImage = document.createElement('div');
    resultImage.classList.add('resultImage');
    
    const img = document.createElement('img');
    img.src = result.img;
    img.alt = result.title;
    resultImage.append(img);

    return resultImage;
}

const createResultText = (result) => {
    const resultText = document.createElement('div');
    resultText.classList.add('resultText');

    const resultDescription = document.createElement('p');
    resultDescription.classList.add('resultDescription');
    resultDescription.textContent = result.text;

    resultText.append(resultDescription);

    return resultText;
};

export const clearStatsLine = () => {
    document.querySelector('#stats').textContent = '';
};

export const setStatsLine = (numberOfResults) => {
    const statsLine = document.querySelector('#stats');

    if (numberOfResults) {
        statsLine.textContent = `Displaying ${numberOfResults} search results.`;
    } else {
        statsLine.textContent = `Sorry, no results found!`;
    }
};