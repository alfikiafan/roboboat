<template>
	<div>
		<section class="bg-primary text-surface pt-20 pb-16">
			<div class="container mx-auto px-4 text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-6">ROBOBOAT 2026</h1>

				<div class="flex flex-wrap justify-center gap-4 mb-8">
					<div
						class="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2 text-sm font-medium"
					>
						<Icon name="uil:map-marker" class="text-secondary text-lg" />
						Sarasota, Florida
					</div>
					<div
						class="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2 text-sm font-medium"
					>
						<Icon name="uil:calendar-alt" class="text-secondary text-lg" />
						March 2026
					</div>
					<div
						class="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2 text-sm font-medium"
					>
						<Icon name="uil:ship" class="text-secondary text-lg" /> Storm
						Response
					</div>
				</div>

				<p class="text-xl text-surface-dim max-w-2xl mx-auto">
					Documentation of our autonomous strategies and technical design for
					the world's premier ASV competition.
				</p>
			</div>
		</section>

		<section class="py-16 bg-white border-b border-gray-100">
			<div class="container mx-auto px-4">
				<div class="grid md:grid-cols-12 gap-12 items-center">
					<div class="md:col-span-4 flex justify-center">
						<img
							src="/images/logo/roboboat-logo.webp"
							alt="Roboboat Logo"
							class="w-full max-w-[250px] object-contain"
						/>
					</div>
					<div class="md:col-span-8">
						<h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
							What is Roboboat?
						</h2>
						<div class="prose text-gray-600 leading-relaxed mb-6">
							<p>
								RoboBoat is an international student program established to
								generate, cultivate, and enhance a community of innovators
								capable of making substantive contributions to the Autonomous
								Surface Vehicle (ASV) domain.
							</p>
							<p>
								The vision is achieved by providing a venue and mechanism
								whereby practitioners of robotics and maritime autonomy come
								together at RoboBoat to share knowledge, innovate, and
								collaboratively advance the technology of ASV systems.
							</p>
						</div>
						<a
							href="https://roboboat.org/"
							target="_blank"
							class="inline-flex items-center gap-2 text-secondary font-bold hover:underline text-lg"
						>
							Visit Official Website <Icon name="uil:external-link-alt" />
						</a>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-surface">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12 max-w-4xl mx-auto">
					<span
						class="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block"
						>Competition Requirements</span
					>
					<h2 class="text-3xl font-bold text-primary-dark mb-4">
						What’s on Roboboat 2026?
					</h2>
					<p class="text-gray-600">
						Teams must submit a technical design report, team website, and team
						introduction video before the event, then present their design
						strategy and undergo an expert system review on-site.
					</p>
				</div>

				<div class="space-y-12 max-w-5xl mx-auto">
					<div
						class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary"
					>
						<h3 class="text-2xl font-bold text-primary mb-4">
							Technical Design Report
						</h3>
						<p class="text-gray-700 mb-6 leading-relaxed">
							The Technical Design Report (TDR) outlines the team’s design
							principles and competition strategy, explaining the rationale
							behind the selected autonomy challenge tasks.
						</p>
						<div
							class="w-full h-96 bg-gray-100 rounded border border-gray-200 relative group"
						>
							<iframe
								src="https://pdfobject.com/pdf/sample.pdf"
								class="w-full h-full"
								title="TDR Preview"
							></iframe>
							<a
								href="https://pdfobject.com/pdf/sample.pdf"
								target="_blank"
								class="absolute bottom-4 right-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded hover:bg-secondary transition shadow-lg flex items-center gap-2"
							>
								<Icon name="uil:file-download" /> Download PDF
							</a>
						</div>
					</div>

					<div
						class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-secondary"
					>
						<h3 class="text-2xl font-bold text-primary mb-4">Team Website</h3>
						<p class="text-gray-700 leading-relaxed">
							The Team Website is an online platform showcasing the team’s
							identity and project. It contains team information, vessel photos
							or videos, development documentation, design records, and a blog
							tracking the vessel’s progress.
						</p>
					</div>

					<div
						class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary"
					>
						<h3 class="text-2xl font-bold text-primary mb-4">
							Team Introduction Video
						</h3>
						<p class="text-gray-700 mb-6 leading-relaxed">
							Team Introduction Video is a video created by the team to
							introduce the team members and highlight the team’s personality.
						</p>
						<div
							class="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg"
						>
							<iframe
								class="w-full h-full"
								src="https://www.youtube.com/embed/dQw4w9WgXcQ"
								frameborder="0"
								allowfullscreen
							></iframe>
						</div>
					</div>

					<div class="grid md:grid-cols-2 gap-8">
						<div
							class="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary h-full"
						>
							<h3 class="text-xl font-bold text-primary mb-3">
								Design Strategy Presentation
							</h3>
							<p class="text-sm text-gray-700 leading-relaxed">
								Design Strategy Presentation is a presentation prepared by the
								team to explain their design strategy to the judges during the
								onsite Roboboat competition.
							</p>
						</div>
						<div
							class="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary h-full"
						>
							<h3 class="text-xl font-bold text-primary mb-3">
								System Assessment
							</h3>
							<p class="text-sm text-gray-700 leading-relaxed">
								Judges will inspect the team’s vehicle and assess technical
								design, technical innovation, and craftsmanship of the design.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-white">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-primary-dark mb-2">
						Autonomy Challenge
					</h2>
					<p class="text-gray-600 mb-6">
						Explore the missions our ASV must conquer.
					</p>
					<a
						href="https://www.youtube.com/watch?v=example"
						target="_blank"
						class="inline-flex items-center gap-2 text-red-600 font-bold border border-red-100 bg-red-50 px-4 py-2 rounded-full hover:bg-red-100 transition"
					>
						<Icon name="uil:youtube" /> Watch Course Overview
					</a>
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
									Mission Tasks
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
										Task {{ index + 1 }}
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
									class="bg-surface rounded-2xl border border-gray-200 p-8 animate-fade-in"
								>
									<div class="flex items-center gap-4 mb-4">
										<div
											class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg"
										>
											{{ index + 1 }}
										</div>
										<h2
											class="text-2xl md:text-3xl font-bold text-primary-dark"
										>
											{{ task.title }}
										</h2>
									</div>

									<p class="text-gray-700 text-lg leading-relaxed mb-8 pl-14">
										{{ task.description }}
									</p>

									<div class="mb-8 pl-0 md:pl-14">
										<h3
											class="text-lg font-bold text-primary mb-4 flex items-center gap-2"
										>
											<Icon name="uil:video" /> Strategy Simulation
										</h3>
										<div
											class="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg relative group"
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

									<div
										class="bg-white rounded p-6 border border-gray-100 ml-0 md:ml-14"
									>
										<p class="text-sm font-bold text-gray-500 uppercase mb-4">
											Key Strategy:
										</p>
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
const activeTab = ref(0);
const setTab = (index: number) => (activeTab.value = index);

