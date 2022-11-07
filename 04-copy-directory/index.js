const fs =require('fs');
const path =require('path');
const copyRecursive=(src,dest)=>{
  const exist=fs.existsSync(src);
  const stats=exist && fs.statSync(src);
  const isDirectory=stats && stats.isDirectory();
  if (isDirectory){
    if(!fs.existsSync(dest))
     fs.mkdirSync(dest);
     fs.readdirSync(src).forEach(childItemName=>{
       copyRecursive(path.join(src,childItemName),path.join(dest,childItemName));
     });
  }
  else{
    if (!fs.existsSync(dest))
    fs.copyFileSync(src,dest)
  }

}


copyRecursive("./files", "./files-copy");