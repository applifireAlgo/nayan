Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.CaseSubmitionMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CaseSubmitionMainController",
     "restURL": "/CaseSubmition",
     "defaults": {
          "split": true
     },
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.CaseSubmitionModel", "Testproject.testproject.web.com.test.controller.defaultdomain.CaseSubmitionMainController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.CaseSubmitionViewModel"],
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
               "displayName": "CaseSubmition",
               "name": "CaseSubmitionTreeContainer",
               "itemId": "CaseSubmitionTreeContainer",
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
                    "itemId": "CaseSubmitionTree",
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
                    "displayName": "CaseSubmition",
                    "name": "CaseSubmition",
                    "itemId": "CaseSubmitionForm",
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
                                   "name": "caseId",
                                   "itemId": "caseId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "caseId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "caseId<font color='red'> *<\/font>",
                                   "fieldId": "2E6E0F14-0C41-42D6-B916-888680844F5F",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "caseId",
                                   "bind": "{caseId}"
                              }, {
                                   "name": "caseNo",
                                   "itemId": "caseNo",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "caseNo",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "caseNo<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "F573C866-5FE1-4A5A-9690-4886A375BF68",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "caseNo",
                                   "columnWidth": 0.5,
                                   "bind": "{caseNo}"
                              }, {
                                   "name": "caseName",
                                   "itemId": "caseName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "caseName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "caseName<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "97AB5B35-8DEB-4723-B08D-A7AF6303FC2F",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "caseName",
                                   "columnWidth": 0.5,
                                   "bind": "{caseName}"
                              }, {
                                   "name": "caseDesc",
                                   "itemId": "caseDesc",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "caseDesc",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "caseDesc<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "056369F7-8154-4BB6-BEEF-8FBF6D385841",
                                   "bindable": "caseDesc",
                                   "columnWidth": 0.5,
                                   "bind": "{caseDesc}"
                              }, {
                                   "name": "submitionDate",
                                   "itemId": "submitionDate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "submitionDate",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "submitionDate<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C75AC1FC-02B7-440C-9735-B34DDE50668A",
                                   "bindable": "submitionDate",
                                   "columnWidth": 0.5,
                                   "bind": "{submitionDate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "75CB5459-95A2-4E7B-A233-4E7F47B193BD",
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
                    "viewModel": "CaseSubmitionViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "CaseSubmition",
                    "title": "Details Grid",
                    "name": "CaseSubmitionGrid",
                    "itemId": "CaseSubmitionGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "caseId",
                         "dataIndex": "caseId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "caseNo",
                         "dataIndex": "caseNo",
                         "flex": 1
                    }, {
                         "header": "caseName",
                         "dataIndex": "caseName",
                         "flex": 1
                    }, {
                         "header": "caseDesc",
                         "dataIndex": "caseDesc",
                         "flex": 1
                    }, {
                         "header": "submitionDate",
                         "dataIndex": "submitionDate",
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
               "displayName": "CaseSubmition",
               "name": "CaseSubmition",
               "itemId": "CaseSubmitionForm",
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
                              "name": "caseId",
                              "itemId": "caseId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "caseId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "caseId<font color='red'> *<\/font>",
                              "fieldId": "2E6E0F14-0C41-42D6-B916-888680844F5F",
                              "hidden": true,
                              "value": "",
                              "bindable": "caseId",
                              "bind": "{caseId}"
                         }, {
                              "name": "caseNo",
                              "itemId": "caseNo",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "caseNo",
                              "margin": "5 5 5 5",
                              "fieldLabel": "caseNo<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "F573C866-5FE1-4A5A-9690-4886A375BF68",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "bindable": "caseNo",
                              "columnWidth": 0.5,
                              "bind": "{caseNo}"
                         }, {
                              "name": "caseName",
                              "itemId": "caseName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "caseName",
                              "margin": "5 5 5 5",
                              "fieldLabel": "caseName<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "97AB5B35-8DEB-4723-B08D-A7AF6303FC2F",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "caseName",
                              "columnWidth": 0.5,
                              "bind": "{caseName}"
                         }, {
                              "name": "caseDesc",
                              "itemId": "caseDesc",
                              "xtype": "textareafield",
                              "customWidgetType": "vdTextareafield",
                              "displayName": "caseDesc",
                              "margin": "5 5 5 5",
                              "fieldLabel": "caseDesc<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "056369F7-8154-4BB6-BEEF-8FBF6D385841",
                              "bindable": "caseDesc",
                              "columnWidth": 0.5,
                              "bind": "{caseDesc}"
                         }, {
                              "name": "submitionDate",
                              "itemId": "submitionDate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "submitionDate",
                              "margin": "5 5 5 5",
                              "fieldLabel": "submitionDate<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C75AC1FC-02B7-440C-9735-B34DDE50668A",
                              "bindable": "submitionDate",
                              "columnWidth": 0.5,
                              "bind": "{submitionDate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "75CB5459-95A2-4E7B-A233-4E7F47B193BD",
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
               "viewModel": "CaseSubmitionViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});