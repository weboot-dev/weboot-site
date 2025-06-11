<script setup lang="ts">
import { ref, onMounted } from 'vue';

const testimonials = ref([
  {
    id: 1,
    name: 'Carlos Silva',
    company: 'TechSolutions',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'A equipe da DigiDev transformou completamente nossa presença online. O novo site institucional é moderno, rápido e trouxe resultados impressionantes para nossa empresa.'
  },
  {
    id: 2,
    name: 'Marina Santos',
    company: 'ModaFashion',
    position: 'Diretora de Marketing',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'Nossa loja virtual desenvolvida pela DigiDev superou todas as expectativas. As vendas aumentaram em 130% e a experiência do usuário é excepcional. Recomendo sem hesitar!'
  },
  {
    id: 3,
    name: 'Roberto Mendes',
    company: 'Restaurante Gourmet',
    position: 'Proprietário',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'O sistema de reservas online desenvolvido pela DigiDev revolucionou nosso atendimento. Reduziu as faltas em 40% e nossos clientes adoraram a facilidade de uso.'
  },
  {
    id: 4,
    name: 'Juliana Costa',
    company: 'EduTech',
    position: 'Diretora Acadêmica',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'O portal educacional criado pela DigiDev permitiu que escalássemos nossos cursos online e oferecêssemos uma experiência de aprendizado excepcional para nossos alunos.'
  }
]);

const currentIndex = ref(0);
const autoplayInterval = ref<number | null>(null);

const startAutoplay = () => {
  autoplayInterval.value = window.setInterval(() => {
    nextTestimonial();
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const goToTestimonial = (index: number) => {
  currentIndex.value = index;
  stopAutoplay();
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});
</script>

<template>
  <section id="testimonials" class="section-padding bg-gray-50">
    <div class="container">
      <h2 class="section-title">O que nossos clientes dizem</h2>
      <p class="section-subtitle">
        Confira os depoimentos de alguns dos nossos clientes satisfeitos com as soluções que desenvolvemos
      </p>
      
      <div class="relative max-w-4xl mx-auto mt-12">
        <div class="overflow-hidden">
          <div class="transition-all duration-500 flex"
               :style="{transform: `translateX(-${currentIndex * 100}%)`}">
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id" 
              class="min-w-full px-4"
            >
              <div class="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                <div class="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-100">
                  <img 
                    :src="testimonial.image" 
                    :alt="testimonial.name"
                    class="w-full h-full object-cover" 
                  />
                </div>
                <p class="text-gray-700 text-lg italic mb-6">
                  "{{ testimonial.quote }}"
                </p>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-primary-600">
                    {{ testimonial.position }} - {{ testimonial.company }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          class="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 focus:outline-none"
          @click="prevTestimonial"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          class="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 focus:outline-none"
          @click="nextTestimonial"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div class="flex justify-center mt-8 space-x-2">
        <button 
          v-for="(_, index) in testimonials" 
          :key="index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-primary-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'"
          @click="goToTestimonial(index)"
        ></button>
      </div>
    </div>
  </section>
</template>