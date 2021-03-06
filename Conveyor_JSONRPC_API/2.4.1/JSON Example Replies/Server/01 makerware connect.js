{
	"id":0,
	"jsonrpc":"2.0",
	"method":"hello",
	"params":[]
}

{
	"jsonrpc": "2.0", 
	"result": "world", 
	"id": 0
}

{
	"id":1,
	"jsonrpc":"2.0",
	"method":"getports",
	"params":{}
}

{
	"jsonrpc": "2.0", 
	"result": [
		{
			"name": "COM4:9153:45077", 
			"vid": 9153, 
			"pid": 45077, 
			"label": "Replicator 2", 
			"driver_profiles": 
				{
					"s3g": ["Replicator2X", "Replicator2"]
				}, 
			"iserial": "7523733353635171A221", 
			"path": "COM4", 
			"type": "SERIAL"
		}], 
	"id": 1
}

{
	"id":2,
	"jsonrpc":"2.0",
	"method":"getprinters",
	"params":[]
}

{
	"jsonrpc": "2.0", 
	"result": [
		{
			"displayName": "The Replicator 2X", 
			"name": "The Replicator 2X", 
			"printerType": "The Replicator 2X", 
			"profile_name": "Replicator2X", 
			"hasHeatedPlatform": true, 
			"toolhead_target_temperature": null, 
			"build_volume": [246, 152, 155], 
			"state": "DISCONNECTED", 
			"driver_name": "s3g", "port_name": null, 
			"temperature": 
				{
					"heated_platforms": {}, 
					"tools": {}
				}, 
			"uniqueName": "The Replicator 2X", 
			"canPrintToFile": null, 
			"machineNames": ["TheReplicator2X"], 
			"numberOfToolheads": 2, 
			"firmware_version": null, 
			"canPrint": false
		}, 
		{
			"displayName": "The Replicator Dual", 
			"name": "The Replicator Dual", 
			"printerType": "The Replicator Dual", 
			"profile_name": "ReplicatorDual", 
			"hasHeatedPlatform": true, 
			"toolhead_target_temperature": null, 
			"build_volume": [225, 145, 150], 
			"state": "DISCONNECTED", 
			"driver_name": "s3g", 
			"port_name": null, 
			"temperature": 
				{
					"heated_platforms": {}, 
					"tools": {}
				}, 
			"uniqueName": "The Replicator Dual", 
			"canPrintToFile": null, 
			"machineNames": ["TheReplicator"], 
			"numberOfToolheads": 2, 
			"firmware_version": null, 
			"canPrint": false
		}, 
		{
			"displayName": "The Replicator 2", 
			"name": "The Replicator 2", 
			"printerType": "The Replicator 2", 
			"profile_name": "Replicator2", 
			"hasHeatedPlatform": false, 
			"toolhead_target_temperature": null, 
			"build_volume": [285, 153, 155], 
			"state": "DISCONNECTED", 
			"driver_name": "s3g", 
			"port_name": null, 
			"temperature": 
				{
					"heated_platforms": {}, 
					"tools": {}
				}, 
			"uniqueName": "The Replicator 2", 
			"canPrintToFile": null, 
			"machineNames": ["TheReplicator2"], 
			"numberOfToolheads": 1, 
			"firmware_version": null, 
			"canPrint": false
		}, 
		{
			"displayName": "The Replicator Single", 
			"name": "The Replicator Single", 
			"printerType": "The Replicator Single", 
			"profile_name": "ReplicatorSingle", 
			"hasHeatedPlatform": true, 
			"toolhead_target_temperature": null, 
			"build_volume": [225, 145, 150], 
			"state": "DISCONNECTED", 
			"driver_name": "s3g", 
			"port_name": null, 
			"temperature": {
				"heated_platforms": {}, 
				"tools": {}
			}, 
			"uniqueName": "The Replicator Single", 
			"canPrintToFile": null, 
			"machineNames": ["TheReplicator"], 
			"numberOfToolheads": 1, 
			"firmware_version": null, 
			"canPrint": false
		}, 
		{
			"displayName": "Thing-O-Matic Single, Stepstruder Mk6 or Mk7", 
			"name": "Thing-O-Matic Single, Stepstruder Mk6 or Mk7", 
			"printerType": "Thing-O-Matic Single, Stepstruder Mk6 or Mk7", 
			"profile_name": "TOMStepstruderSingle", 
			"hasHeatedPlatform": true, 
			"toolhead_target_temperature": null, 
			"build_volume": [106, 120, 106], 
			"state": "DISCONNECTED", 
			"driver_name": "s3g", 
			"port_name": null, 
			"temperature": {
				"heated_platforms": {}, 
				"tools": {}
			}, 
			"uniqueName": "Thing-O-Matic Single, Stepstruder Mk6 or Mk7", 
			"canPrintToFile": null, 
			"machineNames": ["Thing-O-Matic", "TOM"], 
			"numberOfToolheads": 1, 
			"firmware_version": null, 
			"canPrint": false
		}], 
	"id": 2
}

