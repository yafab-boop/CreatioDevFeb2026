define("UsrYachtsRentalMiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_74zebbl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtsRentalDS_UsrRentalStart_zhw76ja",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtsRentalDS_UsrRentalStart_zhw76ja"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_qluw36q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtsRentalDS_UsrRentalEnd_57tejhf",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtsRentalDS_UsrRentalEnd_57tejhf"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ked0tay",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtsRentalDS_UsrCustomer_rqq227n",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrYachtsRentalDS_UsrCustomer_rqq227n"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_5to29at",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5to29at_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ked0tay",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_koyx5p3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrYachtsRentalDS_UsrComment_aficap0",
					"control": "$UsrYachtsRentalDS_UsrComment_aficap0",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtsRentalDS_UsrRentalStart_zhw76ja": {
						"modelConfig": {
							"path": "UsrYachtsRentalDS.UsrRentalStart"
						}
					},
					"UsrYachtsRentalDS_UsrRentalEnd_57tejhf": {
						"modelConfig": {
							"path": "UsrYachtsRentalDS.UsrRentalEnd"
						}
					},
					"UsrYachtsRentalDS_UsrCustomer_rqq227n": {
						"modelConfig": {
							"path": "UsrYachtsRentalDS.UsrCustomer"
						}
					},
					"UsrYachtsRentalDS_UsrCustomer_rqq227n_List": {
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
					"UsrYachtsRentalDS_UsrComment_aficap0": {
						"modelConfig": {
							"path": "UsrYachtsRentalDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtsRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtsRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachtsRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});