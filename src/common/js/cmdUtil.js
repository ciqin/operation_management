'use strict';

// 初始化系统，启动程序时调用
function init() {
	// Initial System
	console.log("init success");
}

/* 历史记录的格式
name : 执行操作的名字，String
result : 操作的结果，String
hospitals : 提供结果的医院，Array
*/
function Record(name,result,hps){
	this.name = name;
	this.result = result;
	this.hps = hps
}
// 临时的历史记录
var rcds = [];
// 临时的API列表
var apis = ['getTotalRecordByIcd','api2','api3'];
var hospitals = ['hospital1','hospital2'];

/*
普通用户可执行的操作
	queryAvailableHospital
	queryAvailableAPI
	queryHistoricRecords
	invokeAPI
*/
// 查询所有可用的医院
function queryAvailableHospital() {
	return hospitals;
}

// 查询所有可用的API
function queryAvailableAPI() {
	return apis;
}

/* 查询历史记录 
user : 用户名，String
*/
function queryHistoricRecords(user) {
	return rcds;
}

/* 执行查询
func : 执行的函数（API），String
args : 参数，String
*/ 
function invokeAPI(func, args) {
	var ret = " Invoke result: I10.X02 -> 100 ";
	rcds.push(new Record(func, ret, hospitals));
	return ret;
}

/*
医院API的结构
name : API的名字, String
data : API访问的数据集, String
status : API的状态，String (on/off)
hospital_name : API所属医院的名字
*/ 
function LocalAPI(name,data,status,hospital_name){
	this.name = name;
	this.data = data;
	this.status = status;
	this.hospital_name = hospital_name
}
// hospital1临时的API对象
var hospital1_apis = [new LocalAPI('getInstanceByIcd','fangzhuang EHR data','on','hospital1')];
// hospital1临时的API对象
var hospital2_apis = [new LocalAPI('getInstanceByIcd','xiamen EHR data','on','hospital2')];


/* 医院可执行的操作
	queryAsset
	queryLocalAPIs
	enableAPI
	disableAPI
	invokeLocalAPI
	addAPI
*/
// 查询医院的资产
function queryAsset(hospital_name) {
	var asset = {
		'score':2,
		'owner':hospital_name
	};
	return asset;
}

// 查询医院能用的API
function queryLocalAPIs(hospital_name) {
	if (hospital_name == 'hospital1') {
		return hospital1_apis;
	} else if (hospital_name == 'hospital2'){
		return hospital2_apis;
	} else {
		return [];
	}
}

// 激活API
function enableAPI(hospital_name, api) {
	var local_apis;
	if (hospital_name == "hospital1") {
		local_apis = hospital1_apis;
	} else {
		local_apis = hospital2_apis
	}
	for (var i = 0; i < local_apis.length; i++) {
		if (local_apis[i].name == api) {
			local_apis[i].status = 'on';
		}
	}
	return true;
}

// 关闭API
function disableAPI(hospital_name, api) {
	var local_apis;
	if (hospital_name == "hospital1") {
		local_apis = hospital1_apis;
	} else {
		local_apis = hospital2_apis
	}
	for (var i = 0; i < local_apis.length; i++) {
		if (local_apis[i].name == api) {
			local_apis[i].status = 'off';
		}
	}
	return true;
}

// 调用本地的API
function invokeLocalAPI(hospital_name, api, args) {
	var ret = " Invoke result: I10.X02 -> 100 ";
	return ret;
}

// 增加API
function addAPI(name,data,status,hospital_name) {
	if (hospital_name == 'hospital1') {
		hospital1_apis.push(new LocalAPI(name,data,status,hospital_name));
	} else {
		hospital2_apis.push(new LocalAPI(name,data,status,hospital_name));
	}
	return true;
}

function cmdUtil() {

	// init
	this.init = init;

	// user operation
	this.queryAvailableHospital = queryAvailableHospital;
	this.queryAvailableAPI = queryAvailableAPI;
	this.queryHistoricRecords = queryHistoricRecords;
	this.invokeAPI = invokeAPI;

	// hospital operation
	this.queryAsset = queryAsset;
	this.queryLocalAPIs = queryLocalAPIs;
	this.enableAPI = enableAPI;
	this.disableAPI = disableAPI;
	this.invokeLocalAPI = invokeLocalAPI;
	this.addAPI = addAPI;
}

module.exports = cmdUtil;
