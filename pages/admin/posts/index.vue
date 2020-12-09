<template>
<!-- เป็นการกำหนดว่า PostList ตัวนี้จะใช้ฝั่ง admin นะ เพื่อตรวจสอบสิทธิ์ว่าเป็น admin -->
    <div>
        <PostList isAdmin :posts="loadData"></PostList>
        <!-- เมื่อกดปุ่มให้ไปดึงข้อมูลในdatabase มาแสดง -->
        <!-- <b-button @click="postsAll">Load data in database</b-button> -->
        <b-button>Load....</b-button>
    </div>
</template>
<script>
import PostList from '@/components/posts/PostList'
import axios from 'axios'
export default {
    layout : "coreLayout",
    components : {
        PostList
    },
    computed : {
        //function loadData สำหรับ get ค่า state จาก store มาเพื่อส่งค่าไปทำงานต่อที่ PostList
        //ในตัวอย่างนี้ ชื่อ state คือ getAllPosts
        loadData() {
            return this.$store.getters.getAllPosts 
        }
    }




    // data(){
    //     return {
    //         // สร้างตัวแปร array ที่จัดเก็บ data เพื่อกำหนดค่าที่จะนำไปใช้ใน component
    //         loadData : [
    //         //    {
    //         //         id:"1",
    //         //         title:"เที่ยวบ้านช้าง",
    //         //         content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //         //         image:"https://cdn.pixabay.com/photo/2016/11/14/03/32/elephant-1822492__340.jpg"
    //         //    },
    //         //    {
    //         //         id:"2",
    //         //         title:"เที่ยวอยุธยา",
    //         //         content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //         //         image:"https://cdn.pixabay.com/photo/2016/11/14/03/38/phra-nakhon-si-ayutthaya-1822502_960_720.jpg"
    //         //    },
    //         //    {
    //         //         id:"3",
    //         //         title:"เที่ยวนา",
    //         //         content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //         //         image:"https://cdn.pixabay.com/photo/2016/11/08/05/54/agriculture-1807581_960_720.jpg"
    //         //    },
    //         //    {
    //         //         id:"4",
    //         //         title:"เที่ยวอยุธยา",
    //         //         content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //         //         image:"https://cdn.pixabay.com/photo/2016/11/14/03/32/elephant-1822492__340.jpg"
    //         //    },
    //         ]
    //     }
    //     //เป็นการดึงข้อมูลตอนเปิดหน้าเว็ปมาให้เราเลย 1 ครั้ง โดยที่เราไม่ต้อง oncick เพื่อให้มันเกิด event
    // },
    //asyncData แบบ ปกติ
    // asyncData(context) {
    //     return axios.get("https://nuxtjslearning.firebaseio.com/posts.json")
    //     .then(res=>{
    //         // console.log(res.data);
    //         //กำหนด key เพื่อให้ เป็น id ของ post นั้นๆ
    //         const data = [];
    //         for(const key in res.data) {
    //             //...res.data ได้ data มากี่ตัวก็โยนไปทั้งหมด อ้างอิง id ตาม key
    //             data.push({...res.data[key],id:key})
    //         }
    //         return {
    //             loadData:data
    //         }   
    //     });
    // }

//asyncData + promise
    // asyncData() {
    //     return new Promise((resolve,reject)=> {
    //         setTimeout(() => {
    //             const data = axios.get("https://nuxtjslearning.firebaseio.com/posts.json")
    //             .then(res=> {
    //                 const postData = [];
    //                 for(const key in res.data) {
    //             //  ...res.data ได้ data มากี่ตัวก็โยนไปทั้งหมด อ้างอิง id ตาม key
    //                     postData.push({...res.data[key],id:key})
    //                 }
    //                 return {
    //                     loadData:postData
    //                 }   
    //             })
    //             resolve(data)
    //         },4000)
    //     })
    // }



    // ******** ตัวอย่าง promise await async *********
    // methods: {
    //     //ตัวอย่างต้องการให้ทำตาม step ตามลำดับ
    //     // async postsAll() {
    //     //     //ใช้ axios get ดึงข้อมูลใน database โดย posts.json เป็นชื่อตารางใน database
    //     //     //async คืออันไหนทำเสร็จได้ก่อนก็ทำเสร็จก่อน โดยไม่ต้องรอให้การทำงานเสร็จตามลำดับที่เราวางไว้
    //     //     //await เป็นการทำงานโดยรอให้ข้อมูลเสร็จตามลำดับ 1 2 3
    //     //     console.log('เริ่มต้นโหลดข้อมูล');
    //     //     await axios.get("https://nuxtjslearning.firebaseio.com/posts.json")
    //     //     .then(res => {
    //     //         console.log(res);
    //     //     })
    //     //     console.log('โหลดข้อมูลเสร็จเรียบร้อย');
    //     // }

    //     async postsAll() {
    //         //result คือถ้าหากเรียกใช้ ฟังชัน getData ถ้าหาก สามารถดึงข้อมูลได้สำเร็จ จะรับ data จาก resolve คือ result
    //         console.log('click');
    //         await this.getData().then((result)=> {
    //             console.log(result);
    //         });
    //         console.log('load Complete');
    //     },

    //     getData() {
    //         //promise จะแบ่งการทำงานเป็น resolve กับ reject โดย
    //         //resolve คือ ถ้าการทำงานของ process นี้สำเร็จในอนาคต ให้ทำอะไร
    //         //reject คือการทำงานของ process นี้ไม่สำเร็จ ให้ทำอะไร

    //         return new Promise((resolve,reject)=> {
    //             //ใช้ setTimeout สัญญาว่า ถ้าทำเร็จภายในระยะเวลากี่่วินาที ให้ทำอะไร
    //             setTimeout(()=> {
    //                 const data = axios.get("https://nuxtjslearning.firebaseio.com/posts.json")
    //                 .then(res => {
    //                     return res
    //                 })
    //                 resolve(data) //ถ้าดึงข้อมูลสำเร็จภายใน 4 วิ ให้ โยน data ไปทำงาน
    //             },4000)
    //         })
    //     }
    // }
}
</script>