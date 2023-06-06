# Automatically set the upstream on branch creation

To get rid of the `fatal: The current branch configure-unit-tests-stage has no upstream branch.` error message, you can set the upstream branch automatically on branch creation.

```bash
git config --global --add --bool push.autoSetupRemote true
```

## References

- [Auto setup remote branch with push.autoSetupRemote](https://medium.com/@anjusha.khandavalli/auto-setup-remote-branch-with-push-autosetupremote-892ddd7644)
