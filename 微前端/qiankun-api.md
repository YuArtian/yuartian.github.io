

# registerMicroApps
注册应用
registerMicroApps {
  apps: [{
    name: 微应用名称
    entry: 入口地址
    container: 微应用挂载点
    activeRule: 微应用激活规则
  }],
  lifeCycles: 全局的微应用生命周期钩子
}

# start
启动 qiankun
start {
  prefetch: 预加载，第一个应用加载完成之后，默认会加载剩下的应用
  sandbox: 沙箱，默认开启，true 只开启 js 沙箱，默认是 Proxy 沙箱
  singular: 单例模式
  //....
}



