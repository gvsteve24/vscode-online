import React from 'react';
import '../styles/Editor.css'
import Page from './Page';
import Title from './Title';

class Editor extends React.Component {
    render() {
        return (
            <div className="editor">
                <ul>
                    {this.props.window.map(page => {
                        return <Title key={page.id} activatePage={this.props.activatePage} closePage={this.props.closePage} page={page} />
                    })}
                </ul>
                <ul>
                    {this.props.window.map(page => {
                        return <Page key={page.id} page={page} />
                    })}
                </ul>
            </div>
        );
    }
}

export default Editor;