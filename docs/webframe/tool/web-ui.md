
# 介绍
  web-ant-ui.js是基于现有web端的ant-design-vue库进行的二次封装，从而简化一些繁琐的操作，核心理念为数据驱动视图,主要的组件库针对table表格和form表单场景，同时衍生出更多企业常用的组件，达到高复用，容易维护和扩展的框架，同时内置了丰富了数据展示组件，让开发变得更加容易.

**背景**
快速使用json构建card卡片展示

## 浏览器兼容性
  支持所有符合ES5标准的浏览器(不支持IE8及以下版本）.
### 分辨率
  建议在1920*1080分辨率使用
### Demo预览
[Demo链接](https://wojiaozhangyonghao.github.io/wen-ui/)
# 文件

| 文件名 | 用途 |
|-------------|----------|
| web-ant-ui.umd| 生产环境|

# 文档
## FORM文档

## Variables

|参数|说明|类型|可选值|默认值|
|-------------|-------------------------------------------------------------|--------|------|------|
|option|组件配置属性，详情见下面Option属性|Object|—|—|

## Option Attributes

|参数|说明|类型|可选值|默认值|
|-------------|-------------------|-------|---------------------|------|
|searchSlot|搜索区域是否使用slot|Boolean|true/false|false|
|showBar|引导按钮|Boolean|true/false|false|
|functionName|查询条件表头|String|-|-|
|menu|操作列是否显示|Boolean|true/false|true|
|selection|左侧的可选框是否显示|Boolean|true/false|false|
|dicUrl|字典服务器地址|String|-|-|
|width|表格宽度|String|-|-|
|height|表格高度|String|-|-|
|border|表格边框|Boolean|true/false|false|
|searchSize|搜索条件框大小|String|Large/Default/small|Default|
|searchSizeBtn|搜索按钮大小|String|Large/Default/small|Default|
|addBtn|新增按钮是否显示|Boolean|true/false|true|
|editBtn|编辑按钮是否显示|Boolean|true/false|true|
|viewBtn|查看按钮是否显示|Boolean|true/false|true|
|delBtn|删除按钮是否显示|Boolean|true/false|true|
|labelCol|表单的label宽度|Object|{ span: 12 }|{ span: 4|
|labelPosition|表单的label位置|String|left/right|right|
|refreshBtn|刷新按钮|Boolean|true/false|true|
|showClomnuBtn|配置表头显示列按钮|Boolean|true/false|true|
|showSearchBtn|收起搜索条件按钮|Boolean|true/false|true|
|pagination|是否显示默认的分页|Boolean|true/false|true|
|pageSizeOptions|指定每页可以显示多少条|array|['10', '20', '30', '40', '50']|-|
|size|表格控件的大小|String|default/middle/small|default|
|showHeader|是否显示默认的分页|Boolean|true/false|true|
|align|列内容的对齐方式|String|left/right/center|left|
|formWidth|弹出表单的弹窗宽度|String/Number|-|50%|
|dialogClass|弹出表单的弹窗宽度|String|-|-|
|selectClearBtn|清空选中按钮（当selection为true起作用）|Boolean|true/false|true|
|menuAlign|菜单栏对齐方式|String|left/center/right|left|
|menuWidth|操作菜单栏的宽度|Number|-|150|

## Type Attributes

```tip
这是type属性可以配置的组件，当然你也可以自定义，参考第三方组件导入
```


|参数|类型|
|--------|------------------|
|cascader|级联框|
|checkbox|多选框|
|date|日期框|
|datetime|日期时间框|
|daterange|日期范围|
|datetimerange|日期时间范围|
|dates|多个日期|
|dynamic|动态输入框|
|input|输入框|
|month|月|
|password|密码框|
|radio|单选框|
|select|选择框|
|switch|开关框|
|textarea|文本框|
|time|时间框|
|timerange|时间范围|
|tree|树框|
|week|周|
|year|年|





## Format Attributes

使用`format`指定输入框的格式；使用`valueFormat`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。以下为可用的格式化字串，以UTC2017年1月2日03:04:05为例：

```warning
请注意大小写
```

|格式|含义|备注|举例|
|-----------|---------|------------------------------------------------|-------------|
|`yyyy`|年||2017|
|`M`|月|不补0|1|
|`MM`|月||01|
|`W`|周|仅周选择器的`format`可用；不补0|1|
|`WW`|周|仅周选择器的`format`可用|01|
|`d`|日|不补0|2|
|`dd`|日||02|
|`H`|小时|24小时制；不补0|3|
|`HH`|小时|24小时制|03|
|`h`|小时|12小时制，须和`A`或`a`使用；不补0|3|
|`hh`|小时|12小时制，须和`A`或`a`使用|03|
|`m`|分钟|不补0|4|
|`mm`|分钟||04|
|`s`|秒|不补0|5|
|`ss`|秒||05|
|`A`|AM/PM|仅`format`可用，大写|AM|
|`a`|am/pm|仅`format`可用，小写|am|
|`timestamp`|JS时间戳|仅`value-format`可用；组件绑定值为`number`类型|1483326245000|

## Column  Attributes

|参数|说明|类型|可选值|默认值|
|----------|-------------|-----------|--------------------|---------------------|
|dataIndex|列数据在数据项中对应的 key|String|—|-|
|key|Vue 需要的 key|String|-|-|
|title|列名称|String|—|-|
|ellipsis|超出隐藏|Boolean|true/false|false|
|width|列宽度|number|—|auto|
|span|表单栅列|Number|-|12|
|searchSpan|搜索条件栅列|Number|-|6|
|prefix|当type为input时 带有前缀图标的|String|-|-|
|suffix|当type为input时 带有后缀图标的|String|-|-|
|clearable|表单清空|Boolean|true/false|false|
|placeholder|辅助语|String|—|请选择/请输入+label|
|scopedSlots|列自定义|object|{ customRender: 'id' }|-|
|search|搜索显隐按钮（当column中有搜索的属性，或则searchsolt为true时自定义搜索启动起作用）|Boolean|true/false|false|
|dicData|传入本次需要的静态字典（在column中dicData写对象key值即可加载）|Object|-|-|
|formslot|表单自定义|Boolean|true/false|false|
|showSearch|当type为select 是否开启搜索|Boolean|true/false|false|
|multiple|多选（当type为select时）|String|multiple|-|
|type|类型|String|input/select/radio/checkbox/textarea/cascader/date/time/datetime/daterange/timerange/datetimerange/week/month/year/dates/ueditor/password/switch/tree|input|-|
|minRows|最小行（当type为textarea）|Number|-|2|
|maxRows|最大行（当type为textarea）|Number|-|4|
|minRows|最小值（当type为number）|Number|-|100|
|maxRows|最大值（当type为number）|Number|-|100|
|groupName|二级表头|String|—|-|
|format|显示值时间格式（当type为date/time/datetime/daterangetimerange/datetimerange/week/month/year/dates|-|-|-|
|valueFormat|真实值的时间格式（当type为date/time/datetime/daterangetimerange/datetimerange/week/month/year/dates）|-|-|-|
|align|表格列齐方式|String|left/center/right|left|
|sortable|排序|Boolean|true/false|false|
|fixed|冻结列|Boolean|true/false|false|
|rules|表单规则,参考ant表单规则配置|Object|-|-|
|addVisdiplay|表单项新增时是否显示|Boolean|true/false|true|
|editVisdiplay|表单项编辑时是否显示|Boolean|true/false|true|
|viewVisdiplay|表单项查看时是否显示|Boolean|true/false|true|
|hide|隐藏列|Boolean|true/false|true|
|valueDefault|表单的默认值|Number/String|-|-|
|editDisabled|表单编辑时是否禁止|Boolean|true/false|false|
|disabled|全部是否禁止|Boolean|true/false|false|
|addDisabled|表单新增时是否禁止|Boolean|true/false|false|
|valueDefault|表单的默认值|Number/String|-|-|
|searchDefault|搜索表单的默认值|Number/String|-|-|


## Events

|事件名|说明|参数|
|------------|------------|----|
|reset-change|重置表单回调||
|submit|表单提交事件||

## Methods
|方法名|说明|参数|
|-------------|--------------------|----|
|clearValidate|清空表格钟表单验证。||
|validate|对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个promise||
|resetForm|清空表单数据||
|findColumnIndex|根据prop去找column的配置属性的下标||
|submit|提交表单数据||

## ScopedSlot

|name|说明|
|----|---|
|列的名称|列自定义列的内容，参数为{row,label,dic,$index}|
|列表单的名称|表单自定义列的内容，参数为{row,label,dic,$index}|
|列表单的名称+Header(nameHeader)|表单分组头部自定义的内容|
|列表单的名称+Type(nameType)|表单自定义列的内容，参数为{row,label,value}|
|menuForm|表单操作按钮的自定义内容,参数为{row,label,dic,$index}|


# CRUD文档

## Variables

|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|--------|------------|------|
|before-open|打开前的回调，会暂停Dialog的打开function(done,type)，done用于关闭Dialog,type为当前窗口的类型|Function|—|—|
|before-close|关闭前的回调，会暂停Dialog的关闭function(done,type)，done用于关闭Dialog,type为当前窗口的类型|Function|—|—|
|cell-class-name|单元格的className的回调方法，也可以使用字符串为所有单元格设置一个固定的className,function({row,column,rowIndex,columnIndex})/String|Function|-|-|
|data|显示的数据|Array|—|—|
|option|组件配置属性，详情见下面Option属性|Object|—|—|
|page|分页配置选项，具体看下表|Object|—|—|
|row-class-name|行的className的回调方法，也可以使用字符串为所有行设置一个固定的className,function({row,rowIndex})|Function|-|-|
|span-method|合并行或列的计算方法Function({row,column,rowIndex,columnIndex})|Function|-|-|
|summary-method|自定义的合计计算方法Function({columns,data})|Function|-|-|
|table-loading|表格等待框的控制|Boolean|true/false|false|

## Props Attributes

|参数|说明|类型|可选值|默认值|
|--------|------------------|------|------|------|
|label|字典的名称属性值|String|—|—|
|value|字典的值属性值|String|—|—|
|children|字典的子属性值|String|—|—|
|res|网络字典返回的数据格式|String|—|—|


## Events

|事件名|说明|参数|
|------------------|---------------------------|-------------------------|
|current-change|切换页面时触发该事件|page|
|current-row-change|当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的highlightCurrentRow属性为true|currentRow,oldCurrentRow|
|select|单个选择回调|selection, row|
|selectAll|勾选全选|selection|
|date-change|表格日期回调方法|date|
|filter-change|过滤回调函数|params|
|cell-mouse-enter|当单元格 hover 进入时会触发该事件|row, column, cell, event|
|cell-mouse-leave|当单元格 hover 退出时会触发该事件|row, column, cell, event|
|cell-click|当某个单元格被点击时会触发该事件|row, column, cell, event|
|cell-dblclick|当某个单元格被双击击时会触发该事件|row, column, cell, event|
|row-update|编辑数据后确定触发该事件|row,index,done,loading|
|row-save|新增数据后点击确定触发该事件|row,done,loading|
|row-del|行数据删除时触发该事件|row,index|
|row-click|当某一行被点击时会触发该事件|row,event,column|
|row-dblclick|当某一行被双击时会触发该事件|row,column|
|refresh-change|点击刷新按钮触发该事件|page|
|size-change|页面每页显示的条数触发该事件|pageSize|
|sort-change|调用排序后触发该事件|list|
|search-change|点击搜索后触发该事件|params|
|search-reset|清空搜索回调方法|-|
|selection-change|当选择项发生变化时会触发该事件|selection|
|toggleRowExpansion|用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开|row, expanded|

## Methods

|方法名|说明|参数|
|---------------|------------------------------------------------------------------------------------|----------|
|clearValidate|清空表格钟表单验证。||
|rowAdd|打开表单新增窗口||
|rowSave|表单保存调用||
|rowUpdate|表单更新调用||
|rowEdit|打开表单编辑窗口|row,index|
|rowCell|打开行编辑|row,index|
|rowPrint|打印表格||
|rowExcel|导出表格||
|resetForm|清空表单数据||
|setCurrentRow|用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。|row|
|selectClear|用于多选表格，清空用户的选择。||
|searchReset|清空搜索栏目的值||
|toggleSelection|用于多选表格，切换所有行的选中状态。||

## Scoped Slot

|name|说明|
|---|-----|
|列的名称|列自定义列的内容，参数为{row,label,dic,$index}|
|列表单的名称+Form(nameForm)|表单自定义列的内容，参数为{row,label,dic,$index}|
|列表单的名称+Type(nameType)|表单自定义列的内容，参数为{row,label,value}|
|empty|暂无数据的自定义卡槽|
|expand|折叠板的自定义内容,参数为{row,label,dic,$index}|
|menu|菜单的操作按钮自定义内容,参数为{row,label,dic,$index}|
|menuForm|表单操作按钮的自定义内容,参数为{row,label,dic,$index}|
|menuLeft|表格头部左侧内容|
|menuRight|表格头部右侧内容|
|menuBtn|操作栏目下拉菜单自定义(要用el-dropdown-item组件包裹起来),参数为{row,label,dic,$index}|
|searchSlot|搜索栏目自定义内容|
|searchMenu|搜索栏目菜单自定义内容|

