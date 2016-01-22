Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.TestMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "TestMainController",
     "restURL": "/Test",
     "defaults": {
          "split": true
     },
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.TestModel", "Testproject.testproject.web.com.test.controller.defaultdomain.TestMainController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.TestViewModel"],
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
               "displayName": "Test",
               "name": "TestTreeContainer",
               "itemId": "TestTreeContainer",
               "margin": "5 0 5 5",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "useArrows": true,
                    "title": "Browse",
                    "rootVisible": false,
                    "itemId": "TestTree",
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
                    "layout": "fit",
                    "autoScroll": false,
                    "itemId": "queryPanel",
                    "buttons": [{
                         "text": "Filter",
                         "handler": "onFilterClick"
                    }],
                    "items": []
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
                    "xtype": "form",
                    "displayName": "Test",
                    "name": "Test",
                    "itemId": "TestForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form0",
                         "customWidgetType": "vdCard",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "testId",
                                   "itemId": "testId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "testId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "testId<font color='red'> *<\/font>",
                                   "fieldId": "06E0FF93-CEBA-4F17-8CE8-0AC6054A2F3B",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "testId",
                                   "bind": "{testId}"
                              }, {
                                   "name": "tdate",
                                   "itemId": "tdate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "BDD7938D-0560-4916-9651-3EA3AA3811A2",
                                   "bindable": "tdate",
                                   "columnWidth": 0.5,
                                   "bind": "{tdate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "tName",
                                   "itemId": "tName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "tName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "tName<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "8ED170D4-582D-47A3-B407-BCC6A044327E",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "tName",
                                   "columnWidth": 0.5,
                                   "bind": "{tName}"
                              }, {
                                   "name": "ttime",
                                   "itemId": "ttime",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Ttime",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Ttime<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "CB961681-BF15-4FFB-B3C5-9E4724B8E348",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "ttime",
                                   "columnWidth": 0.5,
                                   "bind": "{ttime}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "BF4C4A3E-E2ED-4106-A90A-3CD7144DAA3E",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }],
                    "tools": [{
                         "type": "help",
                         "tooltip": "Get Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "layout": "card",
                    "defaults": {
                         "autoScroll": true
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "margin": 0,
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {
                              "margin": "0 5 0 5"
                         }
                    }],
                    "viewModel": "TestViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Test",
                    "title": "Details Grid",
                    "name": "TestGrid",
                    "itemId": "TestGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "testId",
                         "dataIndex": "testId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "date",
                         "dataIndex": "tdate",
                         "flex": 1
                    }, {
                         "header": "tName",
                         "dataIndex": "tName",
                         "flex": 1
                    }, {
                         "header": "Ttime",
                         "dataIndex": "ttime",
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
               "xtype": "form",
               "displayName": "Test",
               "name": "Test",
               "itemId": "TestForm",
               "bodyPadding": 10,
               "items": [{
                    "xtype": "form",
                    "itemId": "form0",
                    "customWidgetType": "vdCard",
                    "header": {
                         "hidden": true
                    },
                    "items": [{
                         "layout": "column",
                         "customWidgetType": "vdColumnLayout",
                         "header": {
                              "hidden": true
                         },
                         "xtype": "panel",
                         "items": [{
                              "name": "testId",
                              "itemId": "testId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "testId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "testId<font color='red'> *<\/font>",
                              "fieldId": "06E0FF93-CEBA-4F17-8CE8-0AC6054A2F3B",
                              "hidden": true,
                              "value": "",
                              "bindable": "testId",
                              "bind": "{testId}"
                         }, {
                              "name": "tdate",
                              "itemId": "tdate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "BDD7938D-0560-4916-9651-3EA3AA3811A2",
                              "bindable": "tdate",
                              "columnWidth": 0.5,
                              "bind": "{tdate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "tName",
                              "itemId": "tName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "tName",
                              "margin": "5 5 5 5",
                              "fieldLabel": "tName<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "8ED170D4-582D-47A3-B407-BCC6A044327E",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "tName",
                              "columnWidth": 0.5,
                              "bind": "{tName}"
                         }, {
                              "name": "ttime",
                              "itemId": "ttime",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Ttime",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Ttime<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "CB961681-BF15-4FFB-B3C5-9E4724B8E348",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "ttime",
                              "columnWidth": 0.5,
                              "bind": "{ttime}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "BF4C4A3E-E2ED-4106-A90A-3CD7144DAA3E",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }],
               "tools": [{
                    "type": "help",
                    "tooltip": "Get Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "layout": "card",
               "defaults": {
                    "autoScroll": true
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "margin": 0,
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {
                         "margin": "0 5 0 5"
                    }
               }],
               "viewModel": "TestViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});