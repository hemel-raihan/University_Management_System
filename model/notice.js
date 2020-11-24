const db = require('./db');

module.exports = 
{
    noticeinfo: function(data, callback) {
        var sql = "select * from notice where cid = '" + data.courseid + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

   
}