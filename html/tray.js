function myFunction (v, p) {
    return v * p;
}

function tampil () {
    let v = document.getElementById("a").innerHTML;
    let p = document.getElementById("b").innerHTML;
    let hitung = myFunction(v, p)
    alert (v + " x " + p + " = " + hitung)
}