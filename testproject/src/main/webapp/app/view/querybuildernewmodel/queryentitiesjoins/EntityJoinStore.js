Ext.define('Testproject.view.querybuildernewmodel.queryentitiesjoins.EntityJoinStore', {
    extend: 'Ext.data.Store',
    requires:['Testproject.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel'],
    autoSync: false,
    model: 'Testproject.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel',
    data:[]
});
