<template>
	<div class="flex flex-col min-h-screen font-sans text-gray-800">
		<header
			class="sticky top-0 z-40 transition-all duration-300 border-b border-gray-100"
			:class="
				isScrolled
					? 'bg-white/90 backdrop-blur-md shadow-md py-3'
					: 'bg-white py-2'
			"
		>
			<div class="container mx-auto px-4 flex items-center justify-between">
				<NuxtLink to="/" class="flex items-center gap-2 shrink-0">
					<img
						src="/images/logo/bengawan-uv-red-logo.webp"
						alt="Bengawan UV Logo"
						class="h-14"
					/>
				</NuxtLink>

				<nav
					class="hidden lg:flex gap-4 xl:gap-10 text-sm font-bold text-gray-600 items-center"
				>
					<NuxtLink
						to="/"
						active-class="text-primary"
						class="hover:text-primary transition relative group"
					>
						Home
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>
					<div class="relative group">
						<NuxtLink
							to="/profile"
							class="flex items-center gap-1 hover:text-primary transition py-4"
							active-class="text-primary"
						>
							Profile <Icon name="uil:angle-down" />
						</NuxtLink>

						<div
							class="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
						>
							<NuxtLink
								to="/profile"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50"
							>
								General
							</NuxtLink>
							<NuxtLink
								:to="{ path: '/profile', hash: '#supervisor' }"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50"
							>
								Supervisor
							</NuxtLink>
							<NuxtLink
								:to="{ path: '/profile', hash: '#team2026' }"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50"
							>
								2026 Team's
							</NuxtLink>
							<NuxtLink
								:to="{ path: '/profile', hash: '#past-teams' }"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition"
							>
								Past Teams
							</NuxtLink>
						</div>
					</div>
					<NuxtLink
						to="/roboboat2026"
						active-class="text-primary"
						class="hover:text-primary transition relative group whitespace-nowrap"
					>
						Roboboat 2026
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>

					<NuxtLink
						to="/boat"
						active-class="text-primary"
						class="hover:text-primary transition relative group whitespace-nowrap"
					>
						The Boat
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>

					<div class="relative group">
						<button
							class="flex items-center gap-1 hover:text-primary transition py-4"
						>
							Research <Icon name="uil:angle-down" />
						</button>
						<div
							class="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
						>
							<NuxtLink
								to="/research"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50"
							>
								Research
							</NuxtLink>
							<NuxtLink
								to="/papers"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition"
							>
								Papers
							</NuxtLink>
						</div>
					</div>

					<div class="relative group">
						<button
							class="flex items-center gap-1 hover:text-primary transition py-4"
						>
							Media Center <Icon name="uil:angle-down" />
						</button>
						<div
							class="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
						>
							<NuxtLink
								to="/blog"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50"
							>
								Blog & News
							</NuxtLink>
							<NuxtLink
								to="/activities"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition"
							>
								Activities
							</NuxtLink>
							<NuxtLink
								to="/gallery"
								class="block px-4 py-3 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50"
							>
								Gallery
							</NuxtLink>
						</div>
					</div>

					<NuxtLink
						to="/sponsorships"
						active-class="text-primary"
						class="hover:text-primary transition relative group whitespace-nowrap"
					>
						Sponsorship
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>

					<button
						@click="toggleSearch"
						class="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-primary transition ml-2"
						title="Search (Ctrl+K)"
					>
						<Icon name="uil:search" class="text-xl" />
					</button>

					<NuxtLink
						to="/contact"
						class="px-5 py-2 bg-primary text-white rounded-full hover:bg-secondary transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap ml-2"
					>
						Contact Us
					</NuxtLink>
				</nav>

				<button
					@click="isMobileOpen = true"
					class="lg:hidden text-3xl text-primary focus:outline-none"
				>
					<Icon name="uil:bars" />
				</button>
			</div>
		</header>

		<Transition
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div v-if="isMobileOpen" class="fixed inset-0 z-50 flex justify-end">
				<div
					class="absolute inset-0 bg-black/50"
					@click="isMobileOpen = false"
				></div>

				<div
					class="relative w-64 bg-white h-full shadow-2xl p-6 flex flex-col overflow-y-auto"
				>
					<div class="flex justify-between items-center border-b pb-4 mb-4">
						<span class="font-bold text-primary">MENU</span>
						<button
							@click="isMobileOpen = false"
							class="text-2xl text-red-500 hover:rotate-90 transition"
						>
							<Icon name="uil:multiply" />
						</button>
					</div>

					<div class="flex flex-col gap-4 font-medium text-gray-700">
						<NuxtLink
							to="/"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Home</NuxtLink
						>
						<NuxtLink
							to="/profile"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Profile</NuxtLink
						>
						<NuxtLink
							to="/roboboat2026"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Roboboat 2026</NuxtLink
						>
						<NuxtLink
							to="/boat"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>The Boat</NuxtLink
						>
						<NuxtLink
							to="/research"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Research</NuxtLink
						>
						<NuxtLink
							to="/papers"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Papers</NuxtLink
						>
						<NuxtLink
							to="/blog"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Blog</NuxtLink
						>
						<NuxtLink
							to="/gallery"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Gallery</NuxtLink
						>
						<NuxtLink
							to="/activities"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Activities</NuxtLink
						>
						<NuxtLink
							to="/sponsorships"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Sponsorship</NuxtLink
						>
						<button
							@click="toggleSearch"
							class="text-left hover:text-primary py-2 border-b border-gray-50 flex items-center gap-2"
						>
							<Icon name="uil:search" /> Search
						</button>

						<NuxtLink
							to="/contact"
							@click="isMobileOpen = false"
							class="mt-4 px-4 py-3 bg-primary text-white text-center rounded shadow hover:bg-secondary transition"
							>Contact Us</NuxtLink
						>
					</div>
				</div>
			</div>
		</Transition>

		<main class="flex-grow">
			<slot />
		</main>

		<footer class="relative bg-primary text-surface pt-12 mt-auto">
			<div class="container mx-auto px-4 pb-12 relative z-10">
				<div class="grid md:grid-cols-3 gap-12">
					<div class="md:col-span-1">
						<div class="flex items-center gap-2 mb-6">
							<img
								src="/images/logo/bengawan-uv-white-logo.webp"
								alt="Bengawan UV Logo"
								class="h-16 object-contain"
							/>
						</div>

						<p class="text-sm leading-relaxed text-surface-dim mb-6">
							Developing the future of maritime autonomy. A research team from
							Universitas Sebelas Maret striving for global excellence.
						</p>

						<div class="flex gap-4">
							<a
								href="mailto:bengawanuv@unit.uns.ac.id"
								target="_blank"
								class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-primary hover:bg-secondary hover:text-white transition shadow-sm transform hover:-translate-y-1"
							>
								<Icon name="uil:envelope" />
							</a>
							<a
								href="https://www.instagram.com/bengawanuvteam"
								target="_blank"
								class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-primary hover:bg-secondary hover:text-white transition shadow-sm transform hover:-translate-y-1"
							>
								<Icon name="uil:instagram" />
							</a>
							<a
								href="https://www.youtube.com/@BengawanUVTeam"
								target="_blank"
								class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-primary hover:bg-secondary hover:text-white transition shadow-sm transform hover:-translate-y-1"
							>
								<Icon name="uil:youtube" />
							</a>
							<a
								href="https://www.tiktok.com/@bengawanuvteam"
								target="_blank"
								class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-primary hover:bg-secondary hover:text-white transition shadow-sm transform hover:-translate-y-1"
							>
								<Icon name="ic:baseline-tiktok" />
							</a>
						</div>
					</div>

					<div>
						<h3
							class="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 inline-block"
						>
							Explore
						</h3>
						<ul class="space-y-3 text-sm">
							<li>
								<NuxtLink
									to="/roboboat2026"
									class="hover:text-secondary transition"
									>Competition Report</NuxtLink
								>
							</li>
							<li>
								<NuxtLink to="/boat" class="hover:text-secondary transition"
									>Mandakini Specs</NuxtLink
								>
							</li>
							<li>
								<NuxtLink to="/research" class="hover:text-secondary transition"
									>Technical Research</NuxtLink
								>
							</li>
							<li>
								<NuxtLink to="/blog" class="hover:text-secondary transition"
									>Latest News</NuxtLink
								>
							</li>
							<li>
								<NuxtLink to="/profile" class="hover:text-secondary transition"
									>Our Team</NuxtLink
								>
							</li>
						</ul>
					</div>

					<div>
						<h3
							class="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 inline-block"
						>
							Partnership
						</h3>

						<ul class="space-y-4 text-sm text-surface-dim">
							<li>
								<NuxtLink
									to="/sponsorships"
									class="flex items-center gap-3 hover:text-secondary transition font-semibold group"
								>
									<div class="w-6 flex justify-center flex-shrink-0">
										<Icon
											name="uil:heart-sign"
											class="text-secondary text-xl group-hover:scale-110 transition-transform"
										/>
									</div>
									<span>Become a Sponsor</span>
								</NuxtLink>
							</li>

							<li class="flex items-start gap-3">
								<div class="w-6 flex justify-center flex-shrink-0 mt-1">
									<Icon
										name="uil:location-point"
										class="text-secondary text-xl"
									/>
								</div>
								<span class="leading-relaxed flex-1">
									Gd. 1 Faculty of Engineering, Universitas Sebelas Maret, Jalan
									Ir. Sutami No 36A, Kentingan, Kec. Jebres, Kota Surakarta,
									Jawa Tengah, Indonesia 57126
								</span>
							</li>

							<li class="flex items-center gap-3">
								<div class="w-6 flex justify-center flex-shrink-0">
									<Icon
										name="uil:envelope-alt"
										class="text-secondary text-xl"
									/>
								</div>
								<a
									href="mailto:bengawanuv@unit.uns.ac.id"
									class="hover:text-white flex-1 break-all"
								>
									bengawanuv@unit.uns.ac.id
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200"
				>
					<p>© 2026 Bengawan UV Team UNS. All rights reserved.</p>
					<div class="flex gap-4 mt-4 md:mt-0">
						<a href="#" class="hover:text-white">Privacy Policy</a>
						<a href="#" class="hover:text-white">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.router-link-exact-active span {
	width: 100%;
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from "vue";

const isMobileOpen = ref(false);

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});

// Inject fungsi toggle yang kita provide di app.vue
const toggleSearch = inject("toggleSearch") as () => void;
</script>
