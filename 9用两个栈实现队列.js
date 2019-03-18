//用两个栈实现队列   -->  用两个队列模拟栈
/*
用两个栈实现一个队列，队列的声明如下，请实现它的
两个函数appendTail和deleteHead，分别完成在队列
尾部插入节点和在队列头部删除结点的功能
 */
/*
思路：栈是“先进后出”而队列是“先进先出”，很明显栈跟队列是两个“相反”的数据结构，好了，于是我们要解决的问题就是把栈里面的顺序反一下就可以了。
怎么解决呢，这时我们发现题目条件还有一个栈2还没用到。这个时候就很明显了，我们把原先栈的元素拿出来放到栈2中，再从栈2中拿出来，这样顺序就是反过来啦。
这样我们就解决了 出来 这个问题了，那么还要放进去呢，放进去就直接还是先放在栈1中，然后呢你要拿出来的时候，就还是先把栈1的东西先放在栈2中，再从栈2取
就可以了。
 */
function Queue(){
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.appendTail = function(n){
    this.stack1.push(n);
};

Queue.prototype.deleteHead = function(){
    if(this.stack2.length <= 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    if(this.stack2.length <= 0){
        throw new Error("Queue is empty")
    }
    return this.stack2.pop();
};