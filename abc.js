"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridDemo;

var React = _interopRequireWildcard(require("react"));

var _dataGrid = require("@material-ui/data-grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const columns = [{
  field: 'id',
  headerName: 'ID',
  width: 70
}, {
  field: 'firstName',
  headerName: 'First name',
  width: 130
}, {
  field: 'lastName',
  headerName: 'Last name',
  width: 130
}, {
  field: 'age',
  headerName: 'Age',
  type: 'number',
  width: 90
}, {
  field: 'fullName',
  headerName: 'Full name',
  description: 'This column has a value getter and is not sortable.',
  sortable: false,
  width: 160,
  valueGetter: params => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`
}];
const rows = [{
  id: 1,
  lastName: 'Snow',
  firstName: 'Jon',
  age: 35
}, {
  id: 2,
  lastName: 'Lannister',
  firstName: 'Cersei',
  age: 42
}, {
  id: 3,
  lastName: 'Lannister',
  firstName: 'Jaime',
  age: 45
}, {
  id: 4,
  lastName: 'Stark',
  firstName: 'Arya',
  age: 16
}, {
  id: 5,
  lastName: 'Targaryen',
  firstName: 'Daenerys',
  age: null
}, {
  id: 6,
  lastName: 'Melisandre',
  firstName: null,
  age: 150
}, {
  id: 7,
  lastName: 'Clifford',
  firstName: 'Ferrara',
  age: 44
}, {
  id: 8,
  lastName: 'Frances',
  firstName: 'Rossini',
  age: 36
}, {
  id: 9,
  lastName: 'Roxie',
  firstName: 'Harvey',
  age: 65
}];

function DataGridDemo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 400,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(_dataGrid.DataGrid, {
    rows: rows,
    columns: columns,
    pageSize: 5,
    checkboxSelection: true
  }));
}
