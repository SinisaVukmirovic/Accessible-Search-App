export const setSearchFocus = () => {
    document.querySelector('#searchInput').focus();
}; 

export const showClearInputBtn = () => {
    const searchInput = document.querySelector('#searchInput');
    const clear = document.querySelector('#clear');

    if (searchInput.value.length) {
        clear.classList.remove('none');
        clear.classList.add('flex');
    } else {
        clear.classList.add('none');
        clear.classList.remove('flex');
    }
};

export const clearSearchText = (e) => {
    e.preventDefault();

    document.querySelector('#searchInput').value = '';

    const clear = document.querySelector('#clear');
    clear.classList.add('none');
    clear.classList.remove('flex');
    setSearchFocus();
};

export const clearPushListener = (e) => {
    // listening for enter or space press while clear btn has focus on it
    if (e.key === 'Enter' || e.key === ' ') {
        // preventing default befaviour on key press, to prevent typing that into search term 
        e.preventDefault(); 

        document.querySelector('#clear').click();
    }
};