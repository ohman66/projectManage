<template>
	<div class="mainpro" id="pro" style="border: 0px solid #000000;height: 550px;width: 900px;box-shadow:0px 3px 4px grey;
	">
		<div class="title" style="background-color: #FCF9F4;border-radius:4px;border:0px;box-shadow:0px 1px 3px grey;">
			<el-button style="border:0px;float: left;background-color: #FCF9F4;">返回</el-button>
			<el-button style="border:0px;float: right;background-color: #FCF9F4;" @click="apply">申请</el-button>
			项目管理
		</div>
		<div class="promanage" style="height: 550px;width: 900px;">
			<mprocommon v-for="(site,i) in pros" 
				v-bind:key="site.proname" :sites="site" :proid="i+1"  @click.native.prevent="prodetail(site)">
			</mprocommon>
		</div>
	</div>
</template>

<script>
	import mprocommon from './mprocommon.vue'
	export default {
		data: function() {
			return {
				pros: []
			}
		},
		components: {
			mprocommon
		},
		methods: {
			apply() {
				this.$router.push('apply')
			},
			prodetail(site) {
				let arr = JSON.stringify(site)
				this.$router.push({
					path: 'prodetail',
					query: {
						pro: encodeURIComponent(arr)
					}
				})
			}
		},
		created() {
			sessionStorage.removeItem('pro')
			Object.assign(this.pros, JSON.parse(sessionStorage.getItem('pros')))
			if (this.$route.query.newpro) {
				let formObj = decodeURIComponent(this.$route.query.newpro)
				this.newpro = JSON.parse(formObj)
				this.pros.push(this.newpro)
				sessionStorage.setItem('pros', JSON.stringify(this.pros))
			}
			/* Object.assign(this.pro, JSON.parse(sessionStorage.getItem('pro')))
			const index = this.pros.findIndex(item => item.proname == this.pro.proname)
			this.pros.fill(this.pro,index,index+1) */
		}
	}
</script>

<style>
	.mainpro {
		border: 1px solid #000000;
		position: relative;
		width: 900px;
		height: 731px;
		margin: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 3px;
	}

	.mainpro .title {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #555555;
	}

	.mainpro .promanage {
		width: 420px;
		overflow: auto;
	}

	/* .clear {
		clear: both;
		height: 100;
	}

	.applyproboxleft {
		width: 130px;
		height: 54px;
		float: left;
	}

	.applyproboxringht {
		width: 277px;
		height: 54px;
		float: right;
	}

	.applyproboxleft .proname {
		font-family: arial;
		font-size: 17px;
		color: #333333;
		line-height: 54px;
	} */
</style>
