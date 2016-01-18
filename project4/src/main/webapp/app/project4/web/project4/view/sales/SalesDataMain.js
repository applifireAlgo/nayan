Ext.define('Project4.project4.web.project4.view.sales.SalesDataMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SalesDataMainController",
     "restURL": "/SalesData",
     "defaults": {
          "split": true
     },
     "requires": ["Project4.project4.shared.project4.model.sales.SalesDataModel", "Project4.project4.web.project4.controller.sales.SalesDataMainController", "Project4.project4.shared.project4.model.sales.ChannelModel", "Project4.project4.shared.project4.model.sales.RetailerModel", "Project4.project4.shared.project4.model.sales.MaterialModel", "Project4.project4.shared.project4.model.sales.BrandModel", "Project4.project4.shared.project4.model.sales.CategoryModel", "Project4.project4.shared.project4.viewmodel.sales.SalesDataViewModel"],
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
               "displayName": "SalesData",
               "name": "SalesDataTreeContainer",
               "itemId": "SalesDataTreeContainer",
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
                    "itemId": "SalesDataTree",
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
                    "displayName": "SalesData",
                    "name": "SalesData",
                    "itemId": "SalesDataForm",
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
                                   "name": "autoid",
                                   "itemId": "autoid",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Auto Id",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Auto Id<font color='red'> *<\/font>",
                                   "fieldId": "893689F8-64EA-4B01-A2C9-EBE0C4FABC6D",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "autoid",
                                   "bind": "{autoid}"
                              }, {
                                   "name": "channelId",
                                   "itemId": "channelId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Channel",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Channel<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "5D5FDE14-5B3E-4640-98E3-36A1B4ECB235",
                                   "restURL": "Channel",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Project4.project4.shared.project4.model.sales.ChannelModel"
                                   },
                                   "bindable": "channelId",
                                   "columnWidth": 0.5,
                                   "bind": "{channelId}"
                              }, {
                                   "name": "reatilercode",
                                   "itemId": "reatilercode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Retailer",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Retailer<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "71DD6436-86F2-4E61-A1C7-A71797DC2CDF",
                                   "restURL": "Retailer",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Project4.project4.shared.project4.model.sales.RetailerModel"
                                   },
                                   "bindable": "reatilercode",
                                   "columnWidth": 0.5,
                                   "bind": "{reatilercode}"
                              }, {
                                   "name": "retailername",
                                   "itemId": "retailername",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Retailer name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Retailer name",
                                   "fieldId": "1BD80CA6-7C3D-412B-AA8E-47F72457E2A4",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "retailername",
                                   "columnWidth": 0.5,
                                   "bind": "{retailername}"
                              }, {
                                   "name": "salesdate",
                                   "itemId": "salesdate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Sales Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Sales Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "E3998C9C-3FAB-41DF-A463-D0C8643B35BA",
                                   "bindable": "salesdate",
                                   "columnWidth": 0.5,
                                   "bind": "{salesdate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "salesmonth",
                                   "itemId": "salesmonth",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Sales Month",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Sales Month<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "28BADAA8-67C3-476F-BC81-C1D994758EC6",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "salesmonth",
                                   "columnWidth": 0.5,
                                   "bind": "{salesmonth}"
                              }, {
                                   "name": "salesyear",
                                   "itemId": "salesyear",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Sales Year",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Sales Year<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "8884B5E2-E5E4-475C-9026-627CF3B9420E",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "salesyear",
                                   "columnWidth": 0.5,
                                   "bind": "{salesyear}"
                              }, {
                                   "name": "salesinvoicenbr",
                                   "itemId": "salesinvoicenbr",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Invoice Number",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Invoice Number<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "FB832660-143D-4F03-A84B-DDF09AFD4535",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "salesinvoicenbr",
                                   "columnWidth": 0.5,
                                   "bind": "{salesinvoicenbr}"
                              }, {
                                   "name": "materialdesc",
                                   "itemId": "materialdesc",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Material Desc",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Material Desc",
                                   "fieldId": "7EAE95FB-7DE3-47A9-A244-87BA5F86E6F3",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "materialdesc",
                                   "columnWidth": 0.5,
                                   "bind": "{materialdesc}"
                              }, {
                                   "name": "branddesc",
                                   "itemId": "branddesc",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Brand Desc",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Brand Desc",
                                   "fieldId": "C90760C6-E947-41E0-AB1B-91EA57E2E5C6",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "branddesc",
                                   "columnWidth": 0.5,
                                   "bind": "{branddesc}"
                              }, {
                                   "name": "salesqty",
                                   "itemId": "salesqty",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Sales Quantity",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Sales Quantity<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "5692CC2E-84DE-4F11-AB7D-8F354DF22A97",
                                   "minValue": "-9223372000000000000",
                                   "maxValue": "9223372000000000000",
                                   "bindable": "salesqty",
                                   "columnWidth": 0.5,
                                   "bind": "{salesqty}"
                              }, {
                                   "name": "netsalesamt",
                                   "itemId": "netsalesamt",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Net Sales",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Net Sales<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "51FAA751-15C7-403F-B81A-0FF4E6481D35",
                                   "minValue": "-9223372000000000000",
                                   "maxValue": "9223372000000000000",
                                   "bindable": "netsalesamt",
                                   "columnWidth": 0.5,
                                   "bind": "{netsalesamt}"
                              }, {
                                   "name": "grosssalesamt",
                                   "itemId": "grosssalesamt",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Gross Sales",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Gross Sales<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "192F76E3-ED5A-4A7C-B6DC-EEA7D71F107A",
                                   "minValue": "-9223372000000000000",
                                   "maxValue": "9223372000000000000",
                                   "bindable": "grosssalesamt",
                                   "columnWidth": 0.5,
                                   "bind": "{grosssalesamt}"
                              }, {
                                   "name": "materialcode",
                                   "itemId": "materialcode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Material",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Material<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "0BB19323-C1B6-4C00-8AC1-59884C4A4DB6",
                                   "restURL": "Material",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Project4.project4.shared.project4.model.sales.MaterialModel"
                                   },
                                   "bindable": "materialcode",
                                   "columnWidth": 0.5,
                                   "bind": "{materialcode}"
                              }, {
                                   "name": "brandcode",
                                   "itemId": "brandcode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Brand",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Brand<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C7B1014B-108B-479D-986F-7C80E782C580",
                                   "restURL": "Brand",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Project4.project4.shared.project4.model.sales.BrandModel"
                                   },
                                   "bindable": "brandcode",
                                   "columnWidth": 0.5,
                                   "bind": "{brandcode}",
                                   "listeners": {
                                        "change": "onBrandcodeChange"
                                   }
                              }, {
                                   "name": "category",
                                   "itemId": "category",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Category",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Category<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "99A4A754-F012-43B5-8D68-057750AC4047",
                                   "restURL": "Category",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Project4.project4.shared.project4.model.sales.CategoryModel"
                                   },
                                   "bindable": "category",
                                   "columnWidth": 0.5,
                                   "bind": "{category}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "39D7328A-41D5-4E09-BCA6-4C86F1FB8663",
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
                    "viewModel": "SalesDataViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "SalesData",
                    "title": "Details Grid",
                    "name": "SalesDataGrid",
                    "itemId": "SalesDataGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "Auto Id",
                         "dataIndex": "autoid",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Channel",
                         "dataIndex": "channelId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Retailer",
                         "dataIndex": "reatilercode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Retailer name",
                         "dataIndex": "retailername",
                         "flex": 1
                    }, {
                         "header": "Sales Date",
                         "dataIndex": "salesdate",
                         "flex": 1
                    }, {
                         "header": "Sales Month",
                         "dataIndex": "salesmonth",
                         "flex": 1
                    }, {
                         "header": "Sales Year",
                         "dataIndex": "salesyear",
                         "flex": 1
                    }, {
                         "header": "Invoice Number",
                         "dataIndex": "salesinvoicenbr",
                         "flex": 1
                    }, {
                         "header": "Material Desc",
                         "dataIndex": "materialdesc",
                         "flex": 1
                    }, {
                         "header": "Brand Desc",
                         "dataIndex": "branddesc",
                         "flex": 1
                    }, {
                         "header": "Sales Quantity",
                         "dataIndex": "salesqty",
                         "flex": 1
                    }, {
                         "header": "Net Sales",
                         "dataIndex": "netsalesamt",
                         "flex": 1
                    }, {
                         "header": "Gross Sales",
                         "dataIndex": "grosssalesamt",
                         "flex": 1
                    }, {
                         "header": "Material",
                         "dataIndex": "materialcode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Brand",
                         "dataIndex": "brandcode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Category",
                         "dataIndex": "category",
                         "renderer": "renderFormValue",
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
               "displayName": "SalesData",
               "name": "SalesData",
               "itemId": "SalesDataForm",
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
                              "name": "autoid",
                              "itemId": "autoid",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Auto Id",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Auto Id<font color='red'> *<\/font>",
                              "fieldId": "893689F8-64EA-4B01-A2C9-EBE0C4FABC6D",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "hidden": true,
                              "value": "",
                              "bindable": "autoid",
                              "bind": "{autoid}"
                         }, {
                              "name": "channelId",
                              "itemId": "channelId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Channel",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Channel<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "5D5FDE14-5B3E-4640-98E3-36A1B4ECB235",
                              "restURL": "Channel",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Project4.project4.shared.project4.model.sales.ChannelModel"
                              },
                              "bindable": "channelId",
                              "columnWidth": 0.5,
                              "bind": "{channelId}"
                         }, {
                              "name": "reatilercode",
                              "itemId": "reatilercode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Retailer",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Retailer<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "71DD6436-86F2-4E61-A1C7-A71797DC2CDF",
                              "restURL": "Retailer",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Project4.project4.shared.project4.model.sales.RetailerModel"
                              },
                              "bindable": "reatilercode",
                              "columnWidth": 0.5,
                              "bind": "{reatilercode}"
                         }, {
                              "name": "retailername",
                              "itemId": "retailername",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Retailer name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Retailer name",
                              "fieldId": "1BD80CA6-7C3D-412B-AA8E-47F72457E2A4",
                              "minLength": "0",
                              "maxLength": "64",
                              "bindable": "retailername",
                              "columnWidth": 0.5,
                              "bind": "{retailername}"
                         }, {
                              "name": "salesdate",
                              "itemId": "salesdate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Sales Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Sales Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "E3998C9C-3FAB-41DF-A463-D0C8643B35BA",
                              "bindable": "salesdate",
                              "columnWidth": 0.5,
                              "bind": "{salesdate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "salesmonth",
                              "itemId": "salesmonth",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Sales Month",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Sales Month<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "28BADAA8-67C3-476F-BC81-C1D994758EC6",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "bindable": "salesmonth",
                              "columnWidth": 0.5,
                              "bind": "{salesmonth}"
                         }, {
                              "name": "salesyear",
                              "itemId": "salesyear",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Sales Year",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Sales Year<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "8884B5E2-E5E4-475C-9026-627CF3B9420E",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "bindable": "salesyear",
                              "columnWidth": 0.5,
                              "bind": "{salesyear}"
                         }, {
                              "name": "salesinvoicenbr",
                              "itemId": "salesinvoicenbr",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Invoice Number",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Invoice Number<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "FB832660-143D-4F03-A84B-DDF09AFD4535",
                              "minLength": "0",
                              "maxLength": "64",
                              "bindable": "salesinvoicenbr",
                              "columnWidth": 0.5,
                              "bind": "{salesinvoicenbr}"
                         }, {
                              "name": "materialdesc",
                              "itemId": "materialdesc",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Material Desc",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Material Desc",
                              "fieldId": "7EAE95FB-7DE3-47A9-A244-87BA5F86E6F3",
                              "minLength": "0",
                              "maxLength": "64",
                              "bindable": "materialdesc",
                              "columnWidth": 0.5,
                              "bind": "{materialdesc}"
                         }, {
                              "name": "branddesc",
                              "itemId": "branddesc",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Brand Desc",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Brand Desc",
                              "fieldId": "C90760C6-E947-41E0-AB1B-91EA57E2E5C6",
                              "minLength": "0",
                              "maxLength": "64",
                              "bindable": "branddesc",
                              "columnWidth": 0.5,
                              "bind": "{branddesc}"
                         }, {
                              "name": "salesqty",
                              "itemId": "salesqty",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Sales Quantity",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Sales Quantity<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "5692CC2E-84DE-4F11-AB7D-8F354DF22A97",
                              "minValue": "-9223372000000000000",
                              "maxValue": "9223372000000000000",
                              "bindable": "salesqty",
                              "columnWidth": 0.5,
                              "bind": "{salesqty}"
                         }, {
                              "name": "netsalesamt",
                              "itemId": "netsalesamt",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Net Sales",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Net Sales<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "51FAA751-15C7-403F-B81A-0FF4E6481D35",
                              "minValue": "-9223372000000000000",
                              "maxValue": "9223372000000000000",
                              "bindable": "netsalesamt",
                              "columnWidth": 0.5,
                              "bind": "{netsalesamt}"
                         }, {
                              "name": "grosssalesamt",
                              "itemId": "grosssalesamt",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Gross Sales",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Gross Sales<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "192F76E3-ED5A-4A7C-B6DC-EEA7D71F107A",
                              "minValue": "-9223372000000000000",
                              "maxValue": "9223372000000000000",
                              "bindable": "grosssalesamt",
                              "columnWidth": 0.5,
                              "bind": "{grosssalesamt}"
                         }, {
                              "name": "materialcode",
                              "itemId": "materialcode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Material",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Material<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "0BB19323-C1B6-4C00-8AC1-59884C4A4DB6",
                              "restURL": "Material",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Project4.project4.shared.project4.model.sales.MaterialModel"
                              },
                              "bindable": "materialcode",
                              "columnWidth": 0.5,
                              "bind": "{materialcode}"
                         }, {
                              "name": "brandcode",
                              "itemId": "brandcode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Brand",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Brand<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C7B1014B-108B-479D-986F-7C80E782C580",
                              "restURL": "Brand",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Project4.project4.shared.project4.model.sales.BrandModel"
                              },
                              "bindable": "brandcode",
                              "columnWidth": 0.5,
                              "bind": "{brandcode}",
                              "listeners": {
                                   "change": "onBrandcodeChange"
                              }
                         }, {
                              "name": "category",
                              "itemId": "category",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Category",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Category<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "99A4A754-F012-43B5-8D68-057750AC4047",
                              "restURL": "Category",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Project4.project4.shared.project4.model.sales.CategoryModel"
                              },
                              "bindable": "category",
                              "columnWidth": 0.5,
                              "bind": "{category}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "39D7328A-41D5-4E09-BCA6-4C86F1FB8663",
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
               "viewModel": "SalesDataViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});