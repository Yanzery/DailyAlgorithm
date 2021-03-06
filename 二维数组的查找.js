//题目描述
//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

function Find(target, array)
{
    let columns = array.length;
    let rows = array[0].length;
    let found = false;
    if(rows > 0&& columns>0){
        let row = 0;
        let column = columns - 1;
        while(row < rows&& column>=0){
            if(array[row][column]===target){
                found = true;
                break;
            }else if(array[row][column]>target)
                --column;
             else
               ++row;
            
        }
    }
    return found;
}