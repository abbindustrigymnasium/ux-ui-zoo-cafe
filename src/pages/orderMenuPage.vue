<script setup>
 import theImage from "assets/cool.jpg"
</script>



<template>
    <q-card-selection class=" shadow-lg p-4 flex rounded-lg w-56 h-64 bg-white">
        <div class=" h-[calc(100%-4rem)] w-full">
            <img :src="theImage" alt="image of product" class="h-full w-full object-fill rounded">
        </div>

       <div class="flex w-full">
            <div>
                <div class="bebas-neue-regular text-4xl" >Mat</div>
                <div>price kr</div>
            </div>
            <button class=" bg-black text-white px-4 rounded ml-auto" >ADD TO CART</button> <!--TODO: Fix Heiht of button-->
       </div>
    </q-card-selection>
</template>