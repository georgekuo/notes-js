var oo = function(){
  var aa = function(){
    console.log(this)
  };
  var bb = () => {
    console.log(this)
  };
  // aa(); //window
  // bb(); //window
};
oo();

//----------------------------//
var ooo = {
  aaa: function(){
    console.log(this)
  },
  bbb: () => {
    console.log(this)
  },
  ccc: {
    d: function(){console.log(this)},
    e: () => { console.log(this) }
  }
};
// ooo.aaa();  //aaa
// ooo.bbb();  //window

//----------------------------//

var func = function () {
  var func2 = function () {
      console.log(this); 
  };
  var func22 = () => {
      console.log(this); 
  };
  var func3 = {
    func: func2,
    var4: 4
  }
  func3.func();
}
func(); 