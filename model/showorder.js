const db = require('./db');

module.exports = 
{
    showorder: function(data, callback) {
        var sql = "select * from photoorder where ownerid = '" + data.id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },


   
   
}