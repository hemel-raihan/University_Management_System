const db = require('./db');

module.exports = 
{
    courseinfo: function(data, callback) {
        var sql = "select * from course  ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    coursedetails: function(id, callback) {
        var sql = "select * from course where cid = '" + id + "'" ;

        db.getResults(sql, function(status) {
            callback(status);
        });
    },


    courseregistration: function(id, callback) {
        var sql = "select * from course where cid = '" + id + "'" ;

        db.getResults(sql, function(status) {
            callback(status);
        });
    },


    insert: function(user, callback) {
      
        var sql = "insert into enroll VALUES ('', '" + user.courseid + "' , '" + user.coursename + "' , '" + user.teacher + "' , '" + user.studentemail + "','')";
		
        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },
    

    
}