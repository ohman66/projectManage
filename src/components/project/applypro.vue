<template>
	<div class="main" style="border: 0px solid #000000;height: 550px;border-radius:4px;
	width: 900px; box-shadow:0px 3px 4px grey;">
		<div class="title" style="background-color: #FCF9F4;border-radius:4px;border:0px;box-shadow:0px 1px 3px grey">
			<el-button style="float: left;border:0px;border-radius:4px;background-color: #FCF9F4;" @click="promanage">返回</el-button>
			<el-button style="float: right;border:0px;background-color: #FCF9F4;" @click="apply">申请</el-button>
			申请项目
			<div class="clear"></div>
		</div>
		<div>
			<div>
				<div class="applyproboxleft1" style="position:raletive;top:80px;">
					项目名称
				</div>
				<div class="applyproboxringht1" style="position:raletive;top:80px;">
					<el-i placeholder="填写项目名称" rows="1" v-model="pro.proname" style="line-height: 54px;width: 275px;">
					</el-i>
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft3" style="position:raletive;top:160px;">
					开始日期
				</div>
				<div class="applyproboxringht3" style="position:raletive;top:160px;">
					<el-date-picker type="date" placeholder="选择开始日期" v-model="pro.prostartdate" value-format="yyyy-MM-dd"
						format="yyyy-MM-dd" style="width: 275px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft4" style="position:raletive;top:160px;">
					结束日期
				</div>
				<div class="applyproboxringht4" style="position:raletive;top:160px;">
					<el-date-picker type="date" placeholder="选择结束日期" v-model="pro.proenddate" value-format="yyyy-MM-dd"
						format="yyyy-MM-dd" style="width: 275px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft2" style="position:raletive;top:80px;">
					负&ensp;责&ensp;人
				</div>
				<div class="applyproboxringht2" style="position:raletive;top:80px;">
					<el-input placeholder="填写项目负责人" rows="1" v-model="pro.promanager"
						style="line-height: 54px;width: 275px;"></el-input>
				</div>
			</div>
			<!-- <hr width="405px"> -->
		</div>
		<div>
			<div class="prodescrip" style="position:raletive;top:240px;">
				项目说明
			</div>
			<div >
				<textarea v-model="pro.prodescrip" class="prodescripin" style="width:700px;font:30px;position:raletive;top:250px;border-color:#c6cbd1;border-radius:4px;"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				pro:{
					proname: "",
					prostartdate: "",
					proenddate: "",
					promanager: "",
					prodescrip:"",
					protask:[]
				}
				
			}
		},
		methods: {
			promanage() {
				this.$router.back()
			},
			apply() {
				let arr=JSON.stringify(this.pro)
				this.$router.replace({
					path:'/',
					query:{newpro:encodeURIComponent(arr)}
				})
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
		margin: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 3px;

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
		top:90px;
		
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
		top: 70px;
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
		position: relative;
		
	}

	.applyproboxringht {
		width: 274px;
		height: 54px;
		float: right;
	}
	.prodescrip{
		font-family: arial;
		font-size: 17px;
		color: #333333;
		height: 55px;
		line-height: 55px;
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
