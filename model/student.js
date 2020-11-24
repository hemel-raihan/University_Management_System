const db = require('./db');

module.exports = 
{
    studentinfo: function(data, callback) {
        var sql = "select * from student where uid = '" + data.studentid + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

   
}