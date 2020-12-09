<template>
    <!-- รับค่า sendData ที่เป็น emit event จาก AdminForm แล้วให้ไปใช้ที่ function onSubmitted -->
    <AdminForm @sendData="onSubmitted"></AdminForm>
</template>
<script>
// สร้าง component สำหรับการเขียน form แล้ว import มาใช้งานใน pages
import AdminForm from '@/components/admin/AdminForm'
//นำ axios มาเพื่อส่งค่าที่ต้องการแอดข้อมูลเข้า database (สามารถรับส่งค่า api ได้)
import axios from 'axios'
export default {
    layout : "coreLayout",
    components: {
        AdminForm
    },
    methods: {
        //prop events เป็นการส่งค่าจาก component แม่ไปหา component ลูก 
        //emit events เป็นการส่งค่าจาก component ลูกไปกลับไปหา component แม่ 
            //ในตัวอย่างคือ ส่งจาก components/admin/AdminForm กลับมา page/posts/create ซึ่งเป็น component แม่
        onSubmitted(postData) {
            //postData ที่รับเข้ามาใน function เป็นค่า sendData จาก emit event
            // console.log("result = ",postData);

            //เมื่อกดปุ่ม submit ให้ส่งค่า ไปที่ store function addPost ส่งค่า postData
            this.$store.dispatch("addPost",postData)
            .then(()=> {
                this.$router.push("/admin/posts")
            })
        }
    }
}
</script>