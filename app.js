const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #eef2ff, #dbeafe);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .login-box {
            background: #ffffff;
            padding: 32px 28px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
            width: 100%;
            max-width: 360px;
          }
          h2 {
            text-align: center;
            margin-bottom: 24px;
            color: #1f2937;
          }
          label {
            display: block;
            margin-bottom: 8px;
            color: #374151;
            font-weight: bold;
          }
          input {
            width: 100%;
            padding: 12px 14px;
            margin-bottom: 16px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 16px;
          }
          button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: #2563eb;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }
          button:hover {
            background: #1d4ed8;
          }
        </style>
      </head>
      <body>
        <div class="login-box">
          <h2>Login</h2>
          <form method="POST" action="/login">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter username" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />

            <button type="submit">Sign In</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin123') {
    res.send(`
      <h2>Login successful</h2>
      <p>Welcome, ${username}!</p>
      <a href="/">Back to login</a>
    `);
  } else {
    res.send(`
      <h2>Invalid credentials</h2>
      <p>Please check your username and password.</p>
      <a href="/">Try again</a>
    `);
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
