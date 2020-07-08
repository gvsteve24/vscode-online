import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Title extends Component {
    render() {
        const { id, title, isActive } = this.props.page;
        return (
            <li className={ isActive ? "tab active" : "tab"}>
                <FontAwesomeIcon icon={["fab", "vuejs"]} className="logo" /><span onClick={this.props.activatePage.bind(this, id)}>{title}</span>
                <button onClick={this.props.closePage.bind(this, id)} className="close-tab">
                    <FontAwesomeIcon icon="times" className="times"/>
                </button>
            </li>
        )
    }
}

export default Title;
