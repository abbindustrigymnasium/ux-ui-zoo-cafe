<template>
  <q-layout view="lHh Lpr lFf" class="bebas-neue-regular">
    <q-header elevated>
      <q-toolbar class="bg-main-green">

        <q-toolbar-title class="text-black text-4xl">
          <a @click="goTo('main')">ZOO CAFE</a>
        </q-toolbar-title>

        <div><p class="flex text-l text-black text-xl">
          OPEN HOURS

          <svg width="20" height="28" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10V22L30 26M42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      07-16    
        </p></div>




      </q-toolbar>

      <div class="flex justify-center gap-12 bg-main-green">
      
          <a class="text-black underline text-xl" @click="goTo('staff')" >CONTACT US</a>

          <a class="text-black underline text-xl" @click="goTo('cakes')">SEE MENU</a> 
          
          <a class="text-black underline text-xl" @click="scrollToBottom">FIND US</a> 

          <a class="text-black underline text-xl flex" href="https://www.facebook.com/tidningencafe/?locale=sv_SE">
          <svg width="30" height="28" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6484 2.16667H14.8855C12.7802 2.16667 10.761 3.00075 9.27232 4.48541C7.78362 5.97007 6.94727 7.98371 6.94727 10.0833V14.8333H2.18433V21.1667H6.94727V33.8333H13.2979V21.1667H18.0608L19.6484 14.8333H13.2979V10.0833C13.2979 9.66341 13.4651 9.26069 13.7629 8.96375C14.0606 8.66682 14.4644 8.5 14.8855 8.5H19.6484V2.16667Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<a class="text-black underline text-xl" href="https://www.instagram.com/">
<svg width="30" height="" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.0318 9.29167H27.0476M10.3615 2.16667H26.2379C30.6221 2.16667 34.1762 5.71108 34.1762 10.0833V25.9167C34.1762 30.2889 30.6221 33.8333 26.2379 33.8333H10.3615C5.97729 33.8333 2.42322 30.2889 2.42322 25.9167V10.0833C2.42322 5.71108 5.97729 2.16667 10.3615 2.16667ZM24.6503 17.0025C24.8462 18.3202 24.6205 19.666 24.0053 20.8484C23.3901 22.0309 22.4167 22.9897 21.2235 23.5887C20.0304 24.1876 18.6783 24.396 17.3595 24.1844C16.0407 23.9728 14.8224 23.3518 13.8778 22.4098C12.9333 21.4679 12.3107 20.2529 12.0984 18.9377C11.8862 17.6225 12.0953 16.274 12.6958 15.0841C13.2964 13.8942 14.2578 12.9234 15.4435 12.3099C16.6291 11.6963 17.9786 11.4713 19.2999 11.6667C20.6477 11.866 21.8955 12.4923 22.8589 13.4532C23.8224 14.414 24.4504 15.6584 24.6503 17.0025Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

<a class="text-black underline text-xl" href="https://www.twitch.tv/">
<svg width="30" height="" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8892 16.4167V10.0833M22.8274 16.4167V10.0833M30.7656 2.16667H2.18799V27.5H10.1262V33.8333L16.4768 27.5H24.4151L30.7656 21.1667V2.16667Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

        
          
        </div>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

defineOptions({
  name: 'MainLayout'
})

function goTo(path)
{
  router.push(`/${path}`)
}



const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function scrollToBottom()
{
  window.scrollTo(0, document.body.scrollHeight)
}


</script>

<style>

</style>
