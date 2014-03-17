{"params": {"machine_name": {"iserial": "7523733353635171A221", "pid": 45077, "port_type": "UsbPort", "vid": 9153}, "pausable": true, "failure": null, "profile_name": "Replicator2X", "extrusion_mass_a_grams": 7.00589, "id": 3, "name": "1 inch cube", "can_cancel": true, "elapsed_time": 76.893, "state": "RUNNING", "driver_name": "s3g", "duration_s": 1637, "progress": {"progress": 0, "name": "print"}, "type": "PrintJob", "extrusion_distance_a_mm": 2296.18, "conclusion": null}, "jsonrpc": "2.0", "method": "jobchanged"}

{"params": {
    "machine_name": {
        "iserial": "7523733353635171A221", 
        "pid": 45077, 
        "port_type": "UsbPort", 
        "vid": 9153}, 
    "pausable": true, 
    "failure": null, 
    "profile_name": "Replicator2X", 
    "extrusion_mass_a_grams": 7.00589, 
    "id": 3, 
    "name": "1 inch cube", 
    "can_cancel": true, 
    "elapsed_time": 76.893, 
    "state": "RUNNING", 
    "driver_name": "s3g", 
    "duration_s": 1637, 
    "progress": {
        "progress": 0, 
        "name": "print"}, 
    "type": "PrintJob",
    "extrusion_distance_a_mm": 2296.18, 
    "conclusion": null
}, 
    "jsonrpc": "2.0", 
    "method": "jobchanged"
}


/*************************************Second Call (Failure)****************************************************/
{"params": {"machine_name": {"iserial": "7523733353635171A221", "pid": 45077, "port_type": "UsbPort", "vid": 9153}, "pausable": true, "failure": {"exception": {"winerror": "None", "name": "IllegalTransitionException", "errno": "None", "args": "(u'PAUSED', u'HEARTBEAT')", "strerror": "None", "filename": "None", "message": "(u'PAUSED', u'HEARTBEAT')"}}, "profile_name": "Replicator2X", "extrusion_mass_a_grams": 7.00589, "id": 16, "name": "1 inch cube", "can_cancel": true, "elapsed_time": 250.70699999999874, "state": "STOPPED", "driver_name": "s3g", "duration_s": 1637, "progress": {"progress": 8, "name": "print"}, "type": "PrintJob", "extrusion_distance_a_mm": 2296.18, "conclusion": "FAILED"}, "jsonrpc": "2.0", "method": "jobchanged"}

{
    "params": 
    {
        "machine_name": 
        {
            "iserial": "7523733353635171A221", 
            "pid": 45077, 
            "port_type": "UsbPort", 
            "vid": 9153
        }, 
        "pausable": true, 
        "failure": 
        {
            "exception": 
            {
                "winerror": "None", 
                "name": "IllegalTransitionException", 
                "errno": "None", 
                "args": "(u'PAUSED', u'HEARTBEAT')", 
                "strerror": "None", 
                "filename": "None", 
                "message": "(u'PAUSED', u'HEARTBEAT')"
            }
        }, 
        "profile_name": "Replicator2X", 
        "extrusion_mass_a_grams": 7.00589, 
        "id": 16, 
        "name": "1 inch cube", 
        "can_cancel": true, 
        "elapsed_time": 250.70699999999874, 
        "state": "STOPPED", 
        "driver_name": "s3g", 
        "duration_s": 1637, 
        "progress": 
        {
            "progress": 8, 
            "name": "print"
        }, 
        "type": "PrintJob",
        "extrusion_distance_a_mm": 2296.18, 
        "conclusion": "FAILED"
    }, 
    "jsonrpc": "2.0", 
    "method": "jobchanged"
}