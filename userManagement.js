'use strict';

function User(name,pwd,description) {
	this.name = name;
	this.pwd = pwd;
	this.description = description;
}

function Hospital(name,pwd,description) {
	this.name = name;
	this.pwd = pwd;
	this.description = description;
}

var users = [new User("user1", "passw0rd","first user"),new User("user2", "passw0rd","second user")];
var hospitals = [new Hospital("hospital1","passw0rd","Hospital description"),new Hospital("hospital2","passw0rd","Hospital description")];


function manager() {
	var test = "hello ";
	
	// 注册
    this.signUp = function(userType,name,pwd,description) {
    	if (userType == "hospital") {
    		hospitals.push(new Hospital(name,pwd,description));
    		return true;
    	} else {
    		users.push(new User(name,pwd,description));
    		return true;
    	}
    	return false;
    }
    // 登录
    this.signIn = function(userType, name, pwd) {
    	if (userType == "hospital") {
    		for (var i = 0; i< hospitals.length; i++) {
    			if (hospitals[i].name == name && hospitals[i].pwd == pwd) {
    				return true;
    			}
    		}
    	} else {
    		for (var i = 0; i< users.length; i++) {
    		    if ( users[i].name == name && users[i].pwd == pwd) {
    		    	return true;
    		    }
    	    }
    	}
    	return false;
    }

    this.getAvailableHospitals = function() {
    	var hos = [];
    	for (var i in hospitals) {
    		hos.push(hospitals[i].name);
    	}
    	return hos;
    }
}

module.exports = manager;
