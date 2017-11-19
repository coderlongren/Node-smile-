***********************************
EventEmitter类的主要方法

addListener(event,listener) 为指定事件添加一个 监听器到监听器的尾部

on(event,listener) 为指定的事件注册一个监听器 接受一个字符和一个回调函数

once(event,listener) 注册一个单次的监听器 

removeListener(event,listener) 移除指定事件的某个监听器，

removeAllListener([event])移除所有的 监听器 

setMaxListener(n) 默认情况下 10个 限制监听器的数量 

listeners(event) 返回指定的事件 的监听器数组 

emit([arg1],[arg2],[.....]) 按参数的顺序执行每个监听器 如果有事件 

