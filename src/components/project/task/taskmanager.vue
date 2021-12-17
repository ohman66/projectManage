<template>
	<div style="height: 54px;width: 420px;position:relative;left:350px;top:30px">
		<div class="name">{{sites.name}}</div>
		<div class="time">{{sites.time}}</div>
		<div class="diaji">—</div>
		<!-- <hr width="410px"> -->
	</div>
</template>

<script>
	export default{
		props:["sites"],
		data:function(){
			return{
				
			}
		},
		created() {
			
		}
	}
</script>

<style>
	.main{
		width: 420px;
		height: 54px;
	}
	.name{
		width: 60px;
		height: 52px;
		float: left;
		text-align: center;
		line-height: 52px;
	}
	.time{
		width: 120px;
		height: 52px;
		float: left;
		text-align: center;
		line-height: 52px;
		float: left;
	}
	.diaji{
		color: #FF0000;
		border: 2px solid red;
		background-color: #ffffff;
		float: right;
		margin-top: 15px;
		text-align: center;
		margin-right: 10px;
		height: 22px;
		width: 22px;
		border-radius: 15px;
		font-weight: 900;
		cursor: pointer;
		visibility: hidden;
	}
</style>
