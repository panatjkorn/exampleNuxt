<template>
    <h2>
        <!-- ดึงข้อมูลจาก route ใน url มาแสดง -->
        <!-- name หมายถึงโฟลเดอร์ _id เป็นการอ้างอิงตำแหน่ง setได้จากการสร้างโฟลเดอร์ _id -->
        Welcome : {{ $route.params.id }}
    </h2>
</template>

<script>
export default {
    // การ validate ให้ parameter ที่ส่งเข้ามาจาก url เป็นตัวเลขเท่านั้น ถ้าเป็นตัวอักษรจะไม่แสดงผล
    // d คือ การกำหนดให้เป็นตัวเลข
    // data คือ parameter ที่เราส่งเข้ามา
    validate(data) {
        return /^\d+$/.test(data.params.id);
    }
}
</script>