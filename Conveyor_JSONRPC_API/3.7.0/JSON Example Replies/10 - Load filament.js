{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpyv4bhw"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp0za32x"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp51mlf4"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpb1rp6c"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpaxpm31"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpkyopag"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "id": 1503,
    "jsonrpc": "2.0",
    "method": "load_filament",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84",
        "temperature": null,
        "tool_index": 0
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "pausable": false,
        "failure": null,
        "process_id": null,
        "id": 3,
        "name": "load_filament",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "state": "RUNNING",
        "driver_name": "birdwing",
        "progress": null,
        "type": "LoadFilamentJob",
        "conclusion": null
    },
    "id": 1503
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "pausable": false,
        "failure": null,
        "process_id": null,
        "id": 3,
        "name": "load_filament",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "state": "RUNNING",
        "driver_name": "birdwing",
        "progress": null,
        "type": "LoadFilamentJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobadded"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 213,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "running",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "IDLE",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1504,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1505,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 213,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "running",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1506,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1507,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpkh2bsa"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "running",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1504
}
{
    "id": 1508,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "running",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1505
}
{
    "id": 1509,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "running",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1506
}
{
    "id": 1510,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "running",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1507
}
{
    "id": 1511,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1508
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1509
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1510
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1511
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpucwzax"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpr3ukkh"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "preheating",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1512,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1513,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "preheating",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1512
}
{
    "id": 1514,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "preheating",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1513
}
{
    "id": 1515,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1514
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1515
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp2v2b19"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpvdsnwm"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp8tvzwi"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1516,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1517,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1516
}
{
    "id": 1518,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1517
}
{
    "id": 1519,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmphyh5fv"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1519
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1518
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpp4bgrv"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpwiwrmy"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1520,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1521,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpe6fwey"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1520
}
{
    "id": 1522,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1521
}
{
    "id": 1523,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1522
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1523
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp6ry5zo"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmprifvla"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpzmx2ne"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpmhpo7d"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpfpcehs"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp1njkln"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpdj37ct"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp0pysot"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpgza6sd"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1524,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1525,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1524
}
{
    "id": 1526,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1525
}
{
    "id": 1527,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1526
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1527
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpkhkezy"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpcgcxyt"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmppztyws"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpspo5nw"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmplnrei3"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpvhyqul"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpexj82o"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp_munnk"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp3h8fcu"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmptidsqz"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpigqcq0"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpy1pnwc"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpssqy21"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp2uyveo"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmphiftow"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpdlcbwf"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 217,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "user
            name": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1528,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1529,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 217,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1528
}
{
    "id": 1530,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": false,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 217,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1529
}
{
    "id": 1531,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpvsnfdl"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1530
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1531
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpe9sfbj"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpvlmve3"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 217,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1532,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1533,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpqamp7q"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 217,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1533
}
{
    "id": 1534,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 217,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1532
}
{
    "id": 1535,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1534
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1535
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpsjyu1z"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpyyo3vl"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpzfdlfg"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpowwmrc"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpxdlrkg"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpkerz9k"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpm2avxc"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmptvcw1m"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp9zvrj7"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1536,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1537,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1536
}
{
    "id": 1538,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1537
}
{
    "id": 1539,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1538
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpd9rumt"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1539
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmprmk1pr"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmptuqoz6"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmplswo1q"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpefbfnz"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp7lujkf"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpsh9tsy"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpe5dnr9"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpxovxhb"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpjdlvts"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpmvndgc"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpnv8fev"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpkb5r7l"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "extrusion",
            "cancellable": true,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": false,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1540,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1541,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1540
}
{
    "id": 1542,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "extrusion",
                "cancellable": true,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": false,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1541
}
{
    "id": 1543,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpebitrv"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1543
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1542
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpg4jmf_"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpmv9vcs"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpim5b9d"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpp0j7re"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp9zomd6"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "cancelling",
            "cancellable": false,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": true,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1544,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1545,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "pausable": false,
        "failure": null,
        "process_id": 5,
        "id": 3,
        "name": "load_filament",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "state": "STOPPED",
        "driver_name": "birdwing",
        "progress": null,
        "type": "LoadFilamentJob",
        "conclusion": "CANCELED"
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "cancelling",
                "cancellable": false,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": true,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1544
}
{
    "id": 1546,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "cancelling",
                "cancellable": false,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": true,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1545
}
{
    "id": 1547,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1546
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1547
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmppqmq11"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpqhmmv9"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpsefxdi"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "cleaning_up",
            "cancellable": false,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": true,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1548,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1549,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "cleaning_up",
                "cancellable": false,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": true,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1548
}
{
    "id": 1550,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 215,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "cleaning_up",
                "cancellable": false,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": true,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1549
}
{
    "id": 1551,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1550
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1551
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpwgkicr"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpjclqfk"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpmuu9tc"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpyqsuwc"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp0ee9v7"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp1voyqs"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "cleaning_up",
            "cancellable": false,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": true,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1552,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1553,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmperoyqm"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "cleaning_up",
                "cancellable": false,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": true,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1552
}
{
    "id": 1554,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "username": null,
                "complete": false,
                "step": "cleaning_up",
                "cancellable": false,
                "tool_index": 0,
                "temperature_settings": [215],
                "name": "LoadFilamentProcess",
                "reason": null,
                "error": null,
                "cancelled": true,
                "id": 5,
                "methods": []
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1553
}
{
    "id": 1555,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1555
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1554
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "usern
            ame": null,
            "complete": false,
            "step": "done",
            "cancellable": false,
            "tool_index": 0,
            "temperature_settings": [215],
            "name": "LoadFilamentProcess",
            "reason": null,
            "error": null,
            "cancelled": true,
            "id": 5,
            "methods": []
        },
        "toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "RUNNING",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1556,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1557,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process": null,
        "
        toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "IDLE",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1558,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1559,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "compatible_firmware": true,
        "has_been_connected_to": true,
        "machine_config":
        {
            "acceleration":
            {
                "split_move_recursion_count": 36,
                "split_move_distance_mm": 2.5,
                "min_speed_change_mm_per_s":
                {
                    "y": 3,
                    "x": 3,
                    "z": 0
                },
                "impulse_speed_limit_mm_per_s":
                    {
                        "y": 40,
                        "x": 40,
                        "z": 0
                    },
                "max_speed_change_mm_per_s":
                    {
                        "y": 25,
                        "x": 25,
                        "z": 0
                    },
                "buffer_size": 128,
                "rate_mm_per_s_sq":
                {
                    "y": 800,
                    "x": 800,
                    "z": 150
                }
            },
            "max_speed_mm_per_second":
                {
                    "y": 200,
                    "x": 200,
                    "z": 18
                },
            "version": "1.1.0",
            "extruder_profiles":
            {
                "mk13":
                {
                    "max_speed_mm_per_second":
                    {
                        "a": 5.3
                    },
                    "steps_per_mm":
                        {
                            "a": 108.55
                        },
                    "materials":
                        {
                            "pla":
                            {
                                "acceleration":
                                {
                                    "impulse_speed_limit_mm_per_s":
                                    {
                                        "a": 3
                                    },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.01
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.5
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.6255, 1.6255],
                                        [1.7881, 1.9222],
                                        [1.9506, 2.1457],
                                        [2.2, 2.3],
                                        [2.4383, 2.7],
                                        [2.9259, 3.4],
                                        [3.5761, 4.2],
                                        [3.9, 4.524],
                                        [4.2263, 5.15],
                                        [4.8765, 6],
                                        [100, 100]
                                    ]
                                },
                                "retract_rate": 50,
                                "tempera
                                ture": 215,
                                "max_flow_rate": 5.0,
                                "feed_diameter": 1.77,
                                "ooze_feedstock_distance": 0.1,
                                "restart_rate": 30,
                                "retract_distance": 0.5
                            }
                        },
                    "nozzle_diameter": 0.4
                },
                "mk12":
                    {
                        "max_speed_mm_per_second":
                        {
                            "a": 5.3
                        },
                        "steps_per_mm":
                            {
                                "a": 108.55
                            },
                        "materials":
                            {
                                "pla":
                                {
                                    "acceleration":
                                    {
                                        "impulse_speed_limit_mm_per_s":
                                        {
                                            "a": 3
                                        },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.01
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.5
                                            },
                                        "
        slip_compensation_table": [
                                            [0, 0],
                                            [1.6255, 1.6255],
                                            [1.7881, 1.9222],
                                            [1.9506, 2.1457],
                                            [2.2, 2.3],
                                            [2.4383, 2.7],
                                            [2.9259, 3.4],
                                            [3.5761, 4.2],
                                            [3.9, 4.524],
                                            [4.2263, 5.15],
                                            [4.8765, 6],
                                            [100, 100]
                                    ]
                            },
                                    "retract_rate": 50,
                                    "temperature": 215,
                                    "max_flow_rate": 5.0,
                                    "feed_diameter": 1.77,
                                    "ooze_feedstock_distance": 0.1,
                                    "restart_rate": 30,
                                    "retract_distance": 1.0
                                }
                            },
                        "nozzle_diameter": 0.4
                    },
                "attached_extruders": [
                {
                    "calibrated": false,
                    "id": 10
                }],
                "supported_extruders":
                {
                    "11": "mk12",
                    "10": "mk12",
                    "13": "mk12",
                    "12": "mk12",
                    "1": "mk12",
                    "0": null,
                    "3": "mk12",
                    "2": "mk12",
                    "5": "mk12",
                    "4": "mk12",
                    "7": "mk12",
                    "6": "mk12",
                    "9": "mk12",
                    "8": "mk13"
                }
            },
            "bot_type": "replicator_5",
            "steps_per_mm":
            {
                "y": 88.573186,
                "x": 88.573186,
                "z": 400
            },
            "build_volume":
                {
                    "y": 199,
                    "x": 252,
                    "z": 148
                },
            "gantry_configuration":
                {
                    "max_inner_shell_speed": 90,
                    "max_fill_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "start_position":
            {
                "y": -99,
                "x": -125,
                "z": 0.2
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                }
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process": null,
        "
        toolhead_temperature": null,
        "connection_type": "offline",
        "toolhead_target_temperature": null,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "disabled_errors": ["filament_slip"],
        "driver_name": "birdwing",
        "build_volume": [252, 199, 148],
        "state": "IDLE",
        "profile_name": "Replicator_5",
        "online": false,
        "api_version": "1.4.0"
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 1560,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 1561,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpnktjuq"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process": null,
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1557
}
{
    "id": 1562,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process": null,
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1556
}
{
    "id": 1563,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process": null,
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1558
}
{
    "id": 1564,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process": null,
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1559
}
{
    "id": 1565,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process": null,
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1560
}
{
    "id": 1566,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "sound": false,
        "has_been_connected_to": true,
        "machine_name": "Replicator 29",
        "ip": null,
        "bot_type": "replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 214,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process": null,
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 1561
}
{
    "id": 1567,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1562
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1563
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmphchvns"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1564
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1565
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1566
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 1567
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpdmearh"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpv8lxqh"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpisnj7w"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpjaorrw"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp41rnyw"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpdxdzqe"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpkcrsqk"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmph9g9tt"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpna8di6"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp1oozc3"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmptbhe0u"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmp7fgjqg"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpbi6v0i"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpo6_96o"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmplegoqj"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpf5iutm"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpmwteyf"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpmpqh_p"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpimegls"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmphrcbve"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "params":
    {
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-OUXFEr\\tmpxtsov6"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}