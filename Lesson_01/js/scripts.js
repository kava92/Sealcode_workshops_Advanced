for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
//odpowiedz do zadania drugiego

for (var j = 0; j < 5; j++) {
    (function (e){
        setTimeout(function() {
        console.log(e);
        }, 100);
    })(j);
}
//zgodnie ze wskazówką - drugie rozwiązanie