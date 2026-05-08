<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if(!user.value) {
    return navigateTo('/login')
  }
})


</script>
<template>
  <div>
    
    <UButton @click="supabase.auth.signOut()">Logout</UButton>
  </div>
</template>