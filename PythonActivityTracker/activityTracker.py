import wmi
import time
# from datetime import datetime
import win32com.client 
import requests

strComputer = "." 
f = wmi.WMI()
# file = open('sampleTasks.csv','w')
url = 'http://127.0.0.1:8000/api/addAppHistory'

while(True):
    # now = datetime.now()
    # file.write(f"Time, {now}\n")
    # file.write(f"P-ID, Process Name\n")
    processes = {"set"}
    processes.clear()
    for process in f.Win32_Process():
        # file.write(f"{process.ProcessId:<10}, {process.Name}\n")
        if str(process.Name).find("svc")!=0:  
            processes.add(process.Name)
    print(processes)
    objWMIService = win32com.client.Dispatch("WbemScripting.SWbemLocator") 
    objSWbemServices = objWMIService.ConnectServer(strComputer,"root\cimv2") 
    colItems = objSWbemServices.ExecQuery("Select * from Win32_LogicalDisk")
    devices= [] 
    for objItem in colItems:
        d = {"Description: ": str(objItem.Description),
        "Device ID: ": str(objItem.DeviceID),
        "Drive Type: ": str(objItem.DriveType), 
        "File System: ": str(objItem.FileSystem), 
        "Size: ": str(objItem.Size), 
        "Free Space: ": str(objItem.FreeSpace),
        "System Name: ": str(objItem.SystemName), 
        "Volume Name: ": str(objItem.VolumeName),
        "Volume Serial Number: ": str(objItem.VolumeSerialNumber) }
        devices.append(d)
    print(processes, devices)
    
    data = {"collection":"App102-1",
    "appArray": str(processes),
    "deviceArray": str(devices)}
    x = requests.post(url, json=data)
    print(x.text)

    time.sleep(180)    
# file.close()
