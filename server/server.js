const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Question = require("./models/Question");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/placementDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API: Get Questions
app.get("/questions", async (req, res) => {
  const { category, company } = req.query;

  try {
    const data = await Question.find({
      category: new RegExp(category, "i"),
      company: new RegExp(company, "i")
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// API: Add Question (for testing)
app.post("/add", async (req, res) => {
  try {
    const newQ = new Question(req.body);
    await newQ.save();
    res.json({ message: "Question Added" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});