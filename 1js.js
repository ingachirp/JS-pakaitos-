const biudzetas = prompt("iveskit savo biudzeto dydi");
const produktoKaina = 100;
if (biudzetas > produktoKaina) {
alert("pakanka pinigu");    
} else if (biudzetas === produktoKaina) {
    alert("reikes susispausti dirzus");
// } else if (biudzetas == produktoKaina) {
//     alert("nezinau, turbut iperkama");
} else {
    alert("truksta lesu");
}



console.log("programa baigta")