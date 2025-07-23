import { defineStore } from 'pinia'
import type { IProfile } from '@/interfaces/profile.ts'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()

  async function fetchProfile() {
    const {data} = await http.get<IProfile>(API_ROUTES.profile)
    profile.value = data;
  }

  return {
    profile,
    fetchProfile,
  }
})
