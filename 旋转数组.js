// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
//例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length == 0){
        return 0;
    }else{
        let first = 0;
        let end = rotateArray.length - 1;
        while(first < end){
            var mid = first + Math.floor((end-first)/2);
            if( rotateArray[end] == rotateArray[mid] ){
                end = end - 1;
            }else if(rotateArray[mid] > rotateArray[end]){
                first = mid + 1;
            }else{
                end = mid;
            }
        }
        return rotateArray[first];
    }
}


//tips：
/*
排序的数组（或者部分排序的数组）中查找一个数字或者统计某个数字出现的次数
都可以尝试用二分查找算法。
 */