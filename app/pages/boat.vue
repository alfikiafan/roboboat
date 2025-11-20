<template>
	<div>
		<section
			class="bg-primary-dark text-surface py-20 relative overflow-hidden"
		>
			<div
				class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
			></div>
			<div class="container mx-auto px-4 text-center relative z-10">
				<h1 class="text-4xl md:text-6xl font-bold mb-4">Mandakini 3.0</h1>
				<p class="text-xl text-secondary font-bold tracking-widest uppercase">
					Autonomous Surface Vehicle
				</p>
			</div>
		</section>

		<section class="py-10 bg-surface min-h-screen flex flex-col items-center">
			<div class="container mx-auto px-4">
				<div class="text-center mb-8">
					<p class="text-gray-600 animate-bounce">
						<Icon name="uil:mouse-alt" /> Click the pulsating dots to explore
						specifications
					</p>
				</div>

				<div
					class="relative w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
				>
					<img
						src="https://southernboating.com/wp-content/uploads/2025/11/20251119-Highfield-scaled.webp"
						alt="Mandakini Boat"
						class="w-full h-auto object-cover opacity-90"
					/>

					<button
						@click="activeSpec = 'vision'"
						class="absolute top-[35%] left-[60%] md:top-[30%] md:left-[55%] transform -translate-x-1/2 -translate-y-1/2 group"
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
						class="absolute top-[70%] left-[20%] md:top-[65%] md:left-[25%] transform -translate-x-1/2 -translate-y-1/2 group"
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
						class="absolute top-[50%] left-[45%] md:top-[45%] md:left-[40%] transform -translate-x-1/2 -translate-y-1/2 group"
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
										>
											{{ tag }}
										</span>
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
			</div>

			<div class="container mx-auto px-4 mt-20 max-w-4xl">
				<h2 class="text-2xl font-bold text-primary mb-6">
					Full Technical Specifications
				</h2>
				<div
					class="bg-white rounded-lg shadow border border-gray-200 overflow-hidden"
				>
					<table class="w-full text-left">
						<tbody class="divide-y divide-gray-100">
							<tr class="hover:bg-surface transition">
								<td class="p-4 font-bold text-gray-600 w-1/3">Hull Material</td>
								<td class="p-4 text-primary-dark">
									Carbon Fiber & Fiberglass Composite
								</td>
							</tr>
							<tr class="hover:bg-surface transition">
								<td class="p-4 font-bold text-gray-600">Dimensions</td>
								<td class="p-4 text-primary-dark">
									1.2m (L) x 0.8m (W) x 0.5m (H)
								</td>
							</tr>
							<tr class="hover:bg-surface transition">
								<td class="p-4 font-bold text-gray-600">Weight</td>
								<td class="p-4 text-primary-dark">18 kg (Dry Weight)</td>
							</tr>
							<tr class="hover:bg-surface transition">
								<td class="p-4 font-bold text-gray-600">Max Speed</td>
								<td class="p-4 text-primary-dark">3.5 m/s</td>
							</tr>
							<tr class="hover:bg-surface transition">
								<td class="p-4 font-bold text-gray-600">Power Source</td>
								<td class="p-4 text-primary-dark">Li-Po Battery 6S 22000mAh</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// State untuk menyimpan hotspot mana yang aktif
// Type: 'vision' | 'propulsion' | 'computing' | null
const activeSpec = ref<string | null>(null);

// Data Spesifikasi Hotspot
const specs: Record<string, any> = {
	vision: {
		title: "Stereo Vision & Lidar",
		desc: "Dilengkapi dengan ZED 2 Stereo Camera dan Velodyne Puck Lidar untuk pemetaan 3D lingkungan sekitar dan deteksi rintangan (buoy) secara real-time dengan akurasi tinggi.",
		tags: ["ZED 2 Camera", "Velodyne VLP-16", "Object Detection"],
	},
	propulsion: {
		title: "Vector Thrust System",
		desc: "Menggunakan konfigurasi 4 thruster T200 BlueRobotics dengan sistem vectoring yang memungkinkan pergerakan holonomic (bergerak ke segala arah tanpa memutar haluan).",
		tags: ["BlueRobotics T200", "Holonomic Movement", "ESC 30A"],
	},
	computing: {
		title: "Onboard Processing Unit",
		desc: "Otak utama menggunakan NVIDIA Jetson Orin NX untuk pemrosesan AI/Neural Network, dipadukan dengan Pixhawk Cube Orange untuk kontrol kestabilan navigasi.",
		tags: ["NVIDIA Jetson Orin", "Pixhawk Cube", "ROS 2 Humble"],
	},
};
</script>

<style scoped>
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
