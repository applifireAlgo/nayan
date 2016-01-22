Ext.define('Testproject.testproject.web.com.test.controller.defaultdomain.EmpUiController', {
     extend: 'Testproject.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.EmpUiController',
     onUpdateclick: function(me, e, eOpts) {
          var jsonData = this.getData(me.up('form'));
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/Employee/',
               method: 'PUT',
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
                    } else {
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    }
               },
               failure: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               }
          }, scope);
     },
     onempafterrender: function(me, eOpts) {
          var jsonData = {};
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/EnpFetchSerWS/proEnpFetchSer',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               me: me,
               success: function(response, scope) {
                    var responseData = Ext.JSON.decode(response.responseText);
                    responseData = responseData.response.data;
                    scope.sender.controller.modifyComponent(responseData, 'afddfbi');
                    scope.sender.controller.modifyComponent(responseData, 'ohmiami');
               },
               failure: function(response, scope) {}
          }, scope);
     }
});