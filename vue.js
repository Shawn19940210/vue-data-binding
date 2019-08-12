// Vue双向数据绑定的最简单代码
class Vue { 
    constructor(options) {
        //挂载数据
        this.$el = options.el;
        this.$data = options.data;
        this.observe();
        this.compile();
    }
    observe() {
        Object.keys(this.$data).forEach((key) => {
            this.defineReactive(this.$data, key, this.$data[key]);
        })
    }
    //负责input=>data.messege
    compile() {
        //获取inputDom
        const divDom = document.querySelector(this.$el);
        const inputDom = divDom.children[0];
        //赋予inputDom第一次渲染的值
        inputDom.value = this.$data.messege;
        //事件监听器：当input变化时，赋值给messege
        inputDom.addEventListener('input', e => {
            this.$data.messege = e.target.value;
        })
    }
    //负责数据劫持传递给订阅者
    defineReactive(data, key, value){
        Object.defineProperty(data, 'messege',{
            get() {
                return value;
            },
            set:(newValue) => {
                value = newValue;
                //获取inputDom
                const divDom = document.querySelector(this.$el);
                const inputDom = divDom.children[0];
                //赋予inputDom第一次渲染的值
                inputDom.value = value;
                //事件监听器：当input变化时，赋值给messege
            }
        })
    }
}