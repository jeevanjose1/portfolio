const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach(function(file) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        filelist.push(filepath);
      }
    }
  });
  return filelist;
}

const files = walkSync('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content.replace(/\[Name\]/g, 'Your Name');
  
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});
