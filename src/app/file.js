import { open, save } from '@tauri-apps/api/dialog';
import { readTextFile, writeBinaryFile } from '@tauri-apps/api/fs';
import { downloadDir } from '@tauri-apps/api/path';

class File {
  static async saveFile(saveName, blob, filterName = 'Image', filterExtensions = ['png']) {
    // console.log('save 1')
    const basePath = await downloadDir();
    let filePath = await save({
      filters: [{
        name: filterName,
        extensions: filterExtensions
      }],
      defaultPath: basePath,
    });

    try {
      filePath = filePath.replace(/Untitled$/, '');
    } catch {
      throw new Error('filePathNull')
    }
    // console.log('save 2')

    let saveBinaryFile = { 
      contents: blob, 
      path: `${filePath}${saveName}` 
    };
    // console.log('save 3')
    return writeBinaryFile(saveBinaryFile);
  }

  static async openLocalFile(filtersName, extensions = []) {
    const selected = await open({
      title: 'Choose Image',
      directory: false,
      multiple: false,
      filters: [{
        name: filtersName,
        extensions: extensions
      }]
    });
    // user selected multiple files, user cancelled the selection
    if (Array.isArray(selected) || selected === null) {
      return '';
    }
    // user selected a single file
    return selected;
  }

  static readTextFile(filePath) {
    return readTextFile(filePath);
  }
}

export {
  File
}