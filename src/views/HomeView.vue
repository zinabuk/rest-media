<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <main class="w-full grid grid-cols-12 relative min-h-[calc(100vh_-_80px)] gap-w4">
    <img
      alt="Vue logo"
      class="logo h-full col-span-8 object-cover w-full"
      src="@/assets/hero.jpg"
    />
    <div
      class="w-full h-full flex flex-col justify-center gap-4 col-span-4 p-8 bg-[#539000] text-white"
    >
      <h6 class="font-bold text-gray-100">Serving the needy</h6>
      <p class="text-4xl font-bold">Finncial, Agricultural, Health, Education and more Support</p>
      <div class="flex gap-4 p-4">
        <router-link
          class="bg-white text-lg font-bo text-[#579000] rounded border-r-[50%] px-6 py-3 self-start"
          to="/donate"
          >DONATE NOW</router-link
        >
      </div>
    </div>
  </main>

  <section
    class="px-[1%] md:px-[8%] py-4 md:py-12 gap-2 flex justify-between items-center bg-gray-50"
  >
    <div class="flex flex-col text-4xl items-center justify-center">
      <span class="font-bold">30+</span> <span> Years of work</span>
    </div>
    <div class="text-4xl flex flex-col items-center justify-center">
      <span class="font-bold"> 8+ </span> <span>Services</span>
    </div>
    <div class="p-8 text-4xl flex flex-col items-center justify-center">
      <span class="font-bold">20,000+</span> <span> people served</span>
    </div>
  </section>

  <section class="w-full px-[1%] md:px-[8%] py-8">
    <!-- <img src="@/assets/2.jpg" alt="" class="w-full max-h-[500px] object-cover" /> -->
    <div class=" py-8 w-full grid grid-cols-12 bg-[#579000] gap-2 text-white">
      <h6 class=" text-3xl font-bold text-center col-span-1 flex items-center justify-center">JOIN US</h6>

      <div class="w-full col-span-7">
        <p class="font-bold">
          We’ll send you conservation news and updates on how you can protect nature through
          activism, donating, events, and more. You can unsubscribe at any time.
        </p>
        <div class="w-full">
        <form @submit.prevent="subscribe" class="flex w-3/4 gap-4  justify-start">
          
          <BaseInput placeholder="Enter your email" inputClass="bg-white text-black" required type="email"></BaseInput>
          <BaseButton label="" class="text-center font-bold bg-[#579000] border-2 border-white text-white  ">Subscribe</BaseButton>
        </form>
      </div>
      </div>
      <div class="flex col-span-4 items-center justify-center gap-4">
        <font-awesome-icon icon="[fab, fa-facebook]" class="text-white"></font-awesome-icon>
  <h2>youtube</h2> <h2>Facebook</h2> <h2>Telegram</h2>  <h2>Twitter</h2>  </div>
    </div>
  </section>

  <section  class="w-full px-[1%] md:px-[8%] py-8">
    <h1 class="text-2xl font-semibold py-2">Partiners</h1>
    <div class="w-full grid grid-cols-8 gap-4 place-content-center items-center justify-center align-middle">
      <div v-for="i in 5" :key="i">
        <img
          src="data:image/png;base64,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"
          alt=""
          class="w-full object-cover"
        />

        <h3 class="text-lg font-semibold">Rest Finincial relief</h3>
      </div>
    </div>
    
  </section>

  <!-- <section class="w-full py-8 px-4">
    <h1 class="text-2xl font-semibold py-2">Sponsors</h1>
    <div class="w-full grid grid-cols-7 gap-4">
      <div v-for="i in 7" :key="i">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          class="w-full object-cover"
        />
      </div>
    </div>
  </section> -->

  <sections class="w-full px-[1%] md:px-[8%] py-8">
    <h1 class="text-xl font-semibold">In focus: News</h1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="i in 4" :key="i">
        <img src="@/assets/5.jpg" alt="" class="w-full min-h-[200px]" />
        <h1 class="text-blue-300">REST Signed an agreement</h1>
        <h4>July 23, 2023</h4>
        <p class="text-gray-600">Description comes here</p>
      </div>
    </div>
  </sections>
</template>


