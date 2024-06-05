const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = [];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };
  users.push(user);
  res.json({ success: true, message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
