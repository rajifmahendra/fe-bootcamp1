<template>
    <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <section>
            <Banner />
        </section>
        <div class=" w-full">
            <CardProduct />
        </div>
    </div>
</template>
<script>
import CardProduct from '@/components/HomeComponents/CardProduct.vue';
import Banner from '@/components/HomeComponents/Banner.vue';
export default {
    name: 'HomeIndex',
    components: { CardProduct, Banner }
}
</script>