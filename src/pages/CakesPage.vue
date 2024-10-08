<template>
  <q-page class="q-pa-md">
    <div class="text-h6 q-mb-md text-blue-5">Cakes</div>
    <div class="row q-gutter-md">
      <q-card clickable @click="goToDetails(cake.id)" v-for="cake in cakes" :key="cake.id" class="my-card">
        <q-img :src="cake.image">
          <div class="absolute-bottom text-h6">
            {{ cake.title }}
          </div>
        </q-img>

        <q-card-section>
          {{ cake.previewDescription }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const cakes = ref([])

onMounted(async () => {
  const response = await api.get('/cakes')
  cakes.value = response.data
  console.log(cakes.value)
})

function goToDetails(id) {
  router.push(`/cake/${id}`)
}
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>