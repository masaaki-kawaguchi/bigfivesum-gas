function BigFiveSum(target_list) {
  
  sum = 0;
  
  for (var i = 0; i < target_list[0].length; i++) {
    target_cell = target_list[0][i];
    if (target_cell == "全く当てはまらなない") {
      sum += 1;
    } else if (target_cell == "あまり当てはまらなない") {
      sum += 2;
    } else if (target_cell == "どちらとも言えない") {
      sum += 3;
    } else if (target_cell == "わりと当てはまる") {
      sum += 4;
    } else if (target_cell == "全く当てはまらない") {
      sum += 5;
    }
  }
  
  term = "";
  
  if (sum < 7) {
    term = "かなり低い";
  } else if (sum >= 7 && sum < 12) {
    term = "低い";
  } else if (sum >= 12 && sum < 24) {
    term = "普通";
  } else if (sum >= 24 && sum < 30) {
    term = "高い";
  } else if (sum >= 30) {
    term = "かなり高い";
  }
  
  return term + "(" + sum + ")";
}
