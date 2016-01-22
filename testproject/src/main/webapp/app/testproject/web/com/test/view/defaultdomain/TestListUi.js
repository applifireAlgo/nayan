Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.TestListUi', {
     "xtype": "testListUi",
     "items": [{
          "xtype": "customdatetimefield",
          "fieldLabel": "submitionDate",
          "name": "submitionDate",
          "bindable": "submitionDate",
          "margin": 5,
          "text": "submitionDate",
          "fieldName": "submitionDate",
          "displayName": "submitionDate",
          "fieldType": "java.sql.Timestamp",
          "widget": "customdatetimefield",
          "isField": true,
          "itemId": "icdoogi",
          "submitFormat": "d-m-Y H:m:s"
     }, {
          "xtype": "button",
          "text": "Search",
          "isLinkBtn": true,
          "margin": 5,
          "name": "Search",
          "itemId": "lmahmoi",
          "listeners": {
               "click": "onSearchclick"
          }
     }],
     "margin": 5,
     "border": true,
     "autoScroll": true,
     "title": "Panel",
     "itemId": "obapcgi",
     "dockedItems": [],
     "extend": "Ext.panel.Panel",
     "requires": ["Testproject.testproject.web.com.test.controller.defaultdomain.TestListUiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.TestListUiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.TestListUiModel", "Testproject.view.fw.component.DateTimeField", "Testproject.view.fw.component.DateTimePicker"],
     "viewModel": "TestListUiViewModel",
     "controller": "TestListUiController"
});