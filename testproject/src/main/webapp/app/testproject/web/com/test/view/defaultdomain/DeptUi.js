Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.DeptUi', {
     "xtype": "deptUi",
     "name": "Department",
     "items": [{
          "xtype": "textfield",
          "fieldLabel": "Department",
          "margin": 5,
          "bindable": "dept",
          "name": "dept",
          "title": "Department",
          "itemId": "nmooaei"
     }, {
          "xtype": "numberfield",
          "fieldLabel": "Dept No",
          "name": "deptno",
          "margin": 5,
          "bindable": "deptno",
          "title": "Dept No",
          "itemId": "leljjni"
     }, {
          "xtype": "hiddenfield",
          "fieldLabel": "deptId",
          "bindable": "deptId",
          "margin": 5,
          "name": "deptId",
          "title": "deptId",
          "itemId": "fpdceci"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Department ",
     "margin": 5,
     "bodyStyle": {
          "background": "#00FFFF"
     },
     "header": {
          "style": {
               "background": "#800080"
          },
          "title": "Department "
     },
     "style": {
          "borderColor": "#333333"
     },
     "itemId": "gbokhfi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "button",
               "name": "Submit",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "style": {
                    "background": "#00FFFF",
                    "borderColor": "#333333"
               },
               "itemId": "mgpgjei",
               "listeners": {
                    "click": "onSubmitclick"
               }
          }],
          "style": {
               "background": "#3366FF"
          },
          "itemId": "kdhjhki",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "requires": ["Testproject.testproject.web.com.test.controller.defaultdomain.DeptUiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.DeptUiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.DeptUiModel"],
     "viewModel": "DeptUiViewModel",
     "controller": "DeptUiController"
});