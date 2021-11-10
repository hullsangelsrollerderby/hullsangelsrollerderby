git branch -D gh-pages  
git subtree split --prefix dist -b gh-pages
git push -f github gh-pages:gh-pages