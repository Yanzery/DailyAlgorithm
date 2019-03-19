//问题：一只青蛙一次可以跳上1级台阶，也可以跳上2级，
 //求该青蛙跳上一个n级台阶总共有多少种跳法。
function fibonacci(n){
    var f = [0,1];
    if(n < 2)
        return f[n];
    var f1 = 1, f2 = 0, fn;
    for(var i = 2; i <=n; i++){
        fn = f1 + f2;
        f2 = f1;
        f1 = fn;
    }
    return fn;
}