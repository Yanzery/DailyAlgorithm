// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// 思路：首先按照空格把字符串分成数组的各个元素，然后再把数组中的字符串反转
var reverseWord = function(s) {
    let arr = s.split(" ");
    let result = arr.map(item => {
        item.split("").reverse().join('')
    })
    return result.join(' ');
}

// 优雅写法

var reverseWord = function(s) {
    return s.split(" ").map(item => {
        item.split("").reverse().join('')
    }).join(' ');
}

// 正则写法
var reverseWord = function(s) {
    return s.split(/\s/g).map(item => {
        item.split("").reverse().join('')
    }).join(' ');
}

var reverseWord = function(s) {
    return s.match(/[\w']+/g).map(item => {
        item.split("").reverse().join('')
    }).join(' ');
}