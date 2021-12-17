<template>
	<div style="width: 900px;height: 80px;border:px solid #000000;cursor: pointer">
		<div class="proleft">
			<div class="proleftchild" >
				<center class="procount" style="position:relative;top:23px; font-size: 20px;color: #555555;">{{proid}}</center>
				<!-- <br> -->
			</div>
			<div>
				<center style="position:relative; left:280px;">
					<i class="prodata">{{sites.prostartdate}}</i>
					<i class="prodata"> to </i>
					<i class="prodata">{{sites.proenddate}}</i>
				</center>
			</div>
		</div>
		<div class="proright">
			<p class="proname" style="position:relative; left:-30px;top:35px;">{{sites.proname}}</p>
			<div class="clear"></div>
<!-- 显示的是项目管理界面 -->
	
			<p class="promanager" style="position:relative; left:330px;top:5px;">负责人:</p>
			<p class="promanager" style="position:relative; left:340px;top:5px;">{{sites.promanager}}</p>
			<div class="clear"></div>
			<div class="promanager" style="position:relative; left:480px;top:-19px;">
				剩余
				<div :class="(daydiff<10)?'time1':'time2'">{{daydiff+1}}</div>天结束
			</div>
		</div>
		<div class="clkear"></div>
		<!-- <hr width="410px"> -->
	</div>
</template>

<script>
	export default {
		props: ["sites", 'proid'],
		data: function() {
			return {
				daydiff: ""
			}
		},
		methods: {
			getTime() {
				let nowTime = new Date();
				let endTime = new Date(this.sites.proenddate);
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
		font-size: 10px;
		color: #555555;
	}

	.prodata {
		font-family: arial;
		font-size: 13px;
		color: #555555;
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
		float: left;
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
	.time2{
		display: inline;
		color: #00aa00;
	}
	p {
		line-height: 12%;
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
</style>
