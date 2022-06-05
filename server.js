const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Asia',
        'waterTemp': '200',
        'steepTime': '240 s',
        'caffeinated': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'Asia',
        'waterTemp': '200',
        'steepTime': '240 s',
        'caffeinated': true,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': '0',
        'steepTime': '0',
        'caffeinated': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')                                                //this is what happens when our servers hears our request
})

app.get('/api/:name',(req,res)=>{
    const teaName = req.params.name.toLowerCase()
if (tea[teaName]){
    res.json(tea[teaName])
}else{
    res.json(tea['unknown'])
}
})



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta go catch it!`)
})