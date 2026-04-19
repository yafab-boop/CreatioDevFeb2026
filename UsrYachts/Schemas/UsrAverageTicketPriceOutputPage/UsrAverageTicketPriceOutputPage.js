define("UsrAverageTicketPriceOutputPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "insert",
				"name": "AvgPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PageParameters_UsrIntegerParameter1_ltv806k",
					"control": "$PageParameters_UsrIntegerParameter1_ltv806k",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_uxln7d4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SQLText",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 6
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PageParameters_UsrTextParameter1_38fmcu0",
					"control": "$PageParameters_UsrTextParameter1_38fmcu0",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GridContainer_uxln7d4",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PageParameters_UsrTextParameter1_38fmcu0": {
						"modelConfig": {
							"path": "PageParameters.UsrSqlText"
						}
					},
					"PageParameters_UsrIntegerParameter1_ltv806k": {
						"modelConfig": {
							"path": "PageParameters.UsrAvgPrice"
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
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});