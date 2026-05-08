<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const login = async () => {
  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter your email and password.'
    return
  }

  loading.value = true

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  loading.value = false

  if (error) {
    errorMessage.value = error.message
    return
  }

  await navigateTo('/admin')
}

watch(
  user,
  async () => {
    if (user.value) {
      await navigateTo('/admin')
    }
  },
  { immediate: true }
)
</script>

<template>
  <main class="min-h-screen grid place-items-center  px-4">
    <UCard class="w-full max-w-md">
      <form class="space-y-5" @submit.prevent="login">
        <div class="text-center">
          <h1 class="text-2xl font-semibold">
            Login
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Sign in to access your admin dashboard.
          </p>
        </div>

        <UAlert
          v-if="errorMessage"
          color="error"
          variant="soft"
          title="Login failed"
          :description="errorMessage"
        />

        <UFormField label="Email" name="email">
          <UInput
            v-model="email"
            type="email"
            placeholder="you@example.com"
            autocomplete="email"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput
            v-model="password"
            type="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          block
          :loading="loading"
          :disabled="loading"
        >
          Login
        </UButton>
      </form>
    </UCard>
  </main>
</template>