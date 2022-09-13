<template>
        <div class="bodytoast" >
        <div class="toast">
            <div class="toast__content">
                <div class="toast__icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="toast__text">
                    Bạn có muốn hủy bỏ khai báo tài sản này?
                </div>
            </div>
            <div class="toast__btn">
                <button class="btn__disable" @click="closeToast()">Không</button>
                <button class="btn" >Hủy bỏ</button>
            </div>
        </div>

        <!-- <div class="toast">
            <div class="toast__content">
                <div class="toast__icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="toast__text">
                   Thông tin thay đổi sẽ không được cập nhật nếu bạn không lưu. Bạn có muốn lưu các thay đổi này?
                </div>
            </div>
            <div class="toast__btn">
                <button class="btn__disable">Hủy bỏ</button>
                <button class="btn">Không lưu</button>
                <button class="btn">Lưu</button>

            </div>
        </div>

        <div class="toast">
            <div class="toast__content">
                <div class="toast__icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="toast__text">
                    Bạn có xóa tài sản ?
                </div>
            </div>
            <div class="toast__btn">
                <button class="btn__disable">Không</button>
                <button class="btn">Xóa</button>
            </div>
        </div>

        <div class="toast">
            <div class="toast__content">
                <div class="toast__icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="toast__text">
               Không thể xóa tài sản này vì đã có chứng từ phát sinh
                </div>
            </div>
            <div class="toast__btn">
                <button class="btn">Đóng</button>
            </div>
        </div> -->
</div>

</template>

<script>
   export default {
    name :"MToast",
    components:{
},
// props['isShowToast'];
methods: {
    closeToast(){
        this.$emit('isCloseToast',false);
    },
},
data() {
    return {
        isShowToast: true,
    }
},
}
    
</script>