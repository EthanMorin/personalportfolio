<script setup lang="ts">
	const { element: sectionRef, isVisible } = useRevealObserver({
		threshold: 0.2,
	});
</script>

<template>
	<section
		id="contact"
		ref="sectionRef"
		:class="[
			'relative overflow-hidden py-16 bg-gray-900 text-white section-reveal',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<div
			class="contact-blur absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_65%)] opacity-65 blur-[120px] pointer-events-none"
		></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					I'm always interested in new opportunities and exciting projects.
					Let's connect!
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-12">
				<div>
					<h3 class="text-2xl font-bold mb-6">Contact Information</h3>
					<div class="space-y-4">
						<div class="flex items-center">
							<span class="text-blue-300 mr-4">📧</span>
							<span>ethanmorin2004@gmail.com</span>
						</div>
						<div class="flex items-center">
							<span class="text-blue-300 mr-4">📱</span>
							<span>+1 (801) 651-5559</span>
						</div>
						<div class="flex items-center">
							<span class="text-blue-300 mr-4">📍</span>
							<span>Salt Lake City, UT</span>
						</div>
					</div>

					<div class="mt-10">
						<h4 class="text-lg font-semibold mb-4">Follow Me</h4>
						<div class="flex space-x-4">
							<a
								href="https://www.linkedin.com/in/ethan-morin/"
								class="text-gray-300 hover:text-white transition-colors"
								>LinkedIn</a
							>
							<a
								href="https://github.com/EthanMorin"
								class="text-gray-300 hover:text-white transition-colors"
								>GitHub</a
							>
						</div>
					</div>

					<div
						class="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
					>
						<p class="text-sm text-gray-300">
							Prefer async collaboration? I'm comfortable working across time
							zones and love setting up workflows that keep teams aligned,
							transparent, and fast-moving.
						</p>
					</div>
				</div>

				<div>
					<form class="space-y-6" @submit.prevent>
						<div>
							<label class="block text-sm font-medium mb-2">Name</label>
							<input
								type="text"
								class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<div>
							<label class="block text-sm font-medium mb-2">Email</label>
							<input
								type="email"
								class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<div>
							<label class="block text-sm font-medium mb-2">Message</label>
							<textarea
								rows="4"
								class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<button
							type="submit"
							class="w-full bg-blue-600 text-white py-3 rounded-lg btn-glow relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_20px_40px_-25px_rgba(59,130,246,0.8)]"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
	<footer
		ref="footerRef"
		:class="[
			'bg-gray-900 text-white py-8 section-reveal border-t border-white/10',
			isVisible ? 'is-visible' : 'is-hidden',
		]"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<p class="text-sm text-gray-300">
				&copy; {{ new Date().getFullYear() }} Ethan Morin. Crafted with
				curiosity and care.
			</p>
		</div>
	</footer>
</template>
