<template>
	<picker @change="pickerChange" @columnchange="columnchange" :range="array" range-key="name" :value="value" mode="multiSelector">
		<slot></slot>
	</picker>
</template>

<script>
	import AllAddress from './AddressData.js'
	export default {
		data() {
			return{
				value: [],
				array: [],
				index: 0
			}
		},
		props:{
			level:{ //级数
				type: Number,
				default: 3
			}
		},
		created() {
			this.init()
		},
		methods:{
			// 初始化地址选项
			init() {
				this.array = new Array(this.level);
				for(let i = 0; i<this.array.length;i++){
					if(i==0){
						this.array[i] = AllAddress
					} else {
						this.array[i] = [];
						if (this.array[i-1][0].children != null) {
							this.array[i] = this.array[i-1][0].children;
						}
					}
					
				}
				this.$forceUpdate()
			},
			// 地址控件改变控件
			columnchange(e) {
				
				let aIndex = JSON.parse(JSON.stringify(e.detail.column+1));//第几组
				let j = e.detail.value;//索引值
				
				// console.log('e.detail',e.detail)
				// console.log('选择：第'+ aIndex +'组,索引值为第' +j +'个 值为'+this.array[aIndex-1][j].name);
				for(let i=aIndex; i<this.array.length; i++){
					//选的第几组 和索引值
					//1、选第一组  children 默认第二组的第一个，第三组的值为第二组的第一个children
					//2、选第二组  children 默认第三组的值为第二组的选中的children第一个值
					this.array[i] = [];
					console.log('this.array[i] ',i,)
					 if(e.detail.column === 0 && i===2){
						 if (this.array[i-1][0].children != null) {
						 	this.array[i] = this.array[i-1][0].children;
						 }
					 }else{
						 if (this.array[i-1][j].children != null) {
						 	this.array[i] = this.array[i-1][j].children;
						 }
					 }
					
					// console.log('this.array[i] ',this.array[i] )
				}
				
				this.$forceUpdate();
			},
			//点击确定 
			pickerChange(e) {
				var result =  [];
				for(let i=0; i<this.array.length; i++){
					result.push({
						name: this.array[i][e.target.value[i]].name,
						id: this.array[i][e.target.value[i]].id
					})
				};
				this.$emit('change', {
					data: result
				})
			}
			
		}
	}
</script>

<style>
</style>
