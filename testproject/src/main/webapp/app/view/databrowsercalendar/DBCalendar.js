Ext.define('Testproject.view.databrowsercalendar.DBCalendar', {
	extend : 'Testproject.view.databrowsercalendar.DBCalendarView',
	requires : [ 'Testproject.view.databrowsercalendar.DBCalendarController',
	             'Testproject.view.databrowsercalendar.DBCalendarView'],
	controller : 'databrowsercalendar',
	items : [ ],
	listeners : {
		afterrender : 'loadData',
		scope : "controller"
	}
});
