const express = require('express');
const router = express.Router();

const {Quiz} = require('../models');


router.get('/quiz', async function(req, res, next) {
  try{
    const quiz = await Quiz.findAll()
    res.status(200).json({quiz})
  }catch(err){
    console.error(err);
  }
});

router.post('/create', async (req, res) => {
  const {question, data_1, answer_1, data_2, answer_2, data_3, answer_3, data_4, answer_4} = req.body;
  try{
    await Quiz.create({
      question,
      data_1,
      answer_1,
      data_2,
      answer_2,
      data_3,
      answer_3,
      data_4,
      answer_4
    });
    res.status(200).send("퀴즈 등록 성공");
  }catch(err){
    console.error(err);
  }
})

module.exports = router;
