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

		<section class="py-16 container mx-auto px-4">
			<h2 class="text-3xl font-bold text-primary-dark mb-8 text-center">
				Awards & Recognitions
			</h2>
			<div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
				<div
					v-for="(item, index) in achievements"
					:key="index"
					class="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
				>
					<div class="flex-shrink-0 w-16 text-center">
						<span class="block text-2xl font-bold text-primary">{{
							item.year
						}}</span>
						<div class="w-full h-1 bg-secondary mt-1 rounded"></div>
					</div>
					<div>
						<h3 class="text-xl font-bold text-primary-dark">{{ item.rank }}</h3>
						<p class="font-bold text-gray-600 text-sm">
							{{ item.competition }}
						</p>
						<p class="text-xs text-gray-500 mt-1">
							{{ item.location }} • {{ item.category }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<div
			class="container mx-auto px-4 py-16 space-y-20 border-t border-gray-200"
		>
			<section>
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">Advisors</h2>
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
					<h2 class="text-3xl font-bold text-primary-dark">2026 Core Team</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>
				<div class="grid md:grid-cols-4 gap-8">
					<TeamMemberCard
						v-for="member in teamData.core_team"
						:key="member.name"
						v-bind="member"
					/>
				</div>
			</section>

			<section>
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">
						Technical Division
					</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-5 gap-6">
					<TeamMemberCard
						v-for="member in teamData.technical_team"
						:key="member.name"
						v-bind="member"
					/>
				</div>
			</section>

			<section>
				<div class="flex items-center gap-4 mb-8">
					<h2 class="text-3xl font-bold text-primary-dark">
						Non-Technical Division
					</h2>
					<div class="h-1 flex-grow bg-surface-dark rounded"></div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
					<TeamMemberCard
						v-for="member in teamData.non_technical"
						:key="member.name"
						v-bind="member"
					/>
				</div>
			</section>
		</div>

		<section class="py-16 bg-gray-50 border-t border-gray-200">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-2xl font-bold text-primary-dark mb-6">
					Past Team Leads & Contributors
				</h2>
				<div class="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
					<span
						v-for="i in 10"
						:key="i"
						class="px-4 py-2 bg-white rounded-full shadow-sm text-gray-600 text-sm border border-gray-200"
					>
						Alumni Name {{ i }} (202{{ i % 5 }})
					</span>
				</div>
				<p class="mt-6 text-xs text-gray-500">
					And many others who have contributed to our journey.
				</p>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import teamData from "../../assets/data/team.json";
import achievements from "../../assets/data/achievements.json";
</script>
