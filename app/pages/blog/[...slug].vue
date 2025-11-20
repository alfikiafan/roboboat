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
						to="/blog"
						class="inline-flex items-center gap-2 text-secondary font-bold text-sm mb-6 hover:text-white transition"
					>
						<Icon name="uil:arrow-left" /> Back to Blog Home
					</NuxtLink>

					<h1
						class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl"
					>
						{{ page.title }}
					</h1>

					<div
						class="flex flex-wrap items-center gap-6 text-sm font-medium text-surface-dim"
					>
						<div class="flex items-center gap-2">
							<div
								class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white"
							>
								<Icon name="uil:user" />
							</div>
							<span>{{ page.author }}</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="uil:calendar-alt" class="text-lg" />
							<span>{{ page.date }}</span>
						</div>
						<div class="flex gap-2">
							<span
								v-for="tag in page.tags"
								:key="tag"
								class="px-2 py-0.5 border border-surface-dim/30 rounded text-xs uppercase tracking-wider"
							>
								{{ tag }}
							</span>
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
							class="prose prose-lg max-w-none prose-headings:text-primary-dark prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h2:mt-12 prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-surface prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-img:rounded-xl prose-img:shadow-lg prose-code:text-secondary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:shadow-lg"
						>
							<ContentRenderer :value="page" />
						</div>

						<div
							class="mt-16 p-8 bg-surface rounded-xl border border-surface-dark flex items-center gap-6"
						>
							<div
								class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
							>
								{{ page.author.charAt(0) }}
							</div>
							<div>
								<h3 class="text-primary font-bold text-lg">
									About {{ page.author }}
								</h3>
								<p class="text-sm text-gray-600">
									Member of Bengawan UV Technical Division. Dedicated to
									advancing autonomous maritime systems.
								</p>
							</div>
						</div>
					</article>

					<aside class="hidden lg:block lg:col-span-4">
						<div class="sticky top-24">
							<div
								class="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
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
											>
												{{ link.text }}
											</a>
											<ul v-if="link.children" class="ml-4 mt-2 space-y-2">
												<li v-for="child in link.children" :key="child.id">
													<a
														:href="`#${child.id}`"
														class="text-gray-500 hover:text-secondary transition block"
													>
														{{ child.text }}
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</nav>
							</div>

							<div class="mt-6 bg-primary text-surface rounded-xl p-6">
								<h3 class="font-bold mb-2">Need Full Report?</h3>
								<p class="text-sm opacity-80 mb-4">
									Download our technical documentation PDF for Roboboat 2026.
								</p>
								<NuxtLink
									to="/roboboat2026"
									class="block text-center bg-secondary text-white py-2 rounded font-bold hover:bg-secondary-light transition"
								>
									Go to Downloads
								</NuxtLink>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</div>

		<div v-else class="container mx-auto py-20 text-center">
			<h1 class="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
			<NuxtLink to="/blog" class="text-secondary underline"
				>Back to Blog Home</NuxtLink
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

const tocLinks = computed(() => {
	return page.value?.body?.toc?.links || [];
});
</script>

<style>
pre::-webkit-scrollbar {
	height: 8px;
}
pre::-webkit-scrollbar-track {
	background: #2d2d2d;
}
pre::-webkit-scrollbar-thumb {
	background: #555;
	border-radius: 4px;
}
</style>
