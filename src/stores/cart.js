import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const count = computed(() => items.value.reduce((s,i)=>s+i.qty,0))
  const total = computed(() => items.value.reduce((s,i)=>s+i.product.price*i.qty,0))

  function add(product, qty=1){
    const existing = items.value.find(i=>i.product.id===product.id)
    if(existing) existing.qty+=qty
    else items.value.push({product, qty})
  }

  function remove(id){
    items.value = items.value.filter(i=>i.product.id!==id)
  }

  function clear(){ items.value = [] }

  return { items, count, total, add, remove, clear }
})
