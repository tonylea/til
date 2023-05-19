# How to authenticate sudo using Touch ID

In Terminal, open the `/etc/pam.d/sudo` file as root and edit look like this:

```text
# sudo: auth account password session
auth       sufficient     pam_tid.so
auth       sufficient     pam_smartcard.so
auth       required       pam_opendirectory.so
account    required       pam_permit.so
password   required       pam_deny.so
session    required       pam_permit.so
```

**Note:** It is only the first line of config that is changed.

Save the file and exit. Now you can use Touch ID to authenticate sudo commands.

**Note:** MacOS updates will occasionally wipe this change, so you may need to reapply it.
