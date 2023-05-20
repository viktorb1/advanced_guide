<template>
    <Products :products="products" />
</template>

<script setup lang="ts">
import Products from "@/views/Products.vue"
import { ref, onMounted } from "vue"
import axios from "axios"
import type { Product } from "@/views/views.d.ts"


const products = ref<Product[]>([])

onMounted(async () => {
    const { data } = await axios.get("products/frontend")
    console.log(data)
    products.value = data
    console.log(products.value)
})
</script>