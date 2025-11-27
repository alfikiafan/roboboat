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
					BENGAWAN UV ROBOBOAT TEAM
				</h1>
				<p class="text-xl text-surface-dim mb-8 font-light tracking-wide">
					Universitas Sebelas Maret
				</p>
				<div class="flex justify-center gap-4">
					<NuxtLink
						to="/roboboat2026"
						class="px-8 py-3 bg-secondary text-white font-bold rounded-3xl hover:bg-secondary-light transition shadow-lg"
					>
						Our Next Competition
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

		<section
			class="py-20 bg-surface border-b border-gray-200 relative overflow-hidden"
		>
			<div
				class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
			></div>
			<div
				class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
			></div>

			<div class="container mx-auto px-4 relative z-10">
				<div class="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
					<div class="md:w-1/2 w-full relative group">
						<div
							class="absolute inset-0 bg-primary rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
						></div>

						<img
							src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
							alt="Team Working"
							class="relative w-full h-auto rounded-2xl shadow-xl border-4 border-white z-10"
						/>

						<div
							class="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow"
						>
							<div
								class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"
							>
								<Icon name="uil:rocket" class="text-2xl" />
							</div>
							<div>
								<p
									class="text-[10px] text-gray-400 uppercase font-bold tracking-wider"
								>
									Established
								</p>
								<p class="text-lg font-bold text-primary-dark">2021</p>
							</div>
						</div>
					</div>

					<div class="md:w-1/2 w-full">
						<div
							class="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm"
						>
							<span
								class="w-2 h-2 bg-secondary rounded-full animate-pulse"
							></span>
							<span
								class="text-xs font-bold text-gray-500 uppercase tracking-widest"
								>Who We Are</span
							>
						</div>

						<h2
							class="text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight"
						>
							About Bengawan UV
						</h2>

						<div
							class="prose prose-lg text-gray-600 leading-relaxed mb-8 text-justify"
						>
							<p>
								<strong>Bengawan Unmanned Vehicle (Bengawan UV)</strong> is a
								specialized research team under the Faculty of Engineering,
								Universitas Sebelas Maret (UNS), Surakarta.
							</p>
							<p>
								Established in 2021, our mission is to advance maritime
								technology through the development of autonomous surface
								vehicles (ASV). We provide a platform for students to apply
								engineering principles in solving real-world aquatic challenges.
							</p>
							<p>
								Our team consists of interdisciplinary students from Mechanical,
								Electrical, and Informatics Engineering working together to put
								UNS on the global map of maritime robotics.
							</p>
						</div>

						<div>
							<NuxtLink
								to="/profile"
								class="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								<span>Meet Our Team</span>
								<Icon name="uil:arrow-right" class="text-xl" />
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-white border-b border-surface-dark">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<span
						class="text-secondary font-bold tracking-widest uppercase text-xs"
						>Hall of Fame</span
					>
					<h2 class="text-3xl md:text-4xl font-bold text-primary-dark mt-2">
						Previous Achievements
					</h2>

					<div class="mt-6 inline-block">
						<span
							class="bg-gray-100 text-primary-dark px-6 py-2 rounded-full font-extrabold text-xl tracking-wide border border-gray-200"
						>
							ROBOBOAT 2025
						</span>
					</div>
				</div>

				<div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
					<div
						class="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-xl relative overflow-hidden group"
					>
						<Icon
							name="uil:ship"
							class="absolute -bottom-6 -left-6 text-9xl text-white/10 group-hover:scale-110 transition-transform duration-700"
						/>
						<Icon
							name="uil:trophy"
							class="absolute top-6 right-6 text-4xl text-secondary/80"
						/>

						<div class="relative z-10">
							<h3
								class="text-2xl font-bold text-white/90 uppercase tracking-widest mb-4 border-b border-white/20 pb-4 inline-block"
							>
								Autonomy Challenge
							</h3>
							<div class="text-5xl md:text-7xl font-extrabold text-white mb-4">
								2nd Place
							</div>
							<p class="text-white/80 text-sm font-medium">
								Main Competition Category
							</p>
						</div>
					</div>

					<div
						class="bg-surface rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 flex flex-col justify-center"
					>
						<div
							class="flex items-center gap-4 mb-6 border-b border-gray-300 pb-6"
						>
							<div
								class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-2xl shadow-sm"
							>
								<Icon name="uil:file-check-alt" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-primary-dark">
									Design Documentation
								</h3>
								<p class="text-xs text-gray-500 uppercase tracking-wide">
									Documentation Category
								</p>
							</div>
						</div>

						<div class="mb-6">
							<p class="text-3xl font-extrabold text-primary-dark">6th Place</p>
							<p class="text-sm font-bold text-gray-500 uppercase">
								Overall Design Documentation
							</p>
						</div>

						<ul class="space-y-3">
							<li class="flex items-start gap-3">
								<Icon
									name="uil:award"
									class="text-secondary text-xl flex-shrink-0 mt-0.5"
								/>
								<span class="text-gray-700"
									><strong>3rd Place</strong> Technical Design Report</span
								>
							</li>
							<li class="flex items-start gap-3">
								<Icon
									name="uil:award"
									class="text-secondary text-xl flex-shrink-0 mt-0.5"
								/>
								<span class="text-gray-700"
									><strong>5th Place</strong> Team Website</span
								>
							</li>
							<li class="flex items-start gap-3">
								<Icon
									name="uil:award"
									class="text-secondary text-xl flex-shrink-0 mt-0.5"
								/>
								<span class="text-gray-700"
									><strong>7th Place</strong> Team Video Introduction</span
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="text-center">
					<NuxtLink
						to="/profile"
						class="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md"
					>
						See All Achievements <Icon name="uil:arrow-right" />
					</NuxtLink>
				</div>
			</div>
		</section>

		<HomeSponsorGrid />
	</div>
</template>

<script setup lang="ts">
import achievements from "../../assets/data/achievements.json";
</script>
