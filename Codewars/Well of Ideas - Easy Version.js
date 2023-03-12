function well(x) {
    let CountOfGood = 0;
    x.forEach(e => {
      e == "good" || e == "Good" ?  CountOfGood++ : ''
    });
    return CountOfGood >= 1 && CountOfGood <= 2
      ? "Publish"
      : CountOfGood > 2
      ? "I smell a series!"
      : "fail";
  }
  console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
  