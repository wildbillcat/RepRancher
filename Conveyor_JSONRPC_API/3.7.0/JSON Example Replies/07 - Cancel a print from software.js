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
            "metho
            ds": ["load_filament", "unload_filament", "suspend"],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 309,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1940,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "printing",
            "error": null,
            "cancelled": false,
            "can_print_again": true
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
    "id": 760,
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 309,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 309,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
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
                "methods": ["load_filament", "unload_filament", "suspend"],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 309,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1940,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "printing",
                "error": null,
                "cancelled": false,
                "can_print_again": true
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
    "id": 760
}
{
    "id": 761,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 761
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
            "metho
            ds": ["load_filament", "unload_filament", "suspend"],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 310,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1939,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "printing",
            "error": null,
            "cancelled": false,
            "can_print_again": true
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
    "id": 762,
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 310,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 310,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
}
{
    "id": 763,
    "jsonrpc": "2.0",
    "method": "request_camera_stream",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84",
        "path": "C:/Users/Rob/AppData/Local/Temp/MakerWare-LteuJl"
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
                "methods": ["load_filament", "unload_filament", "suspend"],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 310,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1939,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "printing",
                "error": null,
                "cancelled": false,
                "can_print_again": true
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
    "id": 762
}
{
    "id": 764,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result": true,
    "id": 763
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 764
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpctdiul"
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpxrlm6t"
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpn3qdg5"
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
            "metho
            ds": ["load_filament", "unload_filament", "suspend"],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 312,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1937,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "printing",
            "error": null,
            "cancelled": false,
            "can_print_again": true
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
    "id": 765,
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 312,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 312,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
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
                "methods": ["load_filament", "unload_filament", "suspend"],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 312,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1937,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "printing",
                "error": null,
                "cancelled": false,
                "can_print_again": true
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
    "id": 765
}
{
    "id": 766,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 766
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmp9z_bj9"
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpq1fyyp"
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpk3nhpr"
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
            "metho
            ds": ["load_filament", "unload_filament", "suspend"],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "printing",
            "error": null,
            "cancelled": false,
            "can_print_again": true
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
    "id": 767,
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 314,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 314,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "printing"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
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
                "methods": ["load_filament", "unload_filament", "suspend"],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "printing",
                "error": null,
                "cancelled": false,
                "can_print_again": true
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
    "id": 767
}
{
    "id": 768,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 769,
    "jsonrpc": "2.0",
    "method": "cancel_process",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 768
}
{
    "jsonrpc": "2.0",
    "result": null,
    "id": 769
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
            "metho
            ds": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cancelling",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 770,
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 314,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "cancelling"
        },
        "type": "PrintFromFileJob",
        "conclusion": null
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
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
        "pausable": true,
        "failure": null,
        "process_id": 3,
        "id": 1,
        "name": "1 inch cube",
        "can_cancel": true,
        "profile_name": "Replicator_5",
        "elapsed_time": 314,
        "state": "STOPPED",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 23,
            "name": "cancelling"
        },
        "type": "PrintFromFileJob",
        "conclusion": "CANCELED"
    },
    "jsonrpc": "2.0",
    "method": "jobchanged"
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmphsnjrk"
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
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cancelling",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 770
}
{
    "id": 771,
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpdw9uzp"
    },
    "jsonrpc": "2.0",
    "method": "camera_frame"
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 771
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpmccepi"
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
            "metho
            ds": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 772,
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
        "file_path": "C:\\Users\\Rob\\AppData\\Local\\Temp\\MakerWare-LteuJl\\tmpqnurcn"
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
                "current_temperature": 216,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 772
}
{
    "id": 773,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 774,
    "jsonrpc": "2.0",
    "method": "end_camera_stream",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result": null,
    "id": 774
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 773
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 775,
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 775
}
{
    "id": 776,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 776
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 777,
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 777
}
{
    "id": 778,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 778
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 779,
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 779
}
{
    "id": 780,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 780
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 781,
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 781
}
{
    "id": 782,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 782
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
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 783,
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
                "current_temperature": 214,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 783
}
{
    "id": 784,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 784
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
                "current_temperature": 213,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 785,
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
                "current_temperature": 213,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 785
}
{
    "id": 786,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 786
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
                "current_temperature": 212,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "cleaning_up",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 787,
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
                "current_temperature": 212,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "current_process":
            {
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 314,
                "filament_extruded": 1,
                "reason": null,
                "progress": 23,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 1935,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": false,
                "step": "cleaning_up",
                "error": null,
                "cancelled": true,
                "can_print_again": true
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
    "id": 787
}
{
    "id": 788,
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
        "extrusion_time_s": 2941,
        "retract_count": 946,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 788
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
                "current_temperature": 211,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process":
        {
            "method
            s": [],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 314,
            "filament_extruded": 1,
            "reason": null,
            "progress": 23,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 1935,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": false,
            "step": "done",
            "error": null,
            "cancelled": true,
            "can_print_again": true
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
    "id": 789,
    "jsonrpc": "2.0",
    "method": "save_camera_frame",
    "params":
    {
        "file_path": "C:/Users/Rob/AppData/Local/Temp/MakerWare-yHzBnD/frame",
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 790,
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
                "current_temperature": 211,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process": null,
        "t
        oolhead_temperature": null,
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
    "id": 791,
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
                "current_temperature": 211,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process": null,
        "t
        oolhead_temperature": null,
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
    "id": 792,
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
                "current_temperature": 211,
                "target_temperature": 0,
                "preheating": false
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
    "id": 790
}
{
    "id": 793,
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
                "current_temperature": 211,
                "target_temperature": 0,
                "preheating": false
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
    "id": 791
}
{
    "id": 794,
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
                "current_temperature": 211,
                "target_temperature": 0,
                "preheating": false
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
    "id": 792
}
{
    "id": 795,
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
    "id": 793
}
{
    "jsonrpc": "2.0",
    "result": null,
    "id": 789
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
    "id": 794
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
    "id": 795
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
                "current_temperature": 208,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
        "current_process": null,
        "t
        oolhead_temperature": null,
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
    "id": 796,
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
                "current_temperature": 207,
                "target_temperature": 0,
                "preheating": false
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
    "id": 796
}
{
    "id": 797,
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
    "id": 797
}