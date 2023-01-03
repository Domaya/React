const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'myreact-app/build')));

app.get('/react', function(req, res){
    res.sendFile(path.join(__dirname, 'myreact-app/build/index.html'))
})

app.get('/pet', function(req, res){
    // res.sendFile(path.join(__dirname, 'myreact-app/build/index.html'))
    res.send('<h1>pet page</h1>')
})

app.get('/beauty', function(req, res){
    // res.sendFile(path.join(__dirname, 'myreact-app/build/index.html'))
    res.send('<h1>어쩔티비~</h1>')
})


//html파일보내기
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html')
// })

app.get('/write', function(req, res){
    res.sendFile(__dirname + "/write.html");
})

//app.listen(9999, ()=>{})
app.listen(8090, function(){
    console.log('listening from 8090')
})