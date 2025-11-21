<template>
	<div>
		<section class="bg-surface-dim py-20 text-center">
			<div class="container mx-auto px-4">
				<h1 class="text-4xl font-bold text-primary mb-4">Technical Papers</h1>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Archive of our Technical Design Reports (TDR) submitted for
					international competitions.
				</p>
			</div>
		</section>

		<section class="py-16 bg-white min-h-screen">
			<div class="container mx-auto px-4 max-w-4xl">
				<div class="space-y-4">
					<div
						v-for="(paper, index) in papersData"
						:key="index"
						class="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300"
					>
						<div class="flex items-start gap-4 mb-4 md:mb-0">
							<div
								class="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform"
							>
								<Icon name="uil:file-alt" />
							</div>

							<div>
								<span
									class="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block"
								>
									{{ paper.competition }}
								</span>
								<h3
									class="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors"
								>
									{{ paper.title }}
								</h3>
								<p class="text-sm text-gray-500 mt-1">
									Published in {{ paper.year }}
								</p>
							</div>
						</div>

						<a
							:href="paper.link"
							target="_blank"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
						>
							<Icon name="uil:file-download" class="text-lg" />
							Download PDF
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import papersData from "../../assets/data/papers.json";
</script>
