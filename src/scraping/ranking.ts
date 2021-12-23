import Nightmare from "nightmare";

import { formatScrapingResult } from '../helpers/formatScrapingResult';
import { createReport } from '../helpers/createReport';

const getRanking = async () => {
  console.log("🔎 Scraping started");

  const nightmare = new Nightmare({ show: true });

  await nightmare.goto('https://pypl.github.io/PYPL.html')
    .evaluate(() => { 
      const table = document.querySelector('.table')!;
      
      const rows = Array.from(table.querySelectorAll('tr'));

      const data = rows.map(row => {
        const columns = Array.from(row.querySelectorAll('td'));
        return columns.map(column => column.textContent || column.innerHTML);
      })

      data.shift();
      data.pop();

      return data;
    })
    .end()
    .then(async (data: string[][]) => {
      console.log("🔎 Scraping done");
      
      nightmare.end();

      await createReport(formatScrapingResult(data));
      
      return formatScrapingResult(data);
    })
    .catch(error => {
      throw new Error(error);
    })
}

export { getRanking };