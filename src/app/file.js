import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';

class File {
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