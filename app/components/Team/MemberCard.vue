<template>
	<div
		class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow group text-left"
	>
		<div
			class="bg-gray-200 relative overflow-hidden"
			:class="website ? 'aspect-video' : 'aspect-[3/4]'"
		>
			<div
				v-if="!image"
				class="absolute inset-0 flex items-center justify-center bg-surface-dim text-gray-400"
			>
				<Icon :name="website ? 'uil:users-alt' : 'uil:user'" class="text-6xl" />
			</div>
			<img
				v-else
				:src="image"
				:alt="name"
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		</div>

		<div
			class="p-5 flex flex-col flex-grow items-start"
			:class="website ? 'text-center items-center' : ''"
		>
			<h3 class="text-lg font-bold text-primary-dark mb-1 leading-tight w-full">
				{{ name }}
			</h3>

			<p
				class="text-secondary font-bold text-sm uppercase tracking-wide mb-2 w-full"
			>
				{{ role || year }}
			</p>

			<a
				v-if="website"
				:href="website"
				target="_blank"
				class="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium mt-1 mb-2 group/link"
			>
				<span>Visit Website</span>
				<Icon
					name="uil:arrow-right"
					class="group-hover/link:translate-x-1 transition-transform"
				/>
			</a>

			<div v-if="!website" class="space-y-2 mb-4 flex-grow w-full">
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

			<div
				v-if="!website"
				class="flex gap-3 pt-4 border-t border-gray-100 mt-auto w-full"
				:class="isSupervisor ? 'justify-center' : 'justify-start'"
			>
				<a
					v-if="email"
					:href="`mailto:${email}`"
					:class="[
						isSupervisor
							? 'w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 py-2.5 rounded-lg transition-all shadow-sm'
							: 'text-gray-400 hover:text-primary transition text-xl',
					]"
					:title="isSupervisor ? 'Send Email' : 'Email'"
				>
					<Icon
						:name="isSupervisor ? 'uil:envelope-alt' : 'uil:envelope'"
						:class="isSupervisor ? 'text-lg' : ''"
					/>
					<span v-if="isSupervisor" class="text-sm font-semibold"
						>Contact Email</span
					>
				</a>

				<template v-if="!isSupervisor">
					<a
						v-if="linkedin"
						:href="linkedin"
						target="_blank"
						class="text-gray-400 hover:text-[#0077b5] transition text-xl"
					>
						<Icon name="uil:linkedin" />
					</a>
					<a
						v-if="instagram"
						:href="instagram"
						target="_blank"
						class="text-gray-400 hover:text-[#E1306C] transition text-xl"
					>
						<Icon name="uil:instagram" />
					</a>
				</template>
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
	isSupervisor?: boolean;
	website?: string;
}>();
</script>
