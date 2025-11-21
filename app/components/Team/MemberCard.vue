<template>
	<div
		class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow"
	>
		<div class="aspect-[3/4] bg-gray-200 relative overflow-hidden">
			<div
				v-if="!image"
				class="absolute inset-0 flex items-center justify-center bg-surface-dim text-gray-400"
			>
				<Icon name="uil:user" class="text-6xl" />
			</div>
			<img v-else :src="image" :alt="name" class="w-full h-full object-cover" />
		</div>

		<div class="p-5 flex flex-col flex-grow">
			<h3 class="text-lg font-bold text-primary-dark mb-1 leading-tight">
				{{ name }}
			</h3>

			<p class="text-secondary font-bold text-sm uppercase tracking-wide mb-3">
				{{ role || year }}
			</p>

			<div class="space-y-2 mb-4 flex-grow">
				<div v-if="major" class="flex items-start gap-2 text-xs text-gray-600">
					<Icon
						name="uil:graduation-cap"
						class="text-lg flex-shrink-0 text-gray-400"
					/>
					<span>{{ major }}</span>
				</div>
				<div
					v-if="research_area"
					class="flex items-start gap-2 text-xs text-gray-600"
				>
					<Icon
						name="uil:microscope"
						class="text-lg flex-shrink-0 text-gray-400"
					/>
					<span>{{ research_area }}</span>
				</div>
			</div>

			<div class="flex gap-3 pt-4 border-t border-gray-100 mt-auto">
				<a
					v-if="email"
					:href="`mailto:${email}`"
					class="text-gray-400 hover:text-primary transition text-xl"
					title="Email"
				>
					<Icon name="uil:envelope" />
				</a>
				<a
					v-if="linkedin"
					:href="linkedin"
					target="_blank"
					class="text-gray-400 hover:text-[#0077b5] transition text-xl"
					title="LinkedIn"
				>
					<Icon name="uil:linkedin" />
				</a>
				<a
					v-if="instagram"
					:href="instagram"
					target="_blank"
					class="text-gray-400 hover:text-[#E1306C] transition text-xl"
					title="Instagram"
				>
					<Icon name="uil:instagram" />
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	role?: string;
	year?: string;
	major?: string;
	research_area?: string;
	email?: string;
	image?: string;
	linkedin?: string;
	instagram?: string;
}>();
</script>
