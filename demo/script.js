

const element = document.querySelector('sophos-plastic-table');
element.mainHeader = 'Hello from main header';
element.caption = 'hello from caption';
element.tableData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
element.colGroups = [
  {
    span: '1',
    class: 'selected-column'
  },
  {
    span: '2',
    class: 'non-selected-column',
    style: {
      backgroundColor: 'gray'
    }
  }
];
element.columnNames = ['', 'impares', 'pares', 'impares'];
element.rowNames = ['primera', 'segunda', 'tercera'];