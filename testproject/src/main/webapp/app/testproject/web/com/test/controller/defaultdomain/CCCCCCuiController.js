Ext.define('Testproject.testproject.web.com.test.controller.defaultdomain.CCCCCCuiController', {
     extend: 'Testproject.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.CCCCCCuiController',
     onSearchclick: function(me, e, eOpts) {
          var jsonData = this.getData(me.up('form'));
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
                         scope.sender.reset();
                         Ext.Msg.alert('Server Response', responseData.response.message);
                         var componentsData = [{
                              "compRefId": "ohalili",
                              "responseBindLevel": "Info"
                         }];
                         scope.sender.controller.setResponseDataToComponents(responseData, componentsData);
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