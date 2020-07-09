import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DATA = [
    {
        title: 'react_crash',
        type: 'folder', 
        folded: true,
        children: [
            {
                title: 'Dev-note',
                type: 'folder',
                children: [
                    { 
                        title: 'html-1.html',
                        type: 'file'
                    },
                    { 
                        title: 'js-1.js',
                        type: 'file'
                    }
                ]
            },
            {
                title: 'facebook-app',
                type: 'folder',
                children: [
                    {
                        title: 'node-modules',
                        type: 'folder',
                        children: [
                            {
                                title: '.bin',
                                type: 'folder',
                                children: []
                            },
                            {
                                title: '.cache',
                                type: 'folder',
                                children: []
                            },
                            {
                                title: '@babel',
                                type: 'folder',
                                children: []
                            }
                        ]
                    },
                    {
                        title: 'public',
                        type: 'folder',
                        children: [
                            {
                                title: 'favicon.ico',
                                type: 'file'
                            },
                            {
                                title: 'index.html',
                                type: 'file'
                            },
                            {
                                title: 'manifest.json',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        title: 'src',
                        type: 'folder',
                        children: [
                            {
                                title: 'App.css',
                                type: 'file'
                            },
                            {
                                title: 'App.js',
                                type: 'file'
                            },
                            {
                                title: 'App.test.js',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        title: 'package.json',
                        type: 'file'
                    }
                ]
            },
            {
                title: 'github-profile',
                type: 'folder',
                children: []
            }
        ]
    },
    {
        title: 'package.json',
        type: 'file',
        folded: false
    },
    {
        title: 'README.md',
        type: 'file',
        folded: false
    }  
]

const normal = { color: "#ccc", paddingLeft: "5px" };
const open = { height: "auto" , paddingLeft: "10px", color: "#ccc"};
const collapse = { height: "0", overflow: "hidden", color: "#ccc" };

class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    title: 'react_crash',
                    type: 'folder', 
                    folded: true,
                    children: [
                        {
                            title: 'Dev-note',
                            type: 'folder',
                            children: [
                                { 
                                    title: 'html-1.html',
                                    type: 'file'
                                },
                                { 
                                    title: 'js-1.js',
                                    type: 'file'
                                }
                            ]
                        },
                        {
                            title: 'facebook-app',
                            type: 'folder',
                            children: [
                                {
                                    title: 'node-modules',
                                    type: 'folder',
                                    children: [
                                        {
                                            title: '.bin',
                                            type: 'folder',
                                            children: []
                                        },
                                        {
                                            title: '.cache',
                                            type: 'folder',
                                            children: []
                                        },
                                        {
                                            title: '@babel',
                                            type: 'folder',
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    title: 'public',
                                    type: 'folder',
                                    children: [
                                        {
                                            title: 'favicon.ico',
                                            type: 'file'
                                        },
                                        {
                                            title: 'index.html',
                                            type: 'file'
                                        },
                                        {
                                            title: 'manifest.json',
                                            type: 'file'
                                        }
                                    ]
                                },
                                {
                                    title: 'src',
                                    type: 'folder',
                                    children: [
                                        {
                                            title: 'App.css',
                                            type: 'file'
                                        },
                                        {
                                            title: 'App.js',
                                            type: 'file'
                                        },
                                        {
                                            title: 'App.test.js',
                                            type: 'file'
                                        }
                                    ]
                                },
                                {
                                    title: 'package.json',
                                    type: 'file'
                                }
                            ]
                        },
                        {
                            title: 'github-profile',
                            type: 'folder',
                            children: []
                        }
                    ]
                },
                {
                    title: 'package.json',
                    type: 'file',
                    folded: false
                },
                {
                    title: 'README.md',
                    type: 'file',
                    folded: false
                }  
            ]
            
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.state.data.map((data, index) => {
                    if(data.type === 'folder'){
                        return (
                            <Folder key={index} data={data}>
                                {data.children}
                            </Folder>
                        )
                    }else{
                        return (
                            <File key={index} data={data}/>
                        )
                    }
                })}
            </React.Fragment>
        )
    }
}

class Context extends Component {
    returnOption(items){
        let positionStyle = {
            top: this.props.menu.position.y,
            left: this.props.menu.position.x
        }

        return (
            <div className="context-box" style={positionStyle}>{ items && items.map((item, index) => {
                return <div key={index} onClick={this.props.addSibling.bind(this, index)} className="context-item">{item.label}</div>
            })}</div>
        )
    }

    render(){
        let items = this.props.menu.items;
        return (
            <React.Fragment>
                {this.props.menu.visibility ? this.returnOption.bind(this, items)() : null}
            </React.Fragment>
        )
    }
}

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            folded: true,
            children: this.props.children,
            menu: {
                visibility: false,
                items: [
                    {label: 'New File'}, {label: 'New Folder'}
                ],
                position: {
                    x: 0,
                    y: 0
                }
            }
        }

        this.setFolded = this.setFolded.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.removeContext = this.removeContext.bind(this);
        this.addSibling = this.addSibling.bind(this);
    }

    componentDidMount(){
        let self = this;
        document.addEventListener('click', self.removeContext)
    }

    toggleVisibility(e){
        if(!this.state.visibility){
            let x = e.clientX;
            let y = e.clientY;
            this.setState(prevState => ({ 
                ...prevState,
                menu: {
                    ...prevState.menu,
                    visibility: true,
                    position: {x, y}
                }
            }));
        }

        e.preventDefault();
    }

    addSibling(index){
        // target this.state.children and add new object.
        let title = prompt('enter file name');

        if(index === 0){
            this.setState({ children: [...this.state.children, {
                title,
                type: 'file'
            }]});
        }else{
            this.setState({ children: [...this.state.children, {
                title,
                type: 'folder',
                children: []
            }]});
        }

        this.setState(prevState => ({ 
            ...prevState,
            menu: {
                ...prevState.menu,
                visibility: true
            }
        }));
    }

    removeContext(){
        let menu = {...this.state.menu};
        menu.visibility = false;
        this.setState({ menu });
    }

    setFolded(){
        let folded = this.state.folded;
        this.setState({ folded: !folded});
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="root" style={normal} onClick={this.setFolded} onContextMenu={this.toggleVisibility}>
                    {this.props.data.type === 'folder' ? <FontAwesomeIcon icon="chevron-right" className={this.state.folded ? "chevron" : "chevron down"}/> : <FontAwesomeIcon icon="code"/>}
                    <span>{this.props.data.title}</span>
                    <Context menu={this.state.menu} addSibling={this.addSibling}/>
                </div>
                <div className="root" style={this.state.folded ? collapse : open}>
                    { this.state.children && this.state.children.map((child, index) => {
                        return (
                            <Folder key={index} data={child}>
                                {child.children}
                            </Folder>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

function File(props){
    return (
        <div className="root" style={normal}>
            <FontAwesomeIcon icon="code"/>{props.data.title}
        </div>
    )
}

function Explorer(props){
    return (
        <Root data={DATA}/>
    )
}

export default Explorer;