<template>
	<div style="border: 0px solid #000000;height: 80px;width: 900px; position:relative;top:10px">
		<div class="proleft" style="">
			<div class="proleftchild">
				<center class="procount" style="position:relative;top:21px; font-size: 20px;color: #555555;">{{taskid}}</center>
				<center style="position:relative;top:-3px;left:205px;">
					<i class="prodata">{{site.taskstartdate}}</i>
					<i class="prodata">-</i>
					<i class="prodata">{{site.taskenddate}}</i>
				</center>
			</div>
		</div>
		<div class="proright">
			<div class="proname" style="position:relative;top:37px;left:-25px;">{{site.taskname}}</div>
			<div class="clear"></div>
			<div class="promanager" style="margin: 3px;position:relative;top:14px;left:230px;">参与人:
				<div v-for="(manager) in site.taskmanager" :key="manager.name" 
				style="display: inline;">{{manager.name}}</div>
			</div>
			<div class="clear"></div>
			<div class="promanager" style="margin: 3px;position:relative;top:-9px;left:400px;">重要度：
				<div style="display: inline;">{{site.importent}}</div>
			</div>
			<div class="clear"></div>
			<div class="promanager" style="margin: 3px;position:relative;top:-31px;left:550px;">剩余
				<div :class="(daydiff<10)?'time1':'time2'">{{daydiff+1}}</div>
				天结束
			</div>
		</div>
		<div class="clear"></div>
		<!-- <hr width="410px"> -->
	</div>
</template>

<script>
	export default {
		props: ["site", 'taskid'],
		data: function() {
			return {
				daydiff: ""
			}
		},
		methods: {
			getTime() {
				let nowTime = new Date();
				let endTime = new Date(this.site.taskenddate);
				var dateDiff = endTime.getTime() - nowTime.getTime();
				this.daydiff = Math.floor(dateDiff / (24 * 3600 * 1000));
			}
		},
		mounted() {
			this.getTime();
		}
	}
</script>

<style>
	.procount {
		font-family: arial;
		font-size: 23px;
		color: #555555;
	}
	
	.prodata {
		font-family: arial;
		font-size: 13px;
		color: #aaaaaa;
		font-style: italic;
	}
	
	.clear {
		clear: both;
		height: 0;
	}
	
	.proname {
		font-family: arial;
		font-size: 15px;
		color: #555555;
	}
	
	.promanager {
		font-family: arial;
		font-size: 13px;
		color: #555555;
		float: left;
	}
	.time1{
		display: inline;
		color: #ff0000;
	}
	.time2 {
		display: inline;
		color: #00aa00;
	}
	
	.proleft {
		float: left;
		width: 165px;
		height: 80px;
	}
	
	.proleft .proleftchild {
		margin-top: 17px;
	}
	
	.proright {
		float: left;
		width: 240px;
		height: 80px;
	}
	
	.taskmanager {
		float: left;
		width: 60px;
		height: 54px;
		line-height: 54px;
		text-align: center;
	}
</style>
