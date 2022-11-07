// const fs =require("fs").promises;
// async function main(){
//   await findSalesFiles("03-files-in-folder/secret-folder");
// }
// main();
//  async function findSalesFiles(folderName){
//   const storeFiles= await fs.readdir(folderName);

//   console.log(storeFiles);
 
  
//  }


// function FileDetails() {

//   // GET THE FILE INPUT.
//   var fi = document.getElementById('03-files-in-folder/secret-folder');

//   // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
//   if (fi.files.length > 0) {

//       // THE TOTAL FILE COUNT.
//       document.getElementById('fp').innerHTML =
//           'Total Files: <b>' + fi.files.length + '</b></br >';

//       // RUN A LOOP TO CHECK EACH SELECTED FILE.
//       for (var i = 0; i <= fi.files.length - 1; i++) {

//           var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
//           var fsize = fi.files.item(i).size;      // THE SIZE OF THE FILE.

//           // SHOW THE EXTRACTED DETAILS OF THE FILE.
//           document.getElementById('fp').innerHTML =
//               document.getElementById('fp').innerHTML + '<br /> ' +
//                   fname + ' (<b>' + fsize + '</b> bytes)';
//       }
//   }
//   else { 
//       alert('Please select a file.') 
//   }
// }

function getFileInfo(){
    var name = document.getElementById('myFile').files[0].name;
    var size = document.getElementById('myFile').files[0].size;
    var type = document.getElementById('myFile').files[0].type;
    var date = document.getElementById('myFile').files[0].lastModifiedDate;
    
    var info = name+" "+size+" "+type+" "+date;
    alert(info);
}
