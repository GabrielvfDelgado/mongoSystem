import app from './src/app.js';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor esta escutando em http://localhost:${port}`);
});