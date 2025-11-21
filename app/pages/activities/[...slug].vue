<template>
	<div class="bg-white min-h-screen pb-20">
		<div v-if="page">
			<div class="bg-surface border-b border-gray-200 py-12">
				<div class="container mx-auto px-4 max-w-4xl">
					<NuxtLink
						to="/activities"
						class="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition font-bold mb-6 text-sm"
					>
						<Icon name="uil:arrow-left" /> Back to Logbook
					</NuxtLink>

					<div
						class="flex items-center gap-4 text-sm text-secondary font-bold uppercase tracking-widest mb-4"
					>
						<span>{{ page.date }}</span>
						<span class="w-1 h-1 bg-gray-400 rounded-full"></span>
						<span class="flex items-center gap-1"
							><Icon name="uil:location-point" />
							{{ page.location || "Surakarta" }}</span
						>
					</div>

					<h1
						class="text-3xl md:text-5xl font-bold text-primary-dark leading-tight"
					>
						{{ page.title }}
					</h1>
				</div>
			</div>

			<div
				v-if="page.image"
				class="container mx-auto px-4 max-w-4xl mt-12 mb-12"
			>
				<div
					class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50"
				>
					<img
						:src="page.image"
						:alt="page.title"
						class="w-full h-auto max-h-[450px] object-cover mx-auto"
					/>
				</div>
				<p class="text-center text-xs text-gray-500 mt-3 italic">
					Documentation: {{ page.title }}
				</p>
			</div>

			<div class="container mx-auto px-4 max-w-3xl">
				<div
					class="prose prose-lg prose-headings:text-primary-dark prose-img:rounded-xl prose-a:text-secondary"
				>
					<ContentRenderer :value="page" />
				</div>

				<div
					class="mt-16 pt-8 border-t border-gray-100 flex justify-between text-sm font-bold"
				>
					<NuxtLink
						to="/activities"
						class="text-gray-400 hover:text-primary flex items-center gap-2"
					>
						<Icon name="uil:arrow-left" /> Back to Activities List
					</NuxtLink>
				</div>
			</div>
		</div>

		<div v-else class="container mx-auto py-20 text-center">
			<h1 class="text-4xl font-bold text-primary mb-4">Activity Not Found</h1>
			<p class="text-gray-500">Could not load data for: {{ path }}</p>
			<NuxtLink
				to="/activities"
				class="text-secondary underline mt-4 inline-block"
				>Return to Activities</NuxtLink
			>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.path;

// Mengambil data Activity
const { data: rawPage } = await useAsyncData(`activity-${path}`, () => {
	return queryCollection("content").path(path).first();
});

const page = computed(() => rawPage.value as any);
</script>
