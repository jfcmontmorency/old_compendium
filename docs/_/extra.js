// Retire la navigation principale sous forme de tabs 
document.querySelector('.md-container > .md-tabs').outerHTML = '';

// Retrait du lien sur le logo
var wrapper = document.querySelector('.md-header__button.md-logo');
if (wrapper) {
    var docFrag = document.createDocumentFragment();
    while (wrapper.firstChild) {
        docFrag.appendChild(wrapper.firstChild);
    }
    wrapper.parentNode.replaceChild(docFrag, wrapper);
}
