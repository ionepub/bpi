/**
 * bmob api
 */
(function(owner){
	/**
	 * 配置信息
	 */
	owner.setting = {
		'appId'		: 	'',
		'restKey'	: 	'',
		'pagesize'	: 	20,
	};

	/**
	 * 表名
	 */
	owner.tables = ["losen_category"];

	owner.objects = {};

	owner.init = function(){
		if(owner.setting.appId && owner.setting.restKey){
			// init
			Bmob.initialize(owner.setting.appId, owner.setting.restKey);
			
			// init tables
			if(owner.tables){
				for (var i = owner.tables.length - 1; i >= 0; i--) {
					// owner.tables[i]
					owner.objects[owner.tables[i]] = Bmob.Object.extend( owner.tables[i] );
				}
			}
		}else{
			console.error("applicationId or rest api key not found");
		}
	}

	/**
	 * 查询信息（列表）
	 * @param tableName 查询的表名
	 * @param page 页码
	 * @param callback 查询完成后的回调函数
	 */
	owner.query = function(tableName, callback, page, pagesize){
		var queryResult = [];

		if(!tableName){
			callback(queryResult);
			return false;
		}
		if(!owner.objects[tableName]){
			callback(queryResult);
			return false;
		}

		var query = new Bmob.Query(owner.objects[tableName]);
		
		if(!page){
			page = 1;
		}
		if(!pagesize){
			pagesize = owner.setting.pagesize;
		}
		query.skip( (page-1) * pagesize ).limit( pagesize );
		query.find({
			success: function(results){
				callback(results);
			},
			error: function(error){
				console.log("查询失败: " + error.code + " " + error.message);
				callback(queryResult);
			}
		});
	}

})(window.BPI = {});