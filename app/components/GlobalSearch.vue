<template>
	<div>
		<Transition name="fade">
			<div
				v-if="isOpen"
				class="fixed inset-0 z-[100] backdrop-blur-sm flex items-start justify-center pt-16 px-4"
				@click="close"
			>
				<div
					class="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] animate-scale-in"
					@click.stop
				>
					<div
						class="px-4 py-3 border-b border-gray-100 flex items-center gap-3 bg-white relative z-10"
					>
						<Icon name="uil:search" class="text-xl text-primary" />
						<input
							ref="searchInput"
							v-model="query"
							type="text"
							placeholder="Type to search..."
							class="flex-grow bg-transparent outline-none text-base text-gray-800 placeholder-gray-400 h-10"
							@keydown.esc="close"
						/>
						<button
							@click="close"
							class="text-gray-400 hover:text-red-500 transition"
						>
							<Icon name="uil:multiply" class="text-xl" />
						</button>
					</div>

					<div class="overflow-y-auto p-2 bg-gray-50/50">
						<div v-if="isLoading" class="p-4 text-center text-gray-400">
							<Icon name="uil:spinner" class="animate-spin text-2xl" />
						</div>

						<div
							v-else-if="query && filteredResults.length === 0"
							class="py-8 text-center text-gray-400"
						>
							<Icon name="uil:desert" class="text-4xl mb-2 opacity-50" />
							<p class="text-sm">No results for "{{ query }}"</p>
						</div>

						<div v-else class="space-y-1">
							<NuxtLink
								v-for="(item, index) in filteredResults"
								:key="index"
								:to="item.link"
								@click="close"
								@mouseenter="selectedIndex = index"
								class="flex items-center gap-3 p-2.5 rounded-lg border border-transparent transition-all group cursor-pointer"
								:class="
									index === selectedIndex
										? 'bg-gray-200 shadow-sm'
										: 'hover:bg-white hover:shadow-sm'
								"
							>
								<div
									class="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 transition-colors"
									:class="item.iconBg"
								>
									<Icon :name="item.icon" :class="item.iconColor" />
								</div>

								<div class="flex-grow min-w-0">
									<div class="flex justify-between items-baseline">
										<h4
											class="font-bold text-sm text-gray-700 group-hover:text-primary truncate pr-2"
										>
											{{ item.title }}
										</h4>
										<span
											class="text-[10px] font-bold uppercase tracking-wider opacity-60"
											:class="item.catColor"
										>
											{{ item.category }}
										</span>
									</div>

									<p
										v-if="item.desc"
										class="text-xs text-gray-500 truncate mt-0.5"
									>
										{{ item.desc }}
									</p>
								</div>
							</NuxtLink>
						</div>
					</div>

					<div
						class="bg-white px-4 py-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 select-none"
					>
						<div class="flex items-center gap-3">
							<span class="flex items-center gap-1"
								><Icon name="uil:browser" class="text-indigo-400" /> Pages</span
							>
							<span class="flex items-center gap-1"
								><Icon name="uil:users-alt" class="text-green-500" /> Team</span
							>
							<span class="flex items-center gap-1"
								><Icon name="uil:file-alt" class="text-blue-500" /> Docs</span
							>
						</div>

						<div class="flex items-center gap-3">
							<span class="flex items-center gap-1">
								<kbd
									class="bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded font-sans font-bold text-gray-500 min-w-[20px] text-center"
									>↓</kbd
								>
								<kbd
									class="bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded font-sans font-bold text-gray-500 min-w-[20px] text-center"
									>↑</kbd
								>
								<span class="hidden sm:inline">to navigate</span>
							</span>
							<span class="flex items-center gap-1">
								<kbd
									class="bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded font-sans font-bold text-gray-500"
									>ESC</kbd
								>
								<span class="hidden sm:inline">to close</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import teamData from "../../assets/data/team.json";
import achievementsData from "../../assets/data/achievements.json";
import pastBoatsData from "../../assets/data/past_boats.json";

interface SearchItem {
	title: string;
	desc: string;
	link: string;
	category: string;
	icon: string;
	iconBg: string;
	iconColor: string;
	catColor: string;
}
const router = useRouter();
const selectedIndex = ref(-1);
const isOpen = ref(false);
const query = ref("");
const searchInput = ref<HTMLInputElement | null>(null);
const isLoading = ref(false);
const allData = ref<SearchItem[]>([]);

