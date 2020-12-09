<template>
    <!-- รับค่า sendData ที่เป็น emit event จาก AdminForm แล้วให้ไปใช้ที่ function onSubmitted -->
    <!-- ส่งค่าจากตัวแปร singlePost ผ่าน prop post ไปใน Adminform -->
    <AdminForm @sendData="onSubmitted" :post="singlePost"></AdminForm>
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
    //ใช้ asyncData ดึงข้อมูลของ post แต่ละpost ที่ ส่ง id มา เพื่อนำไปแสดงผลในหน้าการแก้ไข post อีกที
    asyncData(context) {
        //ดึงข้อมูลมา โดยที่ ส่ง id ของ post แต่ละตัวไปด้วย เพื่อดึงเฉพาะข้อมูลpost ของ id นั้นๆ
        //โดยส่งค่าไปทำงานที่ AdminForm ผ่าน props เพื่อให้ไปแสดงผลตอนกดแก้ไข
        return axios.get("https://nuxtjslearning.firebaseio.com/posts/" + context.params.id + ".json")
                    .then(res => {
                        return {
                            singlePost : {
                                //เพิ่ม data ที่ get มาได้ของแต่ละ post ไปใน singlePost โดยส่ง key ที่เป็น id ไปด้วย
                                ...res.data,id:context.params.id
                            }
                        }
                    }).catch(e => context.error(e));
    },
    methods: {
        //prop events เป็นการส่งค่าจาก component แม่ไปหา component ลูก 
        //emit events เป็นการส่งค่าจาก component ลูกไปกลับไปหา component แม่ 
            //ในตัวอย่างคือ ส่งจาก components/admin/AdminForm กลับมา page/posts/create ซึ่งเป็น component แม่
        onSubmitted(postData) {
            //postData เป็นข้อมูลจาก form ที่เราพึ่งแก้ไขมา
            //เมื่อกดปุ่ม submit ให้ส่งค่า ไปที่ store function editPost ส่งค่า postData
            this.$store.dispatch("editPost",postData)
            .then(()=> {
                this.$router.push("/admin/posts/")
            })
        }
    }
}
</script>