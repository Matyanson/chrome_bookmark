s = document.createElement('script');
s.src = 'https://matyanson.github.io/text_translator_bookmark/script.js';
document.body.appendChild(s);




/* the bookmark link
    javascript:s=document.createElement("script");s.src="https://matyanson.github.io/text_translator_bookmark/script.js",document.body.appendChild(s);
*/

/* or use minified code directly
    javascript:function mapText(e,t){if("SCRIPT"!=e.tagName&&"STYLE"!=e.tagName)for(let a of e.childNodes)3==a.nodeType?a.textContent=t(a.textContent):mapText(a,t)}function uwufy(e){return e.replace(/[rl]/gi,"w").replace(/ove([\s.,])/gi,"ov$1").replace(/th([\s.,])/gi,"ff$1").replace(/(\w)th(\w)/gi,"$1dd$2").replace(/!/g," òwó.")}mapText(document,e=>uwufy(e));
*/