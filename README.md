# pennyred.widget
 
Penny Red Yahoo Widget, written in Javascript and XML for the Yahoo 
Widget (Konfabulator) Engine. Created for XP, Vista, Win7, 8, 10+ as well as the 
Apple Mac. 

This widget is now deprecated and is retained for historical reasons only, it still works but time moves ever onward - please use the VB6 version instead that you will find here: https://github.com/yereverluvinunclebert/Penny-Red-VB6-Widget

![pennyred](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/71cc3673-6c6b-40bc-abb8-ba2f4ba3df63)

This Penny Red is an attractive dieselpunk Yahoo widget for your desktop. 
It  Functional and gorgeous at the same time. This Widget is a moveable widget 
that you can move anywhere around the desktop as you require. It can act as a 
larger and more attractive icon linking to any task you require. Personally, I 
use it for opening thunderbird, the desktop email client.

![image2](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/969c751e-c65f-418b-b80d-fd5ec31c1f25)

You can select one of several stamp images. The widget can be resized - Hover the cursor over the widget. Press the CTRL key 
and use your mousewheel up or down. The widget will resize dynamically.

![image3](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/1d6efb17-7cfb-40c6-8b1b-91fc49ea2c03)

All javascript widgets need an engine to function, in this case the widget uses 
the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
creates the widget according to the XML description and using the images you 
provide. 

![image4](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/de716eda-afe2-409e-b15c-83d528c964c8)

Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/ 
	Adobe Photoshop CS ver 8.0 (2003)  https://www.adobe.com/uk/products/photoshop/free-trial-download.html  
	Yahoo Widgets SDK: engine (Konfabulator), debugger & documentation

Tested on :

	ReactOS 0.4.14 32bit on virtualBox    
	Windows 7 Professional 32bit on Intel    
	Windows 7 Ultimate 64bit on Intel    
	Windows 7 Professional 64bit on Intel    
	Windows XP SP3 32bit on Intel    
	Windows 10 Home 64bit on Intel    
	Windows 10 Home 64bit on AMD    
	Windows 11 64bit on Intel  

 ![image5](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/ba34fb84-88f8-4c0f-b930-85b9b4d4a6e7)

Dependencies:

o A windows-alike o/s such as Windows XP, 7-11 or Apple Mac OSX 11.    	

o Installation of the yahoo widget SDK runtime engine  

	Yahoo widget engine for Windows - http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg

Running the widget using a javascript engine frees javascript from running only 
within the captivity of a browser, you will now be able to run these widgets on 
your Windows desktop as long as you have the correct widget engine installed.

![image6](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/08b104be-6995-436c-86b8-15ff10a9c2b9)




Instructions for running Yahoo widgets on Windows
=================================================

1. Install yahoo widget SDK runtime engine
2. Download the gauge from this repo.
3. Unzip it
4. Double-click on the resulting .KON file and it will install and run

Instructions for running Yahoo widgets on Mac OS/X ONLY
========================================================

1. Install yahoo widget SDK runtime engine for Mac
2. Download the gauge from this repo.
3. Unzip it
4. For all all recent versions of Mac OS/X including Sierra, edit the following 
file:

com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
for these lines: 
   
	<key>DockOpen</key>  
	<string>false</string>  

Change to false if it is true.

5. Double-click on the widgets .KON file and it will install and run

Wit these instructions you should be able to start Yahoo! Widgets and the 
menubar item should appear. Widgets can then be started from the menubar or by 
double-clicking on the KON file in the usual way.

![about](https://github.com/yereverluvinunclebert/pennyred.widget/assets/2788342/3ee9300d-ec3c-4747-8b83-e0b2d3d015af)

LICENCE AGREEMENTS:

Copyright 2023 Dean Beedell

In addition to the GNU General Public Licence please be aware that you may use
any of my own imagery in your own creations but commercially only with my
permission. In all other non-commercial cases I require a credit to the
original artist using my name or one of my pseudonyms and a link to my site.
With regard to the commercial use of incorporated images, permission and a
licence would need to be obtained from the original owner and creator, ie. me.
