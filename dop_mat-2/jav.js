var res = 1;
function factorial(n) {
   
    for(var i = 1; i <= n; i++){
            res = res * i;
            return res;
       
    }
}
console.log(factorial(4));