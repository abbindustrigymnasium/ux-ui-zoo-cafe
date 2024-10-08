<template>
  <q-page>
    <div class="my-card" v-if="cake != null">
      <div @click="goBack()" class=" rounded-[99999999px] size-12 absolute left-4 top-4 bg-gray-300 bg-opacity-60 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
      </div>
      <img :src="cake.image" class="mx-auto max-h-96">
      
      <q-card-section>
        <div class="text-h6">{{ cake.title }}</div>
        <div class="text-subtitle2"> {{ cake.previewDescription }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ cake.detailDescription }}
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const cake = ref(null)

onMounted(async () => {
  const id = route.params.id
  const response = await api.get(`/cakes/${id}`)
  cake.value = response.data
})

function goBack()
{
  router.push("/order");
}
</script>
