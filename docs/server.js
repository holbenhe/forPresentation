const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb+srv://holbenhe:mongoholbendbhe@cluster0.0zti5om.mongodb.net/Websites", { useNewUrlParser: true}, {useUnifiedTopology: true });

//form start
//create a data schema
const ReviewsSchema = {
    name: String,
    review: String,
    textbook: String
}

const Review = mongoose.model("Review", ReviewsSchema);


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    let newReview = new Review({
        name: req.body.website,
        review: req.body.review,
        textbook: req.body.enterTextbook
    });
    newReview.save();
    res.redirect('/');
})


app.get("/", (req, res) => {
    res.render("table");
})



//getting info start

//uses same review schema

// const Website = mongoose.model('Websites', ReviewsSchema);

// app.get('/', (req, res) => {
//     Website.find({}, function(err, Reviews) {
//         res.render('index', {
//             ReviewsList: Reviews
//         })
//     })
// })
//getting info end

app.listen(4000, function(){
    console.log('server is running');
})