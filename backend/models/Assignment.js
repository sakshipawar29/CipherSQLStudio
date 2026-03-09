const mongoose = require("mongoose")

const AssignmentSchema = new mongoose.Schema({
 title:String,
 description:String,
 difficulty:String,
 question:String,

 sampleTables:[
   {
     tableName:String,
     columns:[
       {
         columnName:String,
         dataType:String
       }
     ],
     rows:[mongoose.Schema.Types.Mixed]
   }
 ],

 expectedOutput:{
   type:String,
   value:mongoose.Schema.Types.Mixed
 }

})

module.exports = mongoose.model("Assignment", AssignmentSchema)