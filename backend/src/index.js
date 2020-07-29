const app = require('./app');

//should be set in the .env file
const port = 5000;

//FOR HTTP uncomment
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
