<template>
	<div>
		<section class="bg-surface-dim text-primary py-20 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Team Profile</h1>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				We are engineers, researchers, and dreamers united by the ocean.
			</p>
		</section>

		<section class="py-16 container mx-auto px-4">
			<div class="flex flex-col md:flex-row gap-12 items-center">
				<div class="md:w-1/2">
					<img
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
						alt="Team Working"
						class="rounded-2xl shadow-xl"
					/>
				</div>
				<div class="md:w-1/2">
					<h2 class="text-3xl font-bold text-primary-dark mb-6">
						About Bengawan UV
					</h2>
					<div class="prose text-gray-600 text-lg leading-relaxed">
						<p class="mb-4">
							Bengawan Unmanned Vehicle (Bengawan UV) is a specialized research
							team under the Faculty of Engineering, Universitas Sebelas Maret
							(UNS), Surakarta.
						</p>
						<p class="mb-4">
							Established in 2021, our mission is to advance maritime technology
							through the development of autonomous surface vehicles (ASV). We
							provide a platform for students to apply engineering principles in
							solving real-world aquatic challenges.
						</p>
						<p>
							Our team consists of interdisciplinary students from Mechanical,
							Electrical, and Informatics Engineering working together to put
							UNS on the global map of maritime robotics.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-surface overflow-hidden">
			<div class="container mx-auto px-4 mb-12 text-center">
				<h2
					class="text-3xl font-bold text-primary-dark uppercase tracking-widest"
				>
					Our Journey
				</h2>
				<div class="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
			</div>
			<AboutTimeline />
		</section>

		<section class="py-20 bg-gray-50 relative overflow-hidden">
			<div
				class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
			>
				<Icon
					name="uil:trophy"
					class="absolute top-10 -left-10 text-[20rem] text-primary"
				/>
				<Icon
					name="uil:award"
					class="absolute bottom-10 -right-10 text-[20rem] text-secondary"
				/>
			</div>

			<div class="container mx-auto px-4 relative z-10">
				<h2
					class="text-4xl font-extrabold text-primary-dark mb-12 text-center uppercase tracking-widest"
				>
					<span class="border-b-4 border-secondary pb-2">Hall of Fame</span>
				</h2>

				<div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
					<div
						v-for="(item, index) in achievements"
						:key="index"
						class="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
					>
						<div
							class="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-secondary group-hover:w-3 transition-all"
						></div>

						<div class="relative z-10 pl-2">
							<h3
								class="text-xl md:text-2xl font-bold text-primary-dark leading-tight mb-2 group-hover:text-primary transition-colors"
							>
								{{ item.rank }}
							</h3>

							<div class="flex items-center flex-wrap gap-2 mb-4 text-sm">
								<span
									class="font-bold text-primary bg-primary/5 px-2 py-0.5 rounded"
								>
									{{ item.year }}
								</span>
								<span class="text-gray-300">|</span>
								<span
									class="font-bold text-secondary uppercase tracking-wide text-xs"
								>
									{{ item.competition }}
								</span>
							</div>

							<div class="text-sm text-gray-600 leading-relaxed mb-4">
								{{ item.description }}
							</div>

							<div
								class="flex items-center gap-2 text-xs text-gray-400 font-medium border-t border-gray-50 pt-3 mt-auto"
							>
								<span class="flex items-center gap-1"
									><Icon name="uil:map-marker" /> {{ item.location }}</span
								>
								<span>•</span>
								<span>{{ item.category }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div
			class="container mx-auto px-4 py-16 space-y-20 border-t border-gray-200"
		>
			<section>
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">Supervisors</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>
				<div class="grid md:grid-cols-4 gap-8 justify-center">
					<TeamMemberCard
						v-for="member in teamData.supervisors"
						:key="member.name"
						v-bind="member"
					/>
				</div>
			</section>

			<section>
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">2026 Team</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					<TeamMemberCard
						v-for="member in teamData.team_2026"
						:key="member.name"
						v-bind="member"
					/>
				</div>
			</section>

			<section>
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">Past Team</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
					<TeamMemberCard
						v-for="member in teamData.past_team"
						:key="member.name"
						v-bind="member"
						:role="member.year"
					/>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.grid > div {
	animation: fadeInUp 0.6s ease-out backwards;
}

.grid > div:nth-child(1) {
	animation-delay: 0.1s;
}
.grid > div:nth-child(2) {
	animation-delay: 0.2s;
}
.grid > div:nth-child(3) {
	animation-delay: 0.3s;
}
.grid > div:nth-child(4) {
	animation-delay: 0.4s;
}
.grid > div:nth-child(5) {
	animation-delay: 0.5s;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>

<script setup lang="ts">
import teamData from "../../assets/data/team.json";
import achievements from "../../assets/data/achievements.json";
</script>
