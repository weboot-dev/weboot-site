<script setup lang="ts">
import { ref } from 'vue';

const services = ref([
  {
    id: 1,
    title: 'Sites Institucionais',
    description: 'Desenvolvemos sites profissionais que representam sua marca com elegância e funcionalidade, otimizados para conversão e rankeamento nos motores de busca.',
    icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm1-8h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3z',
    color: 'primary'
  },
  {
    id: 2,
    title: 'E-commerce',
    description: 'Criamos lojas online completas com experiência de compra intuitiva, gestão de produtos, pagamentos seguros e integração com sistemas de logística.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
    color: 'secondary'
  },
  {
    id: 3,
    title: 'Projetos Personalizados',
    description: 'Desenvolvemos soluções digitais exclusivas para atender necessidades específicas do seu negócio, desde plataformas web até aplicativos complexos.',
    icon: 'M11 4a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H4a2 2 0 1 1 0-4h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V4z',
    color: 'accent'
  },
  {
    id: 4,
    title: 'Automações com IA',
    description: 'Integramos soluções de inteligência artificial para automatizar processos, chatbots inteligentes e sistemas de recomendação personalizados para seu negócio.',
    icon: 'M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z',
    color: 'primary'
  },
  // {
  //   id: 5,
  //   title: 'Automações com IA',
  //   description: 'Integramos soluções de inteligência artificial para automatizar processos, chatbots inteligentes e sistemas de recomendação personalizados para seu negócio.',
  //   icon: 'M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z',
  //   color: 'primary'
  // }

]);
</script>

<template>
  <section id="services" class="section-padding bg-gray-50">
    <div class="container">
      <h2 class="section-title">Nossos Serviços</h2>
      <p class="section-subtitle">
        Oferecemos soluções digitais completas para transformar sua presença online e impulsionar seu negócio
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="card p-6 group hover:translate-y-[-8px]"
        >
          <div 
            class="w-16 h-16 mb-4 rounded-lg flex items-center justify-center transition-colors duration-300"
            :class="{
              'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white': service.color === 'primary',
              'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white': service.color === 'secondary',
              'bg-accent-100 text-accent-600 group-hover:bg-accent-600 group-hover:text-white': service.color === 'accent'
            }"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-8 w-8"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                :d="service.icon" 
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>