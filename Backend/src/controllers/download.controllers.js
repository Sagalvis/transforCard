import { pool } from "../dbconfig.js";
import ExcelJS from "exceljs";

export const DownloadCustomer = async (req, res) => {
  try {
    const [resultados] = await pool.query("SELECT * FROM cliente");
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('customer');

    // Agregar encabezados de columna con estilo
    const columnas = Object.keys(resultados[0]);
    const headerRow = worksheet.addRow(columnas);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '041737' },
        color:{argb:'fff'}
      };
      cell.font = {
        color: { argb: 'FFFFFF' }
        };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });

    // Agregar filas de datos
    resultados.forEach((resultado) => {
      const fila = Object.values(resultado);
      worksheet.addRow(fila);
    });


    res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=customers.xlsx");
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al exportar los datos a Excel' });
  }
};