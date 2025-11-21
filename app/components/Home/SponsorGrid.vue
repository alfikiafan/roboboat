<template>
	<section class="py-20 bg-white border-t border-surface-dark">
		<div class="container mx-auto px-4 text-center">
			<div class="mb-20">
				<h2
					class="text-2xl font-bold text-primary mb-12 uppercase tracking-widest flex items-center justify-center gap-4"
				>
					<span class="w-8 h-px bg-gray-300"></span>
					Sponsored By
					<span class="w-8 h-px bg-gray-300"></span>
				</h2>

				<div
					class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center mb-12"
				>
					<div v-for="i in 5" :key="i" class="group">
						<div
							class="h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-primary/20 cursor-pointer p-4 relative overflow-hidden"
						>
							<div
								class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"
							></div>

							<span
								class="text-gray-400 font-bold text-xl group-hover:text-primary"
								>LOGO {{ i }}</span
							>
						</div>
					</div>
				</div>

				<div class="relative group inline-block">
					<div
						class="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"
					></div>
					<NuxtLink
						to="/sponsorships"
						class="relative px-8 py-4 bg-primary rounded-full flex items-center gap-3 text-white font-bold border border-gray-100 hover:bg-primary-light transition-colors"
					>
						<Icon name="uil:heart-sign" class="text-xl text-white" />
						<span>Become a Sponsor</span>
						<Icon
							name="uil:arrow-right"
							class="text-2xl text-white group-hover:translate-x-1 transition-transform"
						/>
					</NuxtLink>
				</div>
			</div>

			<div class="pt-16 border-t border-gray-100">
				<h3
					class="text-lg font-bold text-primary-light mb-8 uppercase tracking-[0.2em]"
				>
					Supported By
				</h3>

				<div
					class="flex flex-wrap justify-center gap-12 items-center transition-all duration-700"
				>
					<div
						class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
					>
						<div
							class="w-20 h-20 rounded-full flex items-center justify-center p-2"
						>
							<img
								src="/images/logo/uns-logo.webp"
								alt="UNS Logo"
								class="w-full h-full object-contain"
							/>
						</div>
						<span
							class="text-[10px] font-bold text-gray-500 uppercase tracking-wide"
							>Universitas Sebelas Maret</span
						>
					</div>

					<div
						class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
					>
						<div class="h-20 rounded-full flex items-center justify-center p-2">
							<img
								src="/images/logo/lppm-logo.webp"
								alt="LPPMP UNS Logo"
								class="w-full h-full object-contain"
							/>
						</div>
						<span
							class="text-[10px] font-bold text-gray-500 uppercase tracking-wide"
							>LPPM Universitas Sebelas Maret</span
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes shimmer {
	100% {
		transform: translateX(100%);
	}
}
</style>
