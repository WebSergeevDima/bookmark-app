<template>
  <header class="header">
    <div class="header-title">
      <InputString v-model="title" v-if="isEdit" />
      <span v-else class="title">{{ category.name }}</span>
      <ButtonIcon v-if="isEdit" @click="handleUpdateTitle">
        <IconCheck />
      </ButtonIcon>
    </div>
    <div class="header-setting">
      <ButtonIcon @click="handleRemoveCategory">
        <IconDelete />
      </ButtonIcon>
      <ButtonIcon @click="handleEdit">
        <IconPen />
      </ButtonIcon>
    </div>
  </header>
</template>

<script setup lang="ts">
import InputString from '@/components/InputString.vue'
import { ref } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconDelete from '@/icons/IconDelete.vue'
import IconCheck from '@/icons/IconCheck.vue'
import IconPen from '@/icons/IconPen.vue'
import type { Category } from '@/interfaces/category.ts'
import { useCategoryStore } from '@/stores/category.store.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const storeCategory = useCategoryStore()

const {category} = defineProps<{category: Category}>()

const title = ref<string>(category.name)
const isEdit = ref<boolean>(false)

function handleEdit() {
  isEdit.value = true
}

function handleUpdateTitle() {
  storeCategory.updateCategory(category.id,{
    name: title.value,
    alias: category.alias,
  })

  isEdit.value = false
}

function handleRemoveCategory() {
  storeCategory.removeCategory(category.id)

  router.push({
    name: 'main'
  })
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-setting {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  border: 0;
  color: var(--color-fg);
  min-width: 274px;
  font-size: 24px;
}
</style>
