<template>
	<section class="py-16 bg-white border-t border-surface-dark">
		<div class="container mx-auto px-4 text-center">
			<h2
				class="text-2xl font-bold text-primary mb-8 uppercase tracking-widest"
			>
				Supported By
			</h2>

			<div
				class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-80"
			>
				<div v-for="i in 5" :key="i" class="group">
					<div
						class="h-16 bg-gray-200 rounded flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 hover:bg-gray-100 cursor-pointer"
					>
						<span class="text-gray-400 font-bold group-hover:text-primary"
							>LOGO {{ i }}</span
						>
					</div>
				</div>
			</div>

			<div class="mt-10">
				<NuxtLink
					to="/sponsors"
					class="text-secondary hover:text-primary font-semibold underline decoration-2 underline-offset-4"
				>
					Become a Sponsor
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
