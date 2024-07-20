# npm install 缓存在哪里？

mac 中在 ~/.npm/_cacache 目录下
每一次 npm install 都会在这个目录下生成一个缓存文件夹，文件夹名是一个哈希值（integrity），里面存放着缓存的包。
同一个依赖的不同版本是不同的缓存
