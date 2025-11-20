<template>
	<div>
		<section class="bg-primary-dark text-surface py-20 text-center">
			<h1 class="text-4xl font-bold mb-4">Get in Touch</h1>
			<p class="text-lg opacity-80">
				Interested in sponsoring or collaborating? We'd love to hear from you.
			</p>
		</section>

		<div class="container mx-auto px-4 py-16">
			<div class="grid md:grid-cols-2 gap-12">
				<div class="space-y-8">
					<div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
						<h3 class="text-xl font-bold text-primary mb-6">Headquarters</h3>
						<div class="space-y-4 text-gray-600">
							<div class="flex items-start gap-4">
								<div
									class="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary flex-shrink-0"
								>
									<Icon name="uil:location-point" class="text-xl" />
								</div>
								<div>
									<p class="font-bold text-gray-900">Bengawan UV Workshop</p>
									<p>
										Gedung Porsima, Universitas Sebelas Maret,<br />Jl. Ir.
										Sutami No.36, Surakarta 57126
									</p>
								</div>
							</div>

							<div class="flex items-center gap-4">
								<div
									class="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary flex-shrink-0"
								>
									<Icon name="uil:envelope-alt" class="text-xl" />
								</div>
								<div>
									<p class="font-bold text-gray-900">Email Us</p>
									<a
										href="mailto:official@buvroboboatuns.com"
										class="hover:text-primary"
										>official@buvroboboatuns.com</a
									>
								</div>
							</div>

							<div class="flex items-center gap-4">
								<div
									class="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary flex-shrink-0"
								>
									<Icon name="uil:phone-alt" class="text-xl" />
								</div>
								<div>
									<p class="font-bold text-gray-900">WhatsApp / Phone</p>
									<p>+62 812-3456-7890 (Humas)</p>
								</div>
							</div>
						</div>
					</div>

					<div class="bg-surface p-8 rounded-xl">
						<h3 class="text-xl font-bold text-primary mb-4">
							Follow Our Journey
						</h3>
						<div class="flex gap-4">
							<a
								href="#"
								class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl text-primary hover:bg-secondary hover:text-white transition shadow-sm"
								><Icon name="uil:instagram"
							/></a>
							<a
								href="#"
								class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl text-primary hover:bg-secondary hover:text-white transition shadow-sm"
								><Icon name="uil:linkedin"
							/></a>
							<a
								href="#"
								class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl text-primary hover:bg-secondary hover:text-white transition shadow-sm"
								><Icon name="uil:youtube"
							/></a>
						</div>
					</div>
				</div>

				<div
					class="h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-inner relative"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.146473988321!2d110.8540!3d-7.5590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16fc04b60337%3A0x763a86c802442806!2sUniversitas%20Sebelas%20Maret!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid"
						width="100%"
						height="100%"
						style="border: 0"
						allowfullscreen="true"
						loading="lazy"
						class="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition duration-700"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>
