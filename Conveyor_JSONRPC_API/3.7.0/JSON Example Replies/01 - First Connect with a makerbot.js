{
    "params":
    {
        "driver_profiles":
        {
            "birdwing": ["Replicator_5"]
        },
        "machine_hash": "23C1:0005:23C100053C7059011E84",
        "machine_name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "port_type": "UsbPort",
        "machine_type": "Replicator5_5"
    },
    "jsonrpc": "2.0",
    "method": "port_attached"
}
{
    "id": 31,
    "jsonrpc": "2.0",
    "method": "connect_to_machine",
    "params":
    {
        "machine_name": "23C1:0005:23C100053C7059011E84"
    }
}
{
    "jsonrpc": "2.0",
    "result":
    {
        "can_print": true,
        "number_of_toolheads": 1,
        "display_name": "23C1:0005:23C100053C7059011E84",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "profile_name": "Replicator_5",
        "toolhead_target_temperature": null,
        "build_volume": [252, 199, 148],
        "state": "PENDING",
        "driver_name": "birdwing",
        "printer_type": "Replicator5_5",
        "firmware_version": null,
        "toolhead_temperature": null
    },
    "id": 31
}
{
    "params":
    {
        "can_print": true,
        "number_of_toolheads": 1,
        "has_been_connected_to": true,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "profile_name": "Replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 24,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "toolhead_target_temperature": null,
        "build_volume": [252, 199, 148],
        "state": "PENDING",
        "driver_name": "birdwing",
        "api_version": "1.4.0",
        "printer_type": "Replicator5_5",
        "firmware_version": null,
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
                                "temperature": 215,
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
        "toolhead_temperature": null
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 32,
    "jsonrpc": "2.0",
    "method": "get_bot_profile",
    "params":
    {
        "machine_config":
        {
            "acceleration":
            {
                "buffer_size": 128,
                "impulse_speed_limit_mm_per_s":
                {
                    "x": 40,
                    "y": 40,
                    "z": 0
                },
                "max_speed_change_mm_per_s":
                    {
                        "x": 25,
                        "y": 25,
                        "z": 0
                    },
                "min_speed_change_mm_per_s":
                    {
                        "x": 3,
                        "y": 3,
                        "z": 0
                    },
                "rate_mm_per_s_sq":
                    {
                        "x": 800,
                        "y": 800,
                        "z": 150
                    },
                "split_move_distance_mm": 2.50,
                "split_move_recursion_count": 36
            },
            "bot_type": "replicator_5",
            "build_volume":
            {
                "x": 252,
                "y": 199,
                "z": 148
            },
            "extra_slicer_settings":
                {
                    "plate_variability": 0.0
                },
            "extruder_profiles":
                {
                    "attached_extruders": [
                    {
                        "calibrated": false,
                        "id": 10
                    }],
                    "mk12":
                    {
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
                                    "max_speed_change_mm_per_s":
                                        {
                                            "a": 0.50
                                        },
                                    "min_speed_change_mm_per_s":
                                        {
                                            "a": 0.010
                                        },
                                    "rate_mm_per_s_sq":
                                        {
                                            "a": 10
                                        },
                                    "slip_compensation_table": [
                                        [0, 0],
                                        [1.62550, 1.62550],
                                        [1.78810, 1.92220],
                                        [1.95060, 2.14570],
                                        [2.20, 2.30],
                                        [2.43830, 2.70],
                                        [2.92590, 3.40],
                                        [3.57610, 4.20],
                                        [3.90, 4.5240],
                                        [4.22630, 5.150],
                                        [4.87650, 6],
                                        [100, 100]
                                    ]
                                },
                                "feed_diameter": 1.770,
                                "max_flow_rate": 5.0,
                                "ooze_feedstock_distance": 0.10,
                                "restart_rate": 30,
                                "retract_distance": 1.0,
                                "retract_rate": 50,
                                "temperature": 215
                            }
                        },
                        "max_speed_mm_per_second":
                            {
                                "a": 5.30
                            },
                        "nozzle_diameter": 0.40,
                        "steps_per_mm":
                        {
                            "a": 108.550
                        }
                    },
                    "mk13":
                        {
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
                                        "max_speed_change_mm_per_s":
                                            {
                                                "a": 0.50
                                            },
                                        "min_speed_change_mm_per_s":
                                            {
                                                "a": 0.010
                                            },
                                        "rate_mm_per_s_sq":
                                            {
                                                "a": 10
                                            },
                                        "slip_compensation_table": [
                                            [0, 0],
                                            [1.62550, 1.62550],
                                            [1.78810, 1.92220],
                                            [1.95060, 2.14570],
                                            [2.20, 2.30],
                                            [2.43830, 2.70],
                                            [2.92590, 3.40],
                                            [3.57610, 4.20],
                                            [3.90, 4.5240],
                                            [4.22630, 5.150],
                                            [4.87650, 6],
                                            [100, 100]
                                        ]
                                    },
                                    "feed_diameter": 1.770,
                                    "max_flow_rate": 5.0,
                                    "ooze_feedstock_distance": 0.10,
                                    "restart_rate": 30,
                                    "retract_distance": 0.50,
                                    "retract_rate": 50,
                                    "temperature": 215
                                }
                            },
                            "max_speed_mm_per_second":
                                {
                                    "a": 5.30
                                },
                            "nozzle_diameter": 0.40,
                            "steps_per_mm":
                            {
                                "a": 108.550
                            }
                        },
                    "supported_extruders":
                        {
                            "0": null,
                            "1": "mk12",
                            "10": "mk12",
                            "11": "mk12",
                            "12": "mk12",
                            "13": "mk12",
                            "2": "mk12",
                            "3": "mk12",
                            "4": "mk12",
                            "5": "mk12",
                            "6": "mk12",
                            "7": "mk12",
                            "8": "mk13",
                            "9": "mk12"
                        }
                },
            "gantry_configuration":
                {
                    "max_fill_speed": 90,
                    "max_inner_shell_speed": 90,
                    "max_outer_shell_speed": 20,
                    "travel_speed_xy": 150,
                    "travel_speed_z": 23
                },
            "makerbot_generation": 5,
            "max_speed_mm_per_second":
            {
                "x": 200,
                "y": 200,
                "z": 18
            },
            "start_position":
                {
                    "x": -125,
                    "y": -99,
                    "z": 0.20
                },
            "steps_per_mm":
                {
                    "x": 88.57318600000001,
                    "y": 88.57318600000001,
                    "z": 400
                },
            "version": "1.1.0"
        },
        "machine_type": "replicator_5",
        "user_print_settings":
        {
            "extruder": [0],
            "path": null,
            "quality": 2
        }
    }
}
{
    "id": 33,
    "jsonrpc": "2.0",
    "method": "send_thingiverse_credentials",
    "params":
    {
        "birdwing_code": "",
        "client_secret": "{65a1922e-e467-4ffd-9ee2-668423460b6f}",
        "machine_name": "23C1:0005:23C100053C7059011E84",
        "thingiverse_token": "837bfb02fa5039bc1feba50b57d30ec1",
        "username": "RobListon"
    }
}
{
    "params":
    {
        "can_print": true,
        "number_of_toolheads": 1,
        "has_been_connected_to": true,
        "display_name": "Replicator 29",
        "name":
        {
            "iserial": "23C100053C7059011E84",
            "pid": 5,
            "port_type": "UsbPort",
            "vid": 9153
        },
        "platform_temperature": null,
        "has_heated_platform": false,
        "profile_name": "Replicator_5",
        "disabled_errors": ["filament_slip"],
        "toolheads":
        {
            "extruder": [
            {
                "index": 0,
                "filament_presence": true,
                "tool_id": 10,
                "tool_present": true,
                "current_temperature": 24,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "toolhead_target_temperature": null,
        "build_volume": [252, 199, 148],
        "state": "IDLE",
        "driver_name": "birdwing",
        "api_version": "1.4.0",
        "printer_type": "Replicator5_5",
        "firmware_version": null,
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
                                "temperature": 215,
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
        "toolhead_temperature": null
    },
    "jsonrpc": "2.0",
    "method": "machine_state_changed"
}
{
    "id": 34,
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
        "raftBaseRunLength": 15.0,
        "raftSurfaceThickness": 0.27,
        "raftInterfaceWidth": 0.4,
        "raftBaseRunGapRatio": 0.8,
        "splitMinimumDistance": 0.4,
        "configPath": "",
        "supportDensity": 0.2,
        "doRaft": true,
        "travelSpeedXY": 150,
        "infillOrientationInterval": 90,
        "defaultExtruder": 0,
        "maxSpurWidth": 0.5,
        "purgeBucketSide": 4.0,
        "doMixedSupport": true,
        "raftInterfaceDensity": 0.3,
        "roofAnchorMargin": 0.4,
        "doSplitLongMoves": true,
        "doSupportUnderBridges": false,
        "doPurgeWall": false,
        "doDynamicSpeedGradually": true,
        "metadataOutput": false,
        "fanModulationThreshold": 0.5,
        "spurOverlap": 0.001,
        "commentClose": "",
        "backlashEpsilon": 0.05,
        "fanDefaultSpeed": 0.5,
        "backlashFeedback": 0.9,
        "purgeWallModelOffset": 2.0,
        "layerHeight": 0.1,
        "jsonToolpathOutput": true,
        "purgeWallBasePatternLength": 10.0,
        "minLayerDuration": 5.0,
        "doDynamicSpeedInteriorShells": false,
        "raftModelSpacing": 0.22,
        "coarseness": 0.0001,
        "doExternalSpurs": true,
        "raftBaseDensity": 0.7,
        "supportModelSpacing": 0.4,
        "layerHeightMinimum": 0,
        "dynamicSpeedTransitionWindow": 6.0,
        "raftSurfaceShells": 2,
        "dynamicSpeedSlowdownRatio": 0.3,
        "adjacentFillLeakyConnections": true,
        "bridgeAnchorWidth": 0.8,
        "infillShellSpacingMultiplier": 0.55,
        "infillOrientationRange": 90,
        "raftInterfaceLayers": 2,
        "_extruders": [0],
        "anchorExtrusionSpeed": 2.0,
        "raftExtraOffset": 0.0,
        "defaultRaftMaterial": 0,
        "version": "3.7.0.108",
        "commentOpen": ";",
        "bridgeAnchorMinimumLength": 0.8,
        "supportAligned": true,
        "_bot": "replicator_5",
        "doDynamicSpeed": false,
        "roofLayerCount_disabled": 4,
        "raftSurfaceShellSpacingMultiplier": 0.7,
        "doSupport": false,
        "travelSpeedZ": 23,
        "purgeWallBaseFilamentWidth": 2.0,
        "raftBaseWidth": 2.5,
        "startPosition":
        {
            "y": -99,
            "x": -125,
            "z": 0.2
        },
        "raftBaseAngle": 0,
        "flickMinDistance": 0.4,
        "floorThickness": 1.0,
        "doInternalSpurs": false,
        "exponentialDecelerationMinSpeed": 0.0,
        "infillDensity": 0.1,
        "floorLayerCount_disabled": 4,
        "minSpurWidth": 0.12,
        "preOozeFeedstockDistance": 0.1,
        "fanLayer": 1,
        "dynamicSpeedTransitionShape": 0.4,
        "endGcode": null,
        "extruderTemp0": 215,
        "insetDistanceMultiplier": 1.0,
        "doDynamicSpeedOutermostShell": true,
        "raftBaseLayers": 1,
        "solidFillOrientationOffset": 0,
        "doBridging": true,
        "_materials": ["pla", "pla"],
        "startGcode": null,
        "gridSpacingMultiplier": 0.99,
        "minSpeedMultiplier": 0.3,
        "solidFillOrientationInterval": 90,
        "doExponentialDeceleration": true,
        "shellsLeakyConnections": true,
        "doPrintProgress": true,
        "purgeWallXLength": 30,
        "doMixedRaft": true,
        "solidFillOrientationRange": 90,
        "purgeWallPatternWidth": 2.0,
        "bridgeMaximumLength": 80.0,
        "doFanCommand": true,
        "raftAligned": true,
        "exponentialDecelerationRatio": 0.375,
        "bridgeSpacingMultiplier": 1.0,
        "sparseInfillPattern": "linear",
        "minRaftBaseGap": 0,
        "doBacklashCompensation": false,
        "extruderProfiles": [
        {
            "outlinesExtrusionProfile": "outlines",
            "feedstockMultiplier": 1.0,
            "retractDistance2": 0,
            "firstLayerRaftExtrusionProfile": "firstLayerRaft",
            "insetsExtrusionProfile": "insets",
            "toolchangeRetractRate": 6.0,
            "nozzleDiameter": 0.4,
            "restartExtraRate": 30.0,
            "restartRate": 30,
            "retractDistance": 1.0,
            "firstLayerExtrusionProfile": "firstLayer",
            "retractRate": 50,
            "toolchangeRetractDistance": 19.0,
            "retractRate2": 50,
            "feedDiameter": 1.77,
            "infillsExtrusionProfile": "infill",
            "preOozeFeedstockDistance": 0.1,
            "raftBaseExtrusionProfile": "raftBase",
            "restartExtraRate2": -1,
            "oozeFeedstockDistance": 0.1,
            "toolchangeRestartDistance": 18.5,
            "restartExtraDistance": 0.1,
            "bridgesExtrusionProfile": "bridges",
            "toolchangeRestartRate": 6.0,
            "restartExtraDistance2": 0,
            "raftExtrusionProfile": "raft"
        }],
        "leakyConnectionsAdjacentDistance": 0.8,
        "dynamicSpeedCurvatureThreshold": 15,
        "defaultSupportMaterial": 0,
        "supportAngle": 68.0,
        "purgeWallBasePatternWidth": 8.0,
        "extrusionProfiles":
        {
            "bridges":
            {
                "temperature_disabled": 230.0,
                "feedrate": 40
            },
            "insets":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 90
                },
            "infill":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 90
                },
            "raftBase":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 10
                },
            "raft":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 90
                },
            "firstLayerRaft":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 30
                },
            "firstLayer":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 30
                },
            "outlines":
                {
                    "temperature_disabled": 230.0,
                    "feedrate": 20
                }
        },
        "raftSurfaceAngle": 0,
        "raftBaseThickness": 0.3,
        "purgeWallWidth": 0.5,
        "anchorWidth": 2.0,
        "supportLeakyConnections": true,
        "roofThickness": 1.0,
        "minSpurLength": 0.34,
        "raftInterfaceAngle": 45,
        "fanModulationWindow": 0.1,
        "raftSurfaceLayers": 3,
        "adjacentFillLeakyDistanceRatio": 1.4,
        "exponentialDecelerationSegmentCount": 10,
        "description": "",
        "supportExtraDistance": 0.5,
        "supportExcessive": false,
        "infillOrientationOffset": 0,
        "purgeWallSpacing": 1.0,
        "dynamicSpeedDetectionWindow": 3.0,
        "anchorExtrusionAmount": 5.0,
        "doFanModulation": true,
        "raftInterfaceThickness": 0.27,
        "numberOfShells": 2,
        "backlashX": 0.0,
        "backlashY": 0.09,
        "maxSparseFillThickness": 0.3,
        "layerHeightMaximum": 0.12,
        "bedZOffset": 0.0,
        "raftOutset": 4
    },
    "id": 32
}
{
    "jsonrpc": "2.0",
    "result": null,
    "id": 33
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
                "current_temperature": 24,
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
    "id": 34
}
{
    "id": 35,
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
                                "temperature": 215,
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
                "current_temperature": 24,
                "target_temperature": 0,
                "preheating": false
            }]
        },
        "number_of_toolheads": 1,
        "can_print": true,
        "printer_type": "Replicator5_5",
        "firmware_version": [1, 7, 1, 305],
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
    "id": 36,
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
        "extrusion_time_s": 2941,
        "retract_count": 930,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 35
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
                "current_temperature": 24,
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
    "id": 36
}
{
    "id": 37,
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
        "retract_count": 930,
        "extrusion_distance_mm": 456672,
        "refurb_count": 0
    },
    "id": 37
}