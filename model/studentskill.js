const db = require('./db');

module.exports = 
{
    skillinfo: function(data, callback) {
        var sql = "select * from post order by id desc  ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    skilldetails: function(id, callback) {
        var sql = "select * from post where id = '" + id + "'" ;

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    
}