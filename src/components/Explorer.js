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
    render(){
        return (
            <div className={ this.props.menu.visibility ? 'context-box' : 'hidden'}>
                {this.props.menu.item && this.props.menu.item.map( (item, index) => {
                    return <div key={index}>{item.label}</div>
                })} 
            </div>
        )
    }
}

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            folded: true,
            menu: {
                visibility: false,
                item: [
                    { label: 'New File' },
                    { label: 'New Folder' }
                ]
            }
        }

        this.setFolded = this.setFolded.bind(this);
        this.setContext = this.setContext.bind(this);
        this.contextHandler = this.contextHandler.bind(this);
    }

    componentDidMount(){
        document.addEventListener('contextmenu', this.contextHandler);
    }

    componentWillUnmount(){
        document.removeEventListener('contextmenu', false);
    }

    contextHandler(e){
        e.preventDefault();
        this.setContext();
    }

    setContext(){
        let visibility = this.state.menu.visibility;
        this.setState({menu: {
            visibility: !visibility
        }});
    }

    setFolded(){
        let folded = this.state.folded;
        this.setState({ folded: !folded});
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="root" style={normal} onClick={this.setFolded} onContextMenu={this.contextHandler}>
                    {this.props.data.type === 'folder' ? <FontAwesomeIcon icon="chevron-right" className={this.state.folded ? "chevron" : "chevron down"}/> : <FontAwesomeIcon icon="code"/>}
                    <span>{this.props.data.title}</span>
                    <Context menu={this.state.menu}/>
                </div>
                <div className="root" style={this.state.folded ? collapse : open}>
                    { this.props.children && this.props.children.map( (child, index) => {
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