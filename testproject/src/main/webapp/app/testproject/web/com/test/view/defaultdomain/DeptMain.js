Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.DeptMain', {
     "xtype": "Dept",
     "customWidgetType": "vdTabLayout",
     "items": [{
          "xtype": "panel",
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "name": "DeptTreeContainer",
               "customWidgetType": "vdTabLayout",
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "minHeight": 70,
                    "rootVisible": false,
                    "forceFit": true,
                    "style": {
                         "borderColor": "",
                         "borderStyle": "",
                         "borderWidth": "0px",
                         "borderRadius": "0px",
                         "background": "#f6f6f6"
                    },
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "height": 40,
                         "style": {
                              "background": "#CC99FF"
                         }
                    },
                    "title": "Browse",
                    "useArrows": true,
                    "itemId": "DeptTree",
                    "listeners": {
                         "select": "treeClick"
                    }
               }, {
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "items": [],
                    "border": true,
                    "autoScroll": true,
                    "layoutDefaults": {},
                    "title": "Advance Search",
                    "minHeight": 70,
                    "minWidth": 150,
                    "margin": 5,
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "style": {
                              "background": "#CC99FF"
                         }
                    },
                    "itemId": "queryPanel",
                    "dockedItems": [{
                         "xtype": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "minHeight": 38,
                         "ui": "footer",
                         "isToolBar": true,
                         "layoutDefaults": {},
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "itemId": "okobkfi"
                         }, {
                              "xtype": "button",
                              "pluginName": "geolocation",
                              "isNativeWidget": true,
                              "isNativeGeoBtn": true,
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "margin": 5,
                              "handler": "onFilterClick",
                              "style": {
                                   "background": "#CCFFFF"
                              },
                              "itemId": "ioaoldi"
                         }],
                         "xtype ": "toolbar",
                         "style": {
                              "background": "#FF99CC"
                         },
                         "itemId": "koeoifi",
                         "dockedItems": []
                    }]
               }],
               "autoScroll": false,
               "activeItem": 0,
               "activeTab": 0,
               "title": "Dept",
               "layoutDefaults": {},
               "minHeight": 200,
               "minWidth": 150,
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "Dept",
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "region": "west",
               "width": "20%",
               "split": true,
               "bodyStyle": {
                    "background": "#CCFFFF"
               },
               "header": {
                    "style": {
                         "background": "#CC99FF"
                    },
                    "title": "Dept"
               },
               "itemId": "DeptTreeContainer",
               "dockedItems": [],
               "restURL": "/Dept"
          }, {
               "xtype": "panel",
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "xtype": "form",
                    "name": "Dept",
                    "customWidgetType": "vdFormpanel",
                    "items": [{
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "fieldLabel": "deptId<font color='red'> *<\/font>",
                         "margin": "5 5 5 5",
                         "bindable": "deptId",
                         "name": "deptId",
                         "columnWidth": 0.5,
                         "displayName": "deptId",
                         "hidden": true,
                         "value": "",
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "itemId": "deptId",
                         "bind": "{deptId}"
                    }, {
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "fieldLabel": "dept<font color='red'> *<\/font>",
                         "margin": "5 5 5 5",
                         "bindable": "dept",
                         "name": "dept",
                         "columnWidth": 0.5,
                         "displayName": "dept",
                         "allowBlank": false,
                         "minLength": "0",
                         "maxLength": "256",
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "itemId": "dept",
                         "bind": "{dept}"
                    }, {
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "fieldLabel": "deptno<font color='red'> *<\/font>",
                         "name": "deptno",
                         "margin": "5 5 5 5",
                         "bindable": "deptno",
                         "columnWidth": 0.5,
                         "displayName": "deptno",
                         "allowBlank": false,
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "itemId": "deptno",
                         "bind": "{deptno}"
                    }, {
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "fieldLabel": "versionId",
                         "name": "versionId",
                         "margin": "5 5 5 5",
                         "bindable": "versionId",
                         "columnWidth": 0.5,
                         "displayName": "versionId",
                         "value": "-1",
                         "hidden": true,
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "itemId": "versionId",
                         "bind": "{versionId}"
                    }],
                    "border": true,
                    "autoScroll": true,
                    "layoutDefaults": {},
                    "title": "Dept",
                    "minHeight": 70,
                    "minWidth": 150,
                    "margin": 5,
                    "layout": "column",
                    "displayName": "Dept",
                    "bodyPadding": 10,
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "region": "center",
                    "split": true,
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "style": {
                              "background": "#CC99FF"
                         },
                         "title": "Dept"
                    },
                    "itemId": "Dept",
                    "dockedItems": [{
                         "xtype": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "minHeight": 38,
                         "ui": "footer",
                         "isToolBar": true,
                         "layoutDefaults": {},
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "itemId": "dnkdmji"
                         }, {
                              "xtype": "button",
                              "pluginName": "geolocation",
                              "isNativeWidget": true,
                              "isNativeGeoBtn": true,
                              "customWidgetType": "vdButton",
                              "text": "Save",
                              "margin": "0 5 0 5",
                              "hiddenName": "button",
                              "style": {
                                   "background": "#CCFFFF"
                              },
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "pluginName": "geolocation",
                              "isNativeWidget": true,
                              "isNativeGeoBtn": true,
                              "customWidgetType": "vdButton",
                              "text": "Reset",
                              "margin": "0 5 0 5",
                              "hiddenName": "button",
                              "style": {
                                   "background": "#CCFFFF"
                              },
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "xtype ": "toolbar",
                         "defaults": {},
                         "style": {
                              "background": "#FF99CC"
                         },
                         "itemId": "fhnboki",
                         "dockedItems": []
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "extend": "Ext.form.Panel"
               }, {
                    "xtype": "gridpanel",
                    "name": "DeptGrid",
                    "customWidgetType": "vdGrid",
                    "title": "Details Grid",
                    "hiddenName": "Grid",
                    "minHeight": 150,
                    "margin": 5,
                    "collapseMode": "header",
                    "bindable": "",
                    "border": true,
                    "editTools": false,
                    "features": [],
                    "plugins": [{
                         "ptype": "cellediting",
                         "clicksToEdit": 1
                    }],
                    "columns": [{
                         "header": "deptId",
                         "dataIndex": "deptId",
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
                         "header": "dept",
                         "dataIndex": "dept",
                         "flex": 1
                    }, {
                         "header": "deptno",
                         "dataIndex": "deptno",
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
                    "displayName": "Dept",
                    "bodyPadding": 10,
                    "collapsible": true,
                    "titleCollapse": true,
                    "region": "south",
                    "height": "40%",
                    "split": true,
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "style": {
                              "background": "#CC99FF"
                         },
                         "title": "Details Grid"
                    },
                    "itemId": "DeptGrid",
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "restURL": "/Dept"
               }],
               "autoScroll": false,
               "layoutDefaults": {},
               "bodyStyle": {
                    "background": "#CCFFFF"
               },
               "layout": "border",
               "height": 100,
               "width": 200,
               "margin": 5,
               "region": "center",
               "defaults": {
                    "split": true
               },
               "split": true,
               "header": {
                    "style": {
                         "background": "#CC99FF"
                    }
               },
               "itemId": "mifkphi",
               "dockedItems": []
          }],
          "autoScroll": false,
          "layoutDefaults": {},
          "bodyStyle": {
               "background": "#CCFFFF"
          },
          "layout": "border",
          "height": 100,
          "width": 200,
          "title": "Data Browser",
          "margin": 5,
          "defaults": {
               "split": true
          },
          "split": true,
          "header": {
               "style": {
                    "background": "#CC99FF"
               }
          },
          "itemId": "olfjphi",
          "dockedItems": []
     }, {
          "xtype": "panel",
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "form",
               "name": "Dept",
               "customWidgetType": "vdFormpanel",
               "items": [{
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "fieldLabel": "deptId<font color='red'> *<\/font>",
                    "margin": "5 5 5 5",
                    "bindable": "deptId",
                    "name": "deptId",
                    "columnWidth": 0.5,
                    "displayName": "deptId",
                    "hidden": true,
                    "value": "",
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "itemId": "deptId",
                    "bind": "{deptId}"
               }, {
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "fieldLabel": "dept<font color='red'> *<\/font>",
                    "margin": "5 5 5 5",
                    "bindable": "dept",
                    "name": "dept",
                    "columnWidth": 0.5,
                    "displayName": "dept",
                    "allowBlank": false,
                    "minLength": "0",
                    "maxLength": "256",
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "itemId": "dept",
                    "bind": "{dept}"
               }, {
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "fieldLabel": "deptno<font color='red'> *<\/font>",
                    "name": "deptno",
                    "margin": "5 5 5 5",
                    "bindable": "deptno",
                    "columnWidth": 0.5,
                    "displayName": "deptno",
                    "allowBlank": false,
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "itemId": "deptno",
                    "bind": "{deptno}"
               }, {
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "fieldLabel": "versionId",
                    "name": "versionId",
                    "margin": "5 5 5 5",
                    "bindable": "versionId",
                    "columnWidth": 0.5,
                    "displayName": "versionId",
                    "value": "-1",
                    "hidden": true,
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "itemId": "versionId",
                    "bind": "{versionId}"
               }],
               "border": true,
               "autoScroll": true,
               "layoutDefaults": {},
               "title": "Dept",
               "minHeight": 70,
               "minWidth": 150,
               "margin": 5,
               "layout": "column",
               "displayName": "Dept",
               "bodyPadding": 10,
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "region": "center",
               "bodyStyle": {
                    "background": "#CCFFFF"
               },
               "header": {
                    "style": {
                         "background": "#CC99FF"
                    }
               },
               "itemId": "Dept",
               "dockedItems": [{
                    "xtype": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "minHeight": 38,
                    "ui": "footer",
                    "isToolBar": true,
                    "layoutDefaults": {},
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "itemId": "fiiahoi"
                    }, {
                         "xtype": "button",
                         "pluginName": "geolocation",
                         "isNativeWidget": true,
                         "isNativeGeoBtn": true,
                         "customWidgetType": "vdButton",
                         "text": "Save",
                         "margin": "0 5 0 5",
                         "hiddenName": "button",
                         "style": {
                              "background": "#CCFFFF"
                         },
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "pluginName": "geolocation",
                         "isNativeWidget": true,
                         "isNativeGeoBtn": true,
                         "customWidgetType": "vdButton",
                         "text": "Reset",
                         "margin": "0 5 0 5",
                         "hiddenName": "button",
                         "style": {
                              "background": "#CCFFFF"
                         },
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "xtype ": "toolbar",
                    "defaults": {},
                    "style": {
                         "background": "#FF99CC"
                    },
                    "itemId": "nfoifhi",
                    "dockedItems": []
               }],
               "listeners": {
                    "scope": "controller"
               },
               "extend": "Ext.form.Panel"
          }],
          "autoScroll": false,
          "layoutDefaults": {},
          "bodyStyle": {
               "background": "#CCFFFF"
          },
          "layout": "border",
          "height": 100,
          "width": 200,
          "title": "Add New",
          "margin": 5,
          "split": true,
          "header": {
               "style": {
                    "background": "#CC99FF"
               }
          },
          "itemId": "addNewForm",
          "dockedItems": []
     }],
     "autoScroll": false,
     "activeItem": 0,
     "activeTab": 0,
     "layoutDefaults": {},
     "minHeight": 200,
     "minWidth": 150,
     "margin": 5,
     "defaults": {
          "split": true
     },
     "tabPosition": "bottom",
     "bodyStyle": {
          "background": "#CCFFFF"
     },
     "header": {
          "style": {
               "background": "#CC99FF"
          }
     },
     "itemId": "ojdkfbi",
     "dockedItems": [],
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.DeptModel", "Testproject.testproject.web.com.test.controller.defaultdomain.DeptMainController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.DeptViewModel"],
     "restURL": "/Dept",
     "extend": "Ext.tab.Panel",
     "viewModel": "DeptViewModel",
     "controller": "DeptMainController"
});