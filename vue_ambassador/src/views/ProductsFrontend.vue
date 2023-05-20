<template>
    <Products :products="filteredProducts" :filters="filters" @set-filters="filtersChanged" />
</template>

<script setup lang="ts">
import Products from "@/views/Products.vue"
import { ref, onMounted, reactive } from "vue"
import axios from "axios"
import type { Product, Filter } from "types"


const products = ref<Product[]>([])
const filteredProducts = ref()
const filters = reactive<Filter>({
    s: "",
    sort: ""
})

const filtersChanged = (f: Filter) => {
    filters.s = f.s
    filters.sort = f.sort
    filteredProducts.value = products.value.filter(p => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0)

    if (filters.sort === "asc" || filters.sort === "desc") {
        filteredProducts.value.sort((a: Product, b: Product) => {
            const diff = a.price - b.price;
            if (diff == 0) return 0
            const sign = Math.abs(diff) / diff
            return filters.sort === 'asc' ? sign : -sign
        })
    }
}

onMounted(async () => {
    const { data } = await axios.get("products/frontend")
    products.value = data
    filteredProducts.value = data
})
</script>