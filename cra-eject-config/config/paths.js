const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
	process.env.NODE_ENV === 'development',
	require(resolveApp('package.json')).homepage,
	process.env.PUBLIC_URL
);

const buildPath = process.env.BUILD_PATH || 'build';

const moduleFileExtensions = [
	'web.mjs',
	'mjs',
	'web.js',
	'js',
	'web.ts',
	'ts',
	'web.tsx',
	'tsx',
	'json',
	'web.jsx',
	'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
	const extension = moduleFileExtensions.find((extension) =>
		fs.existsSync(resolveFn(`${filePath}.${extension}`))
	);

	if (extension) {
		return resolveFn(`${filePath}.${extension}`);
	}

	return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
// Gagan 1
var appPages = require('./entryPoints');
// const appPages = require('./entryPoints')(resolveApp);
if (appPages === undefined || appPages === null || appPages.length === 0) {
	console.log('Pls define atleast one route in entryPoints');
	process.exit(1);
} else {
	appPages = appPages.map((ep) => {
		console.log('Gagan ep', ep);
		return {
			...ep,
			appHtml: resolveApp(ep.appHtml),
			appIndexJs: resolveModule(resolveApp, ep.appIndexJs),
			// appIndexJs: resolveApp(ep.appIndexJs),
		};
	});
}
module.exports = {
	dotenv: resolveApp('.env'),
	appPath: resolveApp('.'),
	appBuild: resolveApp(buildPath),
	appPublic: resolveApp('public'),
	appPages,
	// appPages: [
	// 	{
	// 		name: 'contactus',
	// 		title: 'contactus',
	// 		appHtml: resolveApp('templates/index.html'),
	// 		appIndexJs: resolveApp('src/pages/Contactus/index.js'),
	// 	},
	// ],
	// appHtml: resolveApp('public/index.html'),
	appIndexJs: resolveModule(resolveApp, 'src/index'),
	appPackageJson: resolveApp('package.json'),
	appSrc: resolveApp('src'),
	appTsConfig: resolveApp('tsconfig.json'),
	appJsConfig: resolveApp('jsconfig.json'),
	yarnLockFile: resolveApp('yarn.lock'),
	testsSetup: resolveModule(resolveApp, 'src/setupTests'),
	proxySetup: resolveApp('src/setupProxy.js'),
	appNodeModules: resolveApp('node_modules'),
	swSrc: resolveModule(resolveApp, 'src/service-worker'),
	publicUrlOrPath,
};

module.exports.moduleFileExtensions = moduleFileExtensions;
