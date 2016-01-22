Ext.define('Testproject.testproject.web.com.test.controller.defaultdomain.CasePUiController', {
     extend: 'Testproject.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.CasePUiController',
     onSubmitclick: function(me, e, eOpts) {
          var jsonData = this.getData(me.up('form'));
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/CaseSubmition/',
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
     }
});