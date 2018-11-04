const express = require('express')
const app = express()
const port = 3001
app.set('view engine', 'pug')
//app.use(express.bodyParser());
var stu;
const fs = require('fs');

let rawdatas = fs.readFileSync('det.json');
var det = JSON.parse(rawdatas);


console.log(det);
//app.get('/', function(req, res) {res.render('index', { title: 'Hey', message: res.send(det) })})
// =>res.send(det))
app.get('/',(req,res)=>res.send(det));
//const fs = require('fs');
app.post('/add/:id/:name/:Brand', function (req, res) {
//   let student = {
//           "id": "4",
//           "name": "XBC",
//           "Brand": "500"
//
//       };
    let  id=req.params.id;
    let name=req.params.name;
    let brand=req.params.Brand;
    let data = {
             "id": id,
              "name": name,
             "Brand": brand

      }
    //console.log(req.body);
//     data=JSON.stringify(req.body);
//   console.log("data"+data);
//
//
  det['data'].push(data);
   console.log('3');
   let datas = JSON.stringify(det);
   console.log('4');
//   //console.log('arr '+ data);
//   console.log('5');
   fs.writeFileSync('det.json', datas);
//   //fs.writeFile('det.json', data);
   let rawdata = fs.readFileSync('det.json');
   det = JSON.parse(rawdata);
// console.log('added');
//  res.render('index', { title: 'Hey', message: 'Hello there!' })
res.send(det)
})
app.get('/list/:id/:name',(req,res)=>res.send(det));
app.get('/show', function(req, res) {
  let rawdata = fs.readFileSync('det.json');
   det = JSON.parse(rawdata);
    console.log(det);
  res.render('medicine',{MList:det.data})});


  app.delete('/delete/:id', function(req, res) {
    let rawdata = fs.readFileSync('det.json');
     det = JSON.parse(rawdata);
      console.log("before"+det.data);
      let id=req.params.id;
        console.log("before"+det.data["1"]);
      //det['data'].pop(id);
      //  det['data'].pop(id);
    //  delete det.data[id];
     det.data.splice(id,1);
  console.log("after"+det.data);
  let data = JSON.stringify(det);
  fs.writeFileSync('det.json', data);



    //res.render('medicine',{MList:det.data})});
res.json(det)});

app.get('/update/:id/:name', function(req, res) {
  let rawdata = fs.readFileSync('det.json');
   det = JSON.parse(rawdata);
    console.log("update"+req.params.id);
    console.log("update"+det.data[1].id);
   let id=req.params.id;
    let name=req.params.name;
    for (i = 0; i < det.data.length; i++) {
      if (det.data[i].id == "2") {
        console.log("inside"+det.data[i].name);
        det.data[i].name = name;
        console.log("inside"+det.data[i].name);
      }
    }
    console.log("after"+det.data);
let data = JSON.stringify(det);
fs.writeFileSync('det.json', data);
res.json(det)});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
