Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.TtimePrtl', {
     "xtype": "ttimePrtl",
     "items": [{
          "xtype": "panel",
          "items": [{
               "xtype": "customdatetimefield",
               "fieldLabel": "Date",
               "name": "tdate",
               "bindable": "tdate",
               "margin": 5,
               "itemId": "bnagpfi",
               "submitFormat": "d-m-Y H:m:s"
          }],
          "border": true,
          "layout": "center",
          "title": "Center Layout",
          "margin": 5,
          "bodyStyle": {
               "background": "#CCFFCC"
          },
          "itemId": "mljaili",
          "dockedItems": []
     }, {
          "xtype": "panel",
          "items": [{
               "xtype": "textfield",
               "fieldLabel": "Ttime",
               "margin": 5,
               "bindable": "ttime",
               "name": "ttime",
               "title": "Ttime",
               "rowspan": 0,
               "colspan": 0,
               "itemId": "gcnchki"
          }, {
               "xtype": "textfield",
               "fieldLabel": "Name",
               "margin": 5,
               "bindable": "tName",
               "name": "tName",
               "title": "Name",
               "rowspan": 0,
               "colspan": 0,
               "itemId": "fkddhbi"
          }],
          "layout": {
               "type": "table",
               "columns": 3,
               "tableAttrs": {
                    "style": {
                         "width": "100%"
                    }
               }
          },
          "title": "Table Layout",
          "border": true,
          "margin": 5,
          "bodyStyle": {
               "background": "#CCFFCC"
          },
          "itemId": "inlonki",
          "dockedItems": []
     }],
     "margin": 5,
     "border": true,
     "autoScroll": true,
     "title": "Panel",
     "bodyStyle": {
          "background": "#CCFFCC"
     },
     "isPartialUI": true,
     "itemId": "bnjjkii",
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
                    "background": "#CCFFCC"
               },
               "itemId": "fngnnji",
               "listeners": {
                    "click": "onSubmitclick"
               }
          }],
          "itemId": "ocnipji",
          "dockedItems": []
     }],
     "extend": "Ext.panel.Panel",
     "requires": ["Testproject.testproject.web.com.test.controller.defaultdomain.TtimePrtlController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.TtimePrtlViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.TtimePrtlModel", "Testproject.view.fw.component.DateTimeField", "Testproject.view.fw.component.DateTimePicker"],
     "viewModel": "TtimePrtlViewModel",
     "controller": "TtimePrtlController"
});