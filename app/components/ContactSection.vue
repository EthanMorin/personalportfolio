<template>
	<section id="contact" class="py-16 bg-gray-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
							<span class="text-blue-400 mr-4">📧</span>
							<span>ethanmorin2004@gmail.com</span>
						</div>
						<div class="flex items-center">
							<span class="text-blue-400 mr-4">📱</span>
							<span>+1 (801) 651-5559</span>
						</div>
						<div class="flex items-center">
							<span class="text-blue-400 mr-4">📍</span>
							<span>Salt Lake City, UT</span>
						</div>
					</div>

					<div class="mt-8">
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
				</div>

				<div>
					<form class="space-y-6">
						<div>
							<label class="block text-sm font-medium mb-2">Name</label>
							<input
								type="text"
								class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<div>
							<label class="block text-sm font-medium mb-2">Email</label>
							<input
								type="email"
								class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<div>
							<label class="block text-sm font-medium mb-2">Message</label>
							<textarea
								rows="4"
								class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<button
							type="submit"
							class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
