const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

// CRUD = create - read - update - delete
// Method = port - get - put - delete
//mongodb+srv://San:<password>@cluster0.kvzmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://San:151020@cluster0.kvzmg.mongodb.net/Tutorial?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(async () => {
    console.log("succeed")

})

var students = ['trung', 'hung']

app.get('/get-student', (req, res) => { res.status(200).send(students)})

// req => data người gọi truyền vào, res => mình trả về cho người gọi 
app.post('/insert-student', (req, res) => {
    students.push(req.body.username)
    res.status(200).send(students)

})

app.delete('/delete-student', (req, res) => {
    students.forEach((e,i) => e===req.body.username ? students.splice(i, 1) :0)
    res.status(200).send(students)
})
app.listen(3000, () => console.log('Server list run on port 3000'))