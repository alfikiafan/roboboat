<template>
	<div>
		<section class="bg-surface-dim py-20 text-center">
			<h1 class="text-4xl font-bold text-primary mb-4">Team Activities</h1>
			<p class="text-lg text-gray-600">Captain's Log & Daily Updates</p>
		</section>

		<section class="py-16 container mx-auto px-4 max-w-4xl">
			<div
				class="relative border-l-4 border-gray-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12"
			>
				<div v-for="item in activities" :key="item.path" class="relative group">
					<div
						class="absolute -left-[42px] md:-left-[60px] top-2 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"
					></div>

					<span
						class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block"
					>
						{{ item.date }} • {{ item.location || "Surakarta" }}
					</span>

					<NuxtLink
						:to="item.path"
						class="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
					>
						<div class="md:flex">
							<div class="md:w-1/3 h-48 md:h-auto relative">
								<img :src="item.image" class="w-full h-full object-cover" />
							</div>
							<div class="p-6 md:w-2/3 flex flex-col justify-center">
								<h2
									class="text-xl font-bold text-primary-dark mb-3 group-hover:text-secondary transition-colors"
								>
									{{ item.title }}
								</h2>
								<p class="text-gray-600 text-sm line-clamp-2 mb-4">
									{{ item.description }}
								</p>
								<span
									class="text-primary font-bold text-sm flex items-center gap-2"
								>
									Read Full Log <Icon name="uil:arrow-right" />
								</span>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
// Fetch data dari folder activities
const { data: activities } = await useAsyncData("activities-list", () => {
	return queryCollection("content")
		.where("path", "LIKE", "/activities/%")
		.order("date", "DESC")
		.all();
});
</script>