{
	"id":3,
	"jsonrpc":"2.0",
	"method":"getjobs",
	"params":{}
}

{
	"jsonrpc": "2.0", 
	"result": [], 
	"id": 3
}

{
	"id":4,
	"jsonrpc":"2.0",
	"method":"connect",
	"params":
	{
		"driver_name":null,
		"machine_name":null,
		"persistent":false,
		"port_name":"COM4:9153:45077",
		"profile_name":null
	}
}

{
	"params": 
	{
		"displayName": "The Replicator 2X", 
		"name": "23C1:B015:7523733353635171A221", 
		"printerType": "The Replicator 2X", 
		"profile_name": "Replicator2X", 
		"hasHeatedPlatform": true, 
		"toolhead_target_temperature": null, 
		"build_volume": [246, 152, 155], 
		"state": "BUSY", 
		"driver_name": "s3g", 
		"port_name": "COM4:9153:45077", 
		"temperature": 
		{
			"heated_platforms": [], "tools": {}
		}, 
		"uniqueName": "23C1:B015:7523733353635171A221", 
		"canPrintToFile": true, 
		"machineNames": ["TheReplicator2X"], 
		"numberOfToolheads": 2, 
		"firmware_version": 705, 
		"canPrint": true
	}, 
	"jsonrpc": "2.0", 
	"method": "machine_state_changed"
}

{
	"params": 
	{
		"displayName": "The Replicator 2X", 
		"name": "23C1:B015:7523733353635171A221", 
		"printerType": "The Replicator 2X", 
		"profile_name": "Replicator2X", 
		"hasHeatedPlatform": true, 
		"toolhead_target_temperature": [0, 0], 
		"build_volume": [246, 152, 155], 
		"state": "IDLE", 
		"driver_name": "s3g", 
		"port_name": "COM4:9153:45077", 
		"temperature": 
		{
			"heated_platforms": [2], 
			"tools": {"0": 23, "1": 0}
		}, 
		"uniqueName": "23C1:B015:7523733353635171A221", 
		"canPrintToFile": true, 
		"machineNames": ["TheReplicator2X"], 
		"numberOfToolheads": 2, 
		"firmware_version": 705, 
		"canPrint": true
	}, 
	"jsonrpc": "2.0", 
	"method": "machine_state_changed"
}

{
	"params": 
	{
		"displayName": "The Replicator 2X", 
		"name": "23C1:B015:7523733353635171A221", 
		"printerType": "The Replicator 2X", 
		"profile_name": "Replicator2X", 
		"hasHeatedPlatform": true, 
		"toolhead_target_temperature": [0, 0], 
		"build_volume": [246, 152, 155], 
		"state": "IDLE", 
		"driver_name": "s3g", 
		"port_name": "COM4:9153:45077", 
		"temperature": 
		{
			"heated_platforms": [2], 
			"tools": {"0": 23, "1": 0}
		}, 
		"uniqueName": "23C1:B015:7523733353635171A221", 
		"canPrintToFile": true, 
		"machineNames": ["TheReplicator2X"], 
		"numberOfToolheads": 2, 
		"firmware_version": 705, 
		"canPrint": true
	}, 
	"jsonrpc": "2.0", 
	"method": "machine_temperature_changed"
}

{
	"jsonrpc": "2.0", 
	"result": 
	{
		"displayName": "The Replicator 2X", 
		"name": "23C1:B015:7523733353635171A221", 
		"printerType": "The Replicator 2X", 
		"profile_name": "Replicator2X", 
		"hasHeatedPlatform": true, 
		"toolhead_target_temperature": [0, 0], 
		"build_volume": [246, 152, 155], 
		"state": "IDLE", 
		"driver_name": "s3g", 
		"port_name": "COM4:9153:45077", 
		"temperature": 
		{
			"heated_platforms": [2], 
			"tools": {"0": 23, "1": 0}
		}, "uniqueName": "23C1:B015:7523733353635171A221", 
		"canPrintToFile": true, 
		"machineNames": ["TheReplicator2X"], 
		"numberOfToolheads": 2, 
		"firmware_version": 705, 
		"canPrint": true}, 
	"id": 4
}