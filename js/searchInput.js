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