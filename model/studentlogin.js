const db = require('./db');

module.exports ={

	validate: function(user, callback) {
        var sql = "select * from studentuser where email='" + user.email + "' and password='" + user.password + "'";
        db.getResults(sql, function(results) {
            if (results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    
    ProfileInfo: function(data, callback) {
        var sql = "select * from studentuser where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    postinsert: function(user, callback) {
        var sql = "select * from studentuser where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

	/*getById: function(id, callback) {
        var sql = "select * from studentuser where id= '" + id + "'";
        db.getResults(sql, function(results) {
            callback(results);
        });

    },

    getByName: function(name, callback) {
        var sql = "select * from studentuser where username= '" + name.name + "'";
        db.getResults(sql, function(results) {
            callback(results);
        });

    },

    getAll: function(user,callback){
		var sql = "select * from studentuser where username= '" + user.name + "'";
		db.getResults(sql, function(results){
			callback(results);
		});

	},*/
	
	insert: function(user, callback) {
      
        var sql = "insert into post VALUES ('', '" + user.post + "' , '" + user.id + "')";
		
        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },
}