<template>
	<NuxtLayout>
		<NuxtPage />
		<GlobalSearch ref="searchModal" />
	</NuxtLayout>
</template>

<script setup lang="ts">
const searchModal = ref();

provide("toggleSearch", () => {
	searchModal.value?.open();
});
</script>
