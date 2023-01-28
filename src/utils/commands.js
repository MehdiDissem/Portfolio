import neofetch from "@utils/neofetch";
//eslint-disable-next-line

let myImage="https://i.ibb.co/6mkD61B/mehdi-dissem.png"

const compileResponseHTML = styleMap => {
	return styleMap
		.map(item => {
			return `<span class="${
				item.folder
					? `style3`
					: `${item.executable ? `style2` : `style1`}`
			}">${
				item.link
					? `<a target="_blank" href="${item.link}">${item.name}</a>`
					: `${item.name}`
			}</span>`;
		})
		.join("  ");
};

const getSpaces = commandList => {
	let defaultSpaces = "\t";
	let lengthList = commandList.map(item => {
		return item.name.length;
	});
	// console.log(commandList)
	let max = Math.max(...lengthList);
	let what = commandList.map(item => {
		return Array(max - item.name.length + 1).join(" ") + defaultSpaces;
	});
	return what;
};

const compileCommandHTML = commandList => {
	let defArgs = [
		{
			name: "ls",
			description: "lists directory content",
		},
		{
			name: "cd",
			description: "changes the current working directory",
		},
		{
			name: "clear",
			description: "clears the terminal screen",
		},
	];
	let argList = [
		...defArgs,
		...commandList.map(item => {
			let extra = " ";
			if (item.subPathStrict[0]) {
				extra += item.subPathStrict[1].name;
			}
			return {
				name: item.name[0] + extra,
				description: item.description,
			};
		}),
	];
	let spaceList = getSpaces(argList);
	let response = `These shell commands are defined internally.
Type <span class="style2">'help'</span> to see this list.\n\n`;
	argList.forEach((item, idx) => {
		let temp = `<span class="style2">${item.name}</span>${spaceList[idx]}${item.description}\n`;
		response += temp;
	});
	return `${response}\nAnd more "hidden" commands...`;
};

let commandList = [
	{
		name: ["resume", "./resume", "resume.sh", "./resume.sh"],
		action: { RESUME: "" },
		response: "",
		subPathStrict: [false],
		description: "view my resume",
	},
	{
		name: ["twitter"],
		action: true,
		response: "Sorry I got banned from Twitter :( Trump didn't like me",
		subPathStrict: [false],
		description: "checkout my twitter profile",
	  },
	  {
		name: ["github", "git",".github"],
		action: true,
		response: 'Visit: <a href="https://github.com/MehdiDissem">my github @MehdiDissem</a>',
		subPathStrict: [false],
		description: "checkout my github profile",
	  },
	  {
		name: ["linkedin"],
		action: true,
		response: 'Visit: <a href="https://www.linkedin.com/in/mehdi-dissem/">LinkedIn</a>',
		subPathStrict: [false],
		description: "checkout mylinkedIn profile",
	  },
	{
		name: ["projects", "./projects", "projects.app", "./projects.app"],
		// action: { PROJECTS: "" },
		action: false,
		response: `Page Under Development 🚧🔨 | <div><a href='https://github.com/MehdiDissem/DelivAir' target='_blank'><h2>DelivAir</h2></a><p>A mobile app lets the user choose whether can be a sender or a shipper, in a context of sending or receiving physical goods in airplane luggage. Our app will be a contact intermediary and will give access to the users to view other people's posts, shows how much the user can carry, or send, show price per KG, departure arrival time as well as instant chat between two users.</p><div></div><img src="https://i.ibb.co/QQNCPNm/326525268-495546332763197-6742071353522171295-n.jpg" width="150" height="300"/>&nbsp;<span><img src="https://i.ibb.co/4NryknZ/328005952-963861978333842-1243692811763887554-n.jpg.jpg" width="150" height="300"/></span>&nbsp;<span/><img src="https://i.ibb.co/DVByZdj/328090626-917767242713865-7319807200639990217-n.jpg" width="150" height="300"/></div> <div><a href='https://github.com/MehdiDissem/Social-Media-App' target='_blank'><h2>Social Media App</h2></a><p>Thisis a web app is called SocialSport, it is a place where users that love sports can interact with eachothers</p><div></div><img src="https://i.ibb.co/1MfC16f/unnamed.png" width="500" height="250"/>&nbsp;<span/><img src="https://i.ibb.co/Wyf3yMC/unnamed-1.png" width="500" height="250"/></div>`,
		subPathStrict: [false],
		description: "checkout my projects",
	},
	{
		name: ["whoami"],
		action: true,
		response: `<img src=${myImage} width="300" height="400"/> <div>Hi there! My name is Mehdi Dissem, I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Full-Stack JavaScript developer with over 6 years of experience in marketing. I am naturally persevered, self-confident, quietly curious, innovative and constantly challenging my skills.`,
		subPathStrict: [false],
		image:"https://i.ibb.co/6mkD61B/mehdi-dissem.png",
		description:
			"displays my information",
	},
	{
		name: ["fetchme"],
		action: false,
		response: `<pre>${neofetch}</pre>`,
		subPathStrict: [false],
		description:
			"fetches my information in a cool way", 
	},
	{
		name: ["code"],
		action: true,
		response: "",
		subPathStrict: [true, { name: ".", response: "" }],
		description: "opens a VS code window for this website's source code",
	},
	{
		name: ["happiness"],
		action: true,
		response: "You see nothing",
		subPathStrict: [false],
		description: '<span class="">close your Eyes</span>',
	},
	{
		name: ["git"],
		action: true,
		response: "",
		subPathStrict: [true, { name: "log", response: "" }],
		description: "lists my github projects",
	},
	
	{
		name: ["help"],
		action: true,
		response: "",
		subPathStrict: [false],
		description: "displays detailed information about the commands",
	}, {
		name:["tools"],
		action:true,
		response:"<div>Languages : JavaScript - TypeScript</div><div>Front-End : React, ReactNative, nextJS, HTML, CSS, TailWind, Bootstrap,mUI </div><div>Back-End : NodeJS - Express - Prisma</div> <div>Databases : MongoDB, Postgres, MySql</div> <div>Management Tools : Trell - Mire - Figma</div>",
		subPathStrict:[false],
		description:"The tools that i used"

},
];

