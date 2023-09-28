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

function swap(id, cls) {
    document.getElementById(id).classList.toggle(cls);
}