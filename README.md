# zx-vue-demo
2020-05-21

从零开始学vue

■■■■■■■■■■■■■■ 01vue的使用 ■■■■■■■■■■■■■■

■■■■■■■■■■■■■■ 02vue list 使用 ■■■■■■■■■■■■■■

■■■■■■■■■■■■■■ 03 ■■■■■■■■■■■■■■
el:type:String/HTML element(document.querySelector())
data:type:Object/function
methods:type:fuction
js中什么是 方法-methods？
js中什么是 函数-function？
如果是一个函数，用类名去调用，如果是一个额方法，用对象去调用 

Vue对象中的除了el,data,methods,还有哪个对象可以定义？？

■■■■■■■■■■■■■■ Vue中的MVVM ■■■■■■■■■■■■■■
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

■■■■■■■■■■■■■■ Vue的生命周期 ■■■■■■■■■■■■
什么是生命周期？
事物从诞生到消亡的整个过程。出生->小学->初中->高中->大学->工作->结婚->生子..............
Vue的生命周期？
初始化->执操作->执行回调
init->beforeCreate->created->mounted

■■■■■■■■■■■■■■ Mustache语法(双大括号{{}}) ■■■■■■■■■■■■
{{}}括号里可以写一些简单的表达式
标签内使用v-xxx语法 简写: ':'
