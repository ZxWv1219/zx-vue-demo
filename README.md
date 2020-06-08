# zx-vue-demo
2020-05-21

## 从零开始学vue

### ■■■■■■■■■■■■■■ 01vue的使用 ■■■■■■■■■■■■■■

### ■■■■■■■■■■■■■■ 02vue list 使用 ■■■■■■■■■■■■■■

### ■■■■■■■■■■■■■■ 03 ■■■■■■■■■■■■■■
el:type:String/HTML element(document.querySelector())
data:type:Object/function
methods:type:fuction
js中什么是 方法-methods？
js中什么是 函数-function？
如果是一个函数，用类名去调用，如果是一个额方法，用对象去调用 

Vue对象中的除了el,data,methods,还有哪个对象可以定义？？

### ■■■■■■■■■■■■■■ Vue中的MVVM ■■■■■■■■■■■■■■
什么是mvvm呢？ Model View ViewModel(Model与View之间的通信桥梁)   Model<--ViewModel-->View。
View-> Dom
ViewModel-> Dom Listeners,Data Bindings
Model->Plain Javascript Object

■View
>视图层
>在我们前端开发中，通常就是DOM层。
>主要的作用是给用户展示各种信。
■ Model
>数据层
>数据可能是我们写死的数据，更多的是来自我们服务器，从网络上请求下来的数据。
■ViewModel
>视图模型层
>视图模型层足View和Model沟通的桥梁。
>一方面它实现了Data Binding,也就是数据绑定，将Model的改变实时的反应到View中 
>另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些車件(点击、滚动、touch等)时，可以监听到，并在盂要的情况下改变对砬的Data。

计数器中，View是哪一部分，model是哪一部分，view model 又是哪一部分?

### ■■■■■■■■■■■■■■ Vue的生命周期 ■■■■■■■■■■■■
什么是生命周期？
事物从诞生到消亡的整个过程。出生->小学->初中->高中->大学->工作->结婚->生子..............
Vue的生命周期？
>初始化->执操作->执行回调
>init->beforeCreate->created->mounted

### ■■■■■■■■■■■■■■ Mustache（吗斯踏区）语法(双大括号{{}}) ■■■■■■■■■■■■
{{}}括号里可以写一些简单的表达式
标签内使用v-xxx语法 简写: ':'

### ■■■■■■■■■■■■■■ 2020-05-26 回顾 ■■■■■■■■■■■■■■
### 一.计算属性
#### 1. 计算属性本质
* fullName:{ set(),get() }
#### 2. 计算属性 computed（肯剖优体）与methods（梅艾斯恩斯）的对比
 * 计算属性在多次使用时只会调用一次,而 methods每次都会执行
 * 它有缓存的
### 二.事件监听
#### 2.1 事件监听的基本使用
* v-on:事件名 或者 v-bind(威伊杠拜暗德)/@事件名
#### 2.2 参数问题
* btnClick
* btnClick($event)
* btnClick(xxx,$event)
#### 2.3 修饰符
* stop
* prevent
* once
* enter

### VUE CLI 脚手架安装
>npm install @vue/cli -g
### VUE 使用CLI2 时需要安装
>npm install @vue/cli-init -g

* 如果安装不上时可以执行以下命令,管理员身份执行
>npm clean cache --force

### CLI 2 创建项目
>vue init webpack  项目名称

### runtime compliler 与runtime only的区别
* vue init webpack runtimecompiler
* vue init webpack runtimeonly

### CLI 3 创建项目
>vue create 项目名称
* 查看CLI 3的配置
>vue ui

### 所有的组件都继承vue 的原型

### Promise 异步结果汇总
Promise.all()

### Vuex Mutations 响应式修改属性
>vue components -> (dispatch) -> actions -> (commit) -> mutations -> state -> vue components

Vue.set()
Vue.delete()

* mutaitons 里最好使用同步函数,devtools 无法监听异步操作

### 安装axios
>npm install --save axios

- 异步结果汇总
>axios.all()