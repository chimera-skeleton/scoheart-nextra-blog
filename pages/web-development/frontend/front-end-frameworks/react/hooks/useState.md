它返回一个数组
- 初始状态
- 更新状态的函数

1. 如果传递一个函数作为下一个新状态，react会把这个函数当作updater 函数，这个函数需要为
- 纯函数
- 返回新状态
2. react会把这个updater函数放入一个queue中并且重新渲染组件
3. 在渲染的时候，react会消费所有的updater函数来计算新的状态值

## useEffect
参数：
- setup function
- clean up function
- dependencies

每当mount的时候，会执行setup
每当update的时候，会
- 首先根据之前的（老的）props and state.，执行useEffect返回的cleanup
- 然后相当于mount阶段，根据当前的（新的）props and state，执行setup
每当unmount的时候，会最后执行一次cleanup
