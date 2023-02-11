let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(({name,marks}) => {
     if(marks > 50){
        console.log(name + " "+ marks);
     }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(({name,marks}) => {
        if(marks > 50){
          console.log(name);
        }
      });
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj={id: 4, name: "susan", age: "20", marks: 45};
    arr.push(obj);
    
    for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
    }
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter(function (failed) {
        
        return failed.marks > 50;
      });
      for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
      }
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2= [
      { id: 10, name: "priya", age: "29", marks: 60 },
      { id: 11, name: "abcd", age: "27", marks: 65 },
      { id: 12, name: "xyz", age: "32", marks: 90 },
    ];
    arr=arr.concat(arr2);
    for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
    }
  }
  