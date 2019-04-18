Ext.onReady(function() {
	
	var columns = [
		{header: '编号', dataIndex: 'id'},
		{header: '名称', dataIndex: 'name'},
		{header: '描述', dataIndex: 'descn'},
	];
	
	var data = [
		['1', 'name1', 'descn1'],
		['2', 'name2', 'descn2'],
		['3', 'name3', 'descn3'],
		['4', 'name4', 'descn4'],
		['5', 'name5', 'descn5'],
	];
	
	
	var store = new Ext.data.ArrayStore({
		data: data,
		fields: [
			{name: 'id'},
			{name: 'name'},
			{name: 'descn'},
		]		
	});
	
	store.load();
	
	var grid = new Ext.grid.GridPanel({
		autoHeight: true,
		renderTo: Ext.getBody(),
		store: store,
		columns: columns
	});
});