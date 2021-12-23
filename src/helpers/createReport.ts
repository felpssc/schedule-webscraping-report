import { htmlParser } from './htmlParser';
import htmlPdf from 'html-pdf';

import { sendEmail } from '../helpers/sendEmail';


const createReport = async (data: any): Promise<void> => {
  const html = await htmlParser(data);
  
  htmlPdf.create(html).toBuffer(async (err: any, buffer) => {
    if (err) {
      throw new Error(err);
    }

    await sendEmail(buffer);
  });
}

export { createReport };