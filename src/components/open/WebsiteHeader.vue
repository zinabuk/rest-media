<script setup>
import { OPEN_MENUS } from '@/constants/open-navigation'
</script>
<template>
  <nav class="flex justify-end bg-[#539000] text-white"><ul class="flex items-center justify-center gap-4 px-4 py-2"><li>English</li> <li>ትግርኛ</li></ul></nav>
  <header class="w-full flex items-center  z-40 sticky top-0 justify-between px-4 bg-[#539000]s bg-white/100 p-4 text-whidte">
    <div class="overflow-hidden">
      <img src="@/assets/rest.jpg" alt="" width="40px" height="40px" class="py-2 w-32 h-16" />
    </div>
    <div>
      <nav class="w-full flex">
        <ul class="flex space-x-4 px-4 w-full">
          <li v-for="menu in OPEN_MENUS" :key="menu.name" class="menu-item relative">
            <router-link :to="{ name: menu.name }" exact-active-class="isActive">{{
              menu.label
            }}</router-link>
            <ul v-if="menu.SUB_MENUS" class="submenu">
              <li
                v-for="submenu in menu.SUB_MENUS"
                :key="submenu.name"
                class="submenu-item text-black flex flex-col gap-4"
              >
                <router-link v-if="submenu.requiresRoute" :to="{ name: submenu.name }">{{
                  submenu.label
                }}</router-link>
                <a v-else>{{ submenu.label }}</a>
                <ul v-if="submenu.children" class="submenu text-black">
                  <li v-for="child in submenu.children" :key="child.name" class="submenu-item">
                    <a>{{ child.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="px-4">
      <router-link to="/donate" class="bg-yellow-400 text-white  px-4 py-2"
        >DONATE</router-link
      >
    </div>
  </header>
</template>

<style scoped>
.menu-item:hover .submenu,
.submenu-item:hover .submenu {
  display: block;
  background-color: white;
  opacity: 1;
}

.submenu {
  display: none;
  position: absolute;
  padding: 12px;
  z-index: 50;
  min-height: 200px;
  min-width: 200px;
  /* margin-top: px; */
}

.menu-item:hover .submenu {
  left: 0;
  top: 100%;
}
.isActive {
  color: green;
}
</style>
