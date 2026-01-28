// 文件路径: lib/xlsx-parser.ts
import * as XLSX from 'xlsx';

// 定义我们要寻找的表头特征
// 只有当一行完全包含这些关键字段时，我们才认为它是表头行
const HEADER_KEYWORDS = [
  "交易时间", 
  "交易类型", 
  "交易对方", 
  "商品", 
  "收/支", 
  "金额(元)", 
  "支付方式", 
  "当前状态", 
  "交易单号", 
  "商户单号", 
  "备注"
];

export const parseExcelFile = (file: File): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        if (!data) return resolve([]);

        // 使用 ArrayBuffer 读取，彻底解决废弃方法报错
        const workbook = XLSX.read(data, { type: 'array' });
        
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // 获取原始数据
        const jsonData = XLSX.utils.sheet_to_json<any[]>(sheet, { header: 1 });

        // 寻找表头行索引
        const headerIndex = jsonData.findIndex((row) => {
          if (!Array.isArray(row) || row.length < 3) return false;
          
          // 增加可选链和去空格处理，更健壮
          const col0 = String(row[0] || "").trim();
          const col1 = String(row[1] || "").trim();
          const col5 = String(row[5] || "").trim();

          return (
            col0 === HEADER_KEYWORDS[0] && 
            col1 === HEADER_KEYWORDS[1] && 
            col5 === HEADER_KEYWORDS[5]
          );
        });

        if (headerIndex === -1) {
          console.warn("未找到标准表头");
          resolve([]);
          return;
        }

        // 截取数据并过滤空行
        const formattedRows = jsonData
          .slice(headerIndex + 1)
          .filter(row => row && row.length > 0 && row.some(cell => cell !== null)) 
          .map(row => row.join(', '));

        resolve(formattedRows);

      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    
    // 现代浏览器标准写法
    reader.readAsArrayBuffer(file);
  });
};