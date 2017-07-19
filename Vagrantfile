# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntuServer16-04-2"
  config.vm.synced_folder ".", "/home/vagrant/site", type: "nfs"
  config.vm.provider "vmware_fusion" do |vmware|
    vmware.vmx["memsize"] = "2048"
    vmware.vmx["numvcpus"] = "2"
    vmware.vmx["ethernet0.pcislotnumber"] = "32"
  end
  config.vm.provision :ansible do |ansible|
    ansible.verbose = "v"
    ansible.playbook = "provision/playbook.yml"
  end
end
