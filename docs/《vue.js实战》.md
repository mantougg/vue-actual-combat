### 一、v-model

> 实现原理
>
> ```vue
> <input v-model="sth" />
> <input v-bind:value="sth" v-on:input="sth = $event.target.value" />
> ```
>
> 





