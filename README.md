# bpi

这是一个Bmob javascript API的拓展，封装了一些通用方法

bmob官网：http://www.bmob.cn/

## 配置

### 配置APPID和Key

```
<script>
  BPI.setting.appId = '';
  BPI.setting.restKey = '';
</script>
```

### 配置数据表

```
<script>
  BPI.tables = ['tableName1', 'tabelName2'];
</script>
```

## 通用方法

### 查询列表

```
  /**
	 * 查询信息（列表）
	 * @param tableName 查询的表名
	 * @param page 页码，默认1
   * @param pagesize 分页大小，默认20
	 * @param callback 查询完成后的回调函数
	 */
   BPI.query('tableName', callbackFunc, page, pagesize);
```

## 调用示例

```html
  <script src="bmob-min.js"></script>
	<script src="api.js"></script>
	<script type="text/javascript">
    // 初始化
		BPI.init();
    
    // 查询category表中的第1-20条内容，查询完成后，将结果返回给callback函数回调处理
		BPI.query('category', callback, 1);
    
    // 回调处理函数
		function callback(result){
			for (var i = 0; i < result.length; i++) {
				var id = result[i].id; // 获取id
				var title = result[i].get('title'); // 获取自定义字段
				console.log(id, title);
			}
		}
	</script>
```
