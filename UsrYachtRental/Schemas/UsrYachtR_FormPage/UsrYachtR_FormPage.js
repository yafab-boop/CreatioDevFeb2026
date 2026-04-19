define("UsrYachtR_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachtR"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "747780c0-0e2d-48fb-8cc3-2228c5e5e0db",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "MyActionsButton1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MyActionsButton1_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunWebServiceAvgPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "RunWebServiceRequest"
					}
				},
				"parentName": "MyActionsButton1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AutoAddYachtRentalsMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(AutoAddYachtRentalsMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAutoAddYachtRentalsProcess1",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"notificationText": "#ResourceString(AutoAddYachtRentalsMenuItem_clicked_params_notificationText)#",
							"recordIdProcessParameterName": "ProcessSchemaParameter2"
						}
					}
				},
				"parentName": "MyActionsButton1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Name3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrName3_b336d6n",
					"control": "$PDS_UsrName3_b336d6n",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Length1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_gcrmsaf",
					"control": "$PDS_UsrLength_gcrmsaf",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_qytjjo9",
					"control": "$PDS_UsrPrice_qytjjo9",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Ticket1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_av5pz6o",
					"control": "$PDS_UsrTicketPrice_av5pz6o",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_rdre9v2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType1_q77jgpz",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType1_q77jgpz",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status1",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus1_648a9s4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus1_648a9s4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_l4bjzph",
					"control": "$PDS_UsrPassengersCount_l4bjzph",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager1",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager1_m4q1jbo",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager1_m4q1jbo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_nce4q3k",
					"control": "$PDS_UsrComment_nce4q3k",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Captain1",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain1_e9pqow1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain1_e9pqow1",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CrewCount1",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_v5jaxxr",
					"control": "$PDS_UsrCrewCount_v5jaxxr",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rbg6suu",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rbg6suu_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_timniwv",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rbg6suu",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7ab30tu",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_timniwv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ozbsxav",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ozbsxav_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtsRental"
						}
					}
				},
				"parentName": "FlexContainer_7ab30tu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_drd9oo1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_drd9oo1_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_ccx5uemDS"
						}
					}
				},
				"parentName": "FlexContainer_7ab30tu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_euvcbfb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_euvcbfb_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7ab30tu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_qq07h9j",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_qq07h9j_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ccx5uem"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_euvcbfb",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_6iepat3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_6iepat3_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtsRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_euvcbfb",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_d59p0w9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_d59p0w9_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_d59p0w9_GridDetail_ccx5uem",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_ccx5uem"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_d59p0w9_SearchValue",
							"GridDetailSearchFilter_d59p0w9_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_7ab30tu",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ivj3ij2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_rbg6suu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ccx5uem",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_ccx5uem",
					"primaryColumnName": "GridDetail_ccx5uemDS_Id",
					"columns": [
						{
							"id": "c0c6fb58-4732-916b-5622-0028d8f99020",
							"code": "GridDetail_ccx5uemDS_UsrRentalStart",
							"caption": "#ResourceString(GridDetail_ccx5uemDS_UsrRentalStart)#",
							"dataValueType": 8,
							"width": 138.9965362548828
						},
						{
							"id": "43667a5b-5457-d2ad-dbb1-3a6bb85f1294",
							"code": "GridDetail_ccx5uemDS_UsrRentalEnd",
							"caption": "#ResourceString(GridDetail_ccx5uemDS_UsrRentalEnd)#",
							"dataValueType": 8,
							"width": 125.99305725097656
						},
						{
							"id": "c32fcfc8-5b9c-bf38-45c7-4755c7893a79",
							"code": "GridDetail_ccx5uemDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_ccx5uemDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 121.00001525878906
						},
						{
							"id": "b460d19d-6fa3-571d-00e6-1ed8c6ab23bf",
							"code": "GridDetail_ccx5uemDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_ccx5uemDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 129.00001525878906
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ivj3ij2",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrPrice_qytjjo9": {
						"modelConfig": {
							"path": "PDS.UsrPrice1"
						},
						"validators": {
							"PricePerDayValidator": {
								"type": "usr.PPDValidator",
								"params": {
									"minValue": 700,
									"message": "#ResourceString(PricePerDayCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrLength_gcrmsaf": {
						"modelConfig": {
							"path": "PDS.UsrLength1"
						}
					},
					"PDS_UsrCrewCount_v5jaxxr": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount1"
						}
					},
					"PDS_UsrPassengersCount_l4bjzph": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount1"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.PCValidator",
								"params": {
									"minValue": 3,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrComment_nce4q3k": {
						"modelConfig": {
							"path": "PDS.UsrComment1"
						}
					},
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrDriveType1_q77jgpz": {
						"modelConfig": {
							"path": "PDS.UsrDriveType1"
						}
					},
					"PDS_UsrDriveType1_q77jgpz_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus1_648a9s4": {
						"modelConfig": {
							"path": "PDS.UsrStatus1"
						}
					},
					"PDS_UsrStatus1_648a9s4_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager1_m4q1jbo": {
						"modelConfig": {
							"path": "PDS.UsrManager1"
						}
					},
					"PDS_UsrManager1_m4q1jbo_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCaptain1_e9pqow1": {
						"modelConfig": {
							"path": "PDS.UsrCaptain1"
						}
					},
					"PDS_UsrCaptain1_e9pqow1_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrName3_b336d6n": {
						"modelConfig": {
							"path": "PDS.UsrName3"
						}
					},
					"GridDetail_ccx5uem": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ccx5uemDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_d59p0w9_GridDetail_ccx5uem",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_ccx5uem_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ccx5uemDS_UsrRentalStart": {
									"modelConfig": {
										"path": "GridDetail_ccx5uemDS.UsrRentalStart"
									}
								},
								"GridDetail_ccx5uemDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_ccx5uemDS.UsrRentalEnd"
									}
								},
								"GridDetail_ccx5uemDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_ccx5uemDS.UsrCustomer"
									}
								},
								"GridDetail_ccx5uemDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_ccx5uemDS.CreatedOn"
									}
								},
								"GridDetail_ccx5uemDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ccx5uemDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_ccx5uem_PredefinedFilter": {
						"value": null
					},
					"PDS_UsrTicketPrice_av5pz6o": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_ccx5uemDS": [
							{
								"attributePath": "UsrYachtR",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachtR"
						},
						"scope": "page"
					},
					"GridDetail_ccx5uemDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtsRental",
							"attributes": {
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_qytjjo9' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersCount_l4bjzph' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_qytjjo9;
						let passengers = await request.$context.PDS_UsrPassengersCount_l4bjzph;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_av5pz6o = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{

				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType1_q77jgpz;
					var selectedDriveTypeId = "";
					if (typeObject) {
						selectedDriveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "UsrYachtsRentalService";
					const methodName = "GetAveragePriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);

//const endpoint = "http://localhost/D1_Studio/0/rest/UsrYachtsRentalService/GetAveragePriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: selectedDriveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);

					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.PCValidator": {
					validator: function (config) {
						return function (control) {
							let value = control.value;
							let minValue = config.minValue;
							let valueIsCorrect = value >= minValue;
							var result;
							if (valueIsCorrect) {
								result = null;
							} else {
								result = {
									"usr.PCValidator": { 
										message: config.message
									}
								};
							}
							return result;
						};
					},
					params: [
						{
							name: "minValue"
						},
						{
							name: "message"
						}
					],
					async: false
			},
			"usr.PPDValidator": {
					validator: function (config) {
						return function (control) {
							let value = control.value;
							let minValue = config.minValue;
							let valueIsCorrect = value >= minValue;
							var result;
							if (valueIsCorrect) {
								result = null;
							} else {
								result = {
									"usr.PPDValidator": { 
										message: config.message
									}
								};
							}
							return result;
						};
					},
					params: [
						{
							name: "minValue"
						},
						{
							name: "message"
						}
					],
					async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});