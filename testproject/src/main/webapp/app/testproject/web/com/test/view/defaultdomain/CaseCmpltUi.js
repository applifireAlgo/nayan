Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.CaseCmpltUi', {
     "xtype": "caseCmpltUi",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "ListPanel",
          "isListPanel": true,
          "autoScroll": true,
          "border": false,
          "layout": "column",
          "defaults": {
               "columnWidth": "1.0"
          },
          "templateConfig": {
               "uiId": "0425E389-A147-4427-AD03-E1F2E7530F16",
               "uiClass": "Testproject.testproject.web.com.test.view.defaultdomain.CasePUi",
               "uiType": 2,
               "url": "secure/CaseSubmition/findAll",
               "requestMethodType": "GET"
          },
          "title": "ListPanel",
          "padding": 0,
          "margin": 5,
          "itemId": "odmdcbi",
          "dockedItems": []
     }],
     "border": true,
     "title": "Form",
     "margin": 5,
     "itemId": "hecpmhi",
     "dockedItems": [],
     "extend": "Ext.form.Panel",
     "layout": "fit",
     "requires": ["Testproject.testproject.web.com.test.controller.defaultdomain.CaseCmpltUiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.CaseCmpltUiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.CaseCmpltUiModel", "Testproject.view.fw.component.DateTimeField", "Testproject.view.fw.component.DateTimePicker", "Testproject.view.fw.component.ListViewBaseView"],
     "viewModel": "CaseCmpltUiViewModel",
     "controller": "CaseCmpltUiController"
});