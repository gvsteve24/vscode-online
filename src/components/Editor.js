import React from 'react';
import '../styles/Editor.css'
import Title from './Title';
import { v4 as uuidv4 } from 'uuid';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeContent: '',
			pages: [
				{
					id: uuidv4(),
					title: 'untitled',
					content: 'untitled',
					isActive: true,
					wasActive: false
				}
			]
		};

		this.setContent = this.setContent.bind(this);
		this.activatePage = this.activatePage.bind(this);
		this.closePage = this.closePage.bind(this);
		this.newEditor = this.newEditor.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.newEditor);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown');
	}
	
	activatePage(id) {
		let activeContent = '';
		const pages = JSON.parse(JSON.stringify(this.state.pages));
		const modifiedPages = pages.map((page) => {
			if (page.id === id) {
				page.isActive = true;
				page.wasActive = false;
				activeContent = page.content;
			} else if (page.isActive) {
				page.isActive = false;
				page.wasActive = true;
			} else if (page.wasActive) {
				page.wasActive = false;
			}

			return page;
		});

		this.setState({
			activeContent,
			pages: modifiedPages
		});

		document.getElementById('activeWindow').focus();
	}

	newEditor(e) {
		if (e.keyCode === 13 && e.ctrlKey) {
			e.preventDefault();

			if (this.state.pages.some(page => page.isActive)) {
				this.setState({
					pages: [...this.state.pages.map(page => {
						if (page.isActive) {
							page.isActive = false;
							page.wasActive = true;
						} else if (page.wasActive) {
							page.wasActive = false;
						}
						return page;
					})]
				});
			}

			const id = uuidv4();

			this.setState({
				activeContent: '',
				pages: [...this.state.pages,
					{
						id,
						title: 'untitled',
						content: '',
						isActive: true,
						wasActive: false
					}
				]
			});

			document.getElementById('activeWindow').focus();
		}
	}

	closePage(id) {
		this.setState(state => {
			state.pages.forEach((page, index, array) => {
				if (page.isActive) {
					this.prevIndex = index + 1;
					if (index === array.length - 1) {
						this.prevIndex = index - 1;
					}
				}

				return page;
			});

			return { pages: state.pages.filter(page => page.id !== id) }
		}, () => {
			let activeContent;
			if (this.state.pages.some(page => page.wasActive === true) && !this.state.pages.some(page => page.isActive === true)) {
				this.setState({
					pages: [...this.state.pages.map((page) => {
						if (page.wasActive) {
							page.isActive = true;
							page.wasActive = false;
							activeContent = page.content;
						}
						return page;
					})],
					activeContent
				});
			} else if (!this.state.pages.some(page => page.wasActive === true) && !this.state.pages.some(page => page.isActive === true)) {
				this.setState({
					pages: [...this.state.pages.map((page, index) => {
						if (index === this.prevIndex) {
							page.isActive = true;
							page.wasActive = false;
							activeContent = page.content;
						}
						return page;
					})],
					activeContent
				});
			}
		});
	}

	setContent(e) {
		// e.target.value is to be assigned to activePage
		this.setState({ activeContent: e.target.value }, () => {
			this.state.pages.forEach(page => {
				if (page.isActive) {
					page.content = this.state.activeContent;
				}
			})
		});
	}

	render() {
		return (
			<div className="editor">
				<ul>
					{this.state.pages.map(page => {
						return <Title key={page.id} page={page} closePage={this.closePage} activatePage={this.activatePage}/>
					})}
				</ul>
				<textarea className="window" id="activeWindow" onChange={this.setContent} value={this.state.activeContent}/>
			</div>
		);
	}
}

export default Editor;