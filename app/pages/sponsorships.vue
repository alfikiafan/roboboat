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
					class="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse"
					>Partnership Opportunity</span
				>
				<h1 class="text-4xl md:text-6xl font-extrabold mb-6">
					Support Innovation
				</h1>
				<p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
					Join us in shaping the future of maritime technology.
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
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-3xl font-bold text-primary-dark mb-12">
					Why Partner With Us?
				</h2>
				<div class="grid md:grid-cols-3 gap-8">
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center"
					>
						<div class="text-4xl text-primary mb-4">
							<Icon name="uil:globe" />
						</div>
						<h3 class="font-bold text-lg mb-2">Global Exposure</h3>
						<p class="text-sm text-gray-600">
							Brand visibility in international competitions.
						</p>
					</div>
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center"
					>
						<div class="text-4xl text-primary mb-4">
							<Icon name="uil:users-alt" />
						</div>
						<h3 class="font-bold text-lg mb-2">Talent Access</h3>
						<p class="text-sm text-gray-600">
							Recruit top engineering students.
						</p>
					</div>
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center"
					>
						<div class="text-4xl text-primary mb-4">
							<Icon name="uil:flask" />
						</div>
						<h3 class="font-bold text-lg mb-2">R&D Collaboration</h3>
						<p class="text-sm text-gray-600">
							Test your tech on our platforms.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-50" id="packages">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16">
					<h2 class="text-3xl font-bold text-primary-dark">
						Sponsorship Packages
					</h2>
					<p class="text-gray-500 mt-2">
						Choose the tier that fits your branding goals.
					</p>
				</div>

				<div class="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
					<div
						v-for="pkg in data.packages"
						:key="pkg.name"
						class="w-full md:w-[48%] lg:w-[30%] xl:w-[18%] flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent group relative"
						:class="getTheme(pkg.name).hoverBorder"
					>
						<div
							class="p-6 text-center text-white relative overflow-hidden"
							:class="getTheme(pkg.name).headerBg"
						>
							<div
								class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"
							></div>

							<h3
								class="text-lg font-bold uppercase tracking-widest mb-3 relative z-10 drop-shadow-sm"
							>
								{{ pkg.name }}
							</h3>

							<div
								class="text-2xl md:text-3xl font-extrabold relative z-10 leading-none drop-shadow-md"
							>
								{{ pkg.price }}
							</div>
						</div>

						<div class="p-5 flex-grow bg-white">
							<ul class="space-y-3 text-xs">
								<li
									v-for="(feature, i) in pkg.features"
									:key="i"
									class="flex justify-between items-start pb-2 border-b border-dashed border-gray-100 last:border-0"
								>
									<span
										class="text-gray-500 font-medium text-left w-1/2 pt-0.5"
										>{{ feature.label }}</span
									>

									<div class="w-1/2 text-right font-bold">
										<Icon
											v-if="feature.value === true"
											name="uil:check-circle"
											class="text-lg"
											:class="getTheme(pkg.name).iconColor"
										/>
										<Icon
											v-else-if="feature.value === false"
											name="uil:multiply"
											class="text-gray-600 text-lg"
										/>

										<div v-else class="flex flex-col items-end">
											<span class="text-gray-800">{{ feature.value }}</span>
											<span
												v-if="feature.subtext"
												class="text-[9px] text-gray-700 mt-0.5 italic font-normal text-right block leading-tight"
											>
												{{ feature.subtext }}
											</span>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div class="p-5 pt-0 mt-auto bg-white">
							<a
								href="mailto:official@buvroboboatuns.com"
								class="block w-full py-3 rounded-xl font-bold text-center text-sm transition-all shadow-sm border-2"
								:class="getTheme(pkg.name).btnClass"
							>
								Select {{ pkg.name }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-white border-t border-gray-200 relative z-10">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-3xl font-bold text-primary-dark mb-12">Our Sponsors</h2>

				<div
					class="flex flex-wrap justify-center gap-8 items-center max-w-5xl mx-auto"
				>
					<a
						v-for="(sponsor, index) in data.current_sponsors"
						:key="index"
						:href="sponsor.link || '#'"
						target="_blank"
						class="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center"
					>
						<img
							:src="sponsor.logo"
							:alt="sponsor.name"
							class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
						/>
					</a>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-100 border-t border-gray-200 relative">
			<div
				class="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/skulls.png')]"
			></div>

			<div class="container mx-auto px-4 text-center relative z-10">
				<h2
					class="text-2xl font-bold text-gray-600 mb-10 uppercase tracking-widest"
				>
					Past Sponsors
				</h2>

				<div
					class="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-6xl mx-auto"
				>
					<div
						v-for="sponsor in data.past_sponsors"
						:key="sponsor.name"
						class="group w-24 h-16 md:w-32 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
						:title="sponsor.name"
					>
						<img
							:src="sponsor.logo"
							:alt="sponsor.name"
							class="max-w-full max-h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import data from "../../assets/data/sponsorships.json";

const getTheme = (name: string) => {
	switch (name) {
		case "Main Sponsor":
			return {
				// Gradient Emas Tua Gelap (Sangat Premium)
				headerBg: "bg-gradient-to-br from-yellow-700 to-yellow-900",
				// Tombol Solid
				btnClass:
					"bg-gradient-to-r from-yellow-700 to-yellow-800 text-white hover:shadow-lg border-transparent",
				iconColor: "text-yellow-800",
				hoverBorder: "group-hover:border-yellow-700",
			};
		case "Platinum":
			return {
				// Gradient Metalik Gelap (Corporate/High Tier)
				headerBg: "bg-gradient-to-br from-slate-600 to-slate-800",
				btnClass:
					"bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:shadow-lg border-transparent",
				iconColor: "text-slate-700",
				hoverBorder: "group-hover:border-slate-600",
			};
		case "Gold":
			return {
				// Gradient Emas "Rich" (Amber), bukan kuning neon
				headerBg: "bg-gradient-to-br from-amber-400 to-yellow-600",
				// Tombol Outline agar kasta di bawah Platinum
				btnClass:
					"bg-white text-yellow-700 border-yellow-500 hover:bg-yellow-50",
				iconColor: "text-yellow-600",
				hoverBorder: "group-hover:border-yellow-500",
			};
		case "Silver":
			return {
				// Gradient Perak
				headerBg: "bg-gradient-to-br from-gray-300 to-gray-500",
				btnClass: "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
				iconColor: "text-gray-500",
				hoverBorder: "group-hover:border-gray-400",
			};
		case "Bronze":
			return {
				// Gradient Perunggu/Tembaga
				headerBg: "bg-gradient-to-br from-orange-300 to-orange-500",
				btnClass:
					"bg-white text-orange-600 border-orange-300 hover:bg-orange-50",
				iconColor: "text-orange-500",
				hoverBorder: "group-hover:border-orange-400",
			};
		default:
			return {
				headerBg: "bg-primary",
				btnClass: "bg-primary text-white",
				iconColor: "text-primary",
				hoverBorder: "group-hover:border-primary",
			};
	}
};
</script>
