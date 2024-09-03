<template>
  <q-page>
    <q-card class="my-card" v-if="cake != null">
      <img :src="cake.image" style="max-height: 400px;">

      <q-card-section>
        <div class="text-h6">{{ cake.title }}</div>
        <div class="text-subtitle2"> {{ cake.previewDescription }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ cake.detailDescription }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const cake = ref(null)

onMounted(async () => {
  const id = route.params.id
  const response = await api.get(`/cakes/${id}`)
  cake.value = response.data
})
</script>
