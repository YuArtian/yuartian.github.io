# jsonpFunction

jsonpFunction: `webpackJsonp_${packageName}`,

output: {
 path: DIST_PATH,
 publicPath: ROOTPATH,
 filename: '[name].js',
 chunkFilename: '[name].js',
 library: `${packageName}-[name]`,
 libraryTarget: 'umd', // 指定打包的 Javascript UMD 格式
 jsonpFunction: `webpackJsonp_${packageName}`,
},
