<template>
	<div>
		<section class="bg-surface-dim py-20">
			<div class="container mx-auto px-4 text-center">
				<h1 class="text-4xl font-bold text-primary mb-4">
					Research & Publications
				</h1>
				<p class="text-lg text-gray-600">
					Documenting our journey in engineering autonomous maritime systems.
				</p>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 min-h-screen">
			<div class="grid md:grid-cols-3 gap-8">
				<div
					v-for="article in articles"
					:key="article.path"
					class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group flex flex-col"
				>
					<div class="aspect-video overflow-hidden bg-gray-200 relative">
						<img
							v-if="article.image"
							:src="article.image"
							:alt="article.title"
							class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
						/>
						<div
							v-else
							class="w-full h-full flex items-center justify-center text-gray-400"
						>
							<Icon name="uil:image-slash" class="text-4xl" />
						</div>
					</div>

					<div class="p-6 flex flex-col flex-grow">
						<div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
							<span><Icon name="uil:calendar-alt" /> {{ article.date }}</span>
							<span>•</span>
							<span class="text-secondary font-bold">{{ article.author }}</span>
						</div>

						<h2
							class="text-xl font-bold text-primary-dark mb-3 line-clamp-2 group-hover:text-secondary transition-colors"
						>
							<NuxtLink :to="article.path">
								{{ article.title }}
							</NuxtLink>
						</h2>

						<p class="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
							{{ article.description }}
						</p>

						<NuxtLink
							:to="article.path"
							class="text-primary font-bold text-sm hover:underline flex items-center gap-1 mt-auto"
						>
							Read Full Report <Icon name="uil:arrow-right" />
						</NuxtLink>
					</div>
				</div>
			</div>

			<div
				v-if="!articles || articles.length === 0"
				class="text-center py-20 text-gray-500"
			>
				<Icon name="uil:file-search-alt" class="text-6xl mb-4" />
				<p>No research papers found yet.</p>
				<p class="text-xs mt-2 opacity-60">
					Pastikan ada file .md di folder content/blog
				</p>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
// Mengambil data menggunakan queryCollection (Nuxt Content v3)
// 'content' adalah nama koleksi yang kita buat di content.config.ts
const { data: list } = await useAsyncData("blog-list", () => {
	return queryCollection("content").all();
});

// Filter manual: Hanya ambil yang path-nya mengandung '/blog'
// Karena collection 'content' mengambil semua file .md
const articles = computed(() => {
	return list.value?.filter((item) => item.path.includes("/blog")) || [];
});
</script>
