<template>
	<div class="main" style="width: 900px;height: 450px;border: 5px; top:80px;">
		<div>
			<div>
				<div class="applyproboxleft1" style="position:absolute;top:20px;">
					项目名称
				</div>
				<div class="applyproboxringht1" style="position:absolute;top:20px;">
					<el-input placeholder="填写项目名称" rows="1" v-model="pro.proname"
						style="line-height: 54px;width: 276px;">
					</el-input>
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft3" style="position:absolute;top:90px;">
					开始日期
				</div>
				<div class="applyproboxringht3" style="position:absolute;top:90px;">
					<el-date-picker type="date" placeholder="选择开始日期" v-model="pro.prostartdate"
						value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 276px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft4" style="position:absolute;top:90px;">
					结束日期
				</div>
				<div class="applyproboxringht4" style="position:absolute;top:90px;">
					<el-date-picker type="date" placeholder="选择结束日期" v-model="pro.proenddate" value-format="yyyy-MM-dd"
						format="yyyy-MM-dd" style="width: 276px;line-height: 54px;" />
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div>
				<div class="applyproboxleft2" style="position:absolute;top:20px;">
					负&ensp;责&ensp;人
				</div>
				<div class="applyproboxringht2" style="position: absolute;left:570px;top: 20px;">
					<el-input placeholder="填写项目负责人" rows="1" v-model="pro.promanager"
						style="line-height: 54px;width: 276px;"></el-input>
				</div>
			</div>
			<!-- <hr width="409px"> -->
		</div>
		<div>
			<div class="prodescrip" style="position:absolute;top:160px;">
				项目说明
			</div>
			<div style="position:absolute;top:-90px;">
				<textarea v-model="pro.prodescrip" class="prodescripin" style="height:210px;border-color:#c6cbd1;border-radius:4px;"></textarea>
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
				proold:{
					proname: "",
					prostartdate: "",
					proenddate: "",
					promanager: "",
					prodescrip: "",
					protasks: []
				}
			}
		},
		created() {
			if (this.$route.query.pro) {
				let formObj = decodeURIComponent(this.$route.query.pro)
				this.pro = JSON.parse(formObj)
				this.proold = JSON.parse(formObj)
			}
		},
		watch: {
			pro:{
				handler(newpro){
					Object.assign(this.pros, JSON.parse(sessionStorage.getItem('pros')))
					Object.assign(this.proold, JSON.parse(sessionStorage.getItem('pro')))
					const index = this.pros.findIndex(item => item.proname == this.proold.proname)
					this.pros.fill(newpro, index, index + 1)
					sessionStorage.setItem('pros', JSON.stringify(this.pros))
					sessionStorage.setItem('pro', JSON.stringify(newpro))
				},
				deep:true,
				immediate:false
			}
		},
		methods:{
			test(){
				console.log(this.pro, "pro")
			}
		}
	}
</script>

<style>
	.main {
		position: relative;
		width: 405px;
		height: 619px;
		border: none;
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
	}

	.applyproboxringht {
		width: 275px;
		height: 54px;
		float: right;
	}

	.prodescrip {
		font-family: arial;
		font-size: 17px;
		color: #333333;
		height: 55px;
		line-height: 55px;
		position: absolute;
		top:200px;
	}

	.prodescripin {
		height: 200px;
		width: 403px;
	}
</style>
