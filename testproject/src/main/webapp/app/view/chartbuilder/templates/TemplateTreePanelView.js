Ext.define('Testproject.view.chartbuilder.templates.TemplateTreePanelView', {
	extend : 'Ext.tree.Panel',
	requires:['Testproject.view.chartbuilder.templates.TemplateTreePanelController'],
	controller:'templatecontroller',
	alias:'widget.templateview',
	itemId:'template-view',
	rootVisible : false,
	useArrows: true,
	//lines:true,
	listeners: {
		scope:'controller',
		itemcontextmenu:'itemContextMenuClick',
		load:'onTemplateTreeLoad'
	}	
});