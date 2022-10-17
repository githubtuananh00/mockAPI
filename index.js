require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json());



// app.delete('/koin/:id', (req, res) => {
//     return res.status(204).json({ message: 'Delete Success' })
// })

app.delete('/koin/:id', (req, res) => {
    if (req.params.id === '1') {
        return res.status(204).json({ message: 'Delete Success' })
    } else {
        return res.status(404).json({ message: 'パラメータが不正です。[削除するファイルが 存在しません。]' })
    }
})
app.post('/koin', (req, res) => {
    console.log(req.body);
    req.body.gyomuShosaiCd = null;
    if (req.body.gyomuShosaiCd === null) {
        return res.status(400).json({ message: 'パラメータが不正です。[業務詳細コード]' })
    }
    return res.status(200).json({ message: 'Ok' })
})

app.get('/koin', (req, res) => {
    return res.status(200).json({ message: 'Connect Successfully' })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})