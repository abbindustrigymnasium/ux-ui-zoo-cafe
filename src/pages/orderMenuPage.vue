<script setup>
    import theImage from "assets/cool.jpg"
    import { api } from "src/boot/axios"
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";

    const cakes = ref([]);
    const router = useRouter()

    onMounted(async () => {
       const response = await api.get("/cakes");
       cakes.value = response.data
    })

    function goToCakeDescription(id)
    {
        router.push(`/cake/${id}`)
    }
</script>



<template>
    <div class=" flex flex-row gap-5 justify-center">
        <q-card-selection v-for="cake in cakes" :key="cake.id" class=" shadow-lg p-4 flex rounded-lg w-56 h-64 bg-white">
            <div class=" h-[calc(100%-4rem)] w-full">
                <img :src="cake.image" @click="goToCakeDescription(cake.id)" alt="image of product" class="h-full w-full object-fill rounded">
            </div>
    
           <div class="flex w-full">
                <div class="place-self-end flex flex-col w-2/5">
                    <p class="bebas-neue-regular text-lg leading-5 text-wrap" >{{cake.title}}</p>
                    <p class=" text-[#3EB933] text-lg bebas-neue-regular -mt-2" >{{cake.price.toFixed(2)}} kr</p>
                </div>
                <button class=" bg-black text-white px-3 rounded ml-auto h-3/4 place-self-center" >ADD TO CART</button> <!--TODO: Fix Heiht of button-->
           </div>
        </q-card-selection>
    </div>
    
</template>