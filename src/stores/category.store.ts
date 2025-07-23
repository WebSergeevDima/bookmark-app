import { defineStore } from 'pinia'
import type { Category } from '@/interfaces/category.ts'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>()

  async function fetchCategories() {
    const {data} = await http.get(API_ROUTES.categories)
    console.log('data: ', data)
    categories.value = data
  }

  return {
    categories,
    fetchCategories
  }
})
