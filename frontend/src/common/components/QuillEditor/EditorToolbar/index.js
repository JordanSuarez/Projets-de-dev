export const modules = {

  // For use custom Font, use array in font object in the toolbar object behind
  // like {font: ['sans-serif', '', '']}
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: 'sans-serif' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' },
    // { indent: '-1' }, { indent: '+1' }]
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export const formats = [
  'header', 'size', 'font',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
];
