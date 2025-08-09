<template>
  <div class="bookmark">
    <div class="image" :style="{
      backgroundImage: `url(${image})`
    }">

    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="footer">
      <ButtonIconWithBorder @click="storeBookmark.deleteBookmarks(id, category_id)">
        <IconDeleteWhite />
      </ButtonIconWithBorder>
      <ButtonIconWithBorder @click="openLink">
        <IconLink />
      </ButtonIconWithBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonIconWithBorder from '@/components/ButtonIconWithBorder.vue'
import IconDeleteWhite from '@/icons/IconDeleteWhite.vue'
import IconLink from '@/icons/IconLink.vue'
import type { Bookmark } from '@/interfaces/bookmark.ts'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'

const storeBookmark = useBookmarkStore()

const {id, category_id, title, image, url} = defineProps<Bookmark>()

function openLink() {
  window.open(url, '_blank')
}
</script>

<style scoped>
.bookmark {
  display: flex;
  width: 314px;
  height: 337px;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  background: var(--color-fg);
  box-shadow: 0 10px 10px 0 rgba(245, 245, 247, 0.10);
  border-radius: 30px;
}

.image {
  height: 162px;
  width: 100%;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
}

.title {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
</style>
