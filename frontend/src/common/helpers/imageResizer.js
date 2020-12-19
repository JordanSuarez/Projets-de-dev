import Resizer from 'react-image-file-resizer';

// Set max resolution to a file base64

// https://www.npmjs.com/package/react-image-file-resizer
export default (file, maxResolution) => new Promise((resolve) => {
  Resizer.imageFileResizer(file.file, maxResolution, maxResolution, 'PNG', 100, 0,
    (uri) => {
      resolve(uri);
    },
    'base64');
});
