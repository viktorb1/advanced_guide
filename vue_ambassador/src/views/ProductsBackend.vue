<template>
    <Products :products="products" :filters="filters" @set-filters="load" />
</template>

<script setup lang="ts">
import Products from "@/views/Products.vue"
import { ref, onMounted, reactive } from "vue"
import axios from "axios"
import type { Product } from "@/views/views.d.ts"


const products = ref<Product[]>([])
const filters = reactive({
    s: ""
})

const load = async (f: { s: string }) => {
    filters.s = f.s
    const arr = []

    if (filters.s) {
        arr.push(`s=${filters.s}`)
    }
    const { data } = await axios.get(`products/backend?${arr.join('&')}`)
    products.value = data.data
}

onMounted(() => load(filters))

</script>