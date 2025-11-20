<template>
	<div>
		<section class="bg-surface text-primary py-20">
			<div class="container mx-auto px-4 text-center">
				<h1 class="text-4xl md:text-5xl font-bold mb-4">Meet The Team</h1>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					The dedicated minds behind Mandakini USV. We are a multidisciplinary
					team aiming for excellence in Roboboat 2026.
				</p>
			</div>
		</section>

		<section class="py-20 overflow-hidden">
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

		<div class="container mx-auto px-4 pb-20 space-y-20">
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
					<h2 class="text-3xl font-bold text-primary-dark">Team Leaders</h2>
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
				<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
	</div>
</template>

<script setup lang="ts">
import teamData from "../../assets/data/team.json";
</script>
