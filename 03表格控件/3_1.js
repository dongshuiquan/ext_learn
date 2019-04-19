Ext.onReady(function() {
	
	function renderSex(value) {
		if(value == 'male') {
			return "<span style='color:red;font-weight:bold;'>红男</span>";
		} else {
			return "<span style='color:green;font-weight:bold;'>绿女</span>";
		}
	}
	
	var columns = [
		new Ext.grid.RowNumberer(),
		{header: '编号', dataIndex: 'id', width: 60},
		{header: '名称', dataIndex: 'name', width: 100, sortable: false},
		{header: '描述', dataIndex: 'descn', width: 200},
		{header: '日期', dataIndex: 'date', renderer: Ext.util.Format.dateRenderer('Y-m-d')},
		{header: '性别', dataIndex: 'sex', renderer: renderSex},
	];
	
	var data = [
		['1', 'name1', 'descn1', '1970-01-15T02:58:04', 'male'],
		['2', 'name2', 'descn2', '1970-01-15T02:58:04', 'female'],
		['3', 'name3', 'descn3', '1970-01-15T02:58:04', 'male'],
		['4', 'name4', 'descn4', '1970-01-15T02:58:04', 'female'],
		['5', 'name5', 'descn5', '1970-01-15T02:58:04', 'female'],
	];
	
	
	var store = new Ext.data.ArrayStore({
		data: data,
		fields: [
			{name: 'id'},
			{name: 'name'},
			{name: 'descn'},
			{name: 'date', type: 'date', dateFormat: 'Y-m-dTH:i:s'},
			{name: 'sex'},
		]		
	});
	
	
	
	var sm = new Ext.selection.CheckboxModel();
	
	var grid = new Ext.grid.GridPanel({
		enableColumnMove: true,
		enableColumnResize: true,
		autoHeight: true,
		renderTo: "test",
		store: store,
		loadMark: true,
		columns: columns,
		selModel: sm,
		
		viewConfig: {
			columnsText: '显示列',
			scrollOffset: 30,
			sortAscText: '升',
			sortDescText: '降',
			forceFit: true
		},
		
		bbar: new Ext.PagingToolbar({
			pageSize: 3,
			store: store,
			displayInfo: true,
			displayMsg: '显示第{0} 条到 {1} 条记录, 一共 {2} 条',
			emptyMsg: '没有记录'
		}),
	});
	
	store.load();
	
	Ext.get("remove").on("click", function() {
		store.remove(store.getAt(1));
		grid.view.refresh();
	});
	
	grid.on('itemclick', function() {
		var selected = grid.getSelectionModel().selected;
		for(var i = 0; i < selected.getCount(); i++) {
			var record = selected.get(i);
			Ext.Msg.alert('提示', record.get("id") + ", " + record.get("name"));
		}
	});
	
	
});