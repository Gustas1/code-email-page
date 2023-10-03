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
const text = ["Subject: ", "Email body", "Random text"];

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
    if(i >= 20) {
        if(i % 2 == 0) {
            console.log(gtlt[i].innerHTML)
            gtlt[i].innerHTML = "&lt/";
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
function showCSSDiv() { 
    if(j % 2 == 0) {
        csspage.style.display = "flex";
        coding.style.display = "none";
    }
    if(j % 2 != 0) {
        csspage.style.display = "none";
        coding.style.display = "flex";
    }
    j++;
}

// let counter = 0;
// function writeSearch() {
//     setTimeout(unWrite, 1000, "email-type", "send-me-mail", 40);
//     counter++;

//     if(counter < 0) {
//         writeSearch()
//     }
// }

setTimeout(write, 500, "email-type", "send-an-email", 0, 40);
setTimeout(write, 1300, "terminal-text", "PS C:\\Users\\vilim\\Documents\\githubprojects\\code-email-page-2>hi", 0, 20)

  