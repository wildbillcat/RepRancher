﻿/*From a connect_to_machine command */
{
    "compatible_firmware": false, 
    "has_been_connected_to": false, 
    "platform_temperature": null, 
    "has_heated_platform": false, 
    "toolheads": {
        "extruder": [{
            "index": 0, 
            "filament_presence": false, 
            "preheating": false, 
            "tool_present": true, 
            "current_temperature": 25, 
            "tool_id": 4, 
            "target_temperature": 0}]}, 
    "number_of_toolheads": 1, 
    "can_print": true, 
    "printer_type": "Platypus", 
    "firmware_version": [1, 4, 0, 188], 
    "toolhead_temperature": null, 
    "connection_type": "offline", 
    "toolhead_target_temperature": null, 
    "display_name": "Replicator 6", 
    "name": {
        "iserial": "23C100053C7059002409", 
        "pid": 5, 
        "port_type": "UsbPort", 
        "vid": 9153}, 
    "disabled_errors": ["filament_slip"], 
    "driver_name": "birdwing", 
    "build_volume": [252, 199, 150], 
    "state": "IDLE", 
    "profile_name": "Platypus", 
    "online": false, 
    "api_version": "1.0.0"}

/*From a machinestatechanged command*/
{
    "compatible_firmware": false, 
    "has_been_connected_to": false, 
    "platform_temperature": null, 
    "has_heated_platform": false, 
    "toolheads": {
        "extruder": [{
            "index": 0, 
            "filament_presence": false, 
            "preheating": false, 
            "tool_present": true, 
            "current_temperature": 26, 
            "tool_id": 4, 
            "target_temperature": 0}]}, 
    "number_of_toolheads": 1, 
    "can_print": true, 
    "printer_type": "Platypus", 
    "firmware_version": [1, 4, 0, 188], 
    "current_process": {
        "username": "usb_client", 
        "print_temperatures": {}, 
        "complete": false, 
        "filepath": null, 
        "cancellable": true, 
        "start_time": null, 
        "thing_id": null, 
        "step": "initializing", 
        "name": "PrintProcess", 
        "elapsed_time": 0, 
        "filament_extruded": 0, 
        "reason": null, 
        "error": null, 
        "cancelled": false, 
        "progress": 0, 
        "can_print_again": false, 
        "id": 2, 
        "methods": []}, 
    "toolhead_temperature": null, 
    "connection_type": "offline", 
    "toolhead_target_temperature": null, 
    "display_name": "Replicator 6", 
    "name": {
        "iserial": "23C100053C7059002409", 
        "pid": 5, 
        "port_type": "UsbPort", 
        "vid": 9153}, 
    "disabled_errors": ["filament_slip"], 
    "driver_name": "birdwing", 
    "build_volume": [252, 199, 150], 
    "state": "RUNNING", 
    "profile_name": "Platypus", 
    "online": false, 
    "api_version": "1.0.0"
}

/*Another Machine State Change*/
{
    "compatible_firmware": false, 
    "has_been_connected_to": false, 
    "platform_temperature": null, 
    "has_heated_platform": false, 
    "toolheads": {
        "extruder": [{
            "index": 0, 
            "filament_presence": false, 
            "preheating": false, 
            "tool_present": true, 
            "current_temperature": 25, 
            "tool_id": 4, 
            "target_temperature": 0}]}, 
    "number_of_toolheads": 1, 
    "can_print": true, 
    "printer_type": "Platypus", 
    "firmware_version": [1, 4, 0, 188], 
    "current_process": {
        "username": "usb_client", 
        "print_temperatures": {}, 
        "complete": false, "filepath": null, 
        "cancellable": false, 
        "start_time": null, 
        "thing_id": null, 
        "step": "cleaning_up", 
        "name": "PrintProcess", 
        "elapsed_time": 0, 
        "filament_extruded": 0, 
        "reason": "error", 
        "error": {
            "source": {
                "index": 0, 
                "type": "extruder"}, 
            "error_id": 1, 
            "code": 80}, 
        "cancelled": true, 
        "progress": 0, 
        "can_print_again": false, 
        "id": 2, 
        "methods": []}, 
    "toolhead_temperature": null, 
    "connection_type": "offline", 
    "toolhead_target_temperature": null, 
    "display_name": "Replicator 6", 
    "name": {
        "iserial": "23C100053C7059002409", 
        "pid": 5, 
        "port_type": "UsbPort", 
        "vid": 9153}, 
    "disabled_errors": ["filament_slip"], 
    "driver_name": "birdwing", 
    "build_volume": [252, 199, 150], 
    "state": "RUNNING", "profile_name": 
    "Platypus", 
    "online": false, 
    "api_version": "1.0.0"}

