import React from 'react';
import Editor from './components/Editor';
import Explorer from './components/Explorer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faVimeo, faYoutube, faYCombinator, faFacebook, faReact, faSass, faDAndD, faSourcetree, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp, faBuilding, faEnvelope, faLink, faBook, faCircle, faStar, faProjectDiagram, faCompressAlt, faEye, faCheck, faArrowRight, faMinus, faSquare, faTimes, faCopy, faSearch, faPlay, faCubes, faToggleOff, faSave, faCalendarTimes, faChevronRight, faCode, faUserCircle, faCog, faCodeBranch, faInfoCircle, faSyncAlt, faExclamationTriangle, faBell, faUserCheck, faColumns, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, far, faGithub, faChevronDown, faChevronUp, faBuilding, faEnvelope, faLink, faVimeo, faYoutube, faYCombinator, faFacebook, faReact, faSass, faDAndD, faBook, faCircle, faStar, faProjectDiagram, faCompressAlt, faEye, faCheck, faArrowRight, faMinus, faSquare, faTimes, faCopy, faSearch, faSourcetree, faPlay, faCubes, faToggleOff, faSave, faCalendarTimes, faChevronRight, faCode, faUserCircle, faCog, faGitAlt, faCodeBranch, faInfoCircle, faSyncAlt, faExclamationTriangle, faBell, faUserCheck, faColumns, faPlus, faTrashAlt);

export default class App extends React.Component {

  addTop = (e) => {
    let tabName = e.target.value;

    let targetElem = document.getElementsByClassName(tabName)[0];
    targetElem.classList.add('top');

    let parent = targetElem.parentNode;
    let node = parent.firstChild;

    while(node){
      if( node !== targetElem)
        node.classList.remove('top');

      node = node.nextSibling;
    }
  }
  
  render(){ 
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><FontAwesomeIcon icon={["fab", "vuejs"]} className="logo" /></li>
              <li>File</li> 
              <li>Edit</li>
              <li>Selection</li>
              <li>View</li>
              <li>Go</li>
              <li>Run</li>
              <li>Terminal</li>
              <li>Help</li>
            </ul>
          </nav>
          <span>Welcome - react_crash - Visual Studio Code</span>
          <div className="nav-left">
            <button><FontAwesomeIcon icon="minus" /></button>
            <button><FontAwesomeIcon icon={["far", "square"]} /></button>
            <button className="times"><FontAwesomeIcon icon="times" /></button>
          </div>
        </header>
        <main>
          <aside>
            <nav className="func-explorer">
              <ul>
                <li className="selected"><FontAwesomeIcon icon={["far", "copy"]}/></li>
                <li><FontAwesomeIcon icon="search"/></li>
                <li><FontAwesomeIcon icon="code-branch" /></li>
                <li><FontAwesomeIcon icon="play" /></li>
                <li><FontAwesomeIcon icon="cubes" /></li>
              </ul>
              <ul>
                <li><FontAwesomeIcon icon={["far", "user-circle"]}/></li>
                <li><FontAwesomeIcon icon="cog"/></li>
              </ul>
            </nav>
            <nav className="file-explorer">
              <div className="explorer-title">EXPLORER</div>
              <Explorer/>
            </nav>
          </aside>
          <section>
            <nav className="page-nav">
              <Editor className="page"/>
            </nav>
            <nav className="monitor-nav">
              <ul>
                <li>
                  <button onClick={this.addTop} value="problem">PROBLEMS</button><span className="issue-count">3</span>
                </li>
                <li>
                  <button onClick={this.addTop} value="output">OUTPUT</button><span></span>
                </li>
                <li>
                  <button onClick={this.addTop} value="debug">DEBUG CONSOLE</button><span></span>
                </li>
                <li>
                  <button onClick={this.addTop} value="terminal">TERMINAL</button><span></span>
                </li>
              </ul>
              <div className="terminal-keys">
                <div>
                  <select name="terminal-type">
                    <option value="bash" defaultValue>1:bash</option>
                    <option value="cmd">2:cmd</option>
                    <option value="0" disabled={true}>------</option>
                    <option value="palette">select default shell</option>
                  </select>
                </div>
                <div><FontAwesomeIcon className="new-terminal" icon="plus"/></div>
                <div><FontAwesomeIcon className="split-terminal" icon="columns"/></div>
                <div><FontAwesomeIcon className="kill-terminal" icon={["far","trash-alt"]}/></div>
                <div><FontAwesomeIcon className="maximize-terminal" icon="chevron-up"/></div>
                <div><FontAwesomeIcon className="close-panel" icon="times"/></div>
              </div>
            </nav>
            <div className="popup-terminal">
              <div className="problem">
                <textarea name="problems" placeholder="Do not use empty rulesets css(emptyRules) [230, 1]"></textarea>
              </div>
              <div className="output">
                <textarea name="problems" placeholder=""></textarea>
              </div>
              <div className="debug">
                <textarea name="problems" placeholder="Please start a debug session to evaluate expressions"></textarea>
              </div>
              <div className="terminal">
                <textarea name="problems" placeholder="Search for the keywords to learn more about each warning."></textarea>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="bottom-left">
            <div className="status">
              <FontAwesomeIcon icon="code-branch" className="footer-icon" />
              <span>master*</span>
            </div>
            <div className="status">
              <FontAwesomeIcon icon="sync-alt" className="footer-icon sync" />
            </div>
            <div className="status">
              <div>
                <FontAwesomeIcon icon={["far", "times-circle"]} className="footer-icon times" />
                <span>0</span>
              </div>
              <div>
                <FontAwesomeIcon icon="exclamation-triangle" className="footer-icon" />
                <span>0</span>
              </div>
            </div>
          </div>
          <div className="bottom-right">
            <FontAwesomeIcon icon="user-check" className="footer-icon" />
            <FontAwesomeIcon icon={["far", "bell"]} className="footer-icon" />
          </div>
        </footer>
      </div>
    );
  }
}
