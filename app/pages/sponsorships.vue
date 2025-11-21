<template>
	<div>
		<section
			class="bg-primary-dark text-surface py-24 text-center relative overflow-hidden"
		>
			<div
				class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
			></div>

			<div class="container mx-auto px-4 relative z-10">
				<span
					class="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block"
					>Partnership Opportunity</span
				>
				<h1 class="text-4xl md:text-6xl font-extrabold mb-6">
					Support Innovation
				</h1>
				<p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
					Join us in shaping the future of maritime technology. Your support
					fuels our research and propels Indonesia onto the global stage.
				</p>
				<a
					href="mailto:official@buvroboboatuns.com"
					class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition shadow-lg"
				>
					<Icon name="uil:envelope-alt" class="text-xl" /> Contact for Proposal
				</a>
			</div>
		</section>

		<section class="py-20 bg-white">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16">
					<h2 class="text-3xl font-bold text-primary-dark">
						Why Partner With Us?
					</h2>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center hover:-translate-y-2 transition duration-300"
					>
						<div
							class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary text-3xl"
						>
							<Icon name="uil:globe" />
						</div>
						<h3 class="text-xl font-bold text-primary-dark mb-3">
							Global Exposure
						</h3>
						<p class="text-gray-600">
							Showcase your brand at international competitions in USA, reaching
							a global audience of engineers and tech enthusiasts.
						</p>
					</div>

					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center hover:-translate-y-2 transition duration-300"
					>
						<div
							class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary text-3xl"
						>
							<Icon name="uil:users-alt" />
						</div>
						<h3 class="text-xl font-bold text-primary-dark mb-3">
							Talent Access
						</h3>
						<p class="text-gray-600">
							Connect with the brightest engineering students from UNS for
							recruitment and internship opportunities.
						</p>
					</div>

					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center hover:-translate-y-2 transition duration-300"
					>
						<div
							class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary text-3xl"
						>
							<Icon name="uil:flask" />
						</div>
						<h3 class="text-xl font-bold text-primary-dark mb-3">
							R&D Collaboration
						</h3>
						<p class="text-gray-600">
							Collaborate on research projects and testing of maritime
							technologies using our autonomous platforms.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-50">
			<div class="container mx-auto px-4">
				<h2 class="text-3xl font-bold text-primary-dark text-center mb-12">
					Sponsorship Packages
				</h2>

				<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
					<div
						v-for="pkg in data.packages"
						:key="pkg.name"
						class="bg-white rounded-2xl shadow-sm border-t-8 overflow-hidden transition-transform hover:shadow-xl"
						:class="[
							pkg.color,
							pkg.highlight
								? 'transform md:-translate-y-4 z-10 shadow-2xl'
								: '',
						]"
					>
						<div
							v-if="pkg.highlight"
							class="bg-secondary text-white text-center text-xs font-bold py-1 uppercase tracking-widest"
						>
							Most Popular
						</div>

						<div class="p-8 text-center">
							<h3 class="text-2xl font-bold text-primary-dark mb-2">
								{{ pkg.name }}
							</h3>
							<p class="text-sm text-gray-500 mb-6">Starting from</p>
							<div class="text-3xl font-extrabold text-primary mb-6">
								{{ pkg.price }}
							</div>

							<a
								href="mailto:official@buvroboboatuns.com"
								class="block w-full py-3 rounded-lg font-bold transition border-2"
								:class="
									pkg.highlight
										? 'bg-primary text-white border-primary hover:bg-primary-light'
										: 'bg-white text-primary border-primary hover:bg-surface'
								"
							>
								Choose {{ pkg.name }}
							</a>
						</div>

						<div class="bg-gray-50 p-8 border-t border-gray-100">
							<ul class="space-y-3 text-sm text-gray-600 text-left">
								<li
									v-for="benefit in pkg.benefits"
									:key="benefit"
									class="flex items-start gap-3"
								>
									<Icon
										name="uil:check"
										class="text-green-500 text-xl flex-shrink-0"
									/>
									<span>{{ benefit }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-white border-t border-gray-200">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-2xl font-bold text-primary mb-8">Previous Partners</h2>
				<p class="text-gray-500 mb-12">Trusted by industry leaders.</p>

				<div class="flex flex-wrap justify-center gap-6 md:gap-10 opacity-70">
					<div
						v-for="sponsor in data.past_sponsors"
						:key="sponsor"
						class="px-6 py-3 bg-gray-100 rounded-lg font-bold text-gray-400 text-xl uppercase tracking-wider select-none"
					>
						{{ sponsor }}
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import data from "../../assets/data/sponsorships.json";
</script>
