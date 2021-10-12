<!--
 * @Author: zyh
 * @Date: 2021-09-17 14:10:03
 * @LastEditors: zyh
 * @LastEditTime: 2021-10-12 15:21:58
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

     <template slot="search">
			<a-col :md="6" :xs="24">
				<a-form-item label="自定义">
					<a-input placeholder="自定义搜索" size="small" v-model="searchForm.slot" />
				</a-form-item>
			</a-col>
		</template>
		<template slot="searchMenu">
			<a-button size="small" >查询自定义按钮</a-button>
		</template>
		<template slot-scope="scope" slot="nameForm">
			<a-tag :size="scope.size">{{ scope.label }}</a-tag>
		</template>
		<template slot-scope="scope" slot="name">
			<a-tag :size="scope.size">{{ scope.label }}</a-tag>
		</template>
		<template slot="tip">
			<a-button type="text" size="small">
				tip自定义按钮
			</a-button>
			<span>tip自定义内容</span>
		</template>
		<template slot-scope="props" slot="menuLeft">
			<a-button type="warning" size="small" icon="a-icon-message" > 发送邮件</a-button>
		</template>
		<template slot-scope="props" slot="expand">
			<a-tag>备注：</a-tag>  {{ props.row.projectComment }}
		</template>
		<template slot-scope="scope" slot="menu">
			<a-button :size="scope.size" :disabled="scope.disabled" :type="scope.type" icon="el-icon-share"></a-button>
		</template>
		<template slot-scope="scope" slot="menuForm">
			<a-button :size="scope.size">自定义按钮</a-button>
		</template>
    </page-table>
  </div>