// UPDATED TASK DATA (WITH VIDEO & POINTS)
const tasks = [
	{
		title: "Evacuation Route",
		description:
			"The ASV must travel safely through the designated entrance and exit gates, completing the route from start to finish without errors.",
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder Video
		points: [
			"Precision Path Following",
			"Gate Detection using Lidar",
			"Dead Reckoning Backup",
		],
	},
	{
		title: "Debris Clearance",
		description:
			"The ASV moves through a channel toward a debris area, identifying and scanning floating objects to locate potential hazards.",
		video: "", // Kosongkan jika belum ada video
		points: [
			"Object Classification (YOLO)",
			"Stereo Vision Depth Estimation",
			"Real-time Mapping",
		],
	},
	{
		title: "Emergency Response Sprint",
		description:
			"The ASV races to the emergency zone, performs a correct loop around the illuminated buoy, and then exits the area by navigating back through the buoys.",
		video: "",
		points: [
			"High-Speed Navigation",
			"Buoy Color & Light Detection",
			"Hydrodynamic Stability",
		],
	},
	{
		title: "Supply Drop",
		description:
			"The ASV transports and delivers water and racquetball supplies to fixed vessels located around the course.",
		video: "",
		points: [
			"Precision Docking",
			"Mechanical Payload Release",
			"Target Identification",
		],
	},
	{
		title: "Navigate the Marina",
		description:
			"The ASV enters the marina zone and autonomously docks into an open slip.",
		video: "",
		points: [
			"Lidar Point Cloud Processing",
			"Path Planning in Confined Space",
			"Docking Algorithm",
		],
	},
	{
		title: "Harbor Alert",
		description:
			"The ASV reacts to a triggered emergency audio alert within the harbor.",
		video: "",
		points: [
			"Acoustic Signal Processing (FFT)",
			"Hydrophone Array",
			"Sound Source Localization",
		],
	},
];
</script>

<style scoped>
.animate-fade-in {
	animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(5px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
