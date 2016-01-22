Ext.define('Testproject.view.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Testproject.view.reportui.querycriteria.QueryCriteriaView',
			'Testproject.view.reportui.datachart.DataChartViewTab',
			'Testproject.view.reportui.datachart.DataChartViewPanel',
			'Testproject.view.reportui.ReportViewController' ,
			'Testproject.view.fw.MainDataPointPanel',
			'Testproject.view.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',
	height:500,
	width:"100%",
	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
