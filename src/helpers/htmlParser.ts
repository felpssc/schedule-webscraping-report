import ejs from 'ejs';
import path from 'path';

const htmlParser = (data: any) => {
  return ejs.renderFile(path.resolve(__dirname, '..', 'templates', 'table.ejs'), { data });
}

export { htmlParser };