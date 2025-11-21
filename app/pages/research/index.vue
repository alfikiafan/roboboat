<template>
	<div>
		<section
			class="bg-primary-dark text-surface py-20 text-center relative overflow-hidden"
		>
			<div
				class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
			></div>
			<div class="container mx-auto px-4 relative z-10">
				<h1 class="text-4xl font-bold mb-4">Research Divisions</h1>
				<p class="text-lg opacity-80 max-w-2xl mx-auto">
					Explore the core engineering pillars behind Mandakini USV.
				</p>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 min-h-screen">
			<div class="flex flex-wrap justify-center gap-4 mb-16">
				<button
					@click="activeCategory = 'all'"
					class="px-6 py-2 rounded-full transition font-bold"
					:class="
						activeCategory === 'all'
							? 'bg-primary text-white shadow-lg ring-2 ring-offset-2 ring-primary'
							: 'bg-surface text-gray-600 hover:bg-gray-200'
					"
				>
					All Divisions
				</button>

				<button
					@click="activeCategory = 'body'"
					class="px-6 py-2 rounded-full transition font-medium"
					:class="
						activeCategory === 'body'
							? 'bg-primary text-white shadow-lg ring-2 ring-offset-2 ring-primary'
							: 'bg-surface text-gray-600 hover:bg-gray-200'
					"
				>
					Body & Design
				</button>

				<button
					@click="activeCategory = 'electrical'"
					class="px-6 py-2 rounded-full transition font-medium"
					:class="
						activeCategory === 'electrical'
							? 'bg-primary text-white shadow-lg ring-2 ring-offset-2 ring-primary'
							: 'bg-surface text-gray-600 hover:bg-gray-200'
					"
				>
					Electrical
				</button>

				<button
					@click="activeCategory = 'programming'"
					class="px-6 py-2 rounded-full transition font-medium"
					:class="
						activeCategory === 'programming'
							? 'bg-primary text-white shadow-lg ring-2 ring-offset-2 ring-primary'
							: 'bg-surface text-gray-600 hover:bg-gray-200'
					"
				>
					Programming
				</button>
			</div>

			<div
				v-if="activeCategory === 'all'"
				class="grid md:grid-cols-3 gap-8 animate-fade-in"
			>
				<div
					@click="activeCategory = 'body'"
					class="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-all hover:-translate-y-1 cursor-pointer"
				>
					<div
						class="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-3xl text-primary mb-6 group-hover:rotate-12 transition-transform"
					>
						<Icon name="uil:wrench" />
					</div>
					<h3 class="text-2xl font-bold text-primary-dark mb-3">
						Body & Design
					</h3>
					<p class="text-gray-600 mb-6 line-clamp-3">
						Focusing on hydrodynamic hull optimization, material composite
						selection, and mechanical propulsion systems.
					</p>
					<span
						class="inline-flex items-center text-secondary font-bold uppercase text-sm tracking-widest hover:underline"
					>
						View Articles <Icon name="uil:arrow-right" class="ml-2" />
					</span>
				</div>

				<div
					@click="activeCategory = 'electrical'"
					class="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-all hover:-translate-y-1 cursor-pointer"
				>
					<div
						class="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-3xl text-primary mb-6 group-hover:rotate-12 transition-transform"
					>
						<Icon name="uil:circuit" />
					</div>
					<h3 class="text-2xl font-bold text-primary-dark mb-3">Electrical</h3>
					<p class="text-gray-600 mb-6 line-clamp-3">
						Managing power distribution (BMS), sensor integration (Lidar, GPS,
						IMU), and PCB manufacturing.
					</p>
					<span
						class="inline-flex items-center text-secondary font-bold uppercase text-sm tracking-widest hover:underline"
					>
						View Papers <Icon name="uil:arrow-right" class="ml-2" />
					</span>
				</div>

				<div
					@click="activeCategory = 'programming'"
					class="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-all hover:-translate-y-1 cursor-pointer"
				>
					<div
						class="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-3xl text-primary mb-6 group-hover:rotate-12 transition-transform"
					>
						<Icon name="uil:brackets-curly" />
					</div>
					<h3 class="text-2xl font-bold text-primary-dark mb-3">Programming</h3>
					<p class="text-gray-600 mb-6 line-clamp-3">
						Developing autonomous navigation algorithms using ROS 2, Computer
						Vision (YOLO), and SLAM.
					</p>
					<span
						class="inline-flex items-center text-secondary font-bold uppercase text-sm tracking-widest hover:underline"
					>
						View Papers <Icon name="uil:arrow-right" class="ml-2" />
					</span>
				</div>
			</div>

			<div v-else class="animate-fade-in">
				<div
					v-if="filteredArticles.length > 0"
					class="grid md:grid-cols-3 gap-8"
				>
					<div
						v-for="article in filteredArticles"
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
								<span>{{ article.date }}</span>
								<span>•</span>
								<span class="text-secondary font-bold">{{
									article.author
								}}</span>
							</div>
							<h2 class="text-xl font-bold text-primary-dark mb-3 line-clamp-2">
								<NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
							</h2>
							<p class="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
								{{ article.description }}
							</p>

							<NuxtLink
								:to="article.path"
								class="text-primary font-bold text-sm hover:underline flex items-center gap-1 mt-auto"
							>
								Read Research <Icon name="uil:arrow-right" />
							</NuxtLink>
						</div>
					</div>
				</div>

				<div v-else class="text-center py-20 text-gray-500">
					<Icon name="uil:file-search-alt" class="text-6xl mb-4" />
					<p>No documentation found in this category yet.</p>
					<p class="text-xs mt-2">
						Try creating files in content/research/{{ activeCategory }}/
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const activeCategory = ref("all");

const { data: allResearch } = await useAsyncData("research-all", () => {
	return queryCollection("content").where("path", "LIKE", "/research/%").all();
});

const filteredArticles = computed(() => {
	if (!allResearch.value) return [];

	return allResearch.value.filter((item) =>
		item.path.includes(`/research/${activeCategory.value}`)
	);
});
</script>

<style scoped>
.animate-fade-in {
	animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
