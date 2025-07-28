const express= require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.post ('/submit', (req, res) => {
  res.send('Form submitted successfully!');    
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5`000');
})