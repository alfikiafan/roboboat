<template>
	<div class="bg-white min-h-screen pb-20">
		<div v-if="page">
			<div
				class="bg-primary-dark relative text-surface py-16 lg:py-24 overflow-hidden"
			>
				<div
					class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"
				></div>

				<div class="container mx-auto px-4 relative z-10">
					<NuxtLink
						to="/research"
						class="inline-flex items-center gap-2 text-secondary font-bold text-sm mb-6 hover:text-white transition"
					>
						<Icon name="uil:arrow-left" /> Back to Research Divisions
					</NuxtLink>

					<h1
						class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl"
					>
						{{ page.title }}
					</h1>

					<div
						class="flex flex-wrap items-center gap-6 text-sm font-medium text-surface-dim"
					>
						<div class="flex items-center gap-2" v-if="page.author">
							<div
								class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white"
							>
								<Icon name="uil:user" />
							</div>
							<span>{{ page.author }}</span>
						</div>
						<div class="flex items-center gap-2" v-if="page.date">
							<Icon name="uil:calendar-alt" class="text-lg" />
							<span>{{ page.date }}</span>
						</div>
						<div class="flex gap-2" v-if="page.tags">
							<span
								v-for="tag in page.tags"
								:key="tag"
								class="px-2 py-0.5 border border-surface-dim/30 rounded text-xs uppercase tracking-wider"
								>{{ tag }}</span
							>
						</div>
					</div>
				</div>
			</div>

			<div class="container mx-auto px-4 mt-12">
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<article class="lg:col-span-8">
						<div
							v-if="page.image"
							class="mb-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
						>
							<img
								:src="page.image"
								:alt="page.title"
								class="w-full h-auto object-cover"
							/>
						</div>

						<div
							class="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-secondary"
						>
							<ContentRenderer :value="page" />
						</div>
					</article>

					<aside class="hidden lg:block lg:col-span-4">
						<div class="sticky top-24">
							<div
								class="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
								v-if="tocLinks.length > 0"
							>
								<h3
									class="text-primary font-bold uppercase tracking-widest text-sm mb-4 border-b pb-2"
								>
									Table of Contents
								</h3>
								<nav>
									<ul class="space-y-3 text-sm">
										<li v-for="link in tocLinks" :key="link.id">
											<a
												:href="`#${link.id}`"
												class="text-gray-600 hover:text-secondary transition block border-l-2 border-transparent hover:border-secondary pl-3"
												>{{ link.text }}</a
											>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</div>

		<div v-else class="container mx-auto py-20 text-center">
			<h1 class="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
			<NuxtLink to="/research" class="text-secondary underline"
				>Back to Research</NuxtLink
			>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.path;

const { data: rawPage } = await useAsyncData(`doc-${path}`, () => {
	return queryCollection("content").path(path).first();
});

const page = computed(() => rawPage.value as any);
const tocLinks = computed(() => page.value?.body?.toc?.links || []);
</script>
