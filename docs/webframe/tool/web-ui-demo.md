<!--
 * @Author: zyh
 * @Date: 2021-09-17 14:10:03
 * @LastEditors: zyh
 * @LastEditTime: 2021-09-17 14:17:58
 * @Description: file content
-->

# page-table
```html
<template>
  <div id="demo">
    <!--componentId 的值需要修改-->
    <page-table
      :option="tableOption"
      componentId="demo"
      :data="tableData"
      :table-loading="tableLoading"
      :page="page"
      ref="pageTable"
      @row-click="handleRowClick"
      @refresh-change="handleList"
      @current-change="currentChange"
      @search-change="handleSearchChange"
      @size-change="sizeChange"
      @sort-change="sortChange">
    <!--代码可以修改 start-->
      <template slot="menuLeft">
        <!--根据权限确定是否显示table左上侧的按钮-->
        <el-button id="demo_add" type="primary" @click="rowAdd" icon="el-icon-plus" >新 增</el-button>
        <!--根据权限确定是否显示table左上侧的组按钮-->
        <el-button-group style="margin-left: 20px">
          <el-button id="demo_delAll" type="danger" icon="el-icon-delete" @click="handleDelAll">删除</el-button>
        </el-button-group>
        <button-group></button-group>
      </template>
      <template slot-scope="scope" slot="menu">
        <el-tooltip class="item" effect="dark" content="删除该条信息">
          <i id="demo_del" @click="handleDel(scope.row)" class="el-icon-delete"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="编辑该条信息">
          <i id="demo_edit" @click="rowEdit(scope.row)" class="el-icon-edit-outline"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="查看该条信息">
          <i id="demo_view" @click="rowView(scope.row)" class="el-icon-document"></i>
        </el-tooltip>
        <col-button :row="scope.row"></col-button>
      </template>
      <template slot-scope="props" v-for="slot in slots" :slot="slot.name">
        <component :is="slot.name" :data="scope.row" :ref="slot.name" ></component>
      </template>
    <!--代码可以修改 end-->
    </page-table>
  </div>
</template>
<script>
  import { fetchList, delObj, tableOption, getSlots, testMockServer} from "./demo";
  import routerParams from "@/template/mixins/router-params.js";
  import pageAction from "@/template/mixins/page-action.js";
  import buttonGroup from "./toolkit/table-button-group"
  import colButton from "./toolkit/table-column-button"
  import { getDic } from '@/api/admin';
  export default {
    name: 'demo-page',
    mixins: [routerParams(),pageAction()],
    components: {
      buttonGroup,
      colButton
    },
    data() {
      return {
        tableOption: {}, //表格设置属性
        tableData: [], //表格的数据
        tableLoading: false,
        tableObj: {},
        tableSelected:[],
        slots:[],
        page: {
          total: 0, //总页数
          currentPage: 1, //当前页数
          pageSize: 10, //每页显示多少条
        },
        gzOptions: []
      };
    },
    created() {
      this.tableOption = tableOption
      getSlots('table',tableOption).forEach(item =>{
        item['name'] = require(`${item.path}`)
        this.slots.push(item)
      })
      this.handleList()
      testMockServer().then(res=>{
        console.log(res)
      })
    },
    methods: {
      handleRowClick(val){

      },
      rowAdd(){
        this.goto('/demo/form','新增示例页面','add')
      },
      rowEdit(row){
        this.goto('/demo/form','编辑示例页面','edit',row)
      },
      rowView(row){
        this.goto('/demo/form','查看示例页面','view',row)
      },
      handleDel(row, index) {
        this.$confirm(`是否确认删除该条信息`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            delObj(row.systemId).then(response => {
              this.handleList();
              this.$message({
                showClose: true,
                message: "删除成功",
                type: "success"
              });
            });
          })
          .catch(err => {});
      },
      sizeChange(val, form) {
        this.page.pageSize = val;
        this.page = Object.assign(this.page, form)
        this.handleList();
      },
      sortChange(val, form){
        console.log(val)
        console.log(form)
      },
      currentChange(val, form) {
        this.page.currentPage = val;
        this.page = Object.assign(this.page, form)
        this.handleList();
      },

      handleSearchChange(form){
        this.page.currentPage = 1;
        this.page = Object.assign(this.page, form)
        this.handleList();
      },
      handleDelAll(){
        this.getSelectedData()
        this.$message({
          showClose: true,
          message: this.tableSelected,
          type: "success"
        });
      },
      handleList() {
        this.tableLoading = true;
        fetchList(this.page).then(response => {
          this.tableData = response.data.records;
          this.processObj(this.tableData)
          this.page = {
            total:  response.data.total,
            currentPage: response.data.current,
            pageSize:  response.data.size,
            gzType: this.page.gzType
          };
          this.tableLoading = false;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

```
# 配置json
```javascript
import {
  dicUrl
} from '@/config/env';
import request from '@/router/axios'

/**
 *
 * table 、form 配置
 *
 * **/

export const tableOption = {
  //table 左侧的可选框是否显示
  selection: false,
  dicUrl: dicUrl,
  // table 右侧操作按钮列的宽度，默认为120,
  menuWidth: 150,
  //必填，标记工作流状态
  workflow: false,
  column: [{
      label: "系统ID",
      prop: "systemId",
      width: "80",
      search: true
    },
    {
      label: "系统ID1",
      prop: "systemId1",
      width: "80",
      search: true

    },
    {
      label: "系统ID2",
      prop: "systemId2",
      width: "80",
      search: true

    },
    {
      label: "系统类型",
      prop: "systemType",
      width: "250",
      type: "select",
      dicData: "SYSTEM_TYPE",
      sortable: true,
      multiple: true,
      search: true,
      span: 24
    },
    {
      label: "系统ID3",
      prop: "systemId3",
      width: "80",
    },
    {
      label: "系统代码",
      prop: "test-systemCode",
      width: "250",
    },
    {
      label: "系统名称",
      prop: "test-systemName",
      width: "250",
      sortable: true,
    },
    {
      label: "示例列表",
      prop: "tables",
      formsolt: true
    },
    {
      label: "示例列表1",
      prop: "table1",
      formsolt: true
    },
    {
      label: "系统备注",
      prop: "dataNote",
      type: "textarea",
      sortable: false,
      search: false,
      overHidden: true,
      rules: [ //{ required: true, message: "请输入系统备注", trigger: "blur"},
        {
          required: false,
          message: "系统备注的最大长度为660个字符",
          trigger: "blur",
          pattern: '^.{0,660}$'
        }
      ]
    }
  ]
};

/**
 *
 * API 调用
 *
 * **/
export function fetchList(query) {
  return request({
    url: '/product/bearSysInfo/page',
    method: 'get',
    params: query
  })
}

export function getObj(id) {
  return request({
    url: '/product/bearSysInfo/' + id,
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: '/product/bearSysInfo/',
    method: 'post',
    data: obj
  })
}

export function putObj(obj) {
  return request({
    url: '/product/bearSysInfo/',
    method: 'put',
    data: obj
  })
}

export function delObj(id, audit) {
  return request({
    url: '/product/bearSysInfo/' + id,
    method: 'delete',
    params: audit
  })
}

```
# page-form
```html
<template>
  <div id="demoItem">
    <!--componentId 的值需要修改-->
    <page-form
      :option="tableOption"
      :rowModel="formOption"
      componentId="demoItem"
      ref="pageForm"
      :formTitle="title"
      :boxType="boxType"
      @row-save="handleSave"
      @row-update="handleUpdate">
      <template slot-scope="props" v-for="slot in slots" :slot="slot.slotName">
        <component :is="slot.name" :data="row" :ref="slot.name" ></component>
      </template>
      <el-button-group slot="buttons">
        <button-group></button-group>
      </el-button-group>
    </page-form>
  </div>
</template>
<script>
  import { tableOption, addObj, putObj, getSlots } from "./demo";
  import routerParams from "@/template/mixins/router-params.js";
  import formAction from "@/template/mixins/form-action.js";
  import buttonGroup from "./toolkit/form-button-group"
  import { getDic } from '@/api/admin';
  export default {
    name: 'demo-form',
    mixins: [routerParams(),formAction()],
    components: {
      buttonGroup
    },
    data() {
      return {
        tableOption: {}, //表格设置属性
        dataTable:[],
      };
    },
    created() {
      this.tableOption = tableOption
      getSlots('form',tableOption).forEach(item =>{
        item['name'] = require(`${item.path}`)
	      this.slots.push(item)
      })
    },
    methods: {
      handleSave(row,done){
        addObj(row).then((res) => {
          this.$message({
            showClose: true,
            message: "基金信息添加成功",
            type: "success"
          });
          done(true)
        }).catch((err) => {
          done(false)
        });
      },
      handleUpdate(row, index, done) {
        putObj(row).then(response => {
          this.$message({
            showClose: true,
            message: "基金信息修改成功",
            type: "success"
          });
          done(true)
        }).catch((err) => {
          done(false)
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>

```


