<template>
	<div class="taskmanage" style="width:905px;height: 500px;position:relation;top:60px;">
		<taskcommon v-for="(site,i) in this.pro.protasks" 
			v-bind:key="site.taskname" :site="site" :taskid="i+1" 
				class="taskccommon" @click.native.prevent="taskdetail(site)">
		</taskcommon>
		<div class="applytask" @click="applytask">+</div>
	</div>
</template>

<script>
	import taskcommon from './taskcommon.vue'
	export default {
		data: function() {
			return {
				newtask:{
					proname:"",
					taskname: "",
					taskstartdate: "",
					taskenddate: "",
					taskmanager: [],
					taskdescrip:"",
					importent:""
				},
				pro:{
					proname: "",
					prostartdate: "",
					proenddate: "",
					promanager: "",
					prodescrip:"",
					protasks:[]
				},
				pros:[]
			}
		},
		components: {
			taskcommon
		},
		methods: {
			applytask() {
				let arr=JSON.stringify(this.pro.proname)
				this.$router.push({
					path: 'applytask',
					query: {
						proname: encodeURIComponent(arr)
					}
				})
			},
			taskdetail(site) {
				let arr = JSON.stringify(site)
				this.$router.push({
					path: 'taskmanage/taskdetail',
					query: {
						task: encodeURIComponent(arr)
					}
				})
			},
			saveInfo(){
				sessionStorage.setItem('pro', JSON.stringify(this.pro))
				Object.assign(this.pros, JSON.parse(sessionStorage.getItem('pros')))
				const index = this.pros.findIndex(item => item.proname == this.pro.proname)
				this.pros.fill(this.pro,index,index+1)
				sessionStorage.setItem('pros', JSON.stringify(this.pros))
			}
		},
		created() {
			sessionStorage.removeItem('taskmanagers')
			sessionStorage.removeItem('task')
			Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
			if (this.$route.query.newtask) {
				/* let data = JSON.parse(sessionStorage.getItem('protasks'))
				Object.assign(this.protasks, data) */
				let formObj = decodeURIComponent(this.$route.query.newtask)
				this.newtask = JSON.parse(formObj)
				this.pro.protasks.push(this.newtask)
				this.saveInfo()
			}
		}
	}
</script>

<style>
	.taskmanage {
		width: 420px;
		position: relative;
		overflow: auto;
	}
	.taskccommon{
		cursor: pointer
	}
	.applytask {
		font-family: -apple-system, BlinkMacSystemFont,
			"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
			"Fira Sans", "Droid Sans", "Helvetica Neue",
			sans-serif;
		position: fixed;
		font-weight: 100;
		font-size: 350%;
		height: 40px;
		width: 40px;
		bottom: 105px;
		left: 610px;
		background: #dbd6cf;
		line-height: 26px;
		border-radius: 30px;
		cursor: pointer;
	}
</style>
