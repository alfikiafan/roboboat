<template>
	<div>
		<section
			class="relative h-[90vh] flex items-end justify-start overflow-hidden bg-primary-dark"
		>
			<div class="absolute inset-0 z-0">
				<img
					src="/images/mandakini/mandakini-new-water.webp"
					alt="Mandakini New Water"
					class="w-full h-full object-cover opacity-80"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"
				></div>
				<div
					class="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-transparent to-transparent"
				></div>
			</div>

			<div class="container mx-auto px-4 relative z-10 pb-20">
				<div class="max-w-3xl animate-fade-in-up">
					<span
						class="inline-block px-3 py-1 border border-secondary text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 rounded-full backdrop-blur-md"
					>
						Flagship Vessel
					</span>
					<h1
						class="text-5xl md:text-8xl font-extrabold text-white mb-4 leading-tight"
					>
						MANDAKINI
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white"
							>NEW WATER</span
						>
					</h1>
					<p
						class="text-xl text-gray-300 max-w-xl leading-relaxed border-l-4 border-secondary pl-6"
					>
						The pinnacle of maritime autonomy engineering. Designed for speed,
						precision, and adaptability in harsh environments.
					</p>
				</div>
			</div>
		</section>

		<section class="py-20 bg-surface">
			<div
				class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center"
			>
				<div class="md:w-1/2">
					<h2 class="text-3xl font-bold text-primary-dark mb-6">
						About Mandakini New Water
					</h2>
					<div class="prose text-gray-600 leading-relaxed text-lg text-justify">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</p>
					</div>
				</div>
				<div class="md:w-1/2 grid grid-cols-2 gap-4">
					<div class="h-48 bg-gray-300 rounded-lg overflow-hidden">
						<img
							src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=500"
							class="w-full h-full object-cover"
						/>
					</div>
					<div class="h-48 bg-gray-300 rounded-lg overflow-hidden mt-8">
						<img
							src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=500"
							class="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>

		<section
			class="py-20 bg-white border-y border-gray-100 relative overflow-hidden"
		>
			<div class="container mx-auto px-4 text-center mb-10">
				<h2 class="text-3xl font-bold text-primary-dark">System Breakdown</h2>
				<p class="text-gray-500 flex items-center justify-center gap-2 mt-2">
					<Icon name="uil:mouse-alt" class="animate-bounce" /> Click hotspots to
					explore
				</p>
			</div>

			<div
				class="relative w-full max-w-5xl mx-auto bg-surface-dim rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
			>
				<img
					src="/images/mandakini/mandakini-new-water-overview.webp"
					alt="Mandakini New Water Boat"
					class="w-full h-auto object-cover opacity-90"
				/>

				<button
					@click="activeSpec = 'perception'"
					class="absolute top-[18%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:camera" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'navigation'"
					class="absolute top-[38%] left-[44%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:processor" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'hull'"
					class="absolute top-[72%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:ship" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'frame'"
					class="absolute top-[65%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:layer-group" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'propulsion'"
					class="absolute top-[60%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:bolt" />
						</span>
					</span>
				</button>

				<Transition name="slide-up">
					<div
						v-if="activeSpec"
						class="absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm border-t-4 border-secondary p-6 md:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20"
					>
						<div class="flex justify-between items-start">
							<div>
								<h3 class="text-2xl font-bold text-primary-dark mb-2">
									{{ specs[activeSpec].title }}
								</h3>
								<p class="text-gray-800 mb-4 max-w-2xl md:text-base">
									{{ specs[activeSpec].desc }}
								</p>
								<div class="flex flex-wrap gap-2 md:gap-3">
									<span
										v-for="tag in specs[activeSpec].tags"
										:key="tag"
										class="px-3 py-1 bg-surface text-primary-dark text-[10px] md:text-xs font-bold rounded-full border border-surface-dark"
										>{{ tag }}</span
									>
								</div>
							</div>
							<button
								@click="activeSpec = null"
								class="text-gray-900 hover:text-red-500 transition text-2xl"
							>
								<Icon name="uil:times-circle" />
							</button>
						</div>
					</div>
				</Transition>
			</div>
		</section>

		<section class="py-20 bg-primary-dark text-surface">
			<div class="container mx-auto px-4">
				<h2 class="text-3xl font-bold mb-12 text-center">
					Technical Specifications
				</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:ruler" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Dimensions</h3>
						<p class="text-gray-300 text-sm">p x l x t</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:weight" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Weight</h3>
						<p class="text-gray-300 text-sm">... kg / ... lbs</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:tachometer-fast" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Max Speed</h3>
						<p class="text-gray-300 text-sm">... m/s</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:rocket" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Thrust Power</h3>
						<p class="text-gray-300 text-sm">6.55 kgf</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:layer-group" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Hull Material</h3>
						<p class="text-gray-300 text-sm">
							PETG filament and fiber glass composite
						</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:battery-bolt" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Power System</h3>
						<p class="text-gray-300 text-sm">
							3x Li-Po Batteries (Main, Jetson, Thruster)
						</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:processor" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Onboard Computer</h3>
						<p class="text-gray-300 text-sm">NVIDIA Jetson Nano</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:rss" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Sensors</h3>
						<p class="text-gray-300 text-sm">Webcam, 2D LiDar, GPS, IMU</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-white">
			<div class="container mx-auto px-4 max-w-4xl">
				<h2 class="text-3xl font-bold text-primary-dark mb-12 text-center">
					Development Timeline
				</h2>

				<div
					class="relative border-l-4 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12"
				>
					<div
						v-for="(phase, index) in timeline"
						:key="index"
						class="relative group"
					>
						<div
							class="absolute -left-[46px] md:-left-[62px] top-6 w-10 h-10 bg-secondary text-white rounded-full border-4 border-white shadow-md flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform z-10"
						>
							{{ index + 1 }}
						</div>

						<div
							class="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative"
						>
							<div class="md:flex">
								<div class="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
									<img
										:src="phase.image"
										:alt="phase.title"
										class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/50 md:to-transparent opacity-60"
									></div>
								</div>
								<div class="p-6 md:w-2/3 flex flex-col justify-center relative">
									<div
										class="hidden md:block absolute top-8 -left-2 w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100 z-10"
									></div>
									<span
										class="text-xs font-bold text-secondary uppercase tracking-widest block mb-2"
										>{{ phase.date }}</span
									>
									<h3 class="text-xl font-bold text-primary-dark mb-3">
										{{ phase.title }}
									</h3>
									<p class="text-gray-600 leading-relaxed">
										{{ phase.desc }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-50 border-t border-gray-200">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-primary-dark">
						Our Fleet History
					</h2>
					<p class="text-gray-600">
						The legacy of innovation from previous years.
					</p>
				</div>
				<div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
					<div
						v-for="boat in pastBoats"
						:key="boat.year"
						class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
					>
						<div class="aspect-square overflow-hidden relative">
							<img
								:src="boat.image"
								:alt="boat.name"
								class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"
							></div>
							<div class="absolute bottom-4 left-4 text-white">
								<span
									class="text-xs font-bold bg-secondary px-2 py-1 rounded mb-1 inline-block"
									>{{ boat.year }}</span
								>
								<h3 class="font-bold text-lg leading-tight">{{ boat.name }}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import pastBoats from "../../assets/data/past_boats.json";

const activeSpec = ref<string | null>(null);

// Data Hotspot
const specs: Record<string, any> = {
	perception: {
		title: "Perception System",
		desc: "Utilizes a Logitech C922 Pro webcam combined with YOLOv4-Tiny optimized with TensorRT for real-time object detection and environmental perception.",
		tags: ["Logitech C922 Pro", "YOLOv4-Tiny", "TensorRT"],
	},
	navigation: {
		title: "Navigation & Autonomy",
		desc: "Powered by an NVIDIA Jetson Nano running ROS, integrating camera and 2D LiDAR sensor fusion with GPS and IMU to enable autonomous navigation and path planning.",
		tags: ["Jetson Nano", "ROS", "Sensor Fusion", "GPS", "IMU"],
	},
	hull: {
		title: "Hull & Structural Design",
		desc: "Built with a flat-bottom catamaran hull design made from fiberglass composite, providing stability, buoyancy, and durability for autonomous operations.",
		tags: ["Catamaran", "Flat-Bottom", "Fiberglass Composite"],
	},
	frame: {
		title: "Modularity Frame System",
		desc: "Features a lightweight, modular frame structure designed for fast assembly, easy component swapping, and simplified maintenance during development cycles.",
		tags: ["Lightweight", "Modular", "Rapid Assembly"],
	},
	propulsion: {
		title: "Propulsion System",
		desc: "Equipped with a pair of Blue Robotics T200 thrusters delivering reliable thrust and precise maneuverability for autonomous missions.",
		tags: ["Blue Robotics T200", "Precise Maneuverability"],
	},
};

// TIMELINE UPDATED DATA (Aug 2025 - Jan 2025[2026?])
// Asumsi: Tahunnya 2025 -> 2026 (karena Aug - Jan berurutan)
const timeline = [
	{
		date: "August 2025",
		title: "Research & Innovation Planning",
		desc: "Conducting technology research, evaluating previous performance, and defining innovations for the upcoming competition.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "September 2025",
		title: "Design & System Architecture",
		desc: "Designing the hull, analyzing stability, and developing the modular frame and overall system architecture.",
		image:
			"https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "October 2025",
		title: "Manufacturing & Assembly",
		desc: "Executing hull and frame manufacturing followed by electrical assembly and integration of major components.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "November 2025",
		title: "Ground Testing & Software Setup",
		desc: "Performing ground tests, configuring software and sensor-actuator systems, conducting TDR, and developing team website content.",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "December 2025",
		title: "On-Water Testing",
		desc: "Carrying out water tests for propulsion, navigation, and object detection capabilities.",
		image:
			"https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "January 2026",
		title: "Final Validation & Mission Testing",
		desc: "Conducting full mission trials and final water testing before competition.",
		image:
			"https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop",
	},
];
</script>

<style scoped>
.animate-fade-in-up {
	animation: fadeInUp 0.8s ease-out;
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

.slide-up-enter-active,
.slide-up-leave-active {
	transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
	transform: translateY(100%);
	opacity: 0;
}
</style>
