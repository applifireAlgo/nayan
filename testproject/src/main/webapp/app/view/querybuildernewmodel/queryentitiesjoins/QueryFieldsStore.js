Ext.define('Testproject.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsStore', {
    extend: 'Ext.data.Store',
    requires:['Testproject.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel'],
    autoSync: false,
    model: 'Testproject.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel',
    filters: []
  
});
