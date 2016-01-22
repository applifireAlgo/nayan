Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.CompletTimeUi', {
     "xtype": "completTimeUi",
     "name": "tbk",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "TBrk",
          "isListPanel": true,
          "autoScroll": true,
          "border": false,
          "layout": "column",
          "defaults": {
               "columnWidth": "1.0"
          },
          "templateConfig": {
               "uiId": "793B3127-30FF-4141-9E25-991D4E445437",
               "uiClass": "Testproject.testproject.web.com.test.view.defaultdomain.TtimePrtl",
               "uiType": 2,
               "url": "secure/Test/findAll",
               "requestMethodType": "GET"
          },
          "title": "TBrk",
          "padding": 0,
          "margin": 5,
          "itemId": "ahmhdni",
          "dockedItems": []
     }],
     "border": true,
     "title": "DailyTBrk",
     "margin": 5,
     "itemId": "kmkofgi",
     "dockedItems": [],
     "extend": "Ext.form.Panel",
     "layout": "fit",
     "requires": ["Testproject.testproject.web.com.test.controller.defaultdomain.CompletTimeUiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.CompletTimeUiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.CompletTimeUiModel", "Testproject.view.fw.component.DateTimeField", "Testproject.view.fw.component.DateTimePicker", "Testproject.view.fw.component.ListViewBaseView"],
     "viewModel": "CompletTimeUiViewModel",
     "controller": "CompletTimeUiController"
});