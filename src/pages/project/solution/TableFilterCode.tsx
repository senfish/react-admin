

export const TableFilterCode = `
const App = () => {
  const items = [
    {
      label: "操作用户",
      field: "user",
      component: (
        <Select
          placeholder="请输入用户名"
          allowClear
          onChange={(value) => {
            setUser(value);
          }}
          options={(userList?.data || []).map((item) => {
            return {
              label: item.username,
              value: item.username,
            };
          })}
        />
      ),
    },
    {
      label: "操作类型",
      field: "type",
      component: (
        <Select
          placeholder="请输入用户名"
          allowClear
          options={Object.keys(typeMap).map((key) => {
            return {
              label: typeMap[key],
              value: key,
            };
          })}
          onChange={(value) => {
            setType(value);
          }}
        />
      ),
    },
    {
      label: "操作日期",
      field: "user",
      component: (
        <RangePicker onChange={onChange} disabledDate={disabledDate} />
      ),
    },
  ];
return (
    <div >
      <TableFilter items={items} defaultCollapsed />
    </div>
  );
}
`