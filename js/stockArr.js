/*
  从2014年7月开始恢复股票池的发布。
*/

var historyArr = new Array (
  ["2014-07-18", "002638", "勤上光电", "14.77", "16.54", "16.94", "14.69", "元器件",   "2014-08-06", "21"],
  ["2014-07-25", "300289", "利德曼",   "26.09", "28.00", "28.07", "7.59",  "医药生物", "2014-08-05", "12"],
  ["2014-07-31", "002714", "牧原股份", "47.55", "51.03", "52.53", "10.47", "农林牧渔", "2014-08-05", "6" ],
  ["2014-07-07", "002589", "瑞康医药", "27.06", "30.45", "33.45", "23.61", "医药生物", "2014-08-04", "29"],
  ["2014-07-21", "000001", "平安银行", "9.60",  "10.50", "10.78", "12.29", "银行业",   "2014-07-28", "8" ],
  ["2014-07-04", "300224", "正海磁材", "22.70", "25.00", "25.35", "11.67", "有色金属", "2014-07-10", "7" ]
);

var indexArr = new Array("0000001","1399001","1399006","1399300");

var hqArr = new Array(
  ["1000568", "食品饮料", "2014-08-08", "18.90",  "21.70",  "增持"],
  ["1002477", "农林牧渔", "2014-08-08", "10.69",  "13.20",  "买入"],
  ["0603369", "食品饮料", "2014-08-08", "25.81",  "28.80",  "增持"],
  ["1002470", "化工",     "2014-08-07", "20.65",  "25.00",  "增持"],
  ["1300310", "软件服务", "2014-08-06", "18.66",  "20.00",  "增持"],
  ["1000998", "农林牧渔", "2014-08-06", "13.70",  "15.75",  "买入"],
  ["1002317", "医药生物", "2014-08-06", "21.48",  "25.50",  "买入"],
  ["1000858", "食品饮料", "2014-08-06", "19.50",  "27.60",  "买入"],
  ["0600409", "化工",     "2014-08-04", "4.82",   "6.60",   "买入"],
  ["1002223", "医药生物", "2014-08-04", "27.42",  "30.00",  "买入"],
  ["0600376", "房地产",   "2014-08-04", "5.26",   "6.08",   "买入"],
  ["1300177", "通信行业", "2014-08-04", "14.50",  "18.50",  "买入"],
  ["1002299", "农林牧渔", "2014-07-31", "12.70",  "14.80",  "买入"],
  ["1002364", "电力设备", "2014-07-31", "18.43",  "21.35",  "买入"],
  ["1002462", "医药生物", "2014-07-30", "18.73",  "22.72",  "买入"],
  ["1002071", "造纸印刷", "2014-07-30", "19.81",  "20.96",  "增持"],
  ["1002588", "化工",     "2014-07-30", "23.12",  "27.00",  "增持"],
  ["1002303", "造纸印刷", "2014-07-29", "13.10",  "18.30",  "买入"],
  ["1000915", "医药生物", "2014-07-25", "26.46",  "35.00",  "买入"],
  ["0600226", "化工",     "2014-07-25", "6.51",   "8.00",   "买入"],
  ["1002683", "化工",     "2014-07-24", "24.68",  "35.00",  "买入"],
  ["1300003", "医药生物", "2014-07-23", "19.84",  "29.00",  "买入"],
  ["1002672", "环保",     "2014-07-22", "26.20",  "34.00",  "买入"],
  ["1002456", "电子行业", "2014-07-22", "21.98",  "30.00",  "买入"],
  ["1000670", "计算机",   "2014-07-18", "9.63",   "12.50",  "增持"],
  ["1002281", "通信行业", "2014-07-17", "33.09",  "42.00",  "买入"],
  ["0600588", "计算机",   "2014-07-17", "15.27",  "19.70",  "买入"],
  ["1002271", "建筑",     "2014-07-16", "25.46",  "31.75",  "买入"],
  ["1000063", "通信行业", "2014-07-16", "13.50",  "18.40",  "买入"],
  ["1002325", "建筑",     "2014-07-16", "8.68",   "12.00",  "买入"],
  ["0600809", "食品饮料", "2014-07-15", "14.30",  "18.50",  "买入"],
  ["1300299", "通信行业", "2014-07-15", "12.60",  "16.00",  "买入"],
  ["1300224", "有色金属", "2014-07-15", "25.41",  "30.00",  "买入"],
  ["1002073", "计算机",   "2014-07-15", "9.58",   "11.48",  "增持"],
  ["1300074", "通信行业", "2014-07-14", "17.00",  "20.50",  "买入"],
  ["0600426", "化工",     "2014-07-14", "7.58",   "8.50",   "增持"],
  ["1002318", "钢铁行业", "2014-07-10", "17.63",  "20.00",  "买入"],
  ["1002444", "机械行业", "2014-07-10", "10.55",  "14.00",  "买入"],
  ["1002368", "计算机",   "2014-07-09", "36.51",  "43.05",  "买入"],
  ["1002631", "家居用品", "2014-07-09", "8.95",   "13.20",  "买入"],
  ["0600761", "机械行业", "2014-07-08", "10.51",  "15.00",  "买入"],
  ["0600240", "房地产",   "2014-07-08", "5.53",   "6.50",   "买入"],
  ["0600759", "房地产",   "2014-07-08", "10.45",  "14.00",  "买入"],
  ["1002565", "造纸印刷", "2014-07-07", "8.64",   "10.60",  "买入"],
  ["1000599", "化工",     "2014-07-04", "4.93",   "5.69",   "买入"],
  ["1002354", "造纸印刷", "2014-07-04", "49.50",  "55.00",  "增持"],
  ["1002266", "电力设备", "2014-07-03", "7.46",   "8.70",   "增持"],
  ["0600804", "传播文化", "2014-07-02", "15.75",  "18.00",  "买入"],
  ["1002081", "建筑",     "2014-07-01", "14.16",  "20.00",  "买入"],
  ["1002410", "计算机",   "2014-07-01", "26.44",  "31.85",  "买入"]
);

