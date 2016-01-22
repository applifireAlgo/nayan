Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.TestNewUi', {
     "xtype": "testNewUi",
     "items": [{
          "xtype": "displayfield",
          "fieldLabel": "Name",
          "margin": 5,
          "bindable": "tName",
          "name": "tName",
          "itemId": "iolbnoi"
     }, {
          "xtype": "customdatetimefield",
          "fieldLabel": "Date",
          "name": "tdate",
          "bindable": "tdate",
          "margin": 5,
          "itemId": "iohlmfi",
          "submitFormat": "d-m-Y H:m:s"
     }, {
          "xtype": "label",
          "name": "ttime",
          "bindable": "ttime",
          "html": "Ttime",
          "itemId": "oockimi"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Form",
     "margin": 5,
     "itemId": "gjmmpgi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "button",
               "text": "Submit",
               "isSubmitBtn": true,
               "margin": 5,
               "name": "Submit",
               "itemId": "opdabai",
               "listeners": {
                    "click": "onSubmitclick"
               }
          }],
          "itemId": "jncddoi",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "requires": ["Testproject.testproject.web.com.test.controller.defaultdomain.TestNewUiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.TestNewUiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.TestNewUiModel", "Testproject.view.fw.component.DateTimeField", "Testproject.view.fw.component.DateTimePicker"],
     "viewModel": "TestNewUiViewModel",
     "controller": "TestNewUiController"
});