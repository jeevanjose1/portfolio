const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const colorMap = {
  'accent': 'accent',
  'background': 'background',
  'foreground': 'text',
  'primary': 'primary',
  'muted-foreground': 'text-muted'
};

let matchCount = 0;
let fileCount = 0;

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex matches: (hover:|group-hover:|focus:|dark:)?(bg|text|border|shadow)-(accent|background|foreground|primary|muted-foreground)/([0-9]+)
    const regex = /(?:hover:|group-hover:|focus:|dark:)?(?:bg|text|border|shadow)-(?:accent|background|foreground|primary|muted-foreground)\/[0-9]+/g;
    
    let newContent = content.replace(regex, (match) => {
      // Split into prefix (hover:) and actual class (bg-accent/10)
      let prefix = '';
      let cls = match;
      
      const parts = match.split(':');
      if (parts.length > 1) {
        prefix = parts.slice(0, -1).join(':') + ':';
        cls = parts[parts.length - 1];
      }

      // cls is like bg-accent/10
      const [typeAndColor, opacity] = cls.split('/');
      const [type, color] = typeAndColor.split('-');
      // type is bg, border, text, shadow
      // color is accent, background, etc. (might be multi-word like muted-foreground, let's fix that)
      const colorName = typeAndColor.substring(type.length + 1); // e.g. accent or muted-foreground
      
      const cssVar = colorMap[colorName] || colorName;
      
      matchCount++;
      return `${prefix}${type}-[color-mix(in_srgb,var(--color-${cssVar})_${opacity}%,transparent)]`;
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      fileCount++;
      console.log(`Updated ${filePath}`);
    }
  }
});

console.log(`\nReplaced ${matchCount} broken opacity modifiers across ${fileCount} files.`);
