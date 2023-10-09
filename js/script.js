let i = 0;

function showSecretDiv1() {
    if (i % 2 == 0) {
        swap("secretDiv1", "show");
        document.getElementById('drop-down-arrow-1').src = "img/droparrow2.png";
    }
    if (i % 2 != 0) {
        swap("secretDiv1", "show");
        document.getElementById('drop-down-arrow-1').src = "img/droparrow.png";
    }
    i++;
}

for(let i = 0; i < 5; i++) {
    document.getElementById('cth').getElementsByTagName('p')[i].className = "pointer";
}

const cod = document.getElementById('coding');
const allu = cod.getElementsByTagName('u');
const text = ["Subject: ", "Email body", "Body: "];

for (let i = 0; i < allu.length; i++) {
    if(allu[i].innerHTML != "") {
        allu[i].className = "c-c";
        for(let j = 0; j < text.length; j++) {
            if(allu[i].innerHTML == text[j]) {
                allu[i].className = "n-c";
            }
        }
    }
    if(allu[i].innerHTML == "") {
        allu[i].className = "c-s";
    }
}

allu[1].className = "c-c-2";

const gtlt = document.getElementsByClassName('c-s');

for(let i = 0; i < gtlt.length; i++) {
    if(i % 2 == 0) {
        gtlt[i].innerHTML += "&lt";
        if (i == 0) {
            gtlt[0].innerHTML += "!";
        }
    }
    if(i % 2 != 0) {
        gtlt[i].innerHTML = "&gt";
    }
}

const tags = ['html', 'body', 'div', 'h1', 'h2', 'p']
let counter = 0;
for(let j = 0; j < tags.length; j++) {
   for(let i = 3; i < allu.length; i++) {
        if(allu[i].innerHTML == tags[j]) {
             counter++;
        }
        if(allu[i].innerHTML == tags[2] && counter % 2 == 0) {
            allu[i-1].innerHTML = "&lt";
        }
        if(allu[i].innerHTML == tags[2] && i > 20) {
            allu[i-1].innerHTML = "&lt/";
        }
        if(allu[i].innerHTML == tags[j] && counter % 2 == 0) {
            allu[i-1].innerHTML = "&lt/";
            counter = 0;
        }
   }
}

const cssdiv = document.getElementById('csspage');
const allcssu = cssdiv.getElementsByTagName('u');
const symbols = [',', ':', ';', ': ', '; '];
const htmltags = ['html', 'body', '#container', '#top-bar'];
const csstags  = ['margin', 'padding', 'font-family', 'max-height', 'height', 'overflow', 'display', 'flex-direction', 'width'];
const values = ['0px', '100vh'];
for(let i = 0; i < allcssu.length; i++) {
    for(let j = 0; j < symbols.length; j++) {
        if(allcssu[i].innerHTML == symbols[j]) {
            allcssu[i].className = "css-symbols";
        }
    }
    for(let k = 0; k < htmltags.length; k++) {
        if(allcssu[i].innerHTML == htmltags[k]) {
            allcssu[i].className = "css-html";
        }
    }
    for(let l = 0; l < csstags.length; l++) {
        if(allcssu[i].innerHTML == csstags[l]) {
            allcssu[i].className = "css-tags";
        }
    }
    for(let z = 0; z < values.length; z++) {
        if(allcssu[i].innerHTML == values[z]) {
            allcssu[i].className = "css-values";
        }
    }
    if(allcssu[i].innerHTML == "{" || allcssu[i].innerHTML == "}") {
        allcssu[i].className = "squigly";
    }
    if(allcssu[i].innerHTML == "*") {
        allcssu[i].className = "c-c";
    }
    if(allcssu[i].innerHTML == "'Segoe UI'") {
        allcssu[i].className = "css-font";
    }
}

const htmldiv = document.getElementById('html-code');
const htmldivnum = document.getElementById('html-nums');
const prehtml = htmldiv.getElementsByTagName('pre');

for(let i = 0; i < prehtml.length; i++) {
    htmldivnum.innerHTML += "<p>" + (i+1) +"</p>"
    
}

const csscode = document.getElementById('css-code');
const cssdivnum = document.getElementById('css-div-nums');
const precss = csscode.getElementsByTagName('pre');
for (let i = 0; i < precss.length; i++) {
    cssdivnum.innerHTML += "<p>" + (i+1) + "</p>";
}

