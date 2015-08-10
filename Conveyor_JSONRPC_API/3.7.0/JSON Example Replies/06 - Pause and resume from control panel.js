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
            "elapsed_time": 116,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2133,
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
    "id": 486,
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
        "elapsed_time": 116,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 10,
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
        "elapsed_time": 116,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
                "elapsed_time": 116,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2133,
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
    "id": 486
}
{
    "id": 487,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 487
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
            "elapsed_time": 118,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2131,
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
    "id": 488,
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
        "elapsed_time": 118,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
        "elapsed_time": 118,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
                "elapsed_time": 118,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2131,
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
    "id": 488
}
{
    "id": 489,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 489
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
            "elapsed_time": 120,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2129,
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
    "id": 490,
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
        "elapsed_time": 120,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
        "elapsed_time": 120,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
                "elapsed_time": 120,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2129,
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
    "id": 490
}
{
    "id": 491,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 491
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
            ds": ["resume"],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 121,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "suspending",
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
    "id": 492,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
            "name": "suspending"
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
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "methods": ["resume"],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "suspending",
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
        "api_version": "
        1.4.0"
    },
    "id": 492
}
{
    "id": 493,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 493
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
            ds": ["resume"],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 121,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "suspending",
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
    "id": 494,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
            "name": "suspending"
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
                "current_temperature": 216,
                "target_temperature": 215,
                "preheating": true
            }]
        },
        "current_process":
            {
                "methods": ["resume"],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "suspending",
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
        "api_version": "
        1.4.0"
    },
    "id": 494
}
{
    "id": 495,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 495
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
            ds": ["load_filament", "resume", "load_print_tool",
            "unload_filament"
        ],
            "thing_id": 0,
            "extrusion_distance_mm": 2213,
            "id": 3,
            "filepath": "/home/current_thing/1 inch cube.makerbot",
            "elapsed_time": 121,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "suspended",
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
    "method": "machine_state_ch
    anged"
}
{
    "id": 496,
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
        "elapsed_time": 121,
        "state": "PAUSED",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
            "name": "suspending"
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
                "methods": ["load_filament", "resume", "load_print_tool",
                    "unload_filament"
                ],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "suspended",
                "error": null,
                "cancelled": false,
                "can_print_again": true
            },
        "machine_type": "platypus",
        "firmware_version":
        {
            "bugfix": 1,
            "
            major": 1,
            "build": 305,
            "minor": 7
        },
        "api_version": "1.4.0"
    },
    "id": 496
}
{
    "id": 497,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 497
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
            "elapsed_time": 121,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "unsuspending",
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
    "id": 498,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
            "name": "unsuspending"
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
            "name": "unsuspending"
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
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "unsuspending",
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
    "id": 498
}
{
    "id": 499,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 499
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
            "elapsed_time": 121,
            "filament_extruded": 6,
            "reason": null,
            "progress": 100,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "preheating_resuming",
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
    "id": 500,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 100,
            "name": "preheating_resuming"
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
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 6,
                "reason": null,
                "progress": 100,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "preheating_resuming",
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
    "id": 500
}
{
    "id": 501,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 501
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
            "elapsed_time": 121,
            "filament_extruded": 5,
            "reason": null,
            "progress": 99,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "unsuspending",
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
    "id": 502,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 99,
            "name": "unsuspending"
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
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 5,
                "reason": null,
                "progress": 99,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "unsuspending",
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
    "id": 502
}
{
    "id": 503,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 503
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
            "elapsed_time": 121,
            "filament_extruded": 5,
            "reason": null,
            "progress": 99,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "unsuspending",
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
    "id": 504,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 99,
            "name": "unsuspending"
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
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 5,
                "reason": null,
                "progress": 99,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "unsuspending",
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
    "id": 504
}
{
    "id": 505,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 505
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
            "elapsed_time": 121,
            "filament_extruded": 5,
            "reason": null,
            "progress": 99,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "unsuspending",
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
    "id": 506,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 99,
            "name": "unsuspending"
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
                "elapsed_time": 121,
                "filament_extruded": 5,
                "reason": null,
                "progress": 99,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "unsuspending",
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
    "id": 506
}
{
    "id": 507,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 507
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
            "elapsed_time": 121,
            "filament_extruded": 5,
            "reason": null,
            "progress": 99,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
            "extrusion_mass_g": 6,
            "time_estimation": 2250,
            "name": "PrintProcess",
            "cancellable": true,
            "step": "unsuspending",
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
    "id": 508,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 99,
            "name": "unsuspending"
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
                "methods": [],
                "thing_id": 0,
                "extrusion_distance_mm": 2213,
                "id": 3,
                "filepath": "/home/current_thing/1 inch cube.makerbot",
                "elapsed_time": 121,
                "filament_extruded": 5,
                "reason": null,
                "progress": 99,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2128,
                "extrusion_mass_g": 6,
                "time_estimation": 2250,
                "name": "PrintProcess",
                "cancellable": true,
                "step": "unsuspending",
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
    "id": 508
}
{
    "id": 509,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 509
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
            "elapsed_time": 121,
            "filament_extruded": 5,
            "reason": null,
            "progress": 99,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2128,
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
    "id": 510,
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
        "elapsed_time": 121,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 99,
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
                "elapsed_time": 122,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2127,
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
    "id": 510
}
{
    "id": 511,
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
        "retract_count": 937,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 511
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
            "elapsed_time": 122,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2127,
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
    "id": 512,
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
        "elapsed_time": 122,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 99,
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
        "elapsed_time": 122,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
                "elapsed_time": 123,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2126,
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
    "id": 512
}
{
    "id": 513,
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
        "retract_count": 938,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 513
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
            "elapsed_time": 123,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2126,
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
    "id": 514,
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
        "elapsed_time": 123,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
        "elapsed_time": 123,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
                "elapsed_time": 124,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2125,
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
    "id": 514
}
{
    "id": 515,
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
        "retract_count": 938,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 515
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
            "elapsed_time": 125,
            "filament_extruded": 0,
            "reason": null,
            "progress": 11,
            "username": "RobListon",
            "print_temperatures":
            {
                "1": 0,
                "0": 215
            },
            "complete": false,
            "start_time": null,
            "time_remaining": 2124,
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
    "id": 516,
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
        "elapsed_time": 125,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
        "elapsed_time": 125,
        "state": "RUNNING",
        "driver_name": "birdwing",
        "duration_s": 2250,
        "progress":
        {
            "progress": 11,
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
                "elapsed_time": 125,
                "filament_extruded": 0,
                "reason": null,
                "progress": 11,
                "username": "RobListon",
                "print_temperatures":
                {
                    "1": 0,
                    "0": 215
                },
                "complete": false,
                "start_time": null,
                "time_remaining": 2124,
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
    "id": 516
}
{
    "id": 517,
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
        "retract_count": 938,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 517
}