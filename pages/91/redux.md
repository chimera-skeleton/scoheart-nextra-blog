

# redux
创建全局store

const initialState

function reducer(state, action) {

}

createStore(reducer)

要用的地方

store.getState()

要改的地方

store.dispatch({
	type: 
})


# redux-toolkit
创建全局store

configureStore({
	reducer: {

	}
})


分模块
const initialState

const xxxSlice = createSlice({
	name: "",
	initialState,
	reducers: {

	}
})

export default xxxSlice.reducer

export let { } = xxxSlice.actions

使用
useSelector

更新
useDispatch


视频13章业务逻辑总结回溯，14章学习
1. 带Id进入Edit页面
2. 发送Ajax请求 从服务端拿到数据 拿到的是单个问卷的所有信息
3. 将数据保存到redux store中，分开保存
	1. componentsList一部分
	2. 问卷的基本信息一部分
4. 画布从store中拿回数据，根据类型 type的配置渲染组件列表componentsList 

1. 工具栏的实现，复制粘贴，锁定……
2. 如何绑定快捷键 使用ahooks的hook
……






#
每一个组件都有自己的配置信息


## 这是每一个问卷的类型
进入Edit页面 发送Ajax请求后端返回数据 这个数据就是那一个页面的所有信息

``` ts
type PropsType = {
    _id: number,
    title: string,
    isStar: boolean,
    isPublished: boolean,
    answerCount: number,
    createAt: string
}
```
componentsList


## 这是每一个组件的props类型
``` ts
export type QuestionInpurPropsType = {
    title?: string,
    placeholder?: string
}

export type QuestionTitlePropsType = {
	text?: string
	level?: 1 | 2 | 3 | 4 | 5
	isCenter?: boolean
}
```

## 统一组件的props
```ts
export type ComponentPropsType = 
  QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType &
  QuestionCheckboxPropsType
```

## 单个组件的类型
```ts
export type ComponentInfoType = {
    fe_id: string,
    type: string,
    title: string,
    props: ComponentPropsType
}
```

## 这是组件列表的类型
componentsList的类型是下面这个
``` ts
export type ComponentsStateType = {
    componentList: Array<ComponentInfoType>
}
```

componentList: Array<ComponentInfoType>



# 撤销重做功能
redux-undo

present

past 栈

future 栈

1. 包裹reducer







# 浏览器复制
document.execCommand（“copy”）

# 二维码
qrcode.react



15、16、17（部分）章学习
一些业务功能实现：
1. 拖拽排序用到的库dnd-kit
2. 浏览器复制的API：document.execCommand（“copy”）
3. 二维码生成用到的库qrcode.react
4. 撤销重做用到的库redux-undo
5. 数据统计可视化用到的库recharts

nextjs实现服务端渲染，与项目C端的制作
1. SSR、SSG、CSR一些基本知识的回顾与使用场景
2. 使用nextjs开发，这部分以前使用过难度不大，多数是对API的复习

这几章节总体业务逻辑大致明白，但是没有直接敲代码，以及对第三方库的使用，没有上手并不一定能熟练实现




