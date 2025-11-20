<template>
	<div class="relative container mx-auto px-4 max-w-4xl">
		<div
			class="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-surface-dim transform md:-translate-x-1/2 rounded-full"
		></div>

		<div
			v-for="(item, index) in historyData"
			:key="item.year"
			class="relative flex items-center justify-between mb-12 md:mb-24 group"
			:class="index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
		>
			<div class="w-full md:w-5/12 pl-12 md:pl-0">
				<div
					class="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 relative"
				>
					<div
						class="hidden md:block absolute top-6 w-4 h-4 bg-white transform rotate-45"
						:class="
							index % 2 === 0
								? '-left-2 border-l border-b border-gray-200'
								: '-right-2 border-r border-t border-gray-200'
						"
					></div>

					<span
						class="text-5xl font-bold text-surface-dim absolute top-2 right-4 select-none"
						>{{ item.year }}</span
					>
					<h3 class="text-xl font-bold text-primary mb-2 relative z-10">
						{{ item.title }}
					</h3>
					<p class="text-gray-600 text-sm leading-relaxed relative z-10">
						{{ item.description }}
					</p>
				</div>
			</div>

			<div
				class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 bg-secondary group-hover:bg-primary transition-colors duration-500"
			>
				<div class="w-2 h-2 bg-white rounded-full"></div>
			</div>

			<div class="hidden md:block w-5/12"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
// Import data JSON
import historyData from "../../../assets/data/history.json";
</script>
