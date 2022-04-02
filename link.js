s = document.createElement('script');
s.src = 'https://matyanson.github.io/chrome_bookmark/script.js';
document.body.appendChild(s);



/* the bookmark link
    javascript:s=document.createElement("script");s.src="https://matyanson.github.io/chrome_bookmark/script.js",document.body.appendChild(s);
    
    javascript:s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/Matyanson/chrome_bookmark/script.js",document.body.appendChild(s);
*/

/* or use minified code directly as URL
    javascript:function mapText(e,t){if("SCRIPT"!=e.tagName&&"STYLE"!=e.tagName)for(let a of e.childNodes)3==a.nodeType?a.textContent=t(a.textContent):mapText(a,t)}function uwufy(e){return e.replace(/[rl]/gi,"w").replace(/ove([\s.,])/gi,"ov$1").replace(/th([\s.,])/gi,"ff$1").replace(/(\w)th(\w)/gi,"$1dd$2").replace(/!/g," òwó.")}mapText(document,e=>uwufy(e));
*/

/* full script as URL
    javascript:function mapText(e,t){if("SCRIPT"!=e.tagName&&"STYLE"!=e.tagName)for(let n of e.childNodes)3==n.nodeType?n.textContent=t(n.textContent):mapText(n,t)}translateFunctions=[e=>e.replace(/[rl]/gi,"w").replace(/ove([\s.,])/gi,"ov$1").replace(/th([\s.,])/gi,"ff$1").replace(/(\w)th(\w)/gi,"$1dd$2").replace(/!/g," òwó."),e=>e.replace(/(\b|\w{2,})[ny]([aeiou])/gi,"$1ny$2").replace(/\b([aeu]|[io]\w{3,})/gi,"ny$1").replace(/([mn])([aeiou])([mn])/gi,"$1y$2$3").replace(/([mn])([aiou])/gi,"$1y$2").replace(/y'/gi,"ny'").replace(/the/gi,"Nye").replace(/([.!?])/gi," nya~$1")],pageHTML=sessionStorage.getItem("page_html"),i=Number(sessionStorage.getItem("translation_index")),null==pageHTML&&(i=0,pageHTML=document.documentElement.innerHTML,sessionStorage.setItem("translation_index",0),sessionStorage.setItem("page_html",pageHTML)),document.documentElement.innerHTML=pageHTML,i>=0&&mapText(document,e=>translateFunctions[i](e)),nextI=i==translateFunctions.length-1?-1:i+1,sessionStorage.setItem("translation_index",nextI);
*/