<template>
	<div>
		<section
			class="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary-dark"
		>
			<div class="absolute inset-0 z-0 opacity-60">
				<img
					src="https://cdn.prod.website-files.com/6375ab2c4a52e87f7789762c/64419681aa61208408b94320_RecreationalBoatingGuide_InternalImage_2_WebP.webp"
					alt="Ocean"
					class="w-full h-full object-cover"
				/>
			</div>
			<div
				class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/40"
			></div>

			<div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
				<h1
					class="text-5xl md:text-7xl font-extrabold text-surface mb-4 drop-shadow-lg"
				>
					BENGAWAN UV
				</h1>
				<p class="text-xl text-surface-dim mb-8 font-light tracking-wide">
					Universitas Sebelas Maret Autonomous Boat Team
				</p>
				<div class="flex justify-center gap-4">
					<NuxtLink
						to="/roboboat2026"
						class="px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-secondary-light transition shadow-lg"
					>
						Roboboat 2026 Report
					</NuxtLink>
				</div>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 -mt-20 relative z-20">
			<div
				class="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100"
			>
				<div class="grid md:grid-cols-2 gap-8 items-start">
					<div class="flex flex-col w-full">
						<h3
							class="text-xl font-bold text-primary mb-4 flex items-center gap-2"
						>
							<Icon name="uil:file-alt" class="text-secondary" /> Technical
							Design Report
						</h3>

						<div
							class="w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative group"
						>
							<iframe
								src="https://pdfobject.com/pdf/sample.pdf#toolbar=1&view=FitH"
								class="w-full h-full"
								title="Technical Report PDF"
							></iframe>

							<a
								href="https://pdfobject.com/pdf/sample.pdf"
								target="_blank"
								class="absolute bottom-4 right-4 px-4 py-2 bg-primary/90 text-white text-xs font-bold rounded shadow-lg hover:bg-secondary transition opacity-0 group-hover:opacity-100 flex items-center gap-2"
							>
								<Icon name="uil:external-link-alt" /> Open/Download
							</a>
						</div>

						<p class="mt-2 text-xs text-center text-gray-400">
							Trouble viewing?
							<a
								href="https://pdfobject.com/pdf/sample.pdf"
								target="_blank"
								class="underline hover:text-primary"
								>Click here</a
							>
							to open PDF directly.
						</p>
					</div>

					<div class="flex flex-col w-full gap-8">
						<div class="flex-1 flex flex-col justify-between">
							<h3
								class="text-xl font-bold text-primary mb-4 flex items-center gap-2"
							>
								<Icon name="uil:youtube" class="text-secondary" /> Team
								Introduction
							</h3>

							<div
								class="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative"
							>
								<iframe
									class="absolute inset-0 w-full h-full"
									src="https://www.youtube.com/embed/dQw4w9WgXcQ"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>

							<p class="mt-4 text-sm text-gray-500 italic">
								Watch our latest sea trial and system testing documentation.
							</p>
						</div>

						<div class="flex-1 flex flex-col justify-between h-full">
							<NuxtLink
								to="/boat"
								class="group relative flex items-center justify-center w-full h-32 md:h-40 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
							>
								<div class="absolute inset-0">
									<img
										src="https://cdn.prod.website-files.com/6375ab2c4a52e87f7789762c/64419681aa61208408b94320_RecreationalBoatingGuide_InternalImage_2_WebP.webp"
										alt="Mandakini Boat"
										class="w-full h-full object-cover transition duration-700 group-hover:scale-110 filter brightness-50 group-hover:brightness-75"
									/>
									<div
										class="absolute inset-0 bg-primary/60 mix-blend-multiply transition duration-300 group-hover:bg-primary/50"
									></div>
								</div>

								<div class="relative z-10 text-center">
									<h2
										class="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-wide"
									>
										LET'S SEE OUR BOAT!
									</h2>
									<div
										class="inline-flex items-center gap-2 text-secondary-light font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors"
									>
										Meet Mandakini 3.0
										<Icon name="uil:arrow-right" class="text-lg" />
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-surface border-y border-surface-dark">
			<div class="container mx-auto px-4">
				<div class="flex flex-col md:flex-row justify-between items-end mb-10">
					<div>
						<span
							class="text-secondary font-bold tracking-widest uppercase text-xs"
							>Hall of Fame</span
						>
						<h2 class="text-3xl font-bold text-primary-dark mt-2">
							Recent Achievements
						</h2>
					</div>
					<NuxtLink
						to="/profile"
						class="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition mt-4 md:mt-0"
					>
						View All Awards <Icon name="uil:arrow-right" />
					</NuxtLink>
				</div>

				<div class="grid md:grid-cols-4 gap-6">
					<div
						v-for="(item, index) in achievements.slice(0, 4)"
						:key="index"
						class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-primary group"
					>
						<div class="flex justify-between items-start mb-4">
							<span class="text-4xl font-bold text-primary/60">{{
								item.year
							}}</span>
							<Icon
								name="uil:trophy"
								class="text-2xl text-yellow-500 group-hover:scale-110 transition"
							/>
						</div>
						<h3 class="text-xl font-bold text-secondary leading-tight mb-2">
							{{ item.rank }}
						</h3>
						<p class="text-sm font-bold text-gray-500 uppercase mb-2">
							{{ item.competition }}
						</p>
						<p class="text-xs text-gray-600 line-clamp-2">
							{{ item.description }}
						</p>
					</div>
				</div>

				<div class="mt-8 text-center md:hidden">
					<NuxtLink to="/profile" class="text-primary font-bold text-sm"
						>View All Awards</NuxtLink
					>
				</div>
			</div>
		</section>

		<section class="py-20 bg-surface">
			<div
				class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
			>
				<div class="md:w-1/2">
					<h2 class="text-4xl font-bold text-primary mb-6">
						Innovating on Water
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed mb-6">
						Bengawan UV is a research team dedicated to developing Unmanned
						Surface Vehicles (USV). We combine mechanical engineering,
						electronics, and computer vision to solve real-world maritime
						challenges.
					</p>
					<NuxtLink
						to="/profile"
						class="text-primary font-bold hover:text-secondary flex items-center gap-2"
					>
						Read our History <Icon name="uil:arrow-right" />
					</NuxtLink>
				</div>
				<div class="md:w-1/2">
					<div
						class="aspect-video bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-gray-500"
					>
						[Foto Tim/Workshop]
					</div>
				</div>
			</div>
		</section>

		<HomeSponsorGrid />
	</div>
</template>

<script setup lang="ts">
import achievements from "../../assets/data/achievements.json";
</script>
