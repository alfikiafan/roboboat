<template>
	<div
		class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
	>
		<div class="aspect-[4/5] bg-gray-200 relative overflow-hidden">
			<div
				v-if="!image"
				class="absolute inset-0 flex items-center justify-center bg-surface-dim text-gray-400"
			>
				<Icon name="uil:user" class="text-6xl" />
			</div>
			<img
				v-else
				:src="image"
				:alt="name"
				class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
			/>

			<div
				class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
			>
				<a
					v-if="linkedin"
					:href="linkedin"
					target="_blank"
					class="text-white text-2xl hover:text-secondary hover:scale-110 transition"
					><Icon name="uil:linkedin"
				/></a>
				<a
					v-if="instagram"
					:href="instagram"
					target="_blank"
					class="text-white text-2xl hover:text-secondary hover:scale-110 transition"
					><Icon name="uil:instagram"
				/></a>
			</div>
		</div>

		<div class="p-4 text-center">
			<h3
				class="text-lg font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors"
			>
				{{ name }}
			</h3>
			<p
				class="text-secondary font-semibold text-sm uppercase tracking-wide mb-2"
			>
				{{ role }}
			</p>
			<p v-if="division || major" class="text-xs text-gray-500">
				{{ division || major }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	role: string;
	division?: string;
	major?: string;
	image?: string;
	linkedin?: string;
	instagram?: string;
}>();
</script>
