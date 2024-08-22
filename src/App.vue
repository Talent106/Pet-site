<template>
	<Header></Header>
	<Landing></Landing>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Landing from '@/components/Landing/index.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Landing
		}
	}
</script>