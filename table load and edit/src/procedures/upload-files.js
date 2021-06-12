import { getFileName } from './IO-file.js';
// import { XLSX } from '//unpkg.com/xlsx/dist/xlsx.full.min.js';

export function uploadFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    /* DO SOMETHING WITH workbook HERE */

    console.log(workbook);

    const sheetName = workbook.SheetNames[0];
    var sheet = workbook.Sheets[sheetName];
    document.getElementById('data-table').innerHTML =
      XLSX.utils.sheet_to_html(sheet);

    console.log(sheet);
  };

  reader.readAsArrayBuffer(file);

  reader.onerror = function () {
    console.log(reader.error);
  };
}