const jsdiv = document.getElementById('js-id');
const jsdivnum = document.getElementById('js-div-nums');
const prejs = jsdiv.getElementsByTagName('pre');

for(let i = 0; i < prejs.length; i++) {
    jsdivnum.innerHTML += "<p>" + (i+1) + "</p>";
}

const alljsu = jsdiv.getElementsByTagName('u');
const bracks = ['(', ' (', ')', ') ', '{', ' {', '}', '} '];
const params = ['id', 'text', 'k', 'sp'];
const jsstuff = ['function', 'if'];
for(let i = 0; i < alljsu.length; i++) {
    for(let j = 0; j < bracks.length; j++) {
        if(alljsu[i].innerHTML == bracks[j]) {
            alljsu[i].className = 'jsbrack';
            if(alljsu[i].innerHTML == bracks[j] && (i == 13 || i == 18 || i == 19)) {
                alljsu[i].className = 'prpbrack';
            }
            if(alljsu[i].innerHTML == bracks[j] && (i == 20|| i ==  22|| i == 24 || i == 26 || i == 28 || i == 35)) {
                alljsu[i].className = 'jsstuff';
            }
        }
    }
    for(let l = 0; l < params.length; l++) {
        if(alljsu[i].innerHTML == params[l]) {
            alljsu[i].className = 'params';
        }
    }
    for(let z = 0; z < jsstuff.length; z++) {
        if(alljsu[i].innerHTML == jsstuff[z]) {
            alljsu[i].className = 'jsstuff';
        }
    }
}

function swap(id, cls) {
    document.getElementById(id).classList.toggle(cls);
}

function write(id, text, k, sp) {
    if (k < text.length) {
      document.getElementById(id).innerHTML += text.charAt(k);
      k++;
      setTimeout(write, sp, id, text, k, sp);
    }
  }

  function unWrite(id, k, sp) {
  let text = document.getElementById(id).innerText; 
  k = text.length;
  if (k > 0) {
      document.getElementById(id).innerText = text.replace(text.charAt(text.length-1), "");
      k--;
      setTimeout(unWrite, sp, id, k, sp);
  }
}

let j = 0;
const csspage = document.getElementById('csspage');
const coding = document.getElementById('coding');
const jspage = document.getElementById('jspage');

const htmlhdr = document.getElementById('htmlHdr');
const cssHdr = document.getElementById('cssHdr');
const jsHdr = document.getElementById('jsHdr');

htmlHdr.style.backgroundColor = "rgb(27, 27, 27)";

function showCSSDiv() { 
    csspage.style.display = "flex";
    coding.style.display = "none";
    jspage.style.display = "none";
    cssHdr.style.backgroundColor = "rgb" + "(" + 27 + "," + 27 + "," + 27 + ")"
    htmlHdr.style.backgroundColor = "rgb" + "(" + 44 + "," + 44 + "," + 44 + ")"
    jsHdr.style.backgroundColor = "rgb" + "(" + 44 + "," + 44 + "," + 44 + ")"
}

function showHTMLDiv() {
    csspage.style.display = "none";
    coding.style.display = "flex";
    jspage.style.display = "none";
    htmlHdr.style.backgroundColor = "rgb" + "(" + 27 + "," + 27 + "," + 27 + ")"
    cssHdr.style.backgroundColor = "rgb" + "(" + 44 + "," + 44 + "," + 44 + ")"
    jsHdr.style.backgroundColor = "rgb" + "(" + 44 + "," + 44 + "," + 44 + ")"
}

function showJSDiv() {
    csspage.style.display = "none";
    coding.style.display = "none";
    jspage.style.display = "flex";
    htmlHdr.style.backgroundColor = "rgb" + "(" + 44 + "," + 44 + "," + 44 + ")"
    cssHdr.style.backgroundColor = "rgb" + "(" + 44 + "," + 44 + "," + 44 + ")"
    jsHdr.style.backgroundColor = "rgb" + "(" + 27 + "," + 27 + "," + 27 + ")"
}

setTimeout(write, 500, "email-type", "send-an-email", 0, 40);
setTimeout(write, 1300, "terminal-text", "PS C:\\Users\\vilim\\Documents\\githubprojects\\code-email-page-2>hi", 0, 20)

  