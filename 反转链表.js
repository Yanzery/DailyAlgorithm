//输入一个链表，反转链表后，输出新链表的表头。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    var newList = new ListNode(pHead);
    for(var q = pHead;q;q=q.next){
        var a = q;
        a.next = newList;
        newList = a;
    }
    return newList;
}
