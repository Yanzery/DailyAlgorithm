//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
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