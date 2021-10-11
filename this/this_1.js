var func = function () {
  var func2 = function () {
    setTimeout(function() {
      console.log(this); 
    }, 5000);
  };
  var func3 = {
    func: func2,
    var4: 4
  }
  func3.func();
}
func();
/*
執行 func()
Line 2~ Line 11
把 第三行的 setTimeout 丟到 Que 裡等待5秒
5秒後執行
因為 setTimeout 是 window 的 function，所以是 window 執行它
誰執行誰就是 this ，所以這裡的 this 指向 window
!!!所以正常 function 的 setTimeout 裡的 this 都是指向 window?!!!
*/

var func = function () {
  var func2 = function () {
    setTimeout(() => {
      console.log(this); 
    }, 1000);
  };
  var func3 = {
    func: func2,
    var4: 4
  }
  func3.func();
}
func();
/*
執行 func()
Line 2~ Line 11
把 第三行的 setTimeout 丟到 Que 裡等待5秒
5秒後執行
發現 setTimeout 是 arrow function，所以開始追 scope
setTimeout > func2 > fun3
最後發現是 Line33 的 func3 執行 func()，故 this 為 func3
*/

var func = function () {
  var func2 = () => {
    setTimeout(() => {
      console.log(this); 
    }, 1000);
  };
  var func3 = {
    func: func2,
    var4: 4
  }
  func3.func();
}
func();

/*
最外層的 arrow function 是 func2
func2 隸屬於 func 的 scope
誰可用 func2 ? window!
*/