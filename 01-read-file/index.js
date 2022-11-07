const fs = require('fs');

fs.readFile('01-read-file/text.txt','utf-8',(err,data)=>{
  if(err){
    console.error(err);
    return;
  }
  console.log(data);
});