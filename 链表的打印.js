//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/*
思路：解决这个问题肯定需要要遍历链表，遍历的顺序是从头到尾，题目要求是从尾到头，那就是“后进先出”，
于是可以联想到“栈”，我们可以先用栈把来把链表的值存下来，然后再打印出来即可；
还有一种思路，就是用递归，递归的本质就是一个栈结构

*/
function printListFromTailToHead(head)
{
    if(!head){
        return 0;
    }
    else{
        var arr=new Array();
        for(var q=head;q;q=q.next){
            arr.push(q.val);
        }
    }
    //arr.reverse();
    var array=new Array();
    for(var i = arr.length-1;i>=0;i--){
        array.push(arr[i]);
    }
    return array;
}