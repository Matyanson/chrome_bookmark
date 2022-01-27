mapText(document, (text) => uwufy(text));

function mapText(el, cb) {
    for(let child of el.childNodes) {
        if(child.nodeType == 3)
            child.textContent = cb(child.textContent);
        else
            mapText(child, cb);
    }
}
function uwufy (text) {
    return text
    .replace(/[rl]/gi, 'w')
    .replace(/ove([\s.,])/gi, 'ov$1')
    .replace(/th([\s.,])/gi, 'ff$1')
    .replace(/(\w)th(\w)/gi, '$1dd$2')
    .replace(/!/g, ' òwó.');
}