<template>
	<div>
		<section class="bg-primary-dark text-surface py-20 text-center">
			<h1 class="text-4xl font-bold mb-4">Technical Research</h1>
			<p class="text-lg opacity-80 max-w-2xl mx-auto">
				Deep dive into the engineering pillars of Mandakini USV. Explore our
				documentation by division.
			</p>
		</section>

		<section class="py-16 container mx-auto px-4">
			<div class="grid md:grid-cols-3 gap-8">
				<div
					class="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-colors text-center"
				>
					<div
						class="w-20 h-20 mx-auto bg-surface rounded-full flex items-center justify-center text-4xl text-primary mb-6 group-hover:scale-110 transition-transform"
					>
						<Icon name="uil:brackets-curly" />
					</div>
					<h3 class="text-2xl font-bold text-primary-dark mb-3">Programming</h3>
					<p class="text-gray-600 mb-6">
						Computer Vision, Path Planning (A*), and ROS 2 Integration.
					</p>
					<button
						class="text-secondary font-bold uppercase text-sm tracking-widest hover:underline"
					>
						Coming Soon
					</button>
				</div>

				<div
					class="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-colors text-center"
				>
					<div
						class="w-20 h-20 mx-auto bg-surface rounded-full flex items-center justify-center text-4xl text-primary mb-6 group-hover:scale-110 transition-transform"
					>
						<Icon name="uil:circuit" />
					</div>
					<h3 class="text-2xl font-bold text-primary-dark mb-3">Electronics</h3>
					<p class="text-gray-600 mb-6">
						Power Distribution, Sensor Fusion, and PCB Design.
					</p>
					<button
						class="text-secondary font-bold uppercase text-sm tracking-widest hover:underline"
					>
						Coming Soon
					</button>
				</div>

				<div
					class="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-colors text-center"
				>
					<div
						class="w-20 h-20 mx-auto bg-surface rounded-full flex items-center justify-center text-4xl text-primary mb-6 group-hover:scale-110 transition-transform"
					>
						<Icon name="uil:wrench" />
					</div>
					<h3 class="text-2xl font-bold text-primary-dark mb-3">
						Body & Design
					</h3>
					<p class="text-gray-600 mb-6">
						Hull Hydrodynamics, Material Selection, and Manufacturing.
					</p>
					<button
						class="text-secondary font-bold uppercase text-sm tracking-widest hover:underline"
					>
						Coming Soon
					</button>
				</div>
			</div>
		</section>
	</div>
</template>
