Ext.define('Project4.project4.web.project4.view.location.CurrencyMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CurrencyMainController",
     "restURL": "/Currency",
     "defaults": {
          "split": true
     },
     "requires": ["Project4.project4.shared.project4.model.location.CurrencyModel", "Project4.project4.web.project4.controller.location.CurrencyMainController", "Project4.project4.shared.project4.model.location.CountryModel", "Project4.project4.shared.project4.viewmodel.location.CurrencyViewModel"],
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
               "displayName": "Currency",
               "name": "CurrencyTreeContainer",
               "itemId": "CurrencyTreeContainer",
               "restURL": "/Currency",
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
                    "itemId": "CurrencyTree",
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
                         "name": "currencyId",
                         "itemId": "currencyId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Currency Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Currency Code",
                         "fieldId": "77BE9243-2B3A-4B66-A802-C5FA6BA3C0A4",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country Code",
                         "fieldId": "DF7E0FC3-5930-4378-B6A7-35A15006515D",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Project4.project4.shared.project4.model.location.CountryModel"
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
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "CurrencyViewModel",
                    "xtype": "form",
                    "displayName": "Currency",
                    "title": "Currency",
                    "name": "Currency",
                    "itemId": "Currency",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "currencyId",
                         "itemId": "currencyId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Currency Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Currency Code<font color='red'> *<\/font>",
                         "fieldId": "77BE9243-2B3A-4B66-A802-C5FA6BA3C0A4",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "currencyId",
                         "bind": "{currencyId}"
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country Code<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "DF7E0FC3-5930-4378-B6A7-35A15006515D",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Project4.project4.shared.project4.model.location.CountryModel"
                         },
                         "bindable": "countryId",
                         "bind": "{countryId}",
                         "columnWidth": 0.5
                    }, {
                         "name": "currencyCode",
                         "itemId": "currencyCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Currency",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Currency",
                         "fieldId": "F85733FF-0D53-4366-A470-141AADBCDCE6",
                         "minLength": "0",
                         "maxLength": "128",
                         "bindable": "currencyCode",
                         "bind": "{currencyCode}",
                         "columnWidth": 0.5
                    }, {
                         "name": "unicodeDecimal",
                         "itemId": "unicodeDecimal",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Unicode Descimal",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Unicode Descimal",
                         "fieldId": "E83F538A-8E15-4285-88B7-6E0AFB666C07",
                         "minLength": "0",
                         "maxLength": "128",
                         "bindable": "unicodeDecimal",
                         "bind": "{unicodeDecimal}",
                         "columnWidth": 0.5
                    }, {
                         "name": "unicodeHex",
                         "itemId": "unicodeHex",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "unicode Hex",
                         "margin": "5 5 5 5",
                         "fieldLabel": "unicode Hex",
                         "fieldId": "9A8E1B7D-3FCE-40C6-A56A-9CB9A63C1824",
                         "minLength": "0",
                         "maxLength": "128",
                         "bindable": "unicodeHex",
                         "bind": "{unicodeHex}",
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
                         "fieldId": "08ADADDB-AE0A-4174-94E8-36DE92AE5C1B",
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
                         "customId": 943,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 943,
                              "customId": 625
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 943,
                              "customId": 626,
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
                              "parentId": 943,
                              "customId": 627,
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
                    "displayName": "Currency",
                    "title": "Details Grid",
                    "name": "CurrencyGrid",
                    "itemId": "CurrencyGrid",
                    "restURL": "/Currency",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "Currency Code",
                         "dataIndex": "currencyId",
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
                         "header": "Country Code",
                         "dataIndex": "countryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Currency",
                         "dataIndex": "currencyCode",
                         "flex": 1
                    }, {
                         "header": "Unicode Descimal",
                         "dataIndex": "unicodeDecimal",
                         "flex": 1
                    }, {
                         "header": "unicode Hex",
                         "dataIndex": "unicodeHex",
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
               "viewModel": "CurrencyViewModel",
               "xtype": "form",
               "displayName": "Currency",
               "title": "Currency",
               "name": "Currency",
               "itemId": "Currency",
               "bodyPadding": 10,
               "items": [{
                    "name": "currencyId",
                    "itemId": "currencyId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Currency Code",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Currency Code<font color='red'> *<\/font>",
                    "fieldId": "77BE9243-2B3A-4B66-A802-C5FA6BA3C0A4",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "currencyId",
                    "bind": "{currencyId}"
               }, {
                    "name": "countryId",
                    "itemId": "countryId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Country Code",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Country Code<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "DF7E0FC3-5930-4378-B6A7-35A15006515D",
                    "restURL": "Country",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Project4.project4.shared.project4.model.location.CountryModel"
                    },
                    "bindable": "countryId",
                    "bind": "{countryId}",
                    "columnWidth": 0.5
               }, {
                    "name": "currencyCode",
                    "itemId": "currencyCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Currency",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Currency",
                    "fieldId": "F85733FF-0D53-4366-A470-141AADBCDCE6",
                    "minLength": "0",
                    "maxLength": "128",
                    "bindable": "currencyCode",
                    "bind": "{currencyCode}",
                    "columnWidth": 0.5
               }, {
                    "name": "unicodeDecimal",
                    "itemId": "unicodeDecimal",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Unicode Descimal",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Unicode Descimal",
                    "fieldId": "E83F538A-8E15-4285-88B7-6E0AFB666C07",
                    "minLength": "0",
                    "maxLength": "128",
                    "bindable": "unicodeDecimal",
                    "bind": "{unicodeDecimal}",
                    "columnWidth": 0.5
               }, {
                    "name": "unicodeHex",
                    "itemId": "unicodeHex",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "unicode Hex",
                    "margin": "5 5 5 5",
                    "fieldLabel": "unicode Hex",
                    "fieldId": "9A8E1B7D-3FCE-40C6-A56A-9CB9A63C1824",
                    "minLength": "0",
                    "maxLength": "128",
                    "bindable": "unicodeHex",
                    "bind": "{unicodeHex}",
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
                    "fieldId": "08ADADDB-AE0A-4174-94E8-36DE92AE5C1B",
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
                    "customId": 943,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 943,
                         "customId": 625
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 943,
                         "customId": 626,
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
                         "parentId": 943,
                         "customId": 627,
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