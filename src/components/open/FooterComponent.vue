<script setup>
import { ref } from 'vue'
const email = ref('')
const subscribe = () => {
  alert(email.value)
}
</script>

<template>
  <section class="w-full px-4 py-12 bg-[#579000] text-white">
    <div class="w-full grid grid-cols-1 md:grid-cols-5 py-8 gap-4">
      <div class="col-span-2">
        <img
          src="@/assets/rest-logo.png"
          alt=""
          width="200px"
          height="100px"
          class="px-4 py-2 w-52 h-28"
        />
        <p class="text-lg">
          We offer crisis response and development programs, including food aid, healthcare,
          education, water and sanitation, and livelihood initiatives.
        </p>
      </div>

      <div class="flex flex-col">
        <h1 class="text-xl">Quick Links</h1>
        <ul class="flex flex-col">
          <li class="flex flex-col text-lg font-bold">
            <router-link to="/" class="text-bluue-500 hover:underline">Home</router-link>
            <router-link to="/about" class="text-bulue-500 hover:underline">About</router-link>
            <router-link to="/staff" class="text-bluue-500 hover:underline">Team</router-link>
            <router-link to="/donate" class="text-ublue-500 hover:underline">Donate</router-link>
            <router-link to="/archive" class="text-bluue-500 hover:underline">Archive</router-link>
            <router-link to="/gallery" class="text-bluue-500 hover:underline">Gallery</router-link>

            <router-link to="/contact" class="text-bluue-500 hover:underline">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl">Contacts</h1>
        <div class="text-lg">
          <h2>+2519 2945 7007</h2>
          <h2>rest@gmail.com</h2>
        </div>
      </div>
      <div>
        <h1 class="text-lg">Subscribe to our Newsletter</h1>
        <input
          type="email"
          v-model="email"
          @keyup.enter="subscribe"
          placeholder="Enter your email"
          class="px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <p class="text-center p-4">© 2024 Relief Resources. All rights reserved.</p>
  </section>
</template>
