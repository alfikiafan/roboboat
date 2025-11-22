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
							<strong>Bengawan Unmanned Vehicle (Bengawan UV)</strong> is a
							specialized research team under the Faculty of Engineering,
							Universitas Sebelas Maret (UNS), Surakarta.
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

		<section class="py-16 bg-gray-50 relative">
			<div class="container mx-auto px-4 relative z-10">
				<h2 class="text-3xl font-bold text-primary-dark mb-10 text-center">
					Awards & Recognitions
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

						<div class="relative z-10 pl-4">
							<div
								class="flex justify-between items-center mb-4 pb-2 border-b border-gray-100"
							>
								<h4
									class="font-bold text-gray-800 uppercase tracking-widest text-sm"
								>
									{{ item.competition }}
								</h4>
								<span
									class="flex items-center gap-1 text-xs text-gray-400 font-medium"
								>
									<Icon name="uil:map-marker" /> {{ item.location }}
								</span>
							</div>

							<h3
								v-if="item.highlight"
								class="text-xl md:text-2xl font-extrabold text-primary-dark leading-tight mb-1 group-hover:text-primary transition-colors"
							>
								{{ item.highlight }}
							</h3>

							<h4
								v-if="item.sub_highlight"
								class="text-lg font-bold text-secondary mt-1 mb-2"
							>
								{{ item.sub_highlight }}
							</h4>

							<div
								v-if="item.equal_highlights && item.equal_highlights.length > 0"
								class="space-y-2 mt-2"
							>
								<h4
									v-for="(award, idx) in item.equal_highlights"
									:key="idx"
									class="text-lg font-bold text-secondary leading-tight group-hover:text-primary transition-colors"
								>
									{{ award }}
								</h4>
							</div>

							<div
								v-if="item.details && item.details.length > 0"
								class="mt-4 pt-4 border-t border-dashed border-gray-200"
							>
								<ul class="space-y-2">
									<li
										v-for="(detail, i) in item.details"
										:key="i"
										class="flex items-start gap-2 text-sm text-gray-600"
									>
										<Icon
											name="uil:award"
											class="text-gray-400 flex-shrink-0 mt-0.5"
										/>
										<span>{{ detail }}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div
			class="container mx-auto px-4 py-16 space-y-24 border-t border-gray-200"
		>
			<section id="supervisor" class="scroll-mt-24">
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

			<section id="team2026" class="scroll-mt-24">
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">2026 Team</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>

				<div class="flex mb-12">
					<div class="w-full max-w-xs">
						<TeamMemberCard
							v-for="member in teamData.team_leader"
							:key="member.name"
							v-bind="member"
						/>
					</div>
				</div>

				<div class="mb-16">
					<div class="flex items-center gap-4 mb-8">
						<h3
							class="text-xl font-bold text-primary tracking-widest text-left"
						>
							Technical Division
						</h3>
						<div class="h-px flex-grow bg-gray-200"></div>
					</div>
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						<TeamMemberCard
							v-for="member in teamData.technical_team"
							:key="member.name"
							v-bind="member"
						/>
					</div>
				</div>

				<div>
					<div class="flex items-center gap-4 mb-8">
						<h3
							class="text-xl font-bold text-primary tracking-widest text-left"
						>
							Non-Technical Division
						</h3>
						<div class="h-px flex-grow bg-gray-200"></div>
					</div>
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						<TeamMemberCard
							v-for="member in teamData.non_technical_team"
							:key="member.name"
							v-bind="member"
						/>
					</div>
				</div>
			</section>
		</div>

		<section
			id="past-teams"
			class="py-16 bg-gray-50 border-t border-gray-200 scroll-mt-24"
		>
			<div class="container mx-auto px-4">
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
						class="opacity-90 hover:opacity-100"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import teamData from "../../assets/data/team.json";
import achievements from "../../assets/data/achievements.json";
</script>
