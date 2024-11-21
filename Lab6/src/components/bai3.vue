<template>
    <div class="container" style="width: 1200px;" >
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row g-4"> 
            <div class="col-lg-4 col-md-6" v-for="(item, index) in items" :key="index">
                <div class="card h-100">
                    <img :src="item.image" class="card-img-top" alt="Hình ảnh" />
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info mt-auto">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const items = ref([
    { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi ...', image: banner1 },
    { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn ...', image: banner2 },
    { title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim ...', image: banner3 },
]);
</script>

