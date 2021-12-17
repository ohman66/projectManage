<template>
	<div class="mainpro" style="border: 0px solid #000000;height: 550px;width: 900px;box-shadow:0px 3px 4px grey;">
		<div class="title" style="border-radius:4px;background-color: #FCF9F4;border:0px;box-shadow:0px 1px 3px grey">
			<el-button style="border:0px;float: left;background-color: #FCF9F4;" @click="retaskmanage">返回</el-button>
			<el-button style="border:0px;float: right;background-color: #FCF9F4;">删除</el-button>
			任务详情
		</div>
		<div>
			<div>
				<div class="applyproboxleft1">
					任务名称
				</div>
				<div class="applyproboxringht1">
					<el-input placeholder="填写任务名称" rows="1" v-model="task.taskname"
						style="line-height: 54px;width: 276px;">
					</el-input>
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft3">
					开始日期
				</div>
				<div class="applyproboxringht3">
					<el-date-picker type="date" placeholder="选择开始日期" v-model="task.taskstartdate"
						value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 276px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft4">
					结束日期
				</div>
				<div class="applyproboxringht4">
					<el-date-picker type="date" placeholder="选择结束日期" v-model="task.taskenddate"
						value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 276px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft2">
					重要程度
				</div>
				<div class="applyproboxringht2">
					<select v-model="task.importent" style="width: 276px;height: 39px;">
						<option value="一般">一般</option>
						<option value="重要">重要</option>
					</select>
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft5">
					参与人员
				</div>
				<div class="applyproboxringht5" @click="taskmanagers" style="width: ;height: 38px;border: 1px solid #C0C4CC;border-radius:2px">
					<div class="taskmanager" v-for="(manager) in task.taskmanager" v-bind:key="manager.name"
					style="text-align:center;line-height:38px;width:60px ;height: 38px;">
						{{manager.name}}</div>
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div class="prodescrip">
				任务说明
			</div>
			<div>
				<textarea v-model="this.task.taskdescrip" class="prodescripin"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				pro: {
					proname: "",
					prostartdate: "",
					proenddate: "",
					promanager: "",
					prodescrip: "",
					protasks: []
				},
				pros: [],
				task: {
					proname: "",
					taskname: "",
					taskstartdate: "",
					taskenddate: "",
					taskmanager: [],
					taskdescrip: "",
					importent:""
				},
				oldtask:{
					proname: "",
					taskname: "",
					taskstartdate: "",
					taskenddate: "",
					taskmanager: [],
					taskdescrip: "",
					importent:""
				}
			}
		},
		created() {
			if (this.$route.query.task) {
				let formObj = decodeURIComponent(this.$route.query.task)
				this.task = JSON.parse(formObj)
				this.oldtask = JSON.parse(formObj)
			}
			if (sessionStorage.getItem("task")) {
				this.task = JSON.parse(sessionStorage.getItem("task"))
				this.oldtask = JSON.parse(sessionStorage.getItem("task"))
				sessionStorage.removeItem("task")
			}
			if (sessionStorage.getItem("taskmanagers")) {
				this.task.taskmanager = JSON.parse(sessionStorage.getItem("taskmanagers"))
				this.oldtask.taskmanager = JSON.parse(sessionStorage.getItem("taskmanagers"))
			}
		},
		methods: {
			retaskmanage() {
				this.saveInfo()
				this.$router.replace('/prodetail/taskmanage')
			},
			saveInfo() {
				Object.assign(this.pros, JSON.parse(sessionStorage.getItem('pros')))
				Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
				const index = this.pro.protasks.findIndex(item => item.taskname == this.task.taskname)
				this.pro.protasks.fill(this.task, index, index + 1)
				const inde = this.pros.findIndex(item => item.proname == this.pro.proname)
				this.pros.fill(this.pro, inde, inde + 1)
				sessionStorage.setItem('pro', JSON.stringify(this.pro))
				sessionStorage.setItem('pros', JSON.stringify(this.pros))
			},
			taskmanagers() {
				this.saveInfo()
				sessionStorage.setItem('task', JSON.stringify(this.task))
				let arr = JSON.stringify(this.task.taskmanager)
				this.$router.push({
					path: 'taskmanagers',
					query: {
						taskmanager: encodeURIComponent(arr)
					}
				})
			}
		},
		watch: {
			task:{
				handler(newtask){
					Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
					const index = this.pro.protasks.findIndex(item => item.taskname == this.oldtask.taskname)
					console.log(index,"index")
					console.log(this.oldtask,"oldtask")
					console.log(this.task,"task")
					this.pro.protasks.fill(newtask, index, index + 1)
					sessionStorage.setItem('pro', JSON.stringify(this.pro))
				},
				deep:true,
				immediate:false
			}
		},
	}
</script>

<style>
	.mainpro {
		position: relative;
		width: 411px;
		height: 731px;
	}

	.mainpro .title {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #555555;
	}

	.clear {
		clear: both;
		height: 100;
	}

	.applyproboxleft1 {
		width: 130px;
		height: 54px;
		float: left;
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
		position: absolute;
		left: 20px;
		top:70px;
		
	}

	.applyproboxringht1 {
		width: 274px;
		height: 54px;
		float: right;
		position: absolute;
		left:140px;
		top:70px;
	}

	.applyproboxleft2 {
		width: 130px;
		height: 54px;
		float: left;
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
		position: absolute;
		left: 450px;
		top: 70px;
		
	}

	.applyproboxringht2 {
		width: 274px;
		height: 54px;
		float: right;
		position: absolute;
		left:569px;
		top: 78px;
	}

	.applyproboxleft3 {
		width: 130px;
		height: 54px;
		float: left;
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
		position: absolute;
		left: 20px;
		top: 130px;
		
	}

	.applyproboxringht3 {
		width: 274px;
		height: 54px;
		float: right;
		position: absolute;
		left:140px;
		top: 130px;
	}

	.applyproboxleft4 {
		width: 130px;
		height: 54px;
		float: left;
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
		position: absolute;
		left: 450px;
		top: 130px;
		
	}

	.applyproboxringht4 {
		width: 274px;
		height: 54px;
		float: right;
		position: absolute;
		left:570px;
		top: 130px;
	}

	.applyproboxleft5 {
		width: 130px;
		height: 54px;
		float: left;
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
		position: absolute;
		left: 20px;
		top: 190px;
		
	}

	.applyproboxringht5 {
		width: 274px;
		height: 54px;
		float: right;
		position: absolute;
		left:140px;
		top: 199px;
	}

	.applyproboxleft {
		width: 130px;
		height: 54px;
		float: left;
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
	}

	.applyproboxringht {
		width: 275px;
		height: 54px;
		float: right;
	}

	.applyproboxringht .taskmanager {
		float: left;
		width: 60px;
		height: 54px;
		line-height: 54px;
		text-align: center;
	}

	.prodescripin{
		height: 240px;
		width: 700px;
		position:absolute;
		left: 141px;
		top:262px;
		font: 40px;

	}
	.prodescrip{
		position:absolute;
		left: 50px;
		top:252px;
	}
</style>
