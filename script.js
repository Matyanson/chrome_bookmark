translateFunctions = [
    (text) => text
    .replace(/[rl]/gi, 'w')
    .replace(/ove([\s.,])/gi, 'ov$1')
    .replace(/th([\s.,])/gi, 'ff$1')
    .replace(/(\w)th(\w)/gi, '$1dd$2')
    .replace(/!/g, ' òwó.'),

    (text) => text
    .replace(/(\b|\w{2,})[ny]([aeiou])/gi, '$1ny$2')
    .replace(/\b([aeu]|[io]\w{3,})/gi, 'ny$1')
    .replace(/([mn])([aeiou])([mn])/gi, '$1y$2$3')
    .replace(/([mn])([aiou])/gi, '$1y$2')
    .replace(/y'/gi, 'ny\'')
    .replace(/the/gi, 'Nye')
    .replace(/([.!?])/gi, ' nya~$1')
]


pageHTML = sessionStorage.getItem('page_html');
i = Number(sessionStorage.getItem('translation_index'));

if(pageHTML == null) {
    i = 0;
    pageHTML = document.documentElement.innerHTML;
    sessionStorage.setItem('translation_index', 0);
    sessionStorage.setItem('page_html', pageHTML);
}

document.documentElement.innerHTML = pageHTML;

if(i >= 0)
    mapText(document, (text) => translateFunctions[i](text));

nextI = i == translateFunctions.length - 1 ? -1 : i + 1;
sessionStorage.setItem('translation_index', nextI);

function mapText(el, cb) {
    if(el.tagName == 'SCRIPT' || el.tagName == 'STYLE') return;
    for(let child of el.childNodes) {
        if(child.nodeType == 3)
            child.textContent = cb(child.textContent);
        else
            mapText(child, cb);
    }
}