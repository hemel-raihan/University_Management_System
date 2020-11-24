const db = require('./db');
module.exports = 
{
    showlibrary: function(callback) {
        var sql = "select * from library ";

        db.getResults(sql, function(status) {
            callback(status);
        });

    },

    borrowbooks: function(id, callback) {
        var sql = "select * from library where lid = '" + id + "' ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    bookinsert: function(user, callback) {
      
        var sql = "insert into borrow VALUES ('', '" + user.id + "' , '" + user.name + "' , '" + user.bdate + "' , '" + user.rdate + "' , '" + user.studentemail + "')";
		
        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },
}