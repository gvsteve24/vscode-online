import React from 'react-dom';

export default class Welcome extends React.Component {
    render(){
        return (
            <li>
                <div className="page-label">
                  <FontAwesomeIcon icon={["fab", "vuejs"]} className="logo"/><span>Welcome</span>
                  <FontAwesomeIcon icon="times" className="times" />
                </div>
                <div className="page welcome">
                  <h4>Visual Studio Code</h4>
                  <h5>Editing evolved</h5>
                  <div className="content">
                    <div className="content-item">
                      <h6>Start</h6>
                      <ul>
                        <li><a href="#">New file</a></li>
                        <li><a href="#">Open folder...</a></li>
                        <li><a href="#">Add workspace folder...</a></li>
                      </ul>
                    </div>
                    <div className="content-item">
                      <h6>Recent</h6>
                      <ul>
                        <li><a href="#" className="link"><span>s-iot_server</span></a><span>C:&#47;Users&#47;Enterphin&#47;Documents</span></li>
                        <li><a href="#" className="link"><span>task-manager-api</span></a><span>C:&#47;Users&#47;Enterphin&#47;Documents</span></li>
                        <li><a href="#" className="link"><span>task-manager-v.2.0</span></a><span>C:&#47;Users&#47;Enterphin&#47;Documents</span></li>
                        <li><a href="#" className="link"><span>More...</span></a><span>(Ctrl+R)</span></li>
                      </ul>
                    </div>
                    <div className="content-item">
                      <h6>Help</h6>
                      <ul>
                        <li><a href="#">Printable keyboard cheatsheet</a></li>
                        <li><a href="#">Introductory videos</a></li>
                        <li><a href="#">Tips and Tricks</a></li>
                        <li><a href="#">Product documentation</a></li>
                        <li><a href="#">GitHub repository</a></li>
                        <li><a href="#">Stack Overflow</a></li>
                        <li><a href="#">Join our Newsletter</a></li>
                      </ul>
                    </div>
                    <div className="content-item left">
                      <h6>Customize</h6>
                      <ul>
                        <li>
                          <a href="#">
                            <span>Tools and languages</span>
                            <p>Install support for <a href="#">JavaScript</a>, <a href="#">Python</a>, <a href="#">PHP</a>, <a href="#">Azure</a>, <a href="#">Docker</a> and <a href="#">more</a></p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Settings and keybindings</span>
                            <p>Install the settings and keyboard shortcuts of <a href="#">Vim</a>, <a href="#">Sublime</a>, <a href="#">Atom</a> and <a href="#">others</a></p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Color theme</span>
                            <p>Make the editor and your code look the way you love</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-item left">
                      <h6>Learn</h6>
                      <ul>
                        <li>
                          <a href="#">
                            <span>Find and run all commands</span>
                            <p>Rapidly access and search commands from the Command Palette (Ctrl+Shift+P)</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Interface overview</span>
                            <p>Get a visual overlay highlighting the major componenets of the UI</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Interface playground</span>
                            <p>Try out essentail editor features in a short walkthrough</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <input type="checkbox" /><span>&nbsp; Show welcome page on startup</span>
                </div>
              </li>
        );
    }
} 