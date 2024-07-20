// function fun(){
//   let arr = Array(10000000)
//   function fun1(){// arr 加入 Closure
//       console.log(arr)
//   }
//   return function fun2(){}
// }
// window.f = fun()// 长久持有fun2的引用



// function fun(){
//   let arr = Array(10000000)
//   function fun1() {// arr 加入 Closure
//       console.log(arr)
//   }
//   window.obj = {// 长久持有 window.obj.method 的引用
//       method(){}
//   }
// }
// fun()


// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 1000);
// }

// console.log(new Date, i);



for (var i = 0; i < 5; i++) {
  (function(j){
    setTimeout(function() {
      console.log(new Date, j);
    }, 1000);
  })(i)
}
console.log(new Date, i);