</template>
<script>
  import { fetchList, delObj, tableOption, getSlots, testMockServer} from "./demo";
  import routerParams from "@/template/mixins/router-params.js";
  import buttonGroup from "./toolkit/table-button-group"
  import colButton from "./toolkit/table-column-button"
  import { getDic } from '@/api/admin';
  export default {
    name: 'demo-page',
    mixins: [routerParams()],
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
      this.handleList()
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
  menuBtn:true,//搜索清空按钮
  searchSlot:false,//搜索条件slot
  showBar:true,// 引导
  functionName:'装备查询',//查询标头
  menu:true,// 操作列是否显示
  selection: true,//table 左侧的可选框是否显示
  // dicUrl: dicUrl,//dicUrl : 字典服务器地址
  menuWidth: 150,// table 右侧操作按钮列的宽度，默认为120,
  workflow: false,//必填，标记工作流状态
  width:500, //表格宽度     不写宽度表格底部scroll 消失
  // height:800, // 表格高度
  border: true, // 表格是否有边框 
  searchSize: "default", // 搜索条件框 大小  large default  small
  searchSizeBtn:"default", // 搜索按钮  大小  large default  small
  addBtn: true,  // 新增按钮是否显示
  editBtn: true, // 编辑按钮是否显示
  viewBtn: true, // 查看按钮是否显示
  delBtn:true, // 删除按钮 是否显示
  // exportFileBtn:false,// 导出按钮是否显示
  labelCol:{ span: 6 }, // 表单label width
  // searchLabelCol:{ span: 8 }, // 搜索条件label width
  labelPosition:'left',
  refreshBtn:true, // 刷新按钮 是否显示
  showClomnuBtn:true, // 配置表格显示列按钮 是否显示
  showSearchBtn:true, // 是否 收起搜索条件按钮  是否显示
  pagination:false, // 是否显示默认的分页
  pageSizeOptions: ['10', '20', '30', '40', '50'],//指定每页可以显示多少条
  size:"small",    //表格大小  default | middle | small
  showHeader:true,  // 是否显示表头
  align:"left",    //设置列内容的对齐方式  	'left' | 'right' | 'center'
  formWidth:'70%',//表单弹框宽度
  selectClearBtn:true,//多选清空按钮是否显示
  menuAlign:"left",//菜单栏对齐方式
  column: [{
      title: 'zb类型',
      dataIndex: 'zbType',
      key: 'zbType',
      type:'select',
      span:12,
      search: true,
      dicData:DIC.channels,
      showSearch:true,//多选框是否开启搜索
      width: 200,
    },
    {
      title: "zb名称",
      key: 'company',
      dataIndex: "company",
      width: 200,
      span:12,
      search: true,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      dataIndex: 'name1',
      key: 'name1',
      title: '装备计划价/预算',
      ellipsis: true,
      width: 200,
      span:12,
      valueDefault:'a',
      prefix:'¥', //输入框头部内容
      suffix:'RMB',//输入框尾部内容
      allowClear:false,//表单清空
      placeholder:"sssssssssss",
      scopedSlots: { customRender: 'id' },
    },
    {
      title: '任务类型',
      dataIndex: 'name3',
      key: 'name3',
      span:12,
      type:'select',
      multiple:'multiple',
      dicData:DIC.channels,
      ellipsis: true,
      width: 200,
    },
    {
      title: '采购方式',
      dataIndex: 'name4',
      key: 'name4',
      span:12,
      type:'select',
      multiple:'multiple',
      dicData:DIC.channels,
      ellipsis: true,
      width: 200,
    },
    {
      title: "数量",
      dataIndex: "goalPrice",
      key: 'goalPrice',
      width: 250,
      type: "number",
      minRows:1000,
      maxRows:10000,
      span: 12,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "月份",
      key: 'offerPriceTime',
      type:'month',
      dataIndex: "offerPriceTime",
      valueFormat: "YYYY-MM",
      format: "YYYY-MM",
      width: 200,
      span:12,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "批价年度",
      key: 'examinePriceTime',
      type:'date',
      span:12,
      dataIndex: "examinePriceTime",
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      valueDefault:'2020-02-02 12:12:12',
      searchDefault:'2020-02-02 12:12:12',
      width: 200,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "审价年度",
      key: 'planYear',
      type:'year',
      span:12,
      dataIndex: "planYear",
      valueFormat: "YYYY",
      format: "YYYY",
      width: 200,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "年限",
      key: 'reportPriceTime',
      type:'dateRange',
      hide:true,
      span:12,
      dataIndex: "reportPriceTime",
      addVisdiplay:false,
      width: 200,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "批价文号",
      key: 'name8',
      dataIndex: "name8",
      editDisabled:true,
      width: 200,
      span:12,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "承制单位",
      key: 'name9',
      dataIndex: "name9",
      width: 200,
      span:12,
      formsolt:true,
      ellipsis: true, // 超过宽度将自动省略
    },
    {
      title: "备注",
      key: 'bz',
      dataIndex: "bz",
      minRows: 2,
      maxRows: 6,
      span:12,
      type: "textarea",
      width: 250,//列宽
      align:"right", // 设置列内容的对齐方式
      ellipsis: true, // 超过宽度将自动省略
      rules: [ //{ required: true, message: "请输入系统备注", trigger: "blur"},
        {
          required: true,
          message: "系统备注的最大长度为660个字符",
          trigger: "blur",
          pattern: '^.{0,660}$'
        }
      ]
    },
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
/**
* Created by qinzitong on 2019/10/16
*/
<template>
	<page-form ref="crud"
	                 :option="option"
	                 :upload-before="uploadBefore"
	                 :upload-after="uploadAfter"
	                 :before-open="handleBeforeOpen"
	                 :before-close="handleBeforeClose"
	                 @row-save="rowSave"
	                 @row-update="rowUpdate">
		<template slot-scope="scope" slot="menuForm">
			<a-button :size="scope.size">自定义按钮</a-button>
		</template>
	</page-form>
</template>

<script>
  import { tableOption, addObj, putObj } from './jx-ui-demo.js'
	import { auditDataMaker } from '@/template/util/audit.js'
  export default {
    name: 'jx-ui-demo-form',
    data() {
      return {
        loading: true,
        page: {
          total: 2000
        },
        option: tableOption
      }
    },
    methods: {
      rowSave(form, done, loading, auditData) {
        console.log(auditData)
        addObj(form).then((res) => {
          this.$message({
            showClose: true,
            message: "添加成功",
            type: "success"
          });
          done()
        }).catch((err) => {
          loading()
        });
      },
      rowUpdate(form, index, done, loading, auditData) {
        console.log(auditData)
        putObj(form).then((res) => {
          this.$message({
            showClose: true,
            message: "添加成功",
            type: "success"
          });
          done()
        }).catch((err) => {
          loading()
        });
      },

      uploadBefore(file, done, loading) {
        console.log(file)
        done()
        this.$message.success('上传前的方法')
      },
      uploadAfter(res, done, loading) {
        console.log(res)
        done()
        this.$message.success('上传后的方法')
      },
			auditDataMaker(form,auditLog,path){
      	return auditDataMaker(form,auditLog,path)
			}
    }
  };
</script>

<style lang="scss" scoped>

</style>


```


