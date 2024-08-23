<template>
	<Header></Header>
	<Landing></Landing>
	<Footer></Footer>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Landing from '@/components/Landing/index.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Landing,
			Footer
		}
	}
</script>