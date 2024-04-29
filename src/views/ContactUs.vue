<script setup>
import { ref } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'

// const comments = ref([])

let form = ref({
  emailAddress: '',
  fullName: '',
  phoneNumber: '',
  messageSubject: '',
  messageBody: ''
})
</script>

<template>
  <section class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-3 justify-between py-8 bg-[#1d4354]/5">
      <div class="relative bgs-green-500 overflow-hiddden">
        <img
          src="https://startp-next.envytheme.com/_next/static/media/shape1.754ca456.png"
          alt=""
          class="w-1/4 h-auto object-cover absolute top-0 left-1/4 img-1"
        />
        <img
          src="https://startp-next.envytheme.com/_next/static/media/shape4.0580e2ef.svg"
          alt=""
          class="absolute right-0 img-2"
        />
      </div>
      <div class="py-12">
        <h1 class="text-center text-3xl font-semibold">Contact</h1>
      </div>
      <div class="py-12 relative">
        <img
          src="https://startp-next.envytheme.com/_next/static/media/shape4.0580e2ef.svg"
          alt=""
          class="absolute top-0 right-1/2 h-auto img-2"
        />
      </div>
    </div>
    <div class="px-24 grid grid-cols-1 md:grid-cols-3 gap-4 itemss-center justify-center py-12">
      <div
        class="bg-white flex flex-col shadow-2xl items-center py-6 gap-4 group transition-all duration-700 hover:-translate-y-2"
      >
        <h1 class="text-2xl font-semibold">Mail Here</h1>
        <div class="font-extralight">
          <p class="group-hover:text-green-500">rest@gmail.com</p>
          <p>restfund@gmail.com</p>
        </div>
      </div>
      <div
        class="bg-white flex flex-col shadow-2xl items-center py-12 gap-4 group transition-all duration-700 hover:-translate-y-2"
      >
        <font-awesome-icon
          icon="map-marker-alt"
          class="text-black p-4 text-xl rounded-full bg-gray-300 group-hover:bg-[#1d3534] group-hover:text-white"
        ></font-awesome-icon>
        <h1 class="text-2xl font-semibold">Visit Here</h1>
        <div class="font-extralight">
          <p>FFPF+P2W, Mekele, Ethiopia</p>
        </div>
      </div>
      <div
        class="bg-white flex flex-col shadow-2xl items-center py-6 gap-4 group transition-all duration-700 hover:-translate-y-2"
      >
        <font-awesome-icon
          icon="phone"
          class="text-black p-4 text-xl rounded-full bg-gray-300 group-hover:bg-[#1d3534] group-hover:text-white"
        ></font-awesome-icon>
        <h1 class="text-2xl font-semibold">Call Here</h1>
        <div class="font-extralight">
          <p class="group-hover:text-green-500">+251 92945 7007</p>
          <p>+251 not specified</p>
        </div>
      </div>
    </div>
    <section class="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3642.8835664230915!2d39.46931181830917!3d13.48513923952096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d13.4838516!2d39.472198399999996!4m5!1s0x166afd3bdb7f3623%3A0x1c7f010ff4c99e3e!2z4YuL4YqTIOGJpOGJtSDhjYXhiJXhjYjhibUg4Yib4YiV4Ymg4Yir4YuKIOGIqOGLteGKpOGJtSDhibXhjI3hiKvhi60gKOGIm-GIqOGJtSkgfCBSZWxpZWYgU29jaWV0eSBvZiBUaWdyYXkgKFJFU1QpIEhlYWQgT2ZmaWNlLCBGRlBGK1AyVywgTWVrZWxl!3m2!1d13.486872!2d39.4725871!5e0!3m2!1sen!2set!4v1709274199476!5m2!1sen!2set"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full"
      ></iframe>
    </section>

    <section class="w-full flex flex-col justify-center items-center py-12">
      <div class="flex flex-col justify-center items-center gap-4">
        <h1 class="text-2xl font-semibold">Get In Touch With Us</h1>

        <SpinningCard />

        <p class="">Anything on your mind,</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 py-12 gap-4">
        <div class="w-full">
          <img
            src="https://startp-next.envytheme.com/_next/static/media/contact-img.15a914b7.png"
            alt=""
            class="w-full h-[90%]"
          />
        </div>
        <div class="w-full">
          <form @submit.prevent="submitContact" class="w-full flex flex-col gap-4">
            <BaseInput
              v-model="form.fullName"
              @handleEnter="submitForm"
              type="text"
              icon="user"
              required
              placeholder="Your full name"
              @handleBlur="blurF"
            ></BaseInput>
            <BaseInput
              v-model="form.emailAddress"
              @handleEnter="submitForm"
              type="email"
              icon="envelope"
              required
              placeholder="Enter Your Email"
              @handleBlur="blurF"
              autocomplete="true"
            ></BaseInput>

            <div class="flex flex-col md:flex-row gap-2 w-full">
              <BaseInput
                v-model="form.phoneNumber"
                @handleEnter="submitForm"
                type="text"
                icon="phone"
                required
                placeholder="Enter Your Phone"
                @handleBlur="blurF"
              ></BaseInput>
              <BaseInput
                v-model="form.messageSubject"
                @handleEnter="submitForm"
                type="comment"
                icon="tag"
                required
                placeholder="Enter Your subject"
                @handleBlur="blurF"
              ></BaseInput>
            </div>
            <BaseTextarea
              v-model="form.messageBody"
              rows="4"
              textareaClasses=""
              placeholder="Enter your message"
              icon="comment"
            ></BaseTextarea>

            <BaseButton type="submit">Send Message</BaseButton>
            <h1>{{ form.messageBody }}</h1>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.img-1 {
  animation: img-spin 2s linear infinite;
}

@keyframes img-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.img-2 {
  animation: svg-spin 5s linear infinite;
}
@keyframes svg-spin {
  0% {
    transform: rotate(0deg);
    top: 20%;
  }
  25% {
    transform: rotate(90deg);
    top: 40%;
    right: 30%;
  }
  50% {
    transform: rotate(270deg);
    top: 60%;
    right: 10%;
  }
  100% {
    transform: rotate(360deg);
    top: 0%;
    right: 0;
  }
}
</style>
