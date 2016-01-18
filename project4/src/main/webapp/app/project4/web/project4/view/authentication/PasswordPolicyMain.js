Ext.define('Project4.project4.web.project4.view.authentication.PasswordPolicyMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "PasswordPolicyMainController",
     "restURL": "/PasswordPolicy",
     "defaults": {
          "split": true
     },
     "requires": ["Project4.project4.shared.project4.model.authentication.PasswordPolicyModel", "Project4.project4.web.project4.controller.authentication.PasswordPolicyMainController", "Project4.project4.shared.project4.viewmodel.authentication.PasswordPolicyViewModel"],
     "communicationLog": [],
     "tabPosition": "bottom",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "defaults": {
               "split": true
          },
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "customWidgetType": "vdTabLayout",
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "Password Policy",
               "name": "PasswordPolicyTreeContainer",
               "itemId": "PasswordPolicyTreeContainer",
               "restURL": "/PasswordPolicy",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "title": "Browse",
                    "useArrows": true,
                    "rootVisible": false,
                    "itemId": "PasswordPolicyTree",
                    "listeners": {
                         "select": "treeClick"
                    },
                    "tbar": [{
                         "xtype": "triggerfield",
                         "customWidgetType": "vdTriggerField",
                         "emptyText": "Search",
                         "triggerCls": "",
                         "listeners": {
                              "change": "onTriggerfieldChange",
                              "buffer": 250
                         }
                    }, "->", {
                         "xtype": "tool",
                         "type": "refresh",
                         "tooltip": "Refresh Tree Data",
                         "handler": "onTreeRefreshClick"
                    }]
               }, {
                    "title": "Advance Search",
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "itemId": "queryPanel",
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "handler": "onFilterClick"
                         }]
                    }],
                    "items": [{
                         "name": "policyName",
                         "itemId": "policyName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Name",
                         "fieldId": "02F30BF8-1D40-4FC0-903A-39BBD440BA0E",
                         "minLength": "0",
                         "maxLength": "256"
                    }]
               }],
               "region": "west",
               "width": "20%"
          }, {
               "region": "center",
               "layout": "border",
               "defaults": {
                    "split": true
               },
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "PasswordPolicyViewModel",
                    "xtype": "form",
                    "displayName": "Password Policy",
                    "title": "Password Policy",
                    "name": "PasswordPolicy",
                    "itemId": "PasswordPolicy",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "policyId",
                         "itemId": "policyId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Policy Id",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Policy Id<font color='red'> *<\/font>",
                         "fieldId": "80952E21-ED22-4EA2-9228-D70B00A44F78",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "policyId",
                         "bind": "{policyId}"
                    }, {
                         "name": "policyName",
                         "itemId": "policyName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "02F30BF8-1D40-4FC0-903A-39BBD440BA0E",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "policyName",
                         "bind": "{policyName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "policyDescription",
                         "itemId": "policyDescription",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "policyDescription",
                         "margin": "5 5 5 5",
                         "fieldLabel": "policyDescription",
                         "fieldId": "DD960511-E2E7-491D-9C65-CED6FFD08F05",
                         "bindable": "policyDescription",
                         "bind": "{policyDescription}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maxPwdLength",
                         "itemId": "maxPwdLength",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "maxPwdLength",
                         "margin": "5 5 5 5",
                         "fieldLabel": "maxPwdLength",
                         "fieldId": "B6E1D7BB-A2FA-4E8D-84D7-65C5B20EC7C2",
                         "minValue": "0",
                         "maxValue": "32",
                         "bindable": "maxPwdLength",
                         "bind": "{maxPwdLength}",
                         "columnWidth": 0.5
                    }, {
                         "name": "minPwdLength",
                         "itemId": "minPwdLength",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "minPwdLength",
                         "margin": "5 5 5 5",
                         "fieldLabel": "minPwdLength<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D85B5751-341A-43EA-A440-F6EBED3C21C0",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "minPwdLength",
                         "bind": "{minPwdLength}",
                         "columnWidth": 0.5
                    }, {
                         "name": "minCapitalLetters",
                         "itemId": "minCapitalLetters",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "minCapitalLetters",
                         "margin": "5 5 5 5",
                         "fieldLabel": "minCapitalLetters",
                         "fieldId": "CBF83F84-807E-431F-AFC7-CB5D2A253279",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "minCapitalLetters",
                         "bind": "{minCapitalLetters}",
                         "columnWidth": 0.5
                    }, {
                         "name": "minSmallLetters",
                         "itemId": "minSmallLetters",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "minSmallLetters",
                         "margin": "5 5 5 5",
                         "fieldLabel": "minSmallLetters",
                         "fieldId": "A7CBF2A7-38F3-4F98-9E7F-7CA75FE4DA9A",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "minSmallLetters",
                         "bind": "{minSmallLetters}",
                         "columnWidth": 0.5
                    }, {
                         "name": "minNumericValues",
                         "itemId": "minNumericValues",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "minNumericValues",
                         "margin": "5 5 5 5",
                         "fieldLabel": "minNumericValues",
                         "fieldId": "759447A1-352E-44A8-9A6D-CE9059F9DA14",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "minNumericValues",
                         "bind": "{minNumericValues}",
                         "columnWidth": 0.5
                    }, {
                         "name": "minSpecialLetters",
                         "itemId": "minSpecialLetters",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "minSpecialLetters",
                         "margin": "5 5 5 5",
                         "fieldLabel": "minSpecialLetters",
                         "fieldId": "B2EE8551-F651-4637-8D15-31B6FDBAEC8C",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "minSpecialLetters",
                         "bind": "{minSpecialLetters}",
                         "columnWidth": 0.5
                    }, {
                         "name": "allowedSpecialLetters",
                         "itemId": "allowedSpecialLetters",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "allowedSpecialLetters",
                         "margin": "5 5 5 5",
                         "fieldLabel": "allowedSpecialLetters",
                         "fieldId": "842DC187-6C5B-4E4B-9AF9-B915B4D45C12",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "allowedSpecialLetters",
                         "bind": "{allowedSpecialLetters}",
                         "columnWidth": 0.5
                    }, {
                         "name": "versionId",
                         "itemId": "versionId",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "versionId",
                         "margin": "5 5 5 5",
                         "value": "-1",
                         "fieldLabel": "versionId",
                         "fieldId": "6AA97D55-9DE3-4CA0-883F-731A284C16CA",
                         "bindable": "versionId",
                         "bind": "{versionId}",
                         "hidden": true
                    }],
                    "layout": "column",
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "ui": "footer",
                         "isDockedItem": true,
                         "parentId": 1,
                         "customId": 386,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 386,
                              "customId": 992
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 386,
                              "customId": 993,
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "parentId": 386,
                              "customId": 994,
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {}
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "tools": [{
                         "type": "help",
                         "tooltip": "Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "extend": "Ext.form.Panel",
                    "region": "center"
               }, {
                    "xtype": "gridpanel",
                    "customWidgetType": "vdGrid",
                    "displayName": "Password Policy",
                    "title": "Details Grid",
                    "name": "PasswordPolicyGrid",
                    "itemId": "PasswordPolicyGrid",
                    "restURL": "/PasswordPolicy",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "Policy Id",
                         "dataIndex": "policyId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryDisplay",
                         "dataIndex": "primaryDisplay",
                         "hidden": true
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Name",
                         "dataIndex": "policyName",
                         "flex": 1
                    }, {
                         "header": "policyDescription",
                         "dataIndex": "policyDescription",
                         "flex": 1
                    }, {
                         "header": "maxPwdLength",
                         "dataIndex": "maxPwdLength",
                         "flex": 1
                    }, {
                         "header": "minPwdLength",
                         "dataIndex": "minPwdLength",
                         "flex": 1
                    }, {
                         "header": "minCapitalLetters",
                         "dataIndex": "minCapitalLetters",
                         "flex": 1
                    }, {
                         "header": "minSmallLetters",
                         "dataIndex": "minSmallLetters",
                         "flex": 1
                    }, {
                         "header": "minNumericValues",
                         "dataIndex": "minNumericValues",
                         "flex": 1
                    }, {
                         "header": "minSpecialLetters",
                         "dataIndex": "minSpecialLetters",
                         "flex": 1
                    }, {
                         "header": "allowedSpecialLetters",
                         "dataIndex": "allowedSpecialLetters",
                         "flex": 1
                    }, {
                         "header": "createdBy",
                         "dataIndex": "createdBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "createdDate",
                         "dataIndex": "createdDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedBy",
                         "dataIndex": "updatedBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedDate",
                         "dataIndex": "updatedDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "versionId",
                         "dataIndex": "versionId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "activeStatus",
                         "dataIndex": "activeStatus",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "txnAccessCode",
                         "dataIndex": "txnAccessCode",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "xtype": "actioncolumn",
                         "customWidgetType": "vdActionColumn",
                         "width": 30,
                         "sortable": false,
                         "menuDisable": true,
                         "items": [{
                              "icon": "images/delete.gif",
                              "tooltip": "Delete Record",
                              "handler": "onDeleteActionColumnClickMainGrid"
                         }]
                    }],
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "tools": [{
                         "type": "refresh",
                         "tooltip": "Refresh Grid Data",
                         "handler": "onGridRefreshClick"
                    }],
                    "collapsible": true,
                    "titleCollapse": true,
                    "collapseMode": "header",
                    "region": "south",
                    "height": "40%"
               }]
          }]
     }, {
          "title": "Add New",
          "itemId": "addNewForm",
          "layout": "border",
          "customWidgetType": "vdBorderLayout",
          "autoScroll": false,
          "items": [{
               "customWidgetType": "vdFormpanel",
               "viewModel": "PasswordPolicyViewModel",
               "xtype": "form",
               "displayName": "Password Policy",
               "title": "Password Policy",
               "name": "PasswordPolicy",
               "itemId": "PasswordPolicy",
               "bodyPadding": 10,
               "items": [{
                    "name": "policyId",
                    "itemId": "policyId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Policy Id",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Policy Id<font color='red'> *<\/font>",
                    "fieldId": "80952E21-ED22-4EA2-9228-D70B00A44F78",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "policyId",
                    "bind": "{policyId}"
               }, {
                    "name": "policyName",
                    "itemId": "policyName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "02F30BF8-1D40-4FC0-903A-39BBD440BA0E",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "policyName",
                    "bind": "{policyName}",
                    "columnWidth": 0.5
               }, {
                    "name": "policyDescription",
                    "itemId": "policyDescription",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "policyDescription",
                    "margin": "5 5 5 5",
                    "fieldLabel": "policyDescription",
                    "fieldId": "DD960511-E2E7-491D-9C65-CED6FFD08F05",
                    "bindable": "policyDescription",
                    "bind": "{policyDescription}",
                    "columnWidth": 0.5
               }, {
                    "name": "maxPwdLength",
                    "itemId": "maxPwdLength",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "maxPwdLength",
                    "margin": "5 5 5 5",
                    "fieldLabel": "maxPwdLength",
                    "fieldId": "B6E1D7BB-A2FA-4E8D-84D7-65C5B20EC7C2",
                    "minValue": "0",
                    "maxValue": "32",
                    "bindable": "maxPwdLength",
                    "bind": "{maxPwdLength}",
                    "columnWidth": 0.5
               }, {
                    "name": "minPwdLength",
                    "itemId": "minPwdLength",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "minPwdLength",
                    "margin": "5 5 5 5",
                    "fieldLabel": "minPwdLength<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D85B5751-341A-43EA-A440-F6EBED3C21C0",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "minPwdLength",
                    "bind": "{minPwdLength}",
                    "columnWidth": 0.5
               }, {
                    "name": "minCapitalLetters",
                    "itemId": "minCapitalLetters",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "minCapitalLetters",
                    "margin": "5 5 5 5",
                    "fieldLabel": "minCapitalLetters",
                    "fieldId": "CBF83F84-807E-431F-AFC7-CB5D2A253279",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "minCapitalLetters",
                    "bind": "{minCapitalLetters}",
                    "columnWidth": 0.5
               }, {
                    "name": "minSmallLetters",
                    "itemId": "minSmallLetters",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "minSmallLetters",
                    "margin": "5 5 5 5",
                    "fieldLabel": "minSmallLetters",
                    "fieldId": "A7CBF2A7-38F3-4F98-9E7F-7CA75FE4DA9A",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "minSmallLetters",
                    "bind": "{minSmallLetters}",
                    "columnWidth": 0.5
               }, {
                    "name": "minNumericValues",
                    "itemId": "minNumericValues",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "minNumericValues",
                    "margin": "5 5 5 5",
                    "fieldLabel": "minNumericValues",
                    "fieldId": "759447A1-352E-44A8-9A6D-CE9059F9DA14",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "minNumericValues",
                    "bind": "{minNumericValues}",
                    "columnWidth": 0.5
               }, {
                    "name": "minSpecialLetters",
                    "itemId": "minSpecialLetters",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "minSpecialLetters",
                    "margin": "5 5 5 5",
                    "fieldLabel": "minSpecialLetters",
                    "fieldId": "B2EE8551-F651-4637-8D15-31B6FDBAEC8C",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "minSpecialLetters",
                    "bind": "{minSpecialLetters}",
                    "columnWidth": 0.5
               }, {
                    "name": "allowedSpecialLetters",
                    "itemId": "allowedSpecialLetters",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "allowedSpecialLetters",
                    "margin": "5 5 5 5",
                    "fieldLabel": "allowedSpecialLetters",
                    "fieldId": "842DC187-6C5B-4E4B-9AF9-B915B4D45C12",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "allowedSpecialLetters",
                    "bind": "{allowedSpecialLetters}",
                    "columnWidth": 0.5
               }, {
                    "name": "versionId",
                    "itemId": "versionId",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "versionId",
                    "margin": "5 5 5 5",
                    "value": "-1",
                    "fieldLabel": "versionId",
                    "fieldId": "6AA97D55-9DE3-4CA0-883F-731A284C16CA",
                    "bindable": "versionId",
                    "bind": "{versionId}",
                    "hidden": true
               }],
               "layout": "column",
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "ui": "footer",
                    "isDockedItem": true,
                    "parentId": 1,
                    "customId": 386,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 386,
                         "customId": 992
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 386,
                         "customId": 993,
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "parentId": 386,
                         "customId": 994,
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {}
               }],
               "listeners": {
                    "scope": "controller"
               },
               "tools": [{
                    "type": "help",
                    "tooltip": "Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "extend": "Ext.form.Panel",
               "region": "center"
          }]
     }]
});