# How to rename 'master' branch to 'main'

```bash
git branch -m master main
git push -u origin main
```

Then in GitHub, manually delete the `master` branch. You cannot do this is the shell becuase GitHub will not let you delete the default branch, and if have to manually set the default branch, you might as well manually delete the `master` instead.
