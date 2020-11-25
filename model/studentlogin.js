const db = require('./db');

module.exports ={

	validate: function(user, callback) {
        var sql = "select * from user where email='" + user.email + "' and password='" + user.password + "'";
        db.getResults(sql, function(results) {
            if (results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    
    ProfileInfo: function(data, callback) {
        var sql = "select * from user where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

   /* postinsert: function(user, callback) {
        var sql = "select * from studentuser where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },*/

    /*showskill: function(data, callback) {
        var sql = "select * from studentuser where email = '" + data.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },*/

    showupload: function(id, callback) {
        var sql = "select * from post where studentid = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },



    showcourses: function(email, callback) {
        var sql = "select * from enroll where semail = '" + email + "' ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    showborrow: function(email, callback) {
        var sql = "select * from borrow where semail = '" + email + "' ";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

   


    skilledit: function(id, callback) {
        var sql = "select * from post where id = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    skilldelete: function(id, callback) {
        var sql = "select * from post where id = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    coursedrop: function(id, callback) {
        var sql = "select * from registration where id = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    dropshow: function(id, callback) {
        var sql = "select * from enroll where enid = '" + id + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },

    showorder: function(data, callback) {
        var sql = "select * from photoorder where ownerid = '" + data.id + "'";

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

    
    update: function(user, callback) {
        var sql = "update post set title = '" + user.title + "',photo='" + user.file + "' , description='" + user.description + "' where id='" + user.id + "'";

        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });

    },


    delete: function(id, callback) {
        var sql = "delete from post where id = '" + id + "'";

        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },

    coursedrop: function(id, callback) {
        var sql = "delete from enroll where enid = '" + id + "'";

        //console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    }

}