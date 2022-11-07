const fs = require('fs');

const content="hey there i am Mokhira";
fs.writeFile('02-write-file/text.txt',content,err=>{
  if(err){
    console.error(err);
    return;
  }
});
  