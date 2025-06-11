<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const formError = ref(false);

const services = [
  { id: 'site', label: 'Site Institucional' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'custom', label: 'Projeto Personalizado' },
  { id: 'ai', label: 'Automação com IA' },
  { id: 'other', label: 'Outro' },
];

const handleSubmit = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form after submission
    formData.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    };
  }, 1500);
};
</script>

<template>
  <section id="contact" class="section-padding">
    <div class="container">
      <h2 class="section-title">Entre em Contato</h2>
      <p class="section-subtitle">
        Estamos prontos para transformar sua ideia em realidade. Preencha o formulário abaixo e inicie seu projeto!
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        <div class="bg-white rounded-xl shadow-lg p-8 order-2 lg:order-1">
          <form @submit.prevent="handleSubmit">
            <div v-if="formSubmitted" class="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
              <p class="font-medium">Mensagem enviada com sucesso!</p>
              <p>Entraremos em contato em breve.</p>
            </div>
            
            <div v-if="formError" class="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              <p class="font-medium">Ocorreu um erro ao enviar sua mensagem.</p>
              <p>Por favor, tente novamente mais tarde.</p>
            </div>
            
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            
            <div class="mb-4">
              <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
              <select
                id="service"
                v-model="formData.service"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="" disabled>Selecione um serviço</option>
                <option v-for="service in services" :key="service.id" :value="service.id">
                  {{ service.label }}
                </option>
              </select>
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Descreva seu projeto ou necessidade..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full btn btn-primary flex items-center justify-center"
              :disabled="isSubmitting"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
          </form>
        </div>
        
        <div class="order-1 lg:order-2">
          <div class="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl shadow-lg p-8 h-full">
            <h3 class="text-2xl font-bold mb-6">Vamos conversar sobre seu projeto</h3>
            <p class="mb-8">
              Transforme sua presença digital com soluções personalizadas para o seu negócio. Nossa equipe está pronta para ajudar a alcançar seus objetivos.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium mb-1">Telefone</h4>
                  <p>(11) 98765-4321</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium mb-1">Email</h4>
                  <p>contato@digidev.com.br</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium mb-1">Endereço</h4>
                  <p>Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <h4 class="text-lg font-medium mb-3">Siga nossas redes sociais</h4>
              <div class="flex space-x-4">
                <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>