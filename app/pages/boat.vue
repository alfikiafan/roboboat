<template>
	<div>
		<section
			class="relative h-[90vh] flex items-end justify-start overflow-hidden bg-primary-dark"
		>
			<div class="absolute inset-0 z-0">
				<img
					src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/18/2022/04/types-of-boat-Bowrider-Sea-Ray-Sundancer-370.jpg"
					alt="Mandakini 3.0"
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
							>3.0</span
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
						The Evolution of Agility
					</h2>
					<div class="prose text-gray-600 leading-relaxed text-lg text-justify">
						<p>
							Mandakini 3.0 represents a quantum leap in our USV development
							program. Unlike its predecessors, this iteration focuses heavily
							on <strong>modular design</strong> and
							<strong>hydrodynamic efficiency</strong>.
						</p>
						<p>
							Built with a carbon-fiber reinforced hull, Mandakini 3.0
							significantly reduces drag while maintaining structural integrity
							against wave impacts. The vessel is equipped with a proprietary
							vector thrust system, allowing for holonomic movement—essential
							for the complex docking tasks in Roboboat 2026.
						</p>
						<p>
							Our engineering philosophy for Mandakini is simple:
							<em>"Intelligence through Stability"</em>. By ensuring a
							mechanically stable platform, our AI algorithms can perform object
							detection and path planning with higher precision.
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
					src="https://southernboating.com/wp-content/uploads/2025/11/20251119-Highfield-scaled.webp"
					alt="Mandakini Boat Top View"
					class="w-full h-auto object-cover opacity-90"
				/>

				<button
					@click="activeSpec = 'vision'"
					class="absolute top-[30%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white shadow-lg"
						>
							<Icon name="uil:camera" />
						</span>
					</span>
				</button>

				<button
					@click="activeSpec = 'propulsion'"
					class="absolute top-[65%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white shadow-lg"
						>
							<Icon name="uil:bolt" />
						</span>
					</span>
				</button>

				<button
					@click="activeSpec = 'computing'"
					class="absolute top-[45%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white shadow-lg"
						>
							<Icon name="uil:processor" />
						</span>
					</span>
				</button>

				<Transition name="slide-up">
					<div
						v-if="activeSpec"
						class="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-4 border-secondary p-6 md:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20"
					>
						<div class="flex justify-between items-start">
							<div>
								<h3 class="text-2xl font-bold text-primary-dark mb-2">
									{{ specs[activeSpec].title }}
								</h3>
								<p class="text-gray-600 mb-4 max-w-2xl">
									{{ specs[activeSpec].desc }}
								</p>
								<div class="flex flex-wrap gap-3">
									<span
										v-for="tag in specs[activeSpec].tags"
										:key="tag"
										class="px-3 py-1 bg-surface text-primary-dark text-xs font-bold rounded-full border border-surface-dark"
										>{{ tag }}</span
									>
								</div>
							</div>
							<button
								@click="activeSpec = null"
								class="text-gray-400 hover:text-red-500 transition text-2xl"
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

				<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div
						class="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
					>
						<Icon name="uil:ruler" class="text-4xl text-secondary mb-4" />
						<h3 class="text-lg font-bold text-white">Dimensions</h3>
						<p class="text-gray-400 text-sm mt-1">1.2m x 0.8m x 0.5m</p>
					</div>
					<div
						class="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
					>
						<Icon name="uil:weight" class="text-4xl text-secondary mb-4" />
						<h3 class="text-lg font-bold text-white">Weight</h3>
						<p class="text-gray-400 text-sm mt-1">18 kg (Dry)</p>
					</div>
					<div
						class="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
					>
						<Icon
							name="uil:tachometer-fast"
							class="text-4xl text-secondary mb-4"
						/>
						<h3 class="text-lg font-bold text-white">Max Speed</h3>
						<p class="text-gray-400 text-sm mt-1">3.5 m/s</p>
					</div>
					<div
						class="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
					>
						<Icon
							name="uil:battery-bolt"
							class="text-4xl text-secondary mb-4"
						/>
						<h3 class="text-lg font-bold text-white">Power</h3>
						<p class="text-gray-400 text-sm mt-1">Li-Po 6S 22000mAh</p>
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
									>
										{{ phase.date }}
									</span>
									<h3 class="text-xl font-bold text-primary-dark mb-3">
										{{ phase.title }}
									</h3>
									<p class="text-gray-600 text-sm leading-relaxed">
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

// Hotspot Logic
const activeSpec = ref<string | null>(null);
const specs: Record<string, any> = {
	vision: {
		title: "Stereo Vision & Lidar",
		desc: "Equipped with ZED 2 Stereo Camera and Velodyne Puck Lidar for real-time 3D mapping and obstacle detection.",
		tags: ["ZED 2", "Velodyne VLP-16", "YOLOv8"],
	},
	propulsion: {
		title: "Vector Thrust System",
		desc: "Configured with 4 BlueRobotics T200 thrusters enabling holonomic movement (omnidirectional control).",
		tags: ["BlueRobotics T200", "Holonomic", "ESC 30A"],
	},
	computing: {
		title: "Onboard Processing",
		desc: "Powered by NVIDIA Jetson Orin NX for AI processing and Pixhawk Cube Orange for flight control stability.",
		tags: ["NVIDIA Jetson Orin", "Pixhawk Cube", "ROS 2"],
	},
};

// Timeline Data
const timeline = [
	{
		date: "Sep - Oct 2025",
		title: "Design Phase",
		desc: "Hull optimization utilizing CFD simulations and electrical schematic design for the new sensor array.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "Nov - Dec 2025",
		title: "Fabrication",
		desc: "Carbon fiber molding process for the main hull and manufacturing of custom PCB for the BMS.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "Jan - Feb 2026",
		title: "Integration",
		desc: "System assembly, sensor mounting, and initial buoyancy testing in the campus pool.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
	},
	{
		date: "Feb - Mar 2026",
		title: "Sea Trials",
		desc: "Intensive autonomous mission simulation and PID tuning at the local lake reservoir.",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
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
