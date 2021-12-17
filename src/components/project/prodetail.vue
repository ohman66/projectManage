<template>
	<div class="mainpro" style="border: 0px solid #000000;height: 550px;width: 900px;box-shadow:0px 3px 4px grey;">
		<div class="title" style="background-color: #FCF9F4;border-radius:4px;border:0px;box-shadow:0px 1px 3px grey;">
			<el-button style="border:0px;float: left;background-color: #FCF9F4;" @click="returnpromanage">返回</el-button>
			<el-button style="border:0px;float: right;background-color: #FCF9F4;" @click="deletepro">删除</el-button>
			项目详情
		</div>
		<div class="proclass" style="position:absolute;left:240px;top:60px">
			<router-link :to="{path:'proinfor',query:{pro:encodeURIComponent(JSON.stringify(this.pro))}}" 
				tag="button" class="button1">项目信息</router-link>
			<router-link :to="{path:'taskmanage',query:{protasks:encodeURIComponent(JSON.stringify(this.pro.protasks))}}" 
				tag="button" class="button2">任务列表</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				pro:{
					proname: "",
					prostartdate: "",
					proenddate: "",
					promanager: "",
					prodescrip:"",
					protasks:[]
				},
				pros:[],
				task:{
					proname:"",
					taskname: "",
					taskstartdate: "",
					taskenddate: "",
					taskmanager: "",
					taskdescrip:""
				}
			}
		},
		methods:{
			returnpromanage(){
				Object.assign(this.pros, JSON.parse(sessionStorage.getItem('pros')))
				Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
				sessionStorage.setItem('pro', JSON.stringify(this.pro))
				const index = this.pros.findIndex(item => item.proname == this.pro.proname)
				this.pros.fill(this.pro,index,index+1)
				sessionStorage.setItem('pros', JSON.stringify(this.pros))
				this.$router.replace('/')
			},
			deletepro(){
				
			},
			
		},
		created() {
			Object.assign(this.pros, JSON.parse(sessionStorage.getItem('pros')))
			if (this.$route.query.pro) {
				let formObj = decodeURIComponent(this.$route.query.pro)
				this.pro = JSON.parse(formObj)
				sessionStorage.setItem('pro', JSON.stringify(this.pro))
			}
			Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
			console.log(this.pro,"sssss prodetail")
		},
		mounted() {
			Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
			console.log(this.pro,"ddddd prodetail")
		}
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
	.mainpro .proclass{
		width: 411px;
		height: 71px;
		position: relative;
		line-height: 71px;
		border-bottom:0px solid #555555 ;
	}
	.mainpro .proclass .button1{
		height: 30px;
		border: 1px solid #555555;
		border-radius:15px 0px 0px 15px;
		background-color: #ffffff;
		color: #000000;
		cursor: pointer;
	}
	.mainpro .proclass .button2{
		color: #555555;
		border: 0.5px solid #555555;
		height: 30px;
		border-radius:0px 15px 15px 0px;
		background-color: #ffffff;
		border-left: none;
		cursor: pointer;
	}
</style>
