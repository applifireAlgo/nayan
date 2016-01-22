Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.EmpUi', {
     "xtype": "empUi",
     "name": "emp",
     "items": [{
          "xtype": "textfield",
          "fieldLabel": "Employee",
          "margin": 5,
          "bindable": "firstName",
          "name": "firstName",
          "title": "Employee",
          "isRelatedWith": "cmegnii",
          "itemId": "ohmiami",
          "readOnly": true
     }, {
          "xtype": "combo",
          "name": "dept",
          "margin": 5,
          "bindable": "dept",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Department",
          "displayField": "dept",
          "valueField": "deptId",
          "title": "Department",
          "itemId": "hjmanli",
          "store": {
               "model": "Testproject.testproject.shared.com.test.model.defaultdomain.DeptModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "dept",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/Dept/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          }
     }, {
          "xtype": "textfield",
          "fieldLabel": "Designation",
          "margin": 5,
          "bindable": "designation",
          "name": "designation",
          "title": "Designation",
          "itemId": "oonaeji"
     }, {
          "xtype": "textfield",
          "fieldLabel": "Job Type",
          "margin": 5,
          "bindable": "jobType",
          "name": "jobType",
          "title": "Job Type",
          "itemId": "hlodbci"
     }, {
          "xtype": "textfield",
          "fieldLabel": "PAN",
          "margin": 5,
          "bindable": "pan",
          "name": "pan",
          "title": "PAN",
          "itemId": "ljagpji"
     }, {
          "xtype": "hiddenfield",
          "fieldLabel": "empId",
          "bindable": "empId",
          "margin": 5,
          "name": "empId",
          "title": "empId",
          "isRelatedWith": "cmegnii",
          "itemId": "afddfbi"
     }, {
          "xtype": "hiddenfield",
          "fieldLabel": "contactId",
          "bindable": "contactId",
          "margin": 5,
          "name": "contactId",
          "title": "contactId",
          "itemId": "djbofki"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Emp Info",
     "margin": 5,
     "bodyStyle": {
          "background": "#CCFFFF"
     },
     "style": {
          "borderColor": "#993366"
     },
     "header": {
          "style": {
               "background": "#993366"
          },
          "title": "Emp Info"
     },
     "itemId": "nhnjpfi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "button",
               "name": "Update",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Update",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "gegpjei",
               "listeners": {
                    "click": "onUpdateclick"
               }
          }],
          "style": {
               "background": "#CC99FF"
          },
          "itemId": "agffnbi",
          "dockedItems": []
     }],
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.DeptModel", "Testproject.testproject.web.com.test.controller.defaultdomain.EmpUiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.EmpUiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.EmpUiModel"],
     "extend": "Ext.form.Panel",
     "listeners": {
          "afterrender": "onempafterrender",
          "scope": "controller"
     },
     "viewModel": "EmpUiViewModel",
     "controller": "EmpUiController"
});