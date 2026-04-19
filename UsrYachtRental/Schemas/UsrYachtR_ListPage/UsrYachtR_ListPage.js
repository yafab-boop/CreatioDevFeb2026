define("UsrYachtR_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtR"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYachtR"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "6952a2db-9e8e-a771-2f8b-476ad3c304d2",
							"code": "PDS_UsrName3",
							"caption": "#ResourceString(PDS_UsrName3)#",
							"dataValueType": 28,
							"width": 117.99653625488281
						},
						{
							"id": "8ce16d1b-f586-1bfa-dcd5-2a46ea7e65a3",
							"code": "PDS_UsrDriveType1",
							"caption": "#ResourceString(PDS_UsrDriveType1)#",
							"dataValueType": 10,
							"width": 127.00001525878906
						},
						{
							"id": "c39d736a-0d29-cf95-0e8d-08eebaabf1d6",
							"code": "PDS_UsrStatus1",
							"caption": "#ResourceString(PDS_UsrStatus1)#",
							"dataValueType": 10,
							"width": 108.00001525878906
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10,
							"width": 136.9965362548828
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 130.9965362548828
						},
						{
							"id": "0c00b877-3a0c-02ab-2466-ec452529d23a",
							"code": "PDS_UsrManager1",
							"caption": "#ResourceString(PDS_UsrManager1)#",
							"dataValueType": 10,
							"width": 118.98611450195312
						},
						{
							"id": "926a9fc6-dad3-c5e4-f15f-5ea249cfce1b",
							"code": "PDS_UsrManager1_Email",
							"caption": "#ResourceString(PDS_UsrManager1_Email)#",
							"dataValueType": 45,
							"width": 152.00001525878906
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachtR",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName3": {
						"modelConfig": {
							"path": "PDS.UsrName3"
						}
					},
					"PDS_UsrDriveType1": {
						"modelConfig": {
							"path": "PDS.UsrDriveType1"
						}
					},
					"PDS_UsrStatus1": {
						"modelConfig": {
							"path": "PDS.UsrStatus1"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_UsrManager1": {
						"modelConfig": {
							"path": "PDS.UsrManager1"
						}
					},
					"PDS_UsrManager1_Email": {
						"modelConfig": {
							"path": "PDS.UsrManager1_Email"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrDriveType1"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachtR",
					"attributes": {
						"UsrName3": {
							"path": "UsrName3"
						},
						"UsrDriveType1": {
							"path": "UsrDriveType1"
						},
						"UsrStatus1": {
							"path": "UsrStatus1"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"UsrManager1": {
							"path": "UsrManager1"
						},
						"UsrManager1_Email": {
							"type": "ForwardReference",
							"path": "UsrManager1.Email"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});