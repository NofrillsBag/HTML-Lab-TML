const closeTableOfContents = document.querySelector('.skeleton');
const closeBtn = document.querySelector('.close-btn');

// Toggle the table of contents
closeBtn.addEventListener('click', () => {
    closeTableOfContents.classList.toggle('closed');
});
// Toggle >/< switch

    closeBtn.addEventListener('click', () => {
        if (closeTableOfContents.classList.contains('closed')) {
            closeBtn.innerHTML = '&gt;'; // >
        } else {
            closeBtn.innerHTML = '&lt;'; // <
        }
    });