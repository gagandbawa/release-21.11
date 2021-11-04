const entryPoints = [
	{
		name: 'contactyou',
		title: 'Contact You',
		appHtml: 'templates/contactyou.html',
		appIndexJs: 'src/pages/ContactYou/index',
		appURL: 'contactyou.html',
	},
	{
		name: 'aboutme',
		title: 'About Me',
		appHtml: 'templates/aboutme.html',
		appIndexJs: 'src/pages/Aboutme/index',
		appURL: 'aboutme.html',
	},
	{
		name: 'aboutme1',
		title: 'About Me',
		appHtml: 'templates/aboutme1.html',
		appIndexJs: 'src/pages/Aboutme1/index',
		appURL: 'aboutme1.html',
	},
];
module.exports = entryPoints;
// const entryPoints = (resolveApp) => {
// 	return [
// 		{
// 			name: 'aboutme',
// 			title: 'aboutme',
// 			appHtml: resolveApp('templates/aboutme.html'),
// 			appIndexJs: resolveApp('src/pages/Aboutme/index.js'),
// 		},
// 		{
// 			name: 'contactus',
// 			title: 'contactus',
// 			appHtml: resolveApp('templates/index.html'),
// 			appIndexJs: resolveApp('src/pages/Contactus/index.js'),
// 		},
// 	];
// };

// module.exports = entryPoints;
