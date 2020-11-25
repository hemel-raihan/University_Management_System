const db = require('./db');

module.exports = 
{
    orderinfo: function(data, callback) {
        var sql = "select * from post where id = '" + data.id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    photoorder: function(user, callback) {
      
        var sql = "insert into photoorder VALUES ('', '" + user.id + "' , '" + user.title + "' , '" + user.ownerid + "' , '" + user.email + "')";
		
        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },


   
   
}