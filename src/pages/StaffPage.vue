<template>
    <q-page class="q-pa-md">
        <div class="text-h6 q-mb-md">Personal</div>
        <div class="row q-gutter-md">
            <q-card class="my-card" v-for="person in staff" :key="person.id">
                <q-img :src="person.avatar">
                    <div class="absolute-bottom text-h6">
                        {{ person.name }}
                    </div>
                </q-img>

                <q-card-section>
                    <q-item-label>{{ person.email }}</q-item-label>
                    <q-item-label>{{ person.phone }}</q-item-label>
                    <q-item-label>{{ person.role }}</q-item-label>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';

const staff = ref([])

onMounted(async () => {
    const response = await api.get('/staff')
    staff.value = response.data
    console.log(staff.value)
})
</script>
<style scoped>
.my-card {
    width: 100%;
    max-width: 300px;
}
</style>