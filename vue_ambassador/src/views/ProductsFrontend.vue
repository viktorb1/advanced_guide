<template>
    <Products :products="filteredProducts" :filters="filters" @set-filters="filtersChanged" />
</template>

<script setup lang="ts">
import Products from "@/views/Products.vue"
import { ref, onMounted, reactive } from "vue"
import axios from "axios"
import type { Product } from "@/views/views.d.ts"


const products = ref<Product[]>([])
const filteredProducts = ref()
const filters = reactive({
    s: ""
})

const filtersChanged = (f: { s: string }) => {
    console.log("running")
    filters.s = f.s
    filteredProducts.value = products.value.filter(p => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0)
}

onMounted(async () => {
    const { data } = await axios.get("products/frontend")
    products.value = data
    filteredProducts.value = data
})
</script>