const buildIndex = async () => {
	isLoading.value = true;
	const tempIndex: SearchItem[] = [];

	// A. STATIC PAGES (PERBAIKAN: KITA MASUKKAN KEYWORD MANUAL DI DESC)
	const staticPages = [
		{
			title: "Home & Overview",
			desc: "Bengawan UV Introduction, Achievements, Dashboard, About Us.",
			link: "/",
		},
		{
			title: "Roboboat 2026 Information",
			// Tambahkan keyword tasks di sini agar ketemu saat search "autonomy"
			desc: "Autonomy Challenge, Design Documentation, Evacuation Route, Debris Clearance, Supply Drop, Docking.",
			link: "/roboboat2026",
		},
		{
			title: "Mandakini Boat Showcase",
			desc: "Flagship vessel specs, hull design, development timeline, past fleet.",
			link: "/boat",
		},
		{
			title: "Sponsorship Opportunities",
			desc: "Partnership packages, benefits, bronze silver gold package.",
			link: "/sponsorships",
		},
		{
			title: "Contact Us",
			desc: "Headquarters address, email, social media links.",
			link: "/contact",
		},
	];

	staticPages.forEach((page) => {
		tempIndex.push({
			title: page.title,
			desc: page.desc,
			link: page.link,
			category: "Page",
			icon: "uil:browser",
			iconBg: "bg-indigo-50 group-hover:bg-indigo-100",
			iconColor: "text-indigo-500",
			catColor: "text-indigo-400",
		});
	});

	// B. CONTENT (Markdown)
	const contentDocs = await queryCollection("content").all();
	contentDocs.forEach((doc: any) => {
		let category = "Docs";
		let icon = "uil:file-alt";

		if (doc.path.includes("/research")) {
			category = "Research";
			icon = "uil:microscope";
		} else if (doc.path.includes("/activities")) {
			category = "Log";
			icon = "uil:diary";
		} else if (doc.path.includes("/blog")) {
			category = "News";
			icon = "uil:newspaper";
		}

		tempIndex.push({
			title: doc.title,
			desc: doc.description || doc.date,
			link: doc.path,
			category,
			icon,
			iconBg: "bg-blue-50 group-hover:bg-blue-100",
			iconColor: "text-blue-500",
			catColor: "text-blue-400",
		});
	});

	// C. TEAM (JSON Updated)
	const addTeam = (list: any[]) => {
		if (!list) return;
		list.forEach((member) => {
			tempIndex.push({
				title: member.name,
				desc: `${member.role || "Member"} • ${member.research_area || ""}`,
				link: "/profile",
				category: "Team",
				icon: "uil:user",
				iconBg: "bg-green-50 group-hover:bg-green-100",
				iconColor: "text-green-500",
				catColor: "text-green-500",
			});
		});
	};

	addTeam(teamData.supervisors);
	if (teamData.team_leader) addTeam(teamData.team_leader);
	if (teamData.technical_team) addTeam(teamData.technical_team);
	if (teamData.non_technical_team) addTeam(teamData.non_technical_team);

	// D. ACHIEVEMENTS (PERBAIKAN: Logic JSON Baru)
	achievementsData.forEach((ach) => {
		let title = ach.highlight || ach.competition || "";

		if (ach.equal_highlights && ach.equal_highlights.length > 0) {
			title = ach.equal_highlights[0] || "";
		}

		tempIndex.push({
			title: title,
			desc: `${ach.competition} - ${ach.location}`,
			link: "/profile",
			category: "Award",
			icon: "uil:trophy",
			iconBg: "bg-yellow-50 group-hover:bg-yellow-100",
			iconColor: "text-yellow-600",
			catColor: "text-yellow-500",
		});
	});

	// E. BOATS
	pastBoatsData.forEach((boat) => {
		tempIndex.push({
			title: boat.name,
			desc: `Competition Year ${boat.year}`,
			link: "/boat",
			category: "Fleet",
			icon: "uil:ship",
			iconBg: "bg-red-50 group-hover:bg-red-100",
			iconColor: "text-red-500",
			catColor: "text-red-400",
		});
	});

	allData.value = tempIndex;
	isLoading.value = false;
};

// --- LOGIC ---
const filteredResults = computed(() => {
	if (!query.value) return [];
	const q = query.value.toLowerCase();
	return allData.value
		.filter((item) => {
			return (
				(item.title && item.title.toLowerCase().includes(q)) ||
				(item.desc && item.desc.toLowerCase().includes(q))
			);
		})
		.slice(0, 8);
});

const open = async () => {
	isOpen.value = true;
	query.value = "";
	if (allData.value.length === 0) await buildIndex();
	nextTick(() => searchInput.value?.focus());
};

const close = () => (isOpen.value = false);

defineExpose({ open });

// Reset index ke -1 setiap kali user mengetik search baru
watch(query, () => {
	selectedIndex.value = -1;
});

const handleKeydown = (e: KeyboardEvent) => {
	// 1. Shortcut Buka (Ctrl+K)
	if ((e.ctrlKey || e.metaKey) && e.key === "k") {
		e.preventDefault();
		open();
		return;
	}

	// Jika modal tertutup, stop di sini
	if (!isOpen.value) return;

	const resultsCount = filteredResults.value.length;

	// 2. Panah Bawah (Turun)
	if (e.key === "ArrowDown") {
		e.preventDefault(); // Supaya kursor input tidak gerak
		selectedIndex.value = (selectedIndex.value + 1) % resultsCount;
	}

	// 3. Panah Atas (Naik)
	if (e.key === "ArrowUp") {
		e.preventDefault();
		// Logika modulo untuk putar balik ke bawah jika di atas
		selectedIndex.value =
			(selectedIndex.value - 1 + resultsCount) % resultsCount;
	}

	// 4. Enter (Pilih)
	if (e.key === "Enter") {
		e.preventDefault();
		if (selectedIndex.value >= 0 && selectedIndex.value < resultsCount) {
			const item = filteredResults.value[selectedIndex.value];
			if (item) {
				router.push(item.link); // Pindah halaman
				close();
			}
		}
	}
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.animate-scale-in {
	animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleIn {
	from {
		opacity: 0;
		transform: scale(0.95) translateY(-10px);
	}
	to {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
}
</style>
