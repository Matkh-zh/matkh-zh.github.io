// 定义一个数组存储每日诗词的列表
var poems = [
    "未来可期 人生值得",
    "前路浩浩荡荡 万物皆可期待",
    "千山鸟飞绝，万径人踪灭",
];

// 获取当前日期
var currentDate = new Date();

// 使用日期的天数作为索引值从诗词数组中获取每日诗词
var poemIndex = currentDate.getDate() % poems.length;
var dailyPoem = poems[poemIndex];

// 将每日诗词显示在 h1 元素中
var poemTitleElement = document.getElementById("poem-title");
poemTitleElement.textContent = dailyPoem;