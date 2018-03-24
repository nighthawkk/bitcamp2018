const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const database = require('../config').DB;

// Connection URL
//const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'hackeamdb';

var usersCollection,formData,fundGenerator,mentorRequest = null;

// Use connect method to connect to the server
MongoClient.connect('mongodb://Nighthawk:Aman1122@ds223019.mlab.com:23019/hackeamdb', function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

   const db = client.db(dbName);
	usersCollection = db.collection('userCollection');
	formData = db.collection('formData');
	fundGenerator = db.collection('fundGenerator');
	mentorRequest = db.collection('mentorRequest');

});

const users = {
	
	createNew: function(user){
		return new Promise(function(res,rej){
			usersCollection.insertOne(user,function (err,result) {
				if(err) return rej(err);
				return res(result)
			})
		})
	},
	
	showAll: function (whereArgs) {
		return new Promise(function(res,rej){
			usersCollection.find(whereArgs).toArray(function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	},
	
	signInVerify: function (whereArgs) {
		return new Promise(function (res,rej) {
			usersCollection.findOne(whereArgs, function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	},
	
	deleteOne: function (whereArgs) {
		return new Promise(function (res,rej) {
			users.remove(whereArgs,function(err,result){
				if(err) return rej(err);
				else
					return res(result)
			})
		})
	}
	
}

const formsData = {
	
	createNew: function(formdata){
		return new Promise(function(res,rej){
			formData.insertOne(formdata,function (err,result) {
				if(err) return rej(err);
				return res(result)
			})
		})
	},
	
	findOne: function (whereArgs) {
		return new Promise(function (res,rej) {
			formData.findOne(whereArgs, function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	}
}

const fundsGenerator = {
	
	createNew: function(formdata){
		return new Promise(function(res,rej){
			fundGenerator.insertOne(formdata,function (err,result) {
				if(err) return rej(err);
				return res(result)
			})
		})
	},
	
	findOne: function (whereArgs) {
		return new Promise(function (res,rej) {
			fundGenerator.findOne(whereArgs, function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	}
}
 mentorRequest = {
	
	createNew: function(formdata){
		return new Promise(function(res,rej){
			mentorRequest.insertOne(formdata,function (err,result) {
				if(err) return rej(err);
				return res(result)
			})
		})
	},
	
	findOne: function (whereArgs) {
		return new Promise(function (res,rej) {
			mentorRequest.findOne(whereArgs, function (err,result) {
				if(err) return rej(err);
				res(result)
			})
		})
	}
}

module.exports.models = {
  users,formsData,fundsGenerator,mentorRequest
};


