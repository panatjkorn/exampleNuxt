<template>
    <b-container fluid="md" class="py-2">
        <h2>เขียนบทความ</h2>
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <!-- ผูก v-model -->
            <b-form-group label="ชื่อบทความ">
                <b-form-input type="text" 
                placeholder="ระบุชื่อบทความ"
                v-model="form.title"></b-form-input>
            </b-form-group>
            <b-form-group label="รายละเอียดบทความ">
                <b-form-textarea placeholder="รายละเอียดบทความ"
                rows="8"
                v-model="form.content"></b-form-textarea>
            </b-form-group>
            <b-form-group label="รูปภาพ (url)">
                <b-form-input type="text" placeholder="ระบุรูปภาพบทความ" v-model="form.image"></b-form-input>
            </b-form-group>
            <b-form-group label="ผู้เขียน">
                <b-form-input type="text" placeholder="ระบุผู้เขียน" v-model="form.author"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">บันทึกข้อมูล</b-button>
            <b-button type="reset" variant="danger">ล้าง</b-button>
        </b-form>
        <b-card header="result">
            <p>name : {{ form.title }}</p>
            <p>content : {{ form.content }}</p>
            <p>image : {{ form.image }}</p>
            <p>author : {{ form.author }}</p>
        </b-card>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            //ถ้ามีค่าจาก prop post ส่งมาให้ assign ค่าที่รับจาก post เข้าไปในตัวแปรพวกนี้
            //ถ้าไม่มีค่าส่งมาให้ set ค่าในตัวแปร เป็นค่าว่าง
            form : this.post?{...this.post} : {
                title : "",
                content: "",
                image : "",
                author : ""
            }
        }
    },
    //สร้าง props สำหรับการส่งข้อมูลไปยังส่วน การแก้ไข post
    props : {
        post: {
            type:Object,
            required : false
        }
    },
    methods : {
        // เช็ค event submit และ reset
        onSubmit(event) {
            // event.preventDefault(); //เป็นการ set ให้ form refresh

            //sendData เป็น event ทีเรากำหนดขึ้นมาเอง
            //ใช้ $emit เพื่อส่งค่าจาก component ลูก กลับไปหา component แม่
            //ตัวอย่างนี้คือ ส่ง emit events ที่ชื่อ sendData โดย data ที่ส่งไปคือ this.form ซึ่งเป็นค่าที่เราใส่ใน form
            // เมื่อส่งค่าไปเสร็จให้ไปรับ ค่าใน tag AdminForm ที่อยู่ใน componet แม่ด้วย
            this.$emit('sendData', this.form)
            //พอส่งข้อมูลไปที่ component แม่เสร็จให้ redirect ไปที่ admin.posts เพื่อดู post
            this.$router.push('/admin/posts')

            // console.log(this.form);
        },
        onReset(event) {
            // เมื่อ reset ให้ set ทุกอย่างเป็นค่าว่าง
            event.preventDefault();
            this.form.title = "",
            this.form.content ="",
            this.form.image = "",
            this.form.author = ""
        }
    }
}
</script>