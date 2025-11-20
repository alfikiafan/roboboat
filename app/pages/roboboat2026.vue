<template>
	<div>
		<section class="bg-primary text-surface py-20">
			<div class="container mx-auto px-4 text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">Roboboat 2026</h1>
				<p class="text-xl text-surface-dim max-w-2xl mx-auto mb-8">
					Documentation of our autonomous strategies and technical design for
					the world's premier ASV competition.
				</p>
				<a
					href="#"
					class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-light transition shadow-lg"
				>
					<Icon name="uil:file-download-alt" class="text-2xl" />
					Download Technical Design Report
				</a>
			</div>
		</section>

		<section class="py-16 bg-white border-b border-gray-100">
			<div class="container mx-auto px-4">
				<div class="grid md:grid-cols-3 gap-12 items-start">
					<div class="md:col-span-2">
						<div>
							<div
								class="inline-block px-3 py-1 bg-surface text-primary text-xs font-bold uppercase tracking-widest rounded mb-4"
							>
								Competition Overview
							</div>
							<h2 class="text-xl md:text-4xl font-bold text-primary-dark mb-6">
								What is Roboboat?
							</h2>
							<div class="inline-block shadow-sm mb-3">
								<img
									src="/images/logo/roboboat-logo.webp"
									alt="Roboboat Competition Logo"
									class="h-24 md:h-32 w-auto object-contain"
								/>
							</div>
						</div>

						<div class="prose text-gray-600 leading-relaxed">
							<p class="mb-4">
								<strong>RoboBoat</strong> is an international student
								competition organized by
								<a
									href="https://robonation.org/"
									target="_blank"
									class="text-secondary font-bold hover:underline"
									>RoboNation</a
								>. Teams from around the world design and build Autonomous
								Surface Vehicles (ASVs) to tackle real-world maritime
								challenges.
							</p>
							<p>
								The competition tests the student's ability to engineer a
								robotic boat that can navigate autonomously through a course
								marked by buoys, avoid obstacles, and perform complex tasks such
								as docking, object delivery, and acoustic localization without
								human intervention.
							</p>
						</div>
					</div>

					<div
						class="bg-surface rounded-2xl p-8 shadow-sm border border-surface-dark relative overflow-hidden h-full"
					>
						<Icon
							name="uil:trophy"
							class="absolute -right-6 -bottom-6 text-9xl text-primary opacity-5"
						/>

						<h3
							class="text-xl font-bold text-primary mb-6 flex items-center gap-2"
						>
							<Icon name="uil:info-circle" /> Key Facts
						</h3>

						<ul class="space-y-4">
							<li
								class="flex items-start gap-3 pb-4 border-b border-gray-300/50"
							>
								<div
									class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm flex-shrink-0"
								>
									<Icon name="uil:map-marker" class="text-xl" />
								</div>
								<div>
									<p class="font-bold text-gray-900">Location</p>
									<p class="text-gray-600">
										Nathan Benderson Park, Sarasota, Florida, USA
									</p>
								</div>
							</li>

							<li
								class="flex items-start gap-3 pb-4 border-b border-gray-300/50"
							>
								<div
									class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm flex-shrink-0"
								>
									<Icon name="uil:calendar-alt" class="text-xl" />
								</div>
								<div>
									<p class="font-bold text-gray-900">Event Date</p>
									<p class="text-gray-600">February 19-24, 2026</p>
								</div>
							</li>

							<li class="flex items-start gap-3">
								<div
									class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm flex-shrink-0"
								>
									<Icon name="uil:ship" class="text-xl" />
								</div>
								<div>
									<p class="font-bold text-gray-900">Theme</p>
									<p class="text-gray-600">Storm Response</p>
								</div>
							</li>
						</ul>

						<div class="mt-6 text-center">
							<a
								href="https://roboboat.org/"
								target="_blank"
								class="inline-block px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-light transition"
							>
								Visit RoboBoat Website
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-gray-50">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-primary-dark mb-2">
						Autonomy Challenge
					</h2>
					<p class="text-gray-600">
						Explore our technical approach for each competition task below.
					</p>
				</div>

				<ClientOnly fallback-tag="div" fallback="Loading Content...">
					<div class="grid md:grid-cols-12 gap-12">
						<div class="md:col-span-4 lg:col-span-3">
							<div
								class="sticky top-24 bg-white rounded-xl shadow-md border border-surface-dark overflow-hidden"
							>
								<div
									class="p-4 bg-primary-dark text-surface font-bold uppercase tracking-wider text-sm"
								>
									Competition Tasks
								</div>
								<div class="flex flex-col">
									<button
										v-for="(task, index) in tasks"
										:key="index"
										@click="setTab(index)"
										class="text-left px-6 py-4 border-b border-gray-100 hover:bg-surface transition-colors flex items-center justify-between group"
										:class="
											activeTab === index
												? 'bg-surface text-primary font-bold border-l-4 border-l-primary'
												: 'text-gray-600 border-l-4 border-l-transparent'
										"
									>
										{{ task.title }}
										<Icon
											name="uil:angle-right"
											:class="
												activeTab === index
													? 'opacity-100'
													: 'opacity-0 group-hover:opacity-100'
											"
											class="transition-opacity"
										/>
									</button>
								</div>
							</div>
						</div>

						<div class="md:col-span-8 lg:col-span-9">
							<div v-for="(task, index) in tasks" :key="task.title">
								<div
									v-if="activeTab === index"
									class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in"
								>
									<div class="flex items-start justify-between mb-6">
										<div>
											<span
												class="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block"
												>Task Detail</span
											>
											<h2 class="text-3xl font-bold text-primary-dark">
												{{ task.title }}
											</h2>
										</div>
										<div
											class="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary text-2xl font-bold"
										>
											{{ index + 1 }}
										</div>
									</div>

									<p class="text-gray-700 text-lg leading-relaxed mb-8">
										{{ task.description }}
									</p>

									<div class="mb-8">
										<h3
											class="text-lg font-bold text-primary mb-4 flex items-center gap-2"
										>
											<Icon name="uil:video" /> Strategy Simulation
										</h3>
										<div
											class="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg relative"
										>
											<div
												class="absolute inset-0 flex items-center justify-center text-gray-500"
											>
												<span v-if="!task.video">No Video Available Yet</span>
												<iframe
													v-else
													:src="task.video"
													class="w-full h-full"
													title="YouTube video player"
													frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowfullscreen
												></iframe>
											</div>
										</div>
									</div>

									<div class="bg-surface rounded-lg p-6">
										<h3 class="font-bold text-primary mb-3">Key Approach:</h3>
										<ul class="space-y-2">
											<li
												v-for="point in task.points"
												:key="point"
												class="flex items-start gap-2 text-gray-700"
											>
												<Icon
													name="uil:check-circle"
													class="text-secondary mt-1 flex-shrink-0"
												/>
												<span>{{ point }}</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ClientOnly>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// State
