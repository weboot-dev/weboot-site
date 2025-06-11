<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  url: string;
  thumbnail: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'CREA-PI',
    category: 'Site Institucional',
    image: 'src/assets/imgs/crea.png',
    thumbnail: 'src/assets/imgs/crea.png',
    description: 'Site institucional do Conselho Regional de Engenharia e Agronomia do Piauí – Crea-PI.',
    url: 'https://crea-pi.org.br/'
  },
  {
    id: 2,
    title: 'CREA-PI - Transparência',
    category: 'Site Institucional',
    image: 'src/assets/imgs/crea-transparencia.png',
    thumbnail: 'src/assets/imgs/crea-transparencia.png',
    description: 'Site da transparência do Conselho Regional de Engenharia e Agronomia do Piauí – Crea-PI.',
    url: 'https://transparencia.crea-pi.org.br/'
  },
    {
    id: 3,
    title: 'Rádio Expedição',
    category: 'Site Institucional',
    image: 'src/assets/imgs/radioexpedicao.png',
    thumbnail: 'src/assets/imgs/radioexpedicao.png',
    description: 'Site de atividades de radioamador ou grupos de radioamadores que mobilizam-se para instalação de estações.',
    url: 'https://www.radioexpedicao.com/expedicao/'
  },

]);

const categories = ref([
  { id: 'all', name: 'Todos' },
  { id: 'Site Institucional', name: 'Sites Institucionais' },
  // { id: 'E-commerce', name: 'E-commerce' },
  // { id: 'Projeto Personalizado', name: 'Projetos Personalizados' },
  // { id: 'Automação IA', name: 'Automações IA' }
]);

const activeCategory = ref('all');
const currentIndex = ref(0);
const autoplayInterval = ref<number | null>(null);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === activeCategory.value);
});

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = window.setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const nextSlide = () => {
  if (filteredProjects.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % filteredProjects.value.length;
  }
};

const prevSlide = () => {
  if (filteredProjects.value.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + filteredProjects.value.length) % filteredProjects.value.length;
  }
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  stopAutoplay();
  startAutoplay();
};

const setCategory = (categoryId: string) => {
  activeCategory.value = categoryId;
  currentIndex.value = 0;
  startAutoplay();
};

const visitWebsite = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

onMounted(() => {
  startAutoplay();
});
</script>

<template>
  <section id="portfolio" class="section-padding">
    <div class="container">
      <h2 class="section-title">Portfólio</h2>
      <p class="section-subtitle">
        Conheça alguns dos nossos projetos recentes e veja como transformamos ideias em soluções digitais de sucesso
      </p>
      
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="category in categories"
          :key="category.id"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeCategory === category.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          @click="setCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div class="relative max-w-6xl mx-auto">
        <div class="overflow-hidden rounded-xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="min-w-full px-4"
            >
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="relative group cursor-pointer" @click="visitWebsite(project.url)">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                  />
                  <div class="absolute inset-0 bg-primary-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div class="text-white text-center p-4">
                      <p class="text-lg font-bold mb-2">Visitar Website</p>
                      <p class="text-sm">Clique para acessar</p>
                    </div>
                  </div>
                </div>
                
                <div class="text-left">
                  <span class="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
                    {{ project.category }}
                  </span>
                  <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
                  <p class="text-gray-600 mb-6">{{ project.description }}</p>
                  <button
                    @click="visitWebsite(project.url)"
                    class="btn btn-primary"
                  >
                    Ver Projeto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          class="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 focus:outline-none"
          @click="prevSlide"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          class="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 focus:outline-none"
          @click="nextSlide"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <!-- Thumbnails -->
      <div class="mt-8">
        <div class="flex overflow-x-auto gap-4 pb-4 px-4 -mx-4">
          <button
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            @click="goToSlide(index)"
            class="relative flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
            :class="currentIndex === index ? 'ring-2 ring-primary-600 ring-offset-2' : ''"
          >
            <img
              :src="project.thumbnail"
              :alt="project.title"
              class="w-32 h-24 object-cover rounded-lg"
            />
            <div 
              class="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center"
              :class="currentIndex === index ? 'opacity-0' : 'opacity-100'"
            >
              <span class="text-white text-xs font-medium px-2 text-center">
                {{ project.title }}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>