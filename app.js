
const express = require('express');
const app = express();
const getDB = require('./database');
const routes = require('./Routes/apis');


const PORT = process.env.PORT || 3000;  



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    await getDB(); // Establish database connection
    next();
  });

app.use(routes);


app.listen(PORT, () => {    
    console.log('Server is running on port ',PORT);

});



