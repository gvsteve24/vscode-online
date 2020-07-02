import React, { Component } from 'react';

class Page extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return (
            <li>
                <textarea 
                    className={this.props.page.isActive ? "window top": "window"} 
                    id={this.props.page.id} 
                    name="page"
                    autoFocus={this.props.page.isActive ? true : false}
                    placeholder={this.props.page.content}>
                </textarea>
            </li>
        )
    }
}

export default Page;