const activeTab = ref(0);

const setTab = (index: number) => {
	activeTab.value = index;
};

// Data Tasks
const tasks = [
	{
		title: "Task 1: Evacuation Route",
		description:
			"The USV must navigate through a designated channel marked by buoys representing an evacuation route without touching the obstacles.",
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		points: [
			"Using LIDAR for obstacle detection.",
			"Path planning algorithm using A* (A-Star).",
			"Real-time heading correction.",
		],
	},
	{
		title: "Task 2: Debris Clearance",
		description:
			"Identifying and interacting with objects representing debris. The boat must push the correct colored object into a designated zone.",
		video: "",
		points: [
			"Color detection using YoloV8.",
			"Precise motor control for pushing mechanism.",
			"Object tracking logic.",
		],
	},
	{
		title: "Task 3: Emergency Response Sprint",
		description:
			"A speed challenge where the USV must travel from Point A to Point B in the shortest time possible while avoiding static obstacles.",
		video: "",
		points: [
			"Max throttle optimization.",
			"Hydrodynamic stability control.",
			"Reactive obstacle avoidance.",
		],
	},
	{
		title: "Task 4: Supply Drop",
		description:
			"Delivering a payload (ball) into a specific target area identified by an image or symbol.",
		video: "",
		points: [
			"Symbol recognition.",
			"Servo-based release mechanism.",
			"Wind compensation calculation.",
		],
	},
	{
		title: "Task 5: Navigate the Marina",
		description:
			"Complex maneuvering through a narrow acoustic channel where GPS might be denied.",
		video: "",
		points: [
			"Acoustic localization (Hydrophone).",
			"IMU-based dead reckoning.",
			"Close-range proximity sensors.",
		],
	},
	{
		title: "Task 6: Harbor Alert",
		description:
			"Detecting a sound signal and moving towards the source while identifying the correct docking bay.",
		video: "",
		points: [
			"Signal processing (FFT).",
			"Sound source localization.",
			"Automated docking procedure.",
		],
	},
];
</script>

<style scoped>
.animate-fade-in {
	animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(5px) scale(0.98);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}
</style>
