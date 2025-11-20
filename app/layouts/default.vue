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
				<NuxtLink to="/" class="flex items-center gap-2">
					<img
						src="/images/logo/bengawan-uv-logo.webp"
						alt="Bengawan UV Logo"
						class="h-14"
					/>
				</NuxtLink>

				<nav
					class="hidden lg:flex gap-8 text-sm font-bold text-gray-600 items-center"
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
					<NuxtLink
						to="/roboboat2026"
						active-class="text-primary"
						class="hover:text-primary transition relative group"
					>
						Roboboat 2026
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>
					<NuxtLink
						to="/boat"
						active-class="text-primary"
						class="hover:text-primary transition relative group"
					>
						The Boat
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>
					<NuxtLink
						to="/research"
						active-class="text-primary"
						class="hover:text-primary transition relative group"
					>
						Research
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>
					<NuxtLink
						to="/blog"
						active-class="text-primary"
						class="hover:text-primary transition relative group"
					>
						Blog
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>
					<NuxtLink
						to="/profile"
						active-class="text-primary"
						class="hover:text-primary transition relative group"
					>
						Profile
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"
						></span>
					</NuxtLink>

					<NuxtLink
						to="/contact"
						class="px-5 py-2 bg-primary text-white rounded-full hover:bg-secondary transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
							to="/blog"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Blog</NuxtLink
						>
						<NuxtLink
							to="/profile"
							@click="isMobileOpen = false"
							class="hover:text-primary py-2 border-b border-gray-50"
							>Profile</NuxtLink
						>
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
							Contact
						</h3>
						<ul class="space-y-3 text-sm text-surface-dim">
							<li class="flex items-start gap-3">
								<Icon
									name="uil:location-point"
									class="text-secondary text-xl flex-shrink-0 mt-1"
								/>
								<span class="leading-relaxed flex-1">
									Gd. 1 Faculty of Engineering, Universitas Sebelas Maret, Jalan
									Ir. Sutami No 36A, Kentingan, Kec. Jebres, Kota Surakarta,
									Jawa Tengah, Indonesia 57126
								</span>
							</li>
							<li class="flex items-center gap-3">
								<Icon
									name="uil:envelope-alt"
									class="text-secondary text-xl flex-shrink-0"
								/>
								<a
									href="mailto:bengawanuv@unit.uns.ac.id"
									class="hover:text-white"
									>bengawanuv@unit.uns.ac.id</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200"
				>
					<p>© 2026 Bengawan UV. All rights reserved.</p>
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
import { ref, onMounted, onUnmounted } from "vue";

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
</script>
