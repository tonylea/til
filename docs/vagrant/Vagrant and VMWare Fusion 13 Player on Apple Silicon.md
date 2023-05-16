# Vagrant and VMWare Fusion 13 Player on Apple Silicon

## Install Rosetta 2

```bash
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

## Install Vagrant

```bash
brew install vagrant
```

## Installing VMWare Fusion Player 13

```bash
brew install --cask vmware-fusion
```

After this is installed, and before the next step, open the VMWare Fusion Player app and follow the instructions to install a license.

## Installing Vagrant VMWare provider

```bash
brew install --cask vagrant-vmware-utility
```

Then install the plugin:

```bash
vagrant plugin install --plugin-version=3.0.1 vagrant-vmware-desktop
```

> **Note:** The latest version at time of write, 3.0.2, does not work with Vagrant. 3.0.1 does.

## Installing a Vagrant box

You can use the following example as a box based on Ubuntu 20.04.5:

```vagrantfile
VAGRANTFILE_API_VERSION = "2"
VM_BOX = "starboard/ubuntu-arm64-20.04.5"
VM_BOX_VERSION = "20221120.20.40.0"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = VM_BOX
    config.vm.box_version = VM_BOX_VERSION
    config.vm.box_download_insecure = true
    config.vm.provider "vmware_desktop" do |vmware|
        vmware.ssh_info_public = true
        vmware.gui = true
        vmware.linked_clone = false
        vmware.vmx["ethernet0.virtualdev"] = "vmxnet3"
    end
end
```

The line `vmware.vmx["ethernet0.virtualdev"] = "vmxnet3"` is extremely important otherwise your box will most likely fail to boot as it will try to use the legacy `e1000` VMWare NIC which is apparently not working anymore.

The line `vmware.gui = true` is also needed. If set to `false` Vagrant will not work.
