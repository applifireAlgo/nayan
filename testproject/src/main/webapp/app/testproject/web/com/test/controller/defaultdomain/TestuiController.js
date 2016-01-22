Ext.define('Testproject.testproject.web.com.test.controller.defaultdomain.TestuiController', {
     extend: 'Testproject.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.TestuiController',
     onSubmitclick: function(me, e, eOpts) {
          var jsonData = this.getData(me.up('form'));
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/Test/',
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
     onInfoafterrender: function(me, eOpts) {
          var jsonData = {};
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/Test/findAll',
               method: 'GET',
               sender: scope,
               jsonData: jsonData,
               me: me,
               success: function(response, scope) {
                    var responseData = Ext.JSON.decode(response.responseText);
                    responseData = responseData.response.data;
                    scope.sender.controller.modifyComponent(responseData, 'jgenkei');
               },
               failure: function(response, scope) {}
          }, scope);
     }
});