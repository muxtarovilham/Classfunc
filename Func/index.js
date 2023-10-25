// console.log("Task1");

// function numbers(a) {
//      for (let i = 0; i < 100; i++) {
//          if (i % a == 0) {
//              console.log(i)
//          }
//      }
//    }

//     numbers(40)


    console.log("Task2");    

    students = [
        {id:1, name: "Fuad", surname: "Ismayilov", age: 20, group: "SWP102" },
        {id:172, name: "Nicat", surname: "Babayev", age: 19, group: "SWP202" },
        {id:1233, name: "Sevane", surname: "Muradova", age: 18, group: "SWP102" },
        {id:8927, name: "Leyla", surname: "Kerimova", age: 20, group: "SWP202" },
        {id:3, name: "Jale", surname: "Memmedova", age: 20, group: "SWP202" },
      ];


      function Func (a, b) { 
      let newArr= students.filter(item => item.name.length >= a && item.group == b);
           newArr.unshift('Adiniz');
           console.log(newArr);
        }

        Func(5, "SWP202")


   