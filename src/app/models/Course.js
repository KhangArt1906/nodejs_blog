const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    _id: { type: Number, },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoID: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    _id: false,
    timestamps: true,
  }
);


//Add plugins
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, { 
  deletedAt: true, 
  overrideMethods: 'all' });

module.exports = mongoose.model("Course", CourseSchema);
