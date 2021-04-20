import React, { useEffect, useState } from 'react';
import './Content.scss';
import { Icon } from '@iconify/react';
import coinIcon from '@iconify/icons-twemoji/coin';
import eggIcon from '@iconify/icons-emojione/egg';
import broccoliIcon from '@iconify/icons-openmoji/broccoli';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import { node, links } from '../../assets/state'

export const Content = () => {
    const [priceComponent, setPC] = useState()
    const [price, setPrice] = useState(0)
    const [eggComponent, setEC] = useState()
    const [egg, setEgg] = useState(0)
    const [miscComponent, setMC] = useState()
    const [misc, setMisc] = useState([0, 0, 0])
    const [miscMax, setMM] = useState(0)
    const [lastMisc, setLM] = useState(-1)
    const [diagram, setDiagram] = useState()
    const [highlighter, setHL] = useState()
    const [highlighterRECT, setHLR] = useState()
    const [diagramFT, setDFT] = useState(true)
    const [current_state, setCS] = useState(997)
    const [previous_state, setPS] = useState(997)
    const [dummy, dump] = useState(Date.now())
    useEffect(() => {
        // console.log(price, egg, misc, miscMax)
        setPC(renderPC())
        setEC(renderEC())
        setMC(renderMC())
        // eslint-disable-next-line
    }, [price, egg, misc, miscMax])
    useEffect(() => {
        if(!diagramFT) updateDFA()
        // eslint-disable-next-line
    }, [dummy])
    function validation() {
        let cost = egg * 10 + misc.reduce((a, b) => a + b, 0) * 5 + 10
        let balance = price - cost
        return balance === 0 ? 'validated' : 'disabled'
    }
    function priceHandler(e, value) {
        setPrice(value)
        setEgg(0)
        setMisc([0, 0, 0])
        dump(Date.now())
    }
    function eggHandler(e, value, limit) {
        if (value * 10 + 10 <= price && !(value === 1 && price === 40)) {
            setEgg(value)
        }
        if(!(e.target.classList.contains('disabled') && egg === 2 && price === 40)){
            setMisc([0, 0, 0])
        }
        dump(Date.now())
    }
    function miscHandler(e, index) {
        let temp = [...misc]
        if (misc.reduce((a, b) => a + b, 0) < miscMax) temp[index]++
        setMisc(temp)
        if(misc.reduce((a, b) => a + b, 0) !== 2)
        setLM(index)
        dump(Date.now())
    }
    function miscRHandler(e, index) {
        e.preventDefault()

        let temp = [0, 0, 0]
        // let temp = [...misc]
        // if(misc[index] > 0) temp[index]--
        setMisc(temp)
        dump(Date.now())

        return false
    }
    function renderPC() {
        const LST = [20, 30, 40]
        return LST.map(iter => {

            return (
                <div key={'p' + iter} className={"control-btn " + (price === iter ? 'selected' : '')} onClick={e => priceHandler(e, iter)}>
                    {iter}
                </div>
            )
        })
    }
    function renderEC() {
        const LST = [1, 2]
        return LST.map(iter => {

            return (
                <div key={'e' + iter} className={"control-btn " + (egg === iter ? 'selected ' : '') + (iter * 10 + 10 > price || (price === 40 && iter === 1) ? 'disabled' : '')} onClick={e => eggHandler(e, iter)}>
                    {iter} ฟอง
                </div>
            )
        })
    }
    function renderMC() {
        const LST = ['หมูสับ', 'ไก่สับ']

        let cost = egg * 10 + misc.reduce((a, b) => a + b, 0) * 5 + 10
        let balance = price - cost
        let mm = balance / 5 + misc.reduce((a, b) => a + b, 0)
        setMM(egg !== 0 ? (mm > 2 ? 2 : (mm < 0? 0 : mm)) : 0)

        document.querySelectorAll('#mc').forEach((iter, idx) => {
            let width = iter.clientWidth
            const { top, left } = iter.getBoundingClientRect()
            document.documentElement.style.setProperty('--miscleft' + idx, `${width + left}px`);
            document.documentElement.style.setProperty('--misctop' + idx, `${top}px`);
        })

        return LST.map((iter, idx) => {

            return ( 
                <div id="mc" key={'m' + idx} className={"control-btn " + (misc[idx] !== 0 ? 'selected ' : '') + (misc.reduce((a, b) => a + b, 0) === miscMax ? 'disabled' : '')} onClick={e => miscHandler(e, idx)} onContextMenu={e => miscRHandler(e, idx)}>
                    {iter}
                    {misc[idx] !== 0 && <div className={"counter" + idx}>{misc[idx]}</div>}
                </div>
            )
        })
    }

    function confirmHandler() {
        updateDFA()
    }
    // -------------------------------------------------Begin GoJS--------------------------------------------------------------------------
    const initDiagram = () => {
        const $ = go.GraphObject.make;
        let diagram =
            $(go.Diagram,
                {
                    'undoManager.isEnabled': true,  // must be set to allow for model change listening
                    // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
                    'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
                    'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
                    model: $(go.GraphLinksModel,
                        {
                            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                        })
                });

        // define a simple Node template
        diagram.nodeTemplate =
            $(go.Node, 'Auto',  // the Shape will go around the TextBlock
                new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
                // {
                //     fromSpot: go.Spot.Right,
                //     toSpot: go.Spot.Left,
                // },
                $(go.Shape, 'RoundedRectangle',
                    {
                        name: 'SHAPE',
                        fill: 'white',
                        strokeWidth: 1,
                        stroke: '#bebab1'
                    },
                    // Shape.fill is bound to Node.data.color
                    new go.Binding('fill', 'color')),
                $(go.TextBlock,
                    {
                        font: "600 18px Barlow, Athiti, sans-serif",
                        stroke: '#242424',
                        margin: 8,
                        editable: true
                    },  // some room around the text
                    new go.Binding('text').makeTwoWay(),
                    new go.Binding('stroke', 'font-color').makeTwoWay()
                )
            );

        diagram.linkTemplate =
            $(go.Link,
                {
                    routing: go.Link.AvoidsNodes,
                    adjusting: go.Link.End,
                    // curve: go.Link.JumpOver,
                    corner: 5,
                },
                new go.Binding("opacity").makeTwoWay(),
                new go.Binding("points").makeTwoWay(),
                new go.Binding("zOrder").makeTwoWay(),
                $(go.Shape, // the link path shape
                    {
                        isPanelMain: true,
                        strokeWidth: 2,
                        stroke: '#E2DDD3'
                    },
                    new go.Binding('stroke', 'colorPath', function (progress) {
                        return progress;
                    })),
                $(go.Shape,
                    {
                        toArrow: "Standard",
                        fill: '#E2DDD3',
                        stroke: null
                    }, new go.Binding('fill', 'arrowColor')),
                $(go.TextBlock, "transition",  // the label text
                    {
                        textAlign: "center",
                        font: "600 12px Barlow, Athiti, sans-serif",
                        stroke: '#F5F3F0',
                        margin: 4,
                        segmentIndex: 0,
                        segmentFraction: 0.2,
                        background: '#F5F3F0'
                    },
                    new go.Binding("text").makeTwoWay(),
                    new go.Binding("font").makeTwoWay(),
                    new go.Binding("margin").makeTwoWay(),
                    new go.Binding("segmentIndex").makeTwoWay(),
                    new go.Binding("segmentFraction").makeTwoWay(),
                    new go.Binding("stroke", 'colorText', function (progress) {
                        return progress;
                    })
                ),
            );

        diagram.nodeTemplateMap.add("Start",
            $(go.Node, "Spot", { desiredSize: new go.Size(75, 75) },
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "Circle",
                    {
                        fill: "lightgreen", /* green */
                        stroke: null,
                        portId: "",
                        fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
                        toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
                        cursor: "default",

                        // fromSpot: new go.Spot(1, 0.5, 0, 0)
                    }, new go.Binding("fill", "color")),

                $(go.TextBlock, "Start",
                    {
                        font: "600 18px Barlow, Athiti, sans-serif",
                        stroke: "#242424"
                    })
            )
        );

        diagram.nodeTemplateMap.add("End",
            $(go.Node, "Spot", { desiredSize: new go.Size(75, 75) },
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "Circle",
                    {
                        fill: "pink",
                        stroke: null,
                        portId: "",
                        fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
                        toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
                        cursor: "default"
                    }, new go.Binding("fill", "color")),
                $(go.Shape, "Circle", { fill: null, desiredSize: new go.Size(65, 65), strokeWidth: 2, stroke: "whitesmoke" }, new go.Binding("fill", "color")),
                $(go.TextBlock, "Confirm",
                    {
                        font: "600 18px Barlow, Athiti, sans-serif",
                        stroke: "#242424"
                    })
            )
        );

        diagram.nodeTemplateMap.add("Trap",
            $(go.Node, "Spot", { desiredSize: new go.Size(75, 75) },
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "Circle",
                    {
                        fill: "lightyellow", /* green */
                        stroke: null,
                        portId: "",
                        fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
                        toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
                        cursor: "default"
                    }, new go.Binding("fill", "color")),
                $(go.TextBlock, "Trash",
                    {
                        font: "600 18px Barlow, Athiti, sans-serif",
                        stroke: "#242424"
                    })
            )
        );

        diagram.nodeTemplateMap.add("Hidden",
            $(go.Node, "Spot", { desiredSize: new go.Size(75, 75) },
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "Circle",
                    {
                        opacity: 0,
                        stroke: null,
                        portId: "",
                        fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
                        toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
                        cursor: "default"
                    })
            )
        );

        diagram.isReadOnly = true

        setHL(highlighter)
        setHLR(highlighterRECT)
        setDiagram(diagram)

        return diagram
    }
    function handleModelChange(changes) {
        if (diagramFT && diagram) {
            updateDFA()
            setDFT(false)
        }
    }

    function setDefaultColor() {
        if (diagram) {
            diagram.model.nodeDataArray.forEach(node => {

                if (node.key === 1) {
                    diagram.model.set(node, 'color', 'lightgreen')
                } else if (node.key === 2) {
                    diagram.model.set(node, 'color', 'pink')
                } else if (node.key === 18) {
                    diagram.model.set(node, 'color', 'lightyellow')
                } else {
                    diagram.model.set(node, 'color', '#ffffff')
                    diagram.model.set(node, 'font-color', '#242424')
                }
            })

            diagram.model.linkDataArray.forEach(path => {
                diagram.model.set(path, 'colorPath', '#E2DDD3')
                diagram.model.set(path, 'colorText', '#E2DDD3')
                diagram.model.set(path, 'arrowColor', '#E2DDD3')
                diagram.model.set(path, 'opacity', 0.4)
                diagram.model.set(path, 'zOrder', 1)
            })
        }
    }

    function updateDFA() {
        setDefaultColor()
        if(price !== 0){
            highlightNode(price / 10 + 1)
        }

        if (price === 20 && egg !== 0) {
            highlightNode(6)
        } else if (price === 40 && egg !== 0) {
            highlightNode(9)
        } else if (price === 30) {
            if (egg === 2) {
                highlightNode(7)
            } else if(egg === 1){
                highlightNode(8)
            }
        }

        if (egg === 1) {
            // ไข่ 1 key = 
            if (misc[0] === 1)
                highlightNode(lastMisc === 0 && misc[1] === 1 ? 14 : 10)
            if (misc[0] === 2) {
                highlightNode(10)
                highlightNode(14)
            }
            if (misc[1] === 1)
                highlightNode(lastMisc === 1 && misc[0] === 1 ? 15 : 11)
            if (misc[1] === 2) {
                highlightNode(11)
                highlightNode(15)
            }
        } else if(egg === 2){
            // ไข่ 2
            if (misc[0] === 1)
                highlightNode(lastMisc === 0 && misc[1] === 1 ? 16 : 12)
            if (misc[0] === 2) {
                highlightNode(12)
                highlightNode(16)
            }
            if (misc[1] === 1)
                highlightNode(lastMisc === 1 && misc[0] === 1 ? 17 : 13)
            if (misc[1] === 2) {
                highlightNode(13)
                highlightNode(17)
            }
        }

        stateMachine()
    }

    function stateMachine() {
        let state = previous_state
        if(price === 0){
            state = 1
        }else if (price === 20) {
            if(egg === 0) {
                state = 3
            } else {
                state = 6
            }
        } else if (price === 30) {
            if (egg === 1) {
                if (misc[0] === 0 && misc[1] === 0) {
                    state = 8
                } else if (misc[0] === 1 && misc[1] === 1) {
                    state = lastMisc === 0 ? 14 : 15
                } else if (misc[0] === 2) {
                    state = 14
                } else if (misc[1] === 2) {
                    state = 15
                } else if (misc[0] === 1 && misc[1] === 0) {
                    state = 10
                } else if (misc[0] === 0 && misc[1] === 1) {
                    state = 11
                }
            } else if (egg === 2) {
                state = 7
            } else {
                state = 4
            }
        } else if (price === 40) {
            if(egg === 0) {
                 state = 5
            } else {
                if (misc[0] === 0 && misc[1] === 0) {
                    state = 9
                } else if (misc[0] === 1 && misc[1] === 1) {
                    state = lastMisc === 0 ? 16 : 17
                } else if (misc[0] === 2) {
                    state = 16
                } else if (misc[1] === 2) {
                    state = 17
                } else if (misc[0] === 1 && misc[1] === 0) {
                    state = 12
                } else if (misc[0] === 0 && misc[1] === 1) {
                    state = 13
                }
            }
            
        }

        setPS(current_state)
        setCS(state)

        let prev = current_state
        let cur = state

        highlightFuturePath(cur)
        highlightPath(prev, cur, "#00aa00", 3)

    }

    function highlightNode(nodeId) {
        const circle = [1, 2, 18]
        if (diagram) {
            let node = diagram.findNodeForKey(nodeId);

            if (node !== null) {
                diagram.scrollToRect(node.actualBounds);
                let n = diagram.model.nodeDataArray.find(e => e.key === nodeId)
                if (!circle.includes(nodeId)) {
                    diagram.model.set(n, 'color', '#242424')
                    diagram.model.set(n, 'font-color', '#ffffff')
                }
            }
        }
    }

    function highlightPath(from, to, color="#ff0000", zOrder=2) {
        if (diagram) {
            let path = diagram.model.linkDataArray.find(p => ((p.from === from) && (p.to === to)))
            if(path) {
                diagram.model.set(path, 'colorPath', color)
                diagram.model.set(path, 'colorText', color)
                diagram.model.set(path, 'arrowColor', color)
                diagram.model.set(path, 'opacity', 1)
                diagram.model.set(path, 'zOrder', zOrder)
            }
        }
    }

    function highlightFuturePath(nodeId) {
        if(diagram) {
            diagram.model.linkDataArray.forEach(iter => {
                if(iter.from === nodeId) {
                    highlightPath(iter.from, iter.to)
                }
            })
        }
    } 
    // -------------------------------------------------End GoJS--------------------------------------------------------------------------
    return (
        <div className="Content">
            <div className="state-wrapper" id="state-wrapper">
                <ReactDiagram
                    initDiagram={initDiagram}
                    divClassName='state-wrapper'
                    nodeDataArray={node}
                    linkDataArray={links}
                    onModelChange={handleModelChange}
                />
            </div>
            <header>
                <h1>Auto Omelettes</h1>
                <h2>make by ไข่เจียว</h2>
            </header>
            <div className="controller">
                <header>
                    <h3>Recipes</h3>
                    <h4>Choose your own OMELETTE!!!</h4>
                </header>
                <div className="content">
                    <div className="block">
                        <Icon icon={coinIcon} id="c-ico" />
                        <span>ราคา&nbsp;&nbsp;( บาท )</span>
                    </div>
                    <div className="block">
                        {priceComponent}
                    </div>
                    <div className="block">
                        <Icon icon={eggIcon} id="c-ico" />
                        <span>จำนวนไข่&nbsp;&nbsp;( ฟอง )</span>
                    </div>
                    <div className="block">
                        {eggComponent}
                    </div>
                    <div className="block">
                        <Icon icon={broccoliIcon} id="c-ico" />
                        <span>เลือกเครื่อง&nbsp;&nbsp;( เลือกซ้ำได้ คลิกขวาเพื่อรีเซ็ท )</span>
                        <span></span>
                        <span>{misc.reduce((a, b) => a + b, 0) + ' / ' + miscMax}</span>
                    </div>
                    <div className="block">
                        {miscComponent}
                    </div>
                </div>
                <footer>
                    <div className="total">
                        <span>Sub Total</span>
                        <span>฿ {price}</span>
                    </div>
                    <div className={"confirm noselect " + validation()} onClick={confirmHandler}>Confirm</div>
                </footer>
            </div>
        </div>
    )
}