commandList = commandList.map(item => {
	if (item.name[0] === "help") {
		item.response = `<pre>${compileCommandHTML(commandList)}</pre>`;
	}
	return item;
});

const fileList = [
	{
		name: ".github",
		link: "https://github.com/MehdiDissem",
		folder: true,
		executable: false,
	},
	{
		name: "src",
		link: "https://github.com/MehdiDissem",
		folder: true,
		executable: false,
	},
	{
		name: "resume.sh",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "projects.app",
		link: "",
		folder: false,
		executable: true,
	},
];

const getCommandList = commandList => {
	let finalCommandList = {};
	commandList.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {};
		item.name.forEach(elem => {
			let action = item.action
				? { [item.name[0].toUpperCase()]: "" }
				: null;
			let resp = item.response;
			commandBuilder = {
				[elem]: {
					validArgs: {
						_dir: {
							action: action,
							response: resp,
						},
						default: {
							action: action,
							response: resp,
						},
					},
				},
			};
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1].name] = {
					action: action,
					response: item.subPathStrict[1].response,
				};
			}
			finalCommandList = { ...commandBuilder, ...finalCommandList };
		});
	});
	// console.log(finalCommandList)
	return finalCommandList;
};

const getArgListCd = fileList => {
	let defArgs = {
		_dir: {
			action: null,
			response: "",
		},
		default: {
			action: null,
			response: "cd: cannot access %arg%: Permission Denied",
		},
		"~": {
			action: null,
			response: "",
		},
	};
	let argList = {};
	fileList.forEach(item => {
		argList[item.name] = {
			action: item.folder ? { PATH: item.link } : null,
			response: item.folder ? "" : "zsh: cd: %arg%: Not a directory",
		};
	});
	Object.keys(defArgs).forEach(item => {
		argList[item] = defArgs[item];
	});
	return argList;
};

const commands = {
	ls: {
		validArgs: {
			"/": {
				action: null,
				response:
					"ls: cannot access System Volume Information: Permission Denied",
			},
			_dir: {
				action: null,
				response: compileResponseHTML(fileList),
			},
			default: {
				action: null,
				response: "ls: cannot access %arg%: Permission Denied",
			},
		},
	},
	cd: {
		validArgs: getArgListCd(fileList),
	},
	...getCommandList(commandList),
};

export default commands;
