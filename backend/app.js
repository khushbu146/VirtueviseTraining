const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//routes
const userRoutes = require('./src/routes/use');
const app = express();

app.use(bodyParser.json());
//routes
app.use('/api/', userRoutes);

//connection to database
mongoose
  .connect('mongodb+srv://khushboorana2531:Kb%40mongodb@cluster0.33qw8mz.mongodb.net/ecom?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });




// const express = require('express');

// const bodyParser = require('body-parser');

// const userRoutes = require('./src/routes/user-routes');

// const app = express();

// app.use('/api/users',userRoutes);

// app.use((error, req, res, next) => {
//     if (res.headerSent) {
//       return next(error);
//     }
//     res.status(error.code || 500)
//     res.json({message: error.message || 'An unknown error occurred!'});
//   });

// app.listen(5000);
