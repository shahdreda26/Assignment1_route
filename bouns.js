var createCounter = function (init) {
   var x =init
   return{
    increment:function(){
        console.log(++x)
    },

    reset :function (){
        console.log(x=init)
    },

    decrement:function  (){
        console.log(--x)
    }
}};
//case 1
const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement();  // 4
console.log("---------------------------")
//case 2
const c= createCounter(0);
c.increment(); // 1
c.increment(); // 2
c.decrement(); // 1
c.reset(); // 0
c.reset(); // 0
 