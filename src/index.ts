import express from 'express'
import diaryRouter from './routes/diaries'

const PORT = 3000

const app = express()
app.use(express.json()) // Middleware que transforma la req.body en un json

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log('Server running on http://localhost:3000')
})
