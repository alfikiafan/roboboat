<template>
	<NuxtLink
		:to="to"
		class="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
	>
		<div class="p-6 relative z-10">
			<div
				class="mb-4 text-4xl text-primary group-hover:text-secondary transition-colors"
			>
				<Icon :name="icon" />
			</div>

			<h3
				class="text-xl font-bold text-primary-dark mb-2 group-hover:translate-x-1 transition-transform"
			>
				{{ title }}
			</h3>
			<p class="text-sm text-gray-600 mb-4">
				{{ description }}
			</p>

			<div
				class="flex items-center text-secondary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
			>
				Explore <Icon name="uil:arrow-right" class="ml-1" />
			</div>
		</div>

		<div
			class="absolute top-0 right-0 w-24 h-24 bg-surface rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 opacity-50"
		></div>
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	description: string;
	to: string;
	icon: string;
}>();
</script>
