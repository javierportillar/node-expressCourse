const {readFile, writeFile,} = require('fs');
// const fs = require("fs");
console.log('start');
readFile('./folder/first.txt',(err,res)=>{
  if(err){
    console.log(err);
    return;
  }
  const first=res;
  readFile('./folder/second.txt','utf8',(err,res)=>{
    if(err){
      console.log(err);
      return;
    }
    const second = res;
    writeFile('./folder/result-async.txt',`Here is the result: ${first}, ${second}`,(err,res)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
      console.log(res);
    })
  })
})
console.log('starting next task');
