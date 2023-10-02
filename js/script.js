let i = 0;

function showSecretDiv1() {
    if (i % 2 == 0) {
        swap("secretDiv1", "show");
    }
    if (i % 2 != 0) {
        swap("secretDiv1", "show");
    }
    i++;
}

const gtlt = document.getElementsByClassName('c-s');
const slashlt = document.getElementsByClassName('c-s-e');

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

for(let i = 0; i < slashlt.length; i++) {
    if(i % 2 == 0) {
        slashlt[i].innerHTML = "&lt/";
    } else {
        slashlt[i].innerHTML = "&gt";
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

  
  setTimeout(
    write, 1300, "terminal-text", "PS C:\\Users\\vilim\\Documents\\githubprojects\\code-email-page-2>hi", 0, 20
  )