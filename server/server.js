const express = require("express");
const cors = require("cors");
const wordsRoute = require("./routes/words");
const ranksRoute = require("./routes/ranks");

const app = express();

// App Middleware
app.use(express.json());
app.use(cors());

//Routes Middleware
app.use("/words", wordsRoute); // Words Endpoint
app.use("/rank", ranksRoute); //Rank Endpoint

const port = 3001;
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
