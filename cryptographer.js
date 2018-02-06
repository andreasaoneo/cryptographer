
function convert() {

    const input = document.getElementById("input").value;
    console.log(input);
    const output = document.getElementById("output");
    const gr = ["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ","υ","φ","χ","ψ","ω","9","8"];
    const en = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const crypto = [   
        document.getElementById("a").value,
        document.getElementById("b").value,
        document.getElementById("c").value,
        document.getElementById("d").value,
        document.getElementById("e").value,
        document.getElementById("f").value,
        document.getElementById("g").value,
        document.getElementById("h").value,
        document.getElementById("i").value,
        document.getElementById("j").value,
        document.getElementById("k").value,
        document.getElementById("l").value,
        document.getElementById("m").value,
        document.getElementById("n").value,
        document.getElementById("o").value,
        document.getElementById("p").value,
        document.getElementById("q").value,
        document.getElementById("r").value,
        document.getElementById("s").value,
        document.getElementById("t").value,
        document.getElementById("u").value,
        document.getElementById("v").value,
        document.getElementById("w").value,
        document.getElementById("x").value,
        document.getElementById("y").value,
        document.getElementById("z").value];
    var str = input.toLowerCase();
    
    for (var i = 0; i < input.length; i++) {
        str = str.replace(en[i], gr[i]);
    }
    for (var i = 0; i < input.length; i++) {
        str = str.replace(gr[i], crypto[i]);
    }
    
    output.innerText = str.toUpperCase();
}

// function replace(a, b) {
//     for(i=1;i<=input.length;i++) {
//         if(i === a) {

//         }
//     }
// }