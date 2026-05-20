import os, glob, re

count = 0
for filepath in glob.glob('src/**/*.tsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace <Link with <Link scroll={false} if it doesn't already have it
    # We use a regex that looks for <Link followed by space or newline, and ensures scroll={false} is not in the tag
    
    new_content = re.sub(r'<Link\b(?![^>]*scroll=\{false\})', '<Link scroll={false}', content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        count += 1
        print(f"Updated {filepath}")

print(f"Updated {count} files.")
