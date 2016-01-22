Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.NewEntityMain', {
     "xtype": "NewEntity",
     "customWidgetType": "vdTabLayout",
     "items": [{
          "xtype": "panel",
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "name": "NewEntityTreeContainer",
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
                              "background": "#FF99CC"
                         }
                    },
                    "title": "Browse",
                    "useArrows": true,
                    "itemId": "NewEntityTree",
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
                              "itemId": "icbbeoi"
                         }, {
                              "xtype": "button",
                              "pluginName": "geolocation",
                              "isNativeWidget": true,
                              "isNativeGeoBtn": true,
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "margin": 5,
                              "handler": "onFilterClick",
                              "itemId": "ackaici",
                              "style": {
                                   "background": "#CCFFFF"
                              }
                         }],
                         "xtype ": "toolbar",
                         "itemId": "bnhinii",
                         "dockedItems": [],
                         "style": {
                              "background": "#CCFFCC"
                         }
                    }],
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "style": {
                              "background": "#FF99CC"
                         }
                    }
               }],
               "autoScroll": false,
               "activeItem": 0,
               "activeTab": 0,
               "title": "NewEntity",
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
               "displayName": "NewEntity",
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "region": "west",
               "width": "20%",
               "itemId": "NewEntityTreeContainer",
               "dockedItems": [],
               "split": true,
               "bodyStyle": {
                    "background": "#CCFFFF"
               },
               "header": {
                    "style": {
                         "background": "#FF99CC"
                    },
                    "title": "NewEntity"
               },
               "restURL": "/NewEntity"
          }, {
               "xtype": "panel",
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "xtype": "form",
                    "name": "NewEntity",
                    "customWidgetType": "vdFormpanel",
                    "items": [{
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "fieldLabel": "newId<font color='red'> *<\/font>",
                         "margin": "5 5 5 5",
                         "bindable": "newId",
                         "name": "newId",
                         "displayName": "newId",
                         "hidden": true,
                         "value": "",
                         "itemId": "newId",
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "bind": "{newId}"
                    }, {
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "fieldLabel": "nName<font color='red'> *<\/font>",
                         "margin": "5 5 5 5",
                         "bindable": "nName",
                         "name": "nName",
                         "columnWidth": 0.5,
                         "displayName": "nName",
                         "allowBlank": false,
                         "minLength": "0",
                         "maxLength": "256",
                         "itemId": "nName",
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "bind": "{nName}"
                    }, {
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "fieldLabel": "nNo<font color='red'> *<\/font>",
                         "name": "nNo",
                         "margin": "5 5 5 5",
                         "bindable": "nNo",
                         "columnWidth": 0.5,
                         "displayName": "nNo",
                         "allowBlank": false,
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "itemId": "nNo",
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "bind": "{nNo}"
                    }, {
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "fieldLabel": "versionId",
                         "name": "versionId",
                         "margin": "5 5 5 5",
                         "bindable": "versionId",
                         "displayName": "versionId",
                         "value": "-1",
                         "hidden": true,
                         "itemId": "versionId",
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200,
                         "bind": "{versionId}"
                    }],
                    "border": true,
                    "autoScroll": true,
                    "layoutDefaults": {},
                    "title": "NewEntity",
                    "minHeight": 70,
                    "minWidth": 150,
                    "margin": 5,
                    "layout": "column",
                    "displayName": "NewEntity",
                    "bodyPadding": 10,
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "region": "center",
                    "itemId": "NewEntity",
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
                              "itemId": "fnljpgi"
                         }, {
                              "xtype": "button",
                              "pluginName": "geolocation",
                              "isNativeWidget": true,
                              "isNativeGeoBtn": true,
                              "customWidgetType": "vdButton",
                              "text": "Save",
                              "margin": "0 5 0 5",
                              "hiddenName": "button",
                              "itemId": "saveFormButton",
                              "style": {
                                   "background": "#CCFFFF"
                              },
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
                              "itemId": "resetFormButton",
                              "style": {
                                   "background": "#CCFFFF"
                              },
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "xtype ": "toolbar",
                         "defaults": {},
                         "itemId": "ilookfi",
                         "dockedItems": [],
                         "style": {
                              "background": "#CCFFCC"
                         }
                    }],
                    "split": true,
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "style": {
                              "background": "#FF99CC"
                         },
                         "title": "NewEntity"
                    },
                    "listeners": {
                         "scope": "controller"
                    },
                    "extend": "Ext.form.Panel"
               }, {
                    "xtype": "gridpanel",
                    "name": "NewEntityGrid",
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
                         "header": "newId",
                         "dataIndex": "newId",
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
                         "header": "nName",
                         "dataIndex": "nName",
                         "flex": 1
                    }, {
                         "header": "nNo",
                         "dataIndex": "nNo",
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
                    "displayName": "NewEntity",
                    "bodyPadding": 10,
                    "collapsible": true,
                    "titleCollapse": true,
                    "region": "south",
                    "height": "40%",
                    "itemId": "NewEntityGrid",
                    "split": true,
                    "bodyStyle": {
                         "background": "#CCFFFF"
                    },
                    "header": {
                         "style": {
                              "background": "#FF99CC"
                         },
                         "title": "Details Grid"
                    },
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "restURL": "/NewEntity"
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
               "itemId": "fedhlji",
               "dockedItems": [],
               "split": true,
               "header": {
                    "style": {
                         "background": "#FF99CC"
                    }
               }
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
          "itemId": "kphheci",
          "dockedItems": [],
          "split": true,
          "header": {
               "style": {
                    "background": "#FF99CC"
               }
          }
     }, {
          "xtype": "panel",
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "form",
               "name": "NewEntity",
               "customWidgetType": "vdFormpanel",
               "items": [{
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "fieldLabel": "newId<font color='red'> *<\/font>",
                    "margin": "5 5 5 5",
                    "bindable": "newId",
                    "name": "newId",
                    "displayName": "newId",
                    "hidden": true,
                    "value": "",
                    "itemId": "newId",
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "bind": "{newId}"
               }, {
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "fieldLabel": "nName<font color='red'> *<\/font>",
                    "margin": "5 5 5 5",
                    "bindable": "nName",
                    "name": "nName",
                    "columnWidth": 0.5,
                    "displayName": "nName",
                    "allowBlank": false,
                    "minLength": "0",
                    "maxLength": "256",
                    "itemId": "nName",
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "bind": "{nName}"
               }, {
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "fieldLabel": "nNo<font color='red'> *<\/font>",
                    "name": "nNo",
                    "margin": "5 5 5 5",
                    "bindable": "nNo",
                    "columnWidth": 0.5,
                    "displayName": "nNo",
                    "allowBlank": false,
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "itemId": "nNo",
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "bind": "{nNo}"
               }, {
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "fieldLabel": "versionId",
                    "name": "versionId",
                    "margin": "5 5 5 5",
                    "bindable": "versionId",
                    "displayName": "versionId",
                    "value": "-1",
                    "hidden": true,
                    "itemId": "versionId",
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200,
                    "bind": "{versionId}"
               }],
               "border": true,
               "autoScroll": true,
               "layoutDefaults": {},
               "title": "NewEntity",
               "minHeight": 70,
               "minWidth": 150,
               "margin": 5,
               "layout": "column",
               "displayName": "NewEntity",
               "bodyPadding": 10,
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "region": "center",
               "itemId": "NewEntity",
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
                         "itemId": "fninnli"
                    }, {
                         "xtype": "button",
                         "pluginName": "geolocation",
                         "isNativeWidget": true,
                         "isNativeGeoBtn": true,
                         "customWidgetType": "vdButton",
                         "text": "Save",
                         "margin": "0 5 0 5",
                         "hiddenName": "button",
                         "itemId": "saveFormButton",
                         "style": {
                              "background": "#CCFFFF"
                         },
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
                         "itemId": "resetFormButton",
                         "style": {
                              "background": "#CCFFFF"
                         },
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "xtype ": "toolbar",
                    "defaults": {},
                    "itemId": "ifhpeei",
                    "dockedItems": [],
                    "style": {
                         "background": "#CCFFCC"
                    }
               }],
               "bodyStyle": {
                    "background": "#CCFFFF"
               },
               "header": {
                    "style": {
                         "background": "#FF99CC"
                    }
               },
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
          "itemId": "addNewForm",
          "dockedItems": [],
          "split": true,
          "header": {
               "style": {
                    "background": "#FF99CC"
               }
          }
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
     "itemId": "eipefii",
     "dockedItems": [],
     "bodyStyle": {
          "background": "#CCFFFF"
     },
     "header": {
          "style": {
               "background": "#FF99CC"
          }
     },
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.NewEntityModel", "Testproject.testproject.web.com.test.controller.defaultdomain.NewEntityMainController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.NewEntityViewModel"],
     "restURL": "/NewEntity",
     "extend": "Ext.tab.Panel",
     "viewModel": "NewEntityViewModel",
     "controller": "NewEntityMainController"
});