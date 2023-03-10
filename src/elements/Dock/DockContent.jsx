/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "@styles/dock.scss";
import FinderIcon from "@static/finder.png";
import CodeIcon from "@static/code.png";
import GithubIcon from "@static/github.png";
import FolderIcon from "@static/folder.png";
import LinkedInIcon from "@static/LinkedInIcon.png";
import { Link } from "react-router-dom";
import mIcon from "@static/mIcon.jpg";

const MediumIcon="https://www.iconpacks.net/icons/2/free-medium-icon-2177-thumb.png"
const PythonIcon="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
// import MyResume from "../Resume/resume/MyResume.pdf"


const DockContent = () => {
	return (
		<div className="main-contain">
			<div className="container">
				<div className="dock">
					<span></span>
					<div className="dock-nav">
						<ul>
							<Link to="/">
								<li
									data-title="Home"
									className="full-width-icon"
								>
									<img
										src={FinderIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/vscode">
								<li data-title="VS Code">
									<img
										src={CodeIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/git">
								<li data-title="Git Log">
									<img
										src={GithubIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<a href="https://www.linkedin.com/in/mehdi-dissem/">
								<li data-title="LinkedIn">
									<img
										src={LinkedInIcon}
										className="img-fluid"
										alt="dope"
									/>
								</li>
							</a>
							<a href="https://medium.com/@mehdissem">
								<li data-title="Medium">
									<img
										src={MediumIcon}
										className="img-fluid"
										alt="dope"
									/>
								</li>
							</a>
							<a href="/PythonVSCode">
								<li data-title="Python problem solving">
									<img
										src={PythonIcon}
										className="img-fluid"
										alt="dope"
									/>
								</li>
							</a>
							{/* <a href="https://thisdoesnothing.vercel.app/" target="_blank">
								<li data-title="This Does Nothing">
									<img
										src
										={NothingIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a> */}

							<div className="separator" />
							<a>
							<Link to="/resume">
								<li data-title="Resume">
									<img
										src={FolderIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;