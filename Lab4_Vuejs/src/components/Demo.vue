<template>
    <h1>{{ Name }}</h1>
    <h1>{{ Age }}</h1>
    <h1>{{ Gender }}</h1>
    <p>{{Class.gv}} - {{ Class.sub }}</p>
    <button @click="change()">Click</button>
</template>

<script>
    export default {
        data() {
            return {
                Name:'Đức Hiền',
                Age:19,
                Gender: 'Nam',
                Class: {
                    gv: 'Thầy Đạt',
                    sub: 'SOF308'
                }
            };
        },
        methods: {
            change() {
                if (this.Name == 'Đức Hiền') {

                
                    this.Name = 'Trường Thịnh';
                    this.Age = '19';
                    this.Gender = 'Nam';
                    this.Class.gv = 'Thầy Duy';
                    this.Class.sub = 'SOF3012'
                }else {
                    this.Name = 'Đức Hiền';
                    this.Age = '19';
                    this.Gender = 'Nam';
                    this.Class.gv = 'Thầy Đạt';
                    this.Class.sub = 'SOF308'
                }
            }
        }
    }
</script>