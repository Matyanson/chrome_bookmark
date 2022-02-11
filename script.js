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

textIndex = 0;
if(window.pageText == undefined || window.i == undefined) {
    i = 0;
    pageText = [];

    mapText(document, (text) => {
        pageText.push(text);
        return translateFunctions[i](text);
    });
}
else if(i >= 0) mapText(document, (t) => translateFunctions[i](pageText[textIndex++]) );
else            mapText(document, (t) => pageText[textIndex++] );

i = i == translateFunctions.length - 1 ? -1 : i + 1;

function mapText(el, cb) {
    if(el.tagName == 'SCRIPT' || el.tagName == 'STYLE') return;
    for(let child of el.childNodes) {
        if(child.nodeType == 3)
            child.textContent = cb(child.textContent);
        else
            mapText(child, cb);
    }
}