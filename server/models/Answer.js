const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnswerSchema = new Schema({
    answer : {
        type: String,
        required: [true, "please provide the title"],
        minlength: 3,
      },
      uploadBy : {
        name: {
          type: String,
        required: [true, "please provide the name"],
        minlength: 3,
        maxlength: 50
        },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: [true, "please provide the objectId"],
        }
      },
      question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question",
        required: [true, "please provide the objectId"],
      },
      upVote: {
        type: Number,
        default: 0
      },
      downVote: {
        type: Number,
        default: 0
      },
}, {timestamps: true});

module.exports = mongoose.model("answer", AnswerSchema);
