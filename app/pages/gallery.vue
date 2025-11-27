<template>
	<div>
		<section class="bg-primary-dark text-surface py-20 text-center">
			<h1 class="text-4xl font-bold mb-4">Gallery</h1>
			<p class="text-lg opacity-80">Visual records of our journey.</p>
		</section>

		<section class="py-16 container mx-auto px-4 min-h-screen">
			<div class="flex flex-wrap justify-center gap-3 mb-12">
				<button
					v-for="filter in filters"
					:key="filter"
					@click="activeFilter = filter"
					class="px-6 py-2 rounded-full border transition font-bold text-sm uppercase tracking-wide"
					:class="
						activeFilter === filter
							? 'bg-secondary text-white border-secondary shadow-lg transform scale-105'
							: 'bg-white text-gray-500 border-gray-200 hover:border-secondary hover:text-secondary'
					"
				>
					{{ filter === "all" ? "All Moments" : filter }}
				</button>
			</div>

			<div v-if="activeFilter === 'all'" class="space-y-16">
				<div v-for="group in groupedItems" :key="group.year">
					<div class="flex items-center gap-4 mb-6">
						<h2 class="text-3xl font-bold text-primary-dark">
							{{ group.year }}
						</h2>
						<div class="h-px flex-grow bg-gray-200"></div>
					</div>

					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
						<div
							v-for="item in group.items"
							:key="item.id"
							class="group relative aspect-square overflow-hidden cursor-zoom-in bg-gray-100"
							@click="openLightboxByItem(item)"
						>
							<img
								:src="item.src"
								:alt="item.caption"
								class="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							>
								<div
									class="bg-black/40 text-white rounded-full p-3 backdrop-blur-sm"
								>
									<Icon name="uil:search-plus" class="text-2xl" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div v-else>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
					<div
						v-for="(item, index) in filteredItems"
						:key="item.id"
						class="group relative aspect-square overflow-hidden cursor-zoom-in bg-gray-100"
						@click="openLightbox(index)"
					>
						<img
							:src="item.src"
							:alt="item.caption"
							class="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
							loading="lazy"
						/>
						<div
							class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						>
							<div
								class="bg-black/40 text-white rounded-full p-3 backdrop-blur-sm"
							>
								<Icon name="uil:search-plus" class="text-2xl" />
							</div>
						</div>
					</div>
				</div>

				<div
					v-if="filteredItems.length === 0"
					class="text-center py-20 text-gray-400"
				>
					<Icon name="uil:image-slash" class="text-4xl mb-2" />
					<p>No photos found in this category.</p>
				</div>
			</div>
		</section>

		<Transition name="fade">
			<div
				v-if="selectedImage"
				class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
				@click="closeLightbox"
			>
				<button
					class="absolute top-6 right-6 text-white/70 hover:text-white transition z-50 p-2"
				>
					<Icon name="uil:multiply" class="text-4xl" />
				</button>

				<button
					v-if="flatList.length > 1"
					@click.stop="prevImage"
					class="absolute left-4 md:left-8 text-white/50 hover:text-white transition p-4 z-50 focus:outline-none"
				>
					<Icon name="uil:angle-left" class="text-4xl md:text-6xl" />
				</button>
				<button
					v-if="flatList.length > 1"
					@click.stop="nextImage"
					class="absolute right-4 md:right-8 text-white/50 hover:text-white transition p-4 z-50 focus:outline-none"
				>
					<Icon name="uil:angle-right" class="text-4xl md:text-6xl" />
				</button>

				<div
					class="max-w-5xl w-full h-full flex flex-col items-center justify-center p-4"
					@click.stop
				>
					<img
						:src="selectedImage?.src"
						class="max-w-full max-h-[80vh] object-contain shadow-2xl select-none"
					/>
					<div class="mt-4 text-center text-white max-w-2xl">
						<p class="text-lg font-medium mb-1">{{ selectedImage?.caption }}</p>
						<p class="text-sm text-gray-400 font-mono">
							{{ selectedImage?.year }}
						</p>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import galleryData from "../../assets/data/gallery.json";

const activeFilter = ref("all");
// Ganti menyimpan objek menjadi menyimpan INDEX array
const selectedIndex = ref(-1); // -1 artinya tertutup

// --- DATA LOGIC ---

// 1. Daftar Tahun Unik
const filters = computed(() => {
	const years = new Set(galleryData.map((item) => item.year));
	return ["all", ...Array.from(years).sort().reverse()];
});

// 2. Data Grouping (Array Structure agar urutan terjaga)
const groupedItems = computed(() => {
	// Ambil tahun unik
	const years = Array.from(new Set(galleryData.map((item) => item.year)));

	// Urutkan tahun Descending (Terbaru di atas)
	years.sort((a, b) => Number(b) - Number(a));

	// Map menjadi Array of Objects
	return years.map((year) => {
		return {
			year: year,
			items: galleryData.filter((item) => item.year === year),
		};
	});
});

// 3. Data Filtering (Khusus tampilan per Tahun)
const filteredItems = computed(() => {
	if (activeFilter.value === "all") return galleryData;
	return galleryData.filter((item) => item.year === activeFilter.value);
});

// 4. Flat List untuk Navigasi Lightbox
const flatList = computed(() => {
	if (activeFilter.value === "all") {
		// Jika 'all', urutkan berdasarkan tahun descending (biar match sama tampilan visual group)
		return [...galleryData].sort((a, b) => Number(b.year) - Number(a.year));
	}
	return filteredItems.value;
});

const selectedImage = computed(() => {
	if (selectedIndex.value === -1) return null;
	return flatList.value[selectedIndex.value] as any;
});

// --- ACTIONS ---

// Buka Lightbox via Index (Untuk mode filtered)
const openLightbox = (index: number) => {
	selectedIndex.value = index;
};

// Buka Lightbox via Item Object (Untuk mode grouped)
// Kita cari index item tersebut di dalam flatList
const openLightboxByItem = (item: any) => {
	const index = flatList.value.findIndex((i) => i.id === item.id); // Asumsi ID unik
	if (index !== -1) selectedIndex.value = index;
};

const closeLightbox = () => {
	selectedIndex.value = -1;
};

const nextImage = () => {
	if (selectedIndex.value < flatList.value.length - 1) {
		selectedIndex.value++;
	} else {
		selectedIndex.value = 0; // Loop
	}
};

const prevImage = () => {
	if (selectedIndex.value > 0) {
		selectedIndex.value--;
	} else {
		selectedIndex.value = flatList.value.length - 1; // Loop
	}
};

const handleKeydown = (e: KeyboardEvent) => {
	if (selectedIndex.value === -1) return;
	if (e.key === "ArrowRight") nextImage();
	if (e.key === "ArrowLeft") prevImage();
	if (e.key === "Escape") closeLightbox();
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
