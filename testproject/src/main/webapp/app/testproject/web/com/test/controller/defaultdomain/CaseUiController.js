Ext.define('Testproject.testproject.web.com.test.controller.defaultdomain.CaseUiController', {
     extend: 'Testproject.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.CaseUiController',
     onSearchclick: function(me, e, eOpts) {
          var jsonData = {};
          jsonData.submitionDate = this.view.down('#mneidii').getValue();
          jsonData.submitionDate1 = this.view.down('#olpncdi').getValue();
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/CaseSubmition/CaseQ',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               maskEnable: true,
               maskEle: scope,
               me: me,
               success: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    if (responseData.response.success) {
                         Ext.Msg.alert('Server Response', responseData.response.message);
                         var componentsData = [{
                              "compRefId": "gdfndii",
                              "responseBindLevel": "CaseInfo"
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