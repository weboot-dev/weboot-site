<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#services' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Tecnologias', href: '#technologies' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
];

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-white/90 backdrop-blur-sm shadow-md': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold" :class="{ 'text-primary-600': isScrolled, 'text-white': !isScrolled }">DigiDev</a>
        </div> -->
        
        <a href="#" class="block">
          <img 
            v-if="isScrolled" 
            src="./../assets/logo.png" 
            alt="Logo colorida" 
            class="h-16 max-h-20 object-contain transition-all duration-300"
          />
          <img 
            v-else 
            src="./../assets/logo_escura.png" 
            alt="Logo branca" 
            class="h-16 max-h-20 object-contain transition-all duration-300"
          />
        </a>

        <!-- Desktop menu -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="link in navLinks" :key="link.name">
              <a
                :href="link.href"
                class="font-medium transition-colors duration-300"
                :class="{ 'text-gray-700 hover:text-primary-600': isScrolled, 'text-white/90 hover:text-white': !isScrolled }"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </nav>
        
        <div class="hidden md:block">
          <a 
            href="#contact" 
            class="btn"
            :class="{ 'btn-primary': isScrolled, 'bg-white text-primary-600 hover:bg-white/90': !isScrolled }"
          >
            Solicitar Orçamento
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <button
          class="md:hidden focus:outline-none"
          @click="toggleMobileMenu"
          :class="{ 'text-gray-700 hover:text-primary-600': isScrolled, 'text-white hover:text-white/80': !isScrolled }"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white shadow-lg absolute w-full"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </a>
        <div class="px-3 py-2">
          <a href="#contact" class="btn btn-primary w-full" @click="isMobileMenuOpen = false">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  </header>
</template>