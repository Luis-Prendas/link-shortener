const express = require('express')
const cors = require('cors')
const { nanoid } = require('nanoid')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const urlDatabase = {}

app.post('/shorten', (req, res) => {
  const { originalUrl } = req.body
  if (!originalUrl) return res.status(400).json({ error: 'Missing URL' })

  const id = nanoid(6)
  urlDatabase[id] = originalUrl

  res.json({ shortUrl: `http://localhost:${PORT}/${id}` })
})

app.get('/:id', (req, res) => {
  const originalUrl = urlDatabase[req.params.id]
  if (originalUrl) {
    res.redirect(originalUrl)
  } else {
    res.status(404).send('Link not found or expired.')
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
