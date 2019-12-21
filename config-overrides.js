const { override, fixBabelImports } = require('customize-cra');

/**
 * antd按需加载
 */
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
);