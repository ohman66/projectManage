<template>
	<div class="main" style="border: 0px solid #000000;height: 550px;width: 900px;width: 900px; box-shadow:0px 3px 4px grey;">
		<div class="title" style="border-radius:4px;background-color: #FCF9F4;border:0px;box-shadow:0px 1px 3px grey"> 
			<el-button style="border:0px;float: left;background-color: #FCF9F4;" @click="retaskdetail">返回</el-button>
			<el-button style="border:0px;float: right;background-color: #FCF9F4;">编辑</el-button>
			参与人
		</div>
		<div style="width: 900px;">
			<taskmanager v-for="(site) in taskmanagers" v-bind:key="site.name" :sites="site">
			</taskmanager>
		</div>
		<div class="addmanager" @click="addmanager" style="position:relative; top:30px;left:400px;">添加参与人</div>
		<!-- <hr width="0px"> -->
	</div>
</template>

<script>
	import taskmanager from './taskmanager.vue'
	export default {
		data: function() {
			return {
				taskmanagers: [],
				taskmanager: {
					name: "",
					time: ""
				}
			}
		},
		components: {
			taskmanager
		},
		methods: {
			addmanager() {
				this.saveInfo()
				this.$router.replace('taskmanagers/addmanager')
			},
			saveInfo() {
				sessionStorage.setItem('taskmanagers', JSON.stringify(this.taskmanagers))
			},
			retaskdetail(){
				this.saveInfo()
				this.$router.replace('taskdetail')
			}
		},
		created() {
			if (this.$route.query.taskmanager) {
				let formObj = decodeURIComponent(this.$route.query.taskmanager)
				this.taskmanagers = JSON.parse(formObj)
			}
			if (sessionStorage.getItem("taskmanagers")) {
				this.taskmanagers = JSON.parse(sessionStorage.getItem("taskmanagers"))
			}
			if (this.$route.query.addmanager) {
				let formObj = decodeURIComponent(this.$route.query.addmanager)
				this.taskmanager = JSON.parse(formObj)
				this.taskmanagers.push(this.taskmanager)
				sessionStorage.setItem('taskmanagers', JSON.stringify(this.taskmanager))
			}
		}
	}
</script>

<style>
	.main {
		border: 1px solid #000000;
		width: 420px;
		height: 731px;
		position: relative;
	}

	.main .title {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #555555;
	}

	.addmanager {
		width: 400px;
		height: 54px;
		line-height: 54px;
		font-size: 15px;
		color: #169BD6;
		text-align: left;
		padding-left: 20px;
		cursor: pointer;
	}
</style>
