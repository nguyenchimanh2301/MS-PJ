<template>
  <div>
    <div class="content">
      <TheHeader />
      <div class="grid">
        <div class="toolbar">
          <div class="grid__feature--filter">
            <div class="grid__input--feature">
              <div class="icon__search"></div>
              <input type="text" class="input" placeholder="Tìm kiếm tài sản" />
            </div>
            <div class="grid__option--feature">
              <div class="grid__option-filter">
                <div class="option__filter--icon icon__filter"></div>
                <div class="option__filter--text">
                  <input type="text" placeholder="Loại tài sản" />
                </div>
                <div class="option__filter--icon icon__dropdown"></div>
              </div>
              <div class="grid__option-filter">
                <div class="option__filter--icon icon__filter"></div>
                <div class="option__filter--text">
                  <input type="text" placeholder="Bộ phận sử dụng" />
                </div>
                <div class="option__filter--icon icon__dropdown"></div>
              </div>
            </div>
          </div>
          <div class="grid__button--feature">
            <button class="btn btn__add" id="btnAdd" @click="btnShowPopup">
              + Thêm tài sản
            </button>
            <div class="feature__box">
              <div class="feature__icon-export">
                <div class="tooltip tooltip__export">Xuất</div>
              </div>
            </div>
            <div class="feature__box">
              <div class="feature__icon-delete">
                <div class="tooltip tooltip__delete">Xóa</div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid__table">
          <table class="table">
            <thead>
              <tr>
                <th class="text-alain-center">
                  <input type="checkbox" name="" id="" />
                </th>
                <th class="text-alain-left">STT</th>
                <th class="text-alain-left">Mã tài sản</th>
                <th class="text-alain-left">Tên tài sản</th>
                <th class="text-alain-left">Bộ phận sử dụng</th>
                <th class="text-alain-right">Số lượng</th>
                <th class="text-alain-right">Nguyên giá</th>
                <th class="text-alain-right">HM/KH lũy kế</th>
                <th class="text-alain-right">Giá trị còn lại</th>
                <th class="text-alain-center">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in data"
                :key="item"
                @dblclick="employeeSelected(item)"
              >
                <td class="text-alain-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td class="text-alain-left">1</td>
                <td class="text-alain-left">{{ item.CustomerGroupId }}</td>
                <td class="text-alain-left">{{ item.CustomerGroupName }}</td>
                <td class="text-alain-left">{{ item.Description }}</td>
                <td class="text-alain-right">{{ item.ModifiedBy }}</td>
                <td class="text-alain-right">{{ item.CustomerGroupId }}</td>
                <td class="text-alain-right">{{ item.CreatedDate }}</td>
                <td class="text-alain-right">{{ item.ModifiedDate }}</td>
                <td class="text-alain-center">
                  <button class="btn__pen" @click="btnShowPopup">
                    <div class="tooltip">Sửa</div>
                  </button>
                  <button class="btn__td">
                    <div class="tooltip">Nhân bản</div>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" >
                  <div class="paging">
                    <div class="total__page">
                        <div>Tổng số: <p class="total">200 bản ghi</p> </div>
                    </div>
                    <div class="current__page">
                        <input type="text" value="20" id="txtCurentPage">
                        <div class="option__filter--icon icon__dropdown"></div>
                    </div>
                    <div class="number__pages">
                        <div class="page__previous"></div>
                        <div class="page__number">
                            <button>1</button>
                            <button>2</button>
                            <button>...</button>
                            <button>10</button>
                        </div>
                        <div class="page__next"></div>
                    </div>
        
                </div>
                </td>
                <td class="text-alain-right total">13</td>
                <td class="text-alain-right total">249.000.000</td>
                <td class="text-alain-right total">19.716.000</td>
                <td class="text-alain-right total">229.284.000</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <MPaging />
    <MPopup
      :isShow="isShowPopup"
      @isShowPopup="showPopup"
      :employeeSelected="employee"
    />
  </div>
</template>

<script>
import MPaging from "../component/MPaging.vue";
import TheHeader from "../layout/TheHeader.vue";
import MPopup from "../component/MPopup.vue";
export default {
  name: "TheContent",
  components: {
    MPaging,
    TheHeader,
    MPopup,
  },
  created() {
    fetch("https://cukcuk.manhnv.net/api/v1/CustomerGroups")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.data = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    btnShowPopup() {
      this.showPopup(true);
    },
    showPopup(isShow) {
      this.isShowPopup = isShow;
    },
    employeeSelected(item) {
      this.showPopup(true);
      this.employee = item;
    },
  },
  data() {
    return {
      isShowPopup: false,
      data: [],
      employee: {},
    };
  },
};
</script>
