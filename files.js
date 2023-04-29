const fs = require('fs');


// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//    if (err){
//     console.log(err);
//    }
//    console.log(data.toString());
// })


// writing files
// fs.writeFile('./docs/blog2.txt', 'i,m very beautiful', ()=>{
//     console.log('the file is written');
// })



// directories
// if(!fs.existsSync('./asset')){

//     fs.mkdir('./asset',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('created');
//     })
// }else{
//     fs.rmdir('./asset', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
      if(err){
        console.log(err);
      }
      console.log('file deleted');
    })
}