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
										Gd. 1 Faculty of Engineering, Universitas Sebelas Maret,
										Jalan Ir. Sutami No 36A, Kentingan, Kec. Jebres, Kota
										Surakarta, Jawa Tengah 57126
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
										href="mailto:bengawanuv@unit.uns.ac.id"
										class="hover:text-primary"
										>bengawanuv@unit.uns.ac.id</a
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
