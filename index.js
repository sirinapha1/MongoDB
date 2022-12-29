const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
 
const dbConfig = require('./config/mongodb.config.js')
const Customer = require('./models/customer.js')

const cors = require('cors')
const app = express();

app.use(expressd.json())
app.use(express.urlencoded({

}))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(()=>{
        Customer.deletMany({},(err)=>{
    if (err){
        process.exit();
            }
            console.log('Remove Collection of Customer')
            process.exit();
        });
    }).catch(err=>{
        console.log('Cannot Connect to MongoDB')
        process.exit();
    })

app.use(cors())
require('./routes/customer.route.js')(app);

const server = app.listen(3000,()=>{
    let port = server.address().port
    console.log('Run at http://localhost:%s', port)
})

funcion initCustomer(){
    let data =[
        {
            CustomerId:1001,
            FullName: "Krisada"
            Address: "Nonthaburi"
        },
        {
            CustomerID:1002,
            FullName: "Ton"
            Address: "Bangkok"
        },
        {
            CustomerID:1003,
            FullName: "Dream"
            Address: "Chiangmai"
        }
    ]
    for(let i=0; i<data.length; i++){
        const c=new Customer(data[i]);
        c.SAVE()
    }
    console.log("สร้างข้อมูล Customer สำเร็จแล้ว")
}