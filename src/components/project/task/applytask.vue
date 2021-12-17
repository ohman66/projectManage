<template>
	<div class="main" style="border: 0px solid #000000;height: 550px;width: 900px;
	box-shadow:0px 3px 4px grey;">
		<div class="title" style="border-radius:4px;background-color: #FCF9F4;border-radius:4px;border:0px;box-shadow:0px 1px 3px grey">
			<el-button style="border:0px;float: left;background-color: #FCF9F4;" @click="promanage">返回</el-button>
			<el-button style="border:0px;float: right;background-color: #FCF9F4;" @click="applytask">申请</el-button>
			添加任务
			<div class="clear"></div>
		</div>
		<div>
			<div>
				<div class="applyproboxleft1">
					任务名称
				</div>
				<div class="applyproboxringht1">
					<el-input placeholder="填写任务名称" rows="1" v-model="task.taskname"
						style="line-height: 54px;width: 272px;">
					</el-input>
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft3 " style="position:relation;top:150px;">
					开始日期
				</div>
				<div class="applyproboxringht3" style="position:relation;top:150px;">
					<el-date-picker type="date" placeholder="选择开始日期" v-model="task.taskstartdate"
						value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 272px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft4" style="position:relation;top:150px;">
					结束日期
				</div>
				<div class="applyproboxringht4" style="position:relation;top:150px;">
					<el-date-picker type="date" placeholder="选择结束日期" v-model="task.taskenddate"
						value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 272px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft2" >
					重要程度
				</div>
				<div class="applyproboxringht2">
					<select v-model="task.importent" style="width: 272px;height: 39px;border-radius:4px;background-color:white;border-color:#c6cbd1;">
						<option value="一般">一般</option>
						<option value="重要">重要</option>
					</select>
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div class="prodescrip" style="position:relation;top:230px;">
				任务说明
			</div>
			<div>
				<textarea v-model="task.taskdescrip" class="prodescripin" style="position:relation;top:242px;border-color:#c6cbd1;border-radius:4px;width:696px;font:30px;"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				task: {
					proname: "",
					taskname: "",
					taskstartdate: "",
					taskenddate: "",
					taskmanager: [],
					taskdescrip: "",
					importent: "一般"
				}

			}
		},
		methods: {
			promanage() {
				this.$router.replace('/')
			},
			applytask() {
				let arr = JSON.stringify(this.task)
				this.$router.replace({
					path: 'taskmanage',
					query: {
						newtask: encodeURIComponent(arr)
					}
				})
			}
		},
		created() {
			if (this.$route.query.proname) {
				let formObj = decodeURIComponent(this.$route.query.proname)
				this.task.proname = JSON.parse(formObj)
			}
		}
	}
</script>

<style>
	.main {
		position: relative;
		width: 420px;
		height: 731px;
		border: 1px solid #000000;
	}

	.main .title {
		height: 40px;
		border-bottom: 1px solid #000000;
		line-height: 40px;
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
		left:570px;
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
		width: 274px;
		height: 54px;
		float: right;
	}

	.prodescripin{
		height: 350px;
		width: 800px;
		position:absolute;
		left: 141px;
		top:202px;
		font: 40px;

	}
	.prodescrip{
		position:absolute;
		left: 50px;
		top:192px;
	}
</style>
