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
                "current_temperature": 173,
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
    "id": 854,
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
                "current_temperature": 173,
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
    "id": 854
}
{
    "id": 855,
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
    "id": 855
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
                "current_temperature": 172,
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
    "id": 856,
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
                "current_temperature": 172,
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
    "id": 856
}
{
    "id": 857,
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
    "id": 857
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
                "current_temperature": 170,
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
    "id": 858,
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
                "current_temperature": 170,
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
    "id": 858
}
{
    "id": 859,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 860,
    "jsonrpc": "2.0",
    "method": "network_state",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 861,
    "jsonrpc": "2.0",
    "method": "get_cloud_services_info",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 862,
    "jsonrpc": "2.0",
    "method": "get_sound_state",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 863,
    "jsonrpc": "2.0",
    "method": "has_z_calibration_routine",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 864,
    "jsonrpc": "2.0",
    "method": "get_available_z_offset_adjustment",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 865,
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
        "extrusion_time_s": 3251,
        "retract_count": 1876,
        "extrusion_distance_mm": 4892,
        "refurb_count": 0
    },
    "id": 859
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "state": "offline",
        "wifi": "disabled"
    },
    "id": 860
}
{
    "jsonrpc": "2.0",
    "result": false,
    "id": 862
}
{
    "jsonrpc": "2.0",
    "result": 0.4,
    "id": 864
}
{
    "id": 866,
    "jsonrpc": "2.0",
    "method": "get_z_adjusted_offset",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result": false,
    "id": 863
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "lcd_username": null,
        "num_authorized": 1,
        "analytics_enabled": null,
        "reflector_enabled": null
    },
    "id": 861
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
                "current_temperature": 170,
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
    "id": 865
}
{
    "id": 867,
    "jsonrpc": "2.0",
    "method": "get_tool_usage_stats",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result": 0.0,
    "id": 866
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
    "id": 867
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
                "current_temperature": 168,
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
    "id": 868,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 869,
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
                "current_temperature": 168,
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
    "id": 868
}
{
    "id": 870,
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
    "id": 870
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
                "current_temperature": 168,
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
    "id": 869
}
{
    "id": 871,
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
    "id": 871
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
                "current_temperature": 167,
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
    "id": 872,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 873,
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
                "current_temperature": 167,
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
    "id": 872
}
{
    "id": 874,
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
                "current_temperature": 167,
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
    "id": 873
}
{
    "id": 875,
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
    "id": 874
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
    "id": 875
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
                "current_temperature": 166,
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
    "id": 876,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 877,
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
                "current_temperature": 166,
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
    "id": 876
}
{
    "id": 878,
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
                "current_temperature": 166,
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
    "id": 877
}
{
    "id": 879,
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
    "id": 878
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
    "id": 879
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
                "current_temperature": 165,
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
    "id": 880,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 881,
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
                "current_temperature": 165,
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
    "id": 880
}
{
    "id": 882,
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
                "current_temperature": 165,
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
    "id": 881
}
{
    "id": 883,
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
    "id": 882
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
    "id": 883
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
                "current_temperature": 164,
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
    "id": 884,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 885,
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
                "current_temperature": 164,
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
    "id": 884
}
{
    "id": 886,
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
                "current_temperature": 164,
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
    "id": 885
}
{
    "id": 887,
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
    "id": 886
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
    "id": 887
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
                "current_temperature": 163,
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
    "id": 888,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 889,
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
                "current_temperature": 163,
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
    "id": 888
}
{
    "id": 890,
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
                "current_temperature": 163,
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
    "id": 889
}
{
    "id": 891,
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
    "id": 890
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
    "id": 891
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
                "current_temperature": 162,
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
    "id": 892,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 893,
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
                "current_temperature": 162,
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
    "id": 892
}
{
    "id": 894,
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
                "current_temperature": 162,
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
    "id": 893
}
{
    "id": 895,
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
    "id": 894
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
    "id": 895
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
                "current_temperature": 160,
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
    "id": 896,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 897,
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
                "current_temperature": 160,
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
    "id": 896
}
{
    "id": 898,
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
                "current_temperature": 160,
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
    "id": 897
}
{
    "id": 899,
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
    "id": 898
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
    "id": 899
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
                "current_temperature": 159,
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
    "id": 900,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 901,
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
                "current_temperature": 159,
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
    "id": 900
}
{
    "id": 902,
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
                "current_temperature": 159,
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
    "id": 901
}
{
    "id": 903,
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
    "id": 902
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
    "id": 903
}
{
    "id": 904,
    "jsonrpc": "2.0",
    "method": "change_display_name",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84",
        "new_display_name": "Replicator 29"
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
                "current_temperature": 158,
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
    "id": 905,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 906,
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
                "current_temperature": 158,
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
    "id": 907,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 908,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result": null,
    "id": 904
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
                "current_temperature": 158,
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
    "id": 905
}
{
    "id": 909,
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
                "current_temperature": 158,
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
    "id": 910,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 911,
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
                "current_temperature": 158,
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
    "id": 906
}
{
    "id": 912,
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
                "current_temperature": 158,
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
    "id": 908
}
{
    "id": 913,
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
                "current_temperature": 158,
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
    "id": 907
}
{
    "id": 914,
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
                "current_temperature": 158,
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
    "id": 910
}
{
    "id": 915,
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
    "id": 909
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
                "current_temperature": 158,
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
    "id": 911
}
{
    "id": 916,
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
    "id": 912
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
    "id": 914
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
    "id": 913
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
    "id": 916
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
    "id": 915
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
                "current_temperature": 157,
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
    "id": 917,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 918,
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
                "current_temperature": 157,
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
    "id": 917
}
{
    "id": 919,
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
                "current_temperature": 157,
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
    "id": 918
}
{
    "id": 920,
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
    "id": 920
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
    "id": 919
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
                "current_temperature": 156,
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
    "id": 921,
    "jsonrpc": "2.0",
    "method": "get_system_information",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "id": 922,
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
                "current_temperature": 156,
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
    "id": 921
}
{
    "id": 923,
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
                "current_temperature": 156,
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
    "id": 922
}
{
    "id": 924,
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
    "id": 923
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
    "id": 924
}