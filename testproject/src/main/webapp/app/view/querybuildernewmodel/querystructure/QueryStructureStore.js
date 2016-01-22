Ext.define('Testproject.view.querybuildernewmodel.querystructure.QueryStructureStore', {
    extend: 'Ext.data.Store',
    requires:['Testproject.view.querybuildernewmodel.querystructure.QueryStructureModel'],
    autoSync: false,
    model: 'Testproject.view.querybuildernewmodel.querystructure.QueryStructureModel',
    filters: []
  
});
