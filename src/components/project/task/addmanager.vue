<template>
	<div class="main" style="border: 0px solid #000000;height: 550px;width: 900px;box-shadow:0px 3px 4px grey;">
		<div class="title" style="border-radius:4px;background-color: #FCF9F4;border:0px;box-shadow:0px 1px 3px grey">
			<el-button style="border:0px;float: left;background-color: #FCF9F4;">返回</el-button>
			<el-button style="border:0px;float: right;background-color: #FCF9F4;">编辑</el-button>
			参与人
		</div>
		<div v-for="(site) in managers" :key="site" @click="addmanager(site)">
			<div class="name">{{site}}</div>
			<!-- <hr width="410px"> -->
		</div>
	</div>
</template>

<script>
	import moment from "moment"
	export default{
		data: function(){
			return{
				managers:["陈永鹏","李文浩","丁晓冉","陆寓丰","黄飞鸿"],
				taskmanager:{
					name:"",
					time:""
				}
			}
		},
		methods:{
			addmanager(site){
				this.taskmanager.name = site
				this.taskmanager.time = moment(new Date()).format("YYYY-MM-DD")
				let arr = JSON.stringify(this.taskmanager)
				this.$router.replace({
					path: '/prodetail/taskmanage/taskmanagers',
					query: {
						addmanager: encodeURIComponent(arr)
					}
				})
			}
		}
	}
</script>

<style>
	.main {
		width: 420px;
		height: 731px;
	}
	
	.name {
		width: 80px;
		height: 52px;
		float: left;
		text-align: center;
		line-height: 52px;
	}
</style>
