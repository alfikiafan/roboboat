<template>
	<div class="bg-white min-h-screen">
		<section
			class="bg-primary-dark text-surface py-20 text-center relative overflow-hidden"
		>
			<div
				class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"
			></div>

			<div class="container mx-auto px-4 relative z-10">
				<h1 class="text-4xl font-bold mb-4">Technical Design Reports</h1>
				<p class="text-lg text-gray-300 max-w-2xl mx-auto">
					Archive of our engineering documentation submitted for international
					competitions.
				</p>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 max-w-5xl">
			<div class="space-y-6">
				<div
					v-for="(paper, index) in papersData"
					:key="index"
					@click="openPdf(paper.link)"
					class="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 gap-6 cursor-pointer"
				>
					<div class="flex items-start gap-4 flex-grow">
						<div
							class="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
						>
							<Icon name="uil:file-alt" />
						</div>

						<div>
							<div class="flex items-center gap-2 text-xs mb-1">
								<span
									class="font-bold text-secondary uppercase tracking-widest"
									>{{ paper.competition }}</span
								>
								<span class="text-gray-300">|</span>
								<span class="font-bold text-primary">{{ paper.year }}</span>
							</div>

							<h3
								class="text-xl md:text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors leading-tight"
							>
								{{ paper.boat_name }}
							</h3>
							<p class="text-sm text-gray-500 mt-1">
								Technical Design Report Document
							</p>
						</div>
					</div>

					<div
						class="flex flex-col md:flex-row items-center gap-4 md:gap-6 flex-shrink-0 w-full md:w-auto"
					>
						<div
							class="w-full md:w-48 h-32 md:h-24 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative group-hover:border-primary/30 transition-all"
						>
							<div
								class="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors z-10"
							></div>
							<img
								:src="paper.image"
								:alt="paper.boat_name + ' Design'"
								class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
							/>
							<div
								class="absolute bottom-1 right-1 bg-white/90 backdrop-blur text-[10px] px-2 py-0.5 rounded text-gray-700 font-bold z-20 shadow-sm"
							>
								Design Preview
							</div>
						</div>

						<div
							class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface text-primary font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-sm whitespace-nowrap flex-shrink-0"
						>
							<Icon name="uil:file-download" class="text-lg" />
							Download PDF
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import papersData from "../../assets/data/papers.json";

const openPdf = (link: string) => {
	if (link) {
		window.open(link, "_blank");
	}
};
</script>
