<template>
	<div>
		<section
			class="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary-dark"
		>
			<div class="absolute inset-0 z-0 opacity-60">
				<img
					src="https://cdn.prod.website-files.com/6375ab2c4a52e87f7789762c/64419681aa61208408b94320_RecreationalBoatingGuide_InternalImage_2_WebP.webp"
					alt="Ocean"
					class="w-full h-full object-cover"
				/>
			</div>
			<div
				class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/40"
			></div>

			<div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
				<h1
					class="text-5xl md:text-7xl font-extrabold text-surface mb-4 drop-shadow-lg"
				>
					BENGAWAN UV
				</h1>
				<p class="text-xl text-surface-dim mb-8 font-light tracking-wide">
					Universitas Sebelas Maret Autonomous Boat Team
				</p>
				<div class="flex justify-center gap-4">
					<NuxtLink
						to="/roboboat2026"
						class="px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-secondary-light transition shadow-lg"
					>
						Roboboat 2026 Report
					</NuxtLink>
				</div>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 -mt-20 relative z-20">
			<div class="grid md:grid-cols-3 gap-6">
				<HomeQuickAccessCard
					title="Technical Reports"
					description="Access our Design Strategy and Technical Documentation for Roboboat 2026."
					to="/roboboat2026"
					icon="uil:file-alt"
				/>
				<HomeQuickAccessCard
					title="Mandakini Boat"
					description="Explore the specifications of our latest autonomous surface vehicle."
					to="/boat"
					icon="uil:ship"
				/>
				<HomeQuickAccessCard
					title="Meet The Team"
					description="Get to know the engineers and supervisors behind the project."
					to="/profile"
					icon="uil:users-alt"
				/>
			</div>
		</section>

		<section class="py-20 bg-surface">
			<div
				class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
			>
				<div class="md:w-1/2">
					<h2 class="text-4xl font-bold text-primary mb-6">
						Innovating on Water
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed mb-6">
						Bengawan UV is a research team dedicated to developing Unmanned
						Surface Vehicles (USV). We combine mechanical engineering,
						electronics, and computer vision to solve real-world maritime
						challenges.
					</p>
					<NuxtLink
						to="/profile"
						class="text-primary font-bold hover:text-secondary flex items-center gap-2"
					>
						Read our History <Icon name="uil:arrow-right" />
					</NuxtLink>
				</div>
				<div class="md:w-1/2">
					<div
						class="aspect-video bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-gray-500"
					>
						[Foto Tim/Workshop]
					</div>
				</div>
			</div>
		</section>

		<HomeSponsorGrid />
	</div>
</template>
