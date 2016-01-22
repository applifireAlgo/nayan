Ext.define('Testproject.testproject.web.com.test.controller.defaultdomain.TestListUiController', {
     extend: 'Testproject.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.TestListUiController',
     onSearchclick: function(me, e, eOpts) {
          var jsonData = {};
          jsonData.submitionDate = this.view.down('#icdoogi').getValue();
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/CaseNewRuleWS/proCaseNewRule',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               maskEnable: true,
               maskEle: scope,
               me: me,
               success: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    if (responseData.response.success) {
                         var component = new Ext.create('Testproject.testproject.web.com.test.view.defaultdomain.CaseCmpltUi');
                         component.closable = true;
                         var tabs = Ext.getCmp('appMainTabPanel');
                         tabs.add(component);
                         tabs.setActiveTab(component);
                         component.controller.setData(responseData.response.data);
                    } else {
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    }
               },
               failure: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               }
          }, scope);
     }
});