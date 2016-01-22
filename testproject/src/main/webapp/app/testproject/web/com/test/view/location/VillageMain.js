Ext.define('Testproject.testproject.web.com.test.view.location.VillageMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "VillageMainController",
     "restURL": "/Village",
     "defaults": {
          "split": true
     },
     "requires": ["Testproject.testproject.shared.com.test.model.location.VillageModel", "Testproject.testproject.web.com.test.controller.location.VillageMainController", "Testproject.testproject.shared.com.test.model.location.CountryModel", "Testproject.testproject.shared.com.test.model.location.StateModel", "Testproject.testproject.shared.com.test.model.location.RegionModel", "Testproject.testproject.shared.com.test.model.location.DistrictModel", "Testproject.testproject.shared.com.test.model.location.TalukaModel", "Testproject.testproject.shared.com.test.viewmodel.location.VillageViewModel"],
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
               "displayName": "Village",
               "name": "VillageTreeContainer",
               "itemId": "VillageTreeContainer",
               "restURL": "/Village",
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
                    "itemId": "VillageTree",
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
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "VillageViewModel",
                    "xtype": "form",
                    "displayName": "Village",
                    "title": "Village",
                    "name": "Village",
                    "itemId": "Village",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "villageId",
                         "itemId": "villageId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Village Id",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village Id<font color='red'> *<\/font>",
                         "fieldId": "07157100-A866-4F7D-96A1-5EF5E3DD4219",
                         "minLength": "0",
                         "maxLength": "64",
                         "hidden": true,
                         "value": "",
                         "bindable": "villageId",
                         "bind": "{villageId}"
                    }, {
                         "name": "villageName",
                         "itemId": "villageName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Village Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "DCDBD683-2390-47F7-B41E-73CA30652158",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "villageName",
                         "bind": "{villageName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "villageDescription",
                         "itemId": "villageDescription",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Village Description",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village Description",
                         "fieldId": "2D6B21F9-F820-4584-9B01-E05A08CE99CA",
                         "bindable": "villageDescription",
                         "bind": "{villageDescription}",
                         "columnWidth": 0.5
                    }, {
                         "name": "villageFlag",
                         "itemId": "villageFlag",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Village taluka",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village taluka",
                         "fieldId": "2CC1C063-E933-43FE-A5E3-12C5D6F72BE9",
                         "minLength": "0",
                         "maxLength": "64",
                         "bindable": "villageFlag",
                         "bind": "{villageFlag}",
                         "columnWidth": 0.5
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "DC3D3520-63B5-4277-A593-98A6B525A02A",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Testproject.testproject.shared.com.test.model.location.CountryModel"
                         },
                         "bindable": "countryId",
                         "bind": "{countryId}",
                         "columnWidth": 0.5,
                         "listeners": {
                              "change": "onCountryIdChange"
                         }
                    }, {
                         "name": "stateId",
                         "itemId": "stateId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "State",
                         "margin": "5 5 5 5",
                         "fieldLabel": "State<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D752EF35-37AA-4C82-B1A1-2E4EEAC9E160",
                         "restURL": "State",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Testproject.testproject.shared.com.test.model.location.StateModel"
                         },
                         "bindable": "stateId",
                         "bind": "{stateId}",
                         "columnWidth": 0.5,
                         "listeners": {
                              "change": "onStateIdChange"
                         }
                    }, {
                         "name": "regionId",
                         "itemId": "regionId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Region",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Region<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "EE95EE8D-6CF1-43B2-8BCF-80FC1E95D5A2",
                         "restURL": "Region",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Testproject.testproject.shared.com.test.model.location.RegionModel"
                         },
                         "bindable": "regionId",
                         "bind": "{regionId}",
                         "columnWidth": 0.5,
                         "listeners": {
                              "change": "onRegionIdChange"
                         }
                    }, {
                         "name": "districtId",
                         "itemId": "districtId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "District",
                         "margin": "5 5 5 5",
                         "fieldLabel": "District<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "4F1873BC-BF11-4CE5-8D4D-72FBF4FB8EF8",
                         "restURL": "District",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Testproject.testproject.shared.com.test.model.location.DistrictModel"
                         },
                         "bindable": "districtId",
                         "bind": "{districtId}",
                         "columnWidth": 0.5,
                         "listeners": {
                              "change": "onDistrictIdChange"
                         }
                    }, {
                         "name": "talukaaId",
                         "itemId": "talukaaId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "talukaa",
                         "margin": "5 5 5 5",
                         "fieldLabel": "talukaa<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "B8A4F828-BF48-4008-85A1-F89A45CF4817",
                         "restURL": "Taluka",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Testproject.testproject.shared.com.test.model.location.TalukaModel"
                         },
                         "bindable": "talukaaId",
                         "bind": "{talukaaId}",
                         "columnWidth": 0.5
                    }, {
                         "name": "villageCode",
                         "itemId": "villageCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Village Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village Code<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E6EA4177-7100-4018-A3EF-2E3550472D6A",
                         "minLength": "0",
                         "maxLength": "32",
                         "bindable": "villageCode",
                         "bind": "{villageCode}",
                         "columnWidth": 0.5
                    }, {
                         "name": "villageLatitude",
                         "itemId": "villageLatitude",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Village Latitude",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village Latitude",
                         "fieldId": "2F4F5328-7E61-400C-9912-2E543C5A9DD6",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "villageLatitude",
                         "bind": "{villageLatitude}",
                         "columnWidth": 0.5
                    }, {
                         "name": "villageLongtitude",
                         "itemId": "villageLongtitude",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Village Longitude",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Village Longitude",
                         "fieldId": "14584C58-367E-46E7-A3EC-3781451C2766",
                         "minValue": "0",
                         "maxValue": "11",
                         "bindable": "villageLongtitude",
                         "bind": "{villageLongtitude}",
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
                         "fieldId": "7C52C620-30DC-463A-9206-FBF5592A1E3E",
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
                         "customId": 359,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 359,
                              "customId": 211
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 359,
                              "customId": 212,
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
                              "parentId": 359,
                              "customId": 213,
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
                    "displayName": "Village",
                    "title": "Details Grid",
                    "name": "VillageGrid",
                    "itemId": "VillageGrid",
                    "restURL": "/Village",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "Village Id",
                         "dataIndex": "villageId",
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
                         "header": "Village Name",
                         "dataIndex": "villageName",
                         "flex": 1
                    }, {
                         "header": "Village Description",
                         "dataIndex": "villageDescription",
                         "flex": 1
                    }, {
                         "header": "Village taluka",
                         "dataIndex": "villageFlag",
                         "flex": 1
                    }, {
                         "header": "Country",
                         "dataIndex": "countryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "State",
                         "dataIndex": "stateId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Region",
                         "dataIndex": "regionId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "District",
                         "dataIndex": "districtId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "talukaa",
                         "dataIndex": "talukaaId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Village Code",
                         "dataIndex": "villageCode",
                         "flex": 1
                    }, {
                         "header": "Village Latitude",
                         "dataIndex": "villageLatitude",
                         "flex": 1
                    }, {
                         "header": "Village Longitude",
                         "dataIndex": "villageLongtitude",
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
               "viewModel": "VillageViewModel",
               "xtype": "form",
               "displayName": "Village",
               "title": "Village",
               "name": "Village",
               "itemId": "Village",
               "bodyPadding": 10,
               "items": [{
                    "name": "villageId",
                    "itemId": "villageId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Village Id",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village Id<font color='red'> *<\/font>",
                    "fieldId": "07157100-A866-4F7D-96A1-5EF5E3DD4219",
                    "minLength": "0",
                    "maxLength": "64",
                    "hidden": true,
                    "value": "",
                    "bindable": "villageId",
                    "bind": "{villageId}"
               }, {
                    "name": "villageName",
                    "itemId": "villageName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Village Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "DCDBD683-2390-47F7-B41E-73CA30652158",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "villageName",
                    "bind": "{villageName}",
                    "columnWidth": 0.5
               }, {
                    "name": "villageDescription",
                    "itemId": "villageDescription",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Village Description",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village Description",
                    "fieldId": "2D6B21F9-F820-4584-9B01-E05A08CE99CA",
                    "bindable": "villageDescription",
                    "bind": "{villageDescription}",
                    "columnWidth": 0.5
               }, {
                    "name": "villageFlag",
                    "itemId": "villageFlag",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Village taluka",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village taluka",
                    "fieldId": "2CC1C063-E933-43FE-A5E3-12C5D6F72BE9",
                    "minLength": "0",
                    "maxLength": "64",
                    "bindable": "villageFlag",
                    "bind": "{villageFlag}",
                    "columnWidth": 0.5
               }, {
                    "name": "countryId",
                    "itemId": "countryId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Country",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Country<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "DC3D3520-63B5-4277-A593-98A6B525A02A",
                    "restURL": "Country",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Testproject.testproject.shared.com.test.model.location.CountryModel"
                    },
                    "bindable": "countryId",
                    "bind": "{countryId}",
                    "columnWidth": 0.5,
                    "listeners": {
                         "change": "onCountryIdChange"
                    }
               }, {
                    "name": "stateId",
                    "itemId": "stateId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "State",
                    "margin": "5 5 5 5",
                    "fieldLabel": "State<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D752EF35-37AA-4C82-B1A1-2E4EEAC9E160",
                    "restURL": "State",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Testproject.testproject.shared.com.test.model.location.StateModel"
                    },
                    "bindable": "stateId",
                    "bind": "{stateId}",
                    "columnWidth": 0.5,
                    "listeners": {
                         "change": "onStateIdChange"
                    }
               }, {
                    "name": "regionId",
                    "itemId": "regionId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Region",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Region<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "EE95EE8D-6CF1-43B2-8BCF-80FC1E95D5A2",
                    "restURL": "Region",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Testproject.testproject.shared.com.test.model.location.RegionModel"
                    },
                    "bindable": "regionId",
                    "bind": "{regionId}",
                    "columnWidth": 0.5,
                    "listeners": {
                         "change": "onRegionIdChange"
                    }
               }, {
                    "name": "districtId",
                    "itemId": "districtId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "District",
                    "margin": "5 5 5 5",
                    "fieldLabel": "District<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "4F1873BC-BF11-4CE5-8D4D-72FBF4FB8EF8",
                    "restURL": "District",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Testproject.testproject.shared.com.test.model.location.DistrictModel"
                    },
                    "bindable": "districtId",
                    "bind": "{districtId}",
                    "columnWidth": 0.5,
                    "listeners": {
                         "change": "onDistrictIdChange"
                    }
               }, {
                    "name": "talukaaId",
                    "itemId": "talukaaId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "talukaa",
                    "margin": "5 5 5 5",
                    "fieldLabel": "talukaa<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "B8A4F828-BF48-4008-85A1-F89A45CF4817",
                    "restURL": "Taluka",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Testproject.testproject.shared.com.test.model.location.TalukaModel"
                    },
                    "bindable": "talukaaId",
                    "bind": "{talukaaId}",
                    "columnWidth": 0.5
               }, {
                    "name": "villageCode",
                    "itemId": "villageCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Village Code",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village Code<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E6EA4177-7100-4018-A3EF-2E3550472D6A",
                    "minLength": "0",
                    "maxLength": "32",
                    "bindable": "villageCode",
                    "bind": "{villageCode}",
                    "columnWidth": 0.5
               }, {
                    "name": "villageLatitude",
                    "itemId": "villageLatitude",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Village Latitude",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village Latitude",
                    "fieldId": "2F4F5328-7E61-400C-9912-2E543C5A9DD6",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "villageLatitude",
                    "bind": "{villageLatitude}",
                    "columnWidth": 0.5
               }, {
                    "name": "villageLongtitude",
                    "itemId": "villageLongtitude",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Village Longitude",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Village Longitude",
                    "fieldId": "14584C58-367E-46E7-A3EC-3781451C2766",
                    "minValue": "0",
                    "maxValue": "11",
                    "bindable": "villageLongtitude",
                    "bind": "{villageLongtitude}",
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
                    "fieldId": "7C52C620-30DC-463A-9206-FBF5592A1E3E",
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
                    "customId": 359,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 359,
                         "customId": 211
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 359,
                         "customId": 212,
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
                         "parentId": 359,
                         "customId": 213,
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