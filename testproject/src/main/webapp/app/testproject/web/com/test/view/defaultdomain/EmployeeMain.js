Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.EmployeeMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "EmployeeMainController",
     "restURL": "/Employee",
     "defaults": {
          "split": true
     },
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.EmployeeModel", "Testproject.testproject.web.com.test.controller.defaultdomain.EmployeeMainController", "Testproject.testproject.shared.com.test.model.contacts.CoreContactsModel", "Testproject.testproject.shared.com.test.model.defaultdomain.DeptModel", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.EmployeeViewModel"],
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
               "displayName": "Employee",
               "name": "EmployeeTreeContainer",
               "itemId": "EmployeeTreeContainer",
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
                    "itemId": "EmployeeTree",
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
                    "items": [{
                         "name": "contactId",
                         "itemId": "contactId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "contactId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "contactId",
                         "fieldId": "939C6553-4D58-48A5-B127-8ADE244B540C",
                         "restURL": "CoreContacts",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Testproject.testproject.shared.com.test.model.contacts.CoreContactsModel"
                         }
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
                    "xtype": "form",
                    "displayName": "Employee",
                    "name": "Employee",
                    "itemId": "EmployeeForm",
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
                                   "name": "empId",
                                   "itemId": "empId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "empId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "empId<font color='red'> *<\/font>",
                                   "fieldId": "D50E5966-0892-4136-B91E-CE3C73F9719D",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "empId",
                                   "bind": "{empId}"
                              }, {
                                   "name": "contactId",
                                   "itemId": "contactId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "contactId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "contactId",
                                   "fieldId": "939C6553-4D58-48A5-B127-8ADE244B540C",
                                   "restURL": "CoreContacts",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Testproject.testproject.shared.com.test.model.contacts.CoreContactsModel"
                                   },
                                   "bindable": "contactId",
                                   "columnWidth": 0.5,
                                   "bind": "{contactId}"
                              }, {
                                   "name": "dept",
                                   "itemId": "dept",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Department",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Department<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "FDEF9B3D-D2AC-49F7-BCD1-44A9C87D7E1D",
                                   "restURL": "Dept",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Testproject.testproject.shared.com.test.model.defaultdomain.DeptModel"
                                   },
                                   "bindable": "dept",
                                   "columnWidth": 0.5,
                                   "bind": "{dept}"
                              }, {
                                   "name": "designation",
                                   "itemId": "designation",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Designation",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Designation<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C038B26D-26A0-444A-AD55-A22B3FC273A6",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "designation",
                                   "columnWidth": 0.5,
                                   "bind": "{designation}"
                              }, {
                                   "name": "jobType",
                                   "itemId": "jobType",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Job Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Job Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "283E113B-1502-4B33-AC09-754E38E12CED",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "jobType",
                                   "columnWidth": 0.5,
                                   "bind": "{jobType}"
                              }, {
                                   "name": "pan",
                                   "itemId": "pan",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "PAN",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "PAN<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "CC4580E6-50AC-4277-B90F-FC49513EBADB",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "pan",
                                   "columnWidth": 0.5,
                                   "bind": "{pan}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "83F585A0-A717-40F0-A6B1-41A39A7AC4E9",
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
                    "viewModel": "EmployeeViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Employee",
                    "title": "Details Grid",
                    "name": "EmployeeGrid",
                    "itemId": "EmployeeGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "empId",
                         "dataIndex": "empId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "contactId",
                         "dataIndex": "contactId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Department",
                         "dataIndex": "dept",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Designation",
                         "dataIndex": "designation",
                         "flex": 1
                    }, {
                         "header": "Job Type",
                         "dataIndex": "jobType",
                         "flex": 1
                    }, {
                         "header": "PAN",
                         "dataIndex": "pan",
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
               "displayName": "Employee",
               "name": "Employee",
               "itemId": "EmployeeForm",
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
                              "name": "empId",
                              "itemId": "empId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "empId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "empId<font color='red'> *<\/font>",
                              "fieldId": "D50E5966-0892-4136-B91E-CE3C73F9719D",
                              "hidden": true,
                              "value": "",
                              "bindable": "empId",
                              "bind": "{empId}"
                         }, {
                              "name": "contactId",
                              "itemId": "contactId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "contactId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "contactId",
                              "fieldId": "939C6553-4D58-48A5-B127-8ADE244B540C",
                              "restURL": "CoreContacts",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Testproject.testproject.shared.com.test.model.contacts.CoreContactsModel"
                              },
                              "bindable": "contactId",
                              "columnWidth": 0.5,
                              "bind": "{contactId}"
                         }, {
                              "name": "dept",
                              "itemId": "dept",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Department",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Department<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "FDEF9B3D-D2AC-49F7-BCD1-44A9C87D7E1D",
                              "restURL": "Dept",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Testproject.testproject.shared.com.test.model.defaultdomain.DeptModel"
                              },
                              "bindable": "dept",
                              "columnWidth": 0.5,
                              "bind": "{dept}"
                         }, {
                              "name": "designation",
                              "itemId": "designation",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Designation",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Designation<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C038B26D-26A0-444A-AD55-A22B3FC273A6",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "designation",
                              "columnWidth": 0.5,
                              "bind": "{designation}"
                         }, {
                              "name": "jobType",
                              "itemId": "jobType",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Job Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Job Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "283E113B-1502-4B33-AC09-754E38E12CED",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "jobType",
                              "columnWidth": 0.5,
                              "bind": "{jobType}"
                         }, {
                              "name": "pan",
                              "itemId": "pan",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "PAN",
                              "margin": "5 5 5 5",
                              "fieldLabel": "PAN<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "CC4580E6-50AC-4277-B90F-FC49513EBADB",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "pan",
                              "columnWidth": 0.5,
                              "bind": "{pan}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "83F585A0-A717-40F0-A6B1-41A39A7AC4E9",
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
               "viewModel": "EmployeeViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});