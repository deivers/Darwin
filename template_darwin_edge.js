/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'container',
                            display: 'block',
                            type: 'rect',
                            rect: ['12', '23', '689', '779', 'auto', 'auto'],
                            tabindex: '0',
                            borderRadius: ["35px 35px", "35px 35px", "35px 35px", "35px 35px"],
                            fill: ["rgba(72,54,18,1.00)"],
                            stroke: [0,"rgba(36,27,9,1.00)","none"],
                            boxShadow: ["", 0, 3, 10, 2, "rgba(36,27,9,1.00)"]
                        },
                        {
                            id: 'background',
                            display: 'block',
                            type: 'rect',
                            rect: ['27', '38', '659', '748', 'auto', 'auto'],
                            tabindex: '0',
                            borderRadius: ["30px 30px", "30px 30px", "30px 30px", "30px 30px"],
                            fill: ["rgba(222,191,127,1.00)",[270,[['rgba(131,99,33,1.00)',0],['rgba(233,211,168,1.00)',100]]]],
                            stroke: [0,"rgba(36,27,9,1.00)","none"],
                            boxShadow: ["", 0, 0, 2, 1, "rgba(36,27,9,1.00)"]
                        },
                        {
                            id: 'containerwText',
                            display: 'block',
                            type: 'rect',
                            rect: ['12', '23', '689', '873', 'auto', 'auto'],
                            tabindex: '0',
                            borderRadius: ["35px 35px", "35px 35px", "35px 35px", "35px 35px"],
                            fill: ["rgba(72,54,18,1.00)"],
                            stroke: [0,"rgba(36,27,9,1.00)","none"],
                            boxShadow: ["", 0, 3, 10, 2, "rgba(36,27,9,1.00)"]
                        },
                        {
                            id: 'backgroundwText',
                            display: 'block',
                            type: 'rect',
                            rect: ['28', '38', '659', '847', 'auto', 'auto'],
                            tabindex: '0',
                            borderRadius: ["30px 30px", "30px 30px", "30px 30px", "30px 30px"],
                            fill: ["rgba(222,191,127,1.00)",[270,[['rgba(131,99,33,1.00)',0],['rgba(233,211,168,1.00)',100]]]],
                            stroke: [0,"rgba(36,27,9,1.00)","none"],
                            boxShadow: ["", 0, 0, 2, 1, "rgba(36,27,9,1.00)"]
                        },
                        {
                            id: 'textback',
                            display: 'block',
                            type: 'rect',
                            rect: ['139', '751', '442', '134', 'auto', 'auto'],
                            tabindex: '0',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(247,240,225,0.52)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["", 0, 0, 10, 0, "rgba(0,0,0,0.12)"]
                        },
                        {
                            id: 'bodyText',
                            display: 'block',
                            type: 'text',
                            rect: ['164', '767', '394', '112', 'auto', 'auto'],
                            overflow: 'scroll',
                            title: 'water strider text',
                            tabindex: '0',
                            text: "Some insects can literally walk on water.  This water strider has spread its legs wide for even weight distribution, and its light body barely dents the surface.  Some insects also secrete wax on the bottoms of their feet to prevent breaking the surface tension of the water.<br><br>Some insects can literally walk on water.  This water strider has spread its legs wide for even weight distribution, and its light body barely dents the surface.  Some insects also secrete wax on the bottoms of their feet to prevent breaking the surface tension of the water.<br><br>Some insects can literally walk on water.  This water strider has spread its legs wide for even weight distribution, and its light body barely dents the surface.  Some insects also secrete wax on the bottoms of their feet to prevent breaking the surface tension of the water.",
                            align: "left",
                            font: ['open-sans, sans-serif', [14, "px"], "rgba(0,0,0,1)", "500", "none", "", "break-word", ""]
                        },
                        {
                            id: 'texthide',
                            symbolName: 'texthide',
                            display: 'block',
                            type: 'rect',
                            rect: ['287', '664', '145', '49', 'auto', 'auto'],
                            title: 'click to hide text',
                            tabindex: '0',
                            cursor: 'pointer',
                            transform: [[],[],[],['1','0.95918']]
                        },
                        {
                            id: 'textshow',
                            symbolName: 'textshow',
                            display: 'block',
                            type: 'rect',
                            rect: ['287', '663', '145', '49', 'auto', 'auto'],
                            title: 'click to show text',
                            tabindex: '0',
                            cursor: 'pointer'
                        },
                        {
                            id: 'titleBar',
                            type: 'rect',
                            rect: ['27', '36', '659', '80', 'auto', 'auto'],
                            tabindex: '0',
                            borderRadius: ["30px 30px", "30px 30px", "0px", "0px"],
                            fill: ["rgba(171,129,43,1.00)",[270,[['rgba(101,76,25,1.00)',2],['rgba(171,129,43,1.00)',17],['rgba(222,191,127,1.00)',40],['rgba(233,211,168,1.00)',52],['rgba(222,191,127,1.00)',59],['rgba(171,129,43,1.00)',81],['rgba(101,76,25,1.00)',100]]]],
                            stroke: [0,"rgba(36,27,9,1.00)","none"],
                            boxShadow: ["", 0, 0, 3, 1, "rgba(36,27,9,1.00)"]
                        },
                        {
                            id: 'titleText',
                            type: 'text',
                            rect: ['212', '53', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Darwin',
                            tabindex: '0',
                            text: "Charles Darwin",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(72,54,18,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textShadow: ["rgba(101,76,25,1.00)", 0, 1, 2]
                        },
                        {
                            id: 'HalH',
                            display: 'none',
                            type: 'image',
                            rect: ['18', '29', '101', '98', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HalH.png",'0px','0px']
                        },
                        {
                            id: 'BettyB',
                            display: 'block',
                            type: 'image',
                            rect: ['18', '29', '102', '98', 'auto', 'auto'],
                            title: 'Betty Black',
                            tabindex: '0',
                            fill: ["rgba(0,0,0,0)",im+"BettyB.png",'0px','0px']
                        },
                        {
                            id: 'closewindowdarwin',
                            type: 'image',
                            rect: ['653', '2', '67', '67', 'auto', 'auto'],
                            title: 'close window',
                            tabindex: '0',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"closewindowdarwin.png",'0px','0px']
                        },
                        {
                            id: 'Darwinbook_1859',
                            display: 'none',
                            type: 'image',
                            rect: ['103', '170', '515', '440', 'auto', 'auto'],
                            title: 'Origin of Species First Edition',
                            tabindex: '0',
                            fill: ["rgba(0,0,0,0)",im+"Darwinbook_1859.png",'0px','0px'],
                            boxShadow: ["", 0, 0, 10, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Charles_Darwin',
                            display: 'block',
                            type: 'image',
                            rect: ['159', '127', '394', '526', 'auto', 'auto'],
                            title: 'Darwin Illustration',
                            tabindex: '0',
                            fill: ["rgba(0,0,0,0)",im+"Charles_Darwin.png",'0px','0px']
                        },
                        {
                            id: 'chime1symmetric',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '1044', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"chime1symmetric.wav"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '720', '898', 'auto', 'auto'],
                            sizeRange: ['450px','720px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 19284.83,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Darwinbook_1859}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BettyB}",
                            'block',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bodyText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textshow}",
                            'block',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HalH}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textback}",
                            'block',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${containerwText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${backgroundwText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texthide}",
                            'block',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${container}",
                            'block',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Charles_Darwin}",
                            'block',
                            'block'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${background}",
                            'block',
                            'block'
                        ],
                            [ "eid37", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${chime1symmetric}', [] ] ]
                    ]
                }
            },
            "texthide": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '145', '49', 'auto', 'auto'],
                            id: 'Group6',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                                id: 'BUTTON',
                                stroke: ['1px', 'rgba(36,27,9,1.00)', 'solid'],
                                cursor: 'pointer',
                                rect: [0, 0, '143px', '47px', 'auto', 'auto'],
                                fill: ['rgba(154,117,39,1.00)', [270, [['rgba(222,191,127,1.00)', 0], ['rgba(173,131,43,1.00)', 51], ['rgba(101,76,25,1.00)', 100]]]],
                                boxShadow: ['', '0px', '0px', '3px', '1px', 'rgba(0,0,0,0.46)']
                            },
                            {
                                type: 'text',
                                id: 'hide_text',
                                text: 'HIDE TEXT',
                                cursor: 'pointer',
                                tabindex: '0',
                                rect: [29, 12, 'auto', 'auto', 'auto', 'auto'],
                                title: 'Hide Text',
                                align: 'left',
                                font: ['open-sans, sans-serif', [18, ''], 'rgba(0,0,0,1)', '600', 'none', 'normal', '', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 145, 49]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "textshow": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '145', '49', 'auto', 'auto'],
                            id: 'Group7',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['20px 20px', '20px 20px', '20px 20px', '20px 20px'],
                                id: 'BUTTON',
                                stroke: ['1px', 'rgba(36,27,9,1.00)', 'solid'],
                                cursor: 'pointer',
                                rect: [0, 0, '143px', '47px', 'auto', 'auto'],
                                fill: ['rgba(214,176,95,1.00)', [270, [['rgba(222,191,127,1.00)', 0], ['rgba(173,131,43,1.00)', 51], ['rgba(101,76,25,1.00)', 100]]]],
                                boxShadow: ['', 0, 0, '3px', '1px', 'rgba(0,0,0,0.46)']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'show_text',
                            text: 'SHOW TEXT',
                            tabindex: '0',
                            rect: [22, 12, 'auto', 'auto', 'auto', 'auto'],
                            title: 'Show Text',
                            font: ['open-sans, sans-serif', [18, ''], 'rgba(0,0,0,1)', '600', 'none', 'normal', '', 'nowrap'],
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 145, 49]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("template_darwin_edgeActions.js");
})("EDGE-1024373");
