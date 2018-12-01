#CEVA Documentation

##Pre-requisites
The Capstone Exposition Voting Application (CEVA) is a web application that only requires a browser. Any browser from Internet Explorer, Edge, FireFox, or Chrome should work. Additionally, an internet connection will be needed to obtain data from the external database used for CEVA. Beyond this, a keyboard and mouse to interact with the comment, voting, and navigation of the application within the administrator console will be necessary.

Aside from the administrator console, the root of CEVA is a mobile web application. Therefore, for best viewing and usability, it is recommended to use CEVA on your mobile device.
Release Notes

###CEVA ver 1.2
Voter User
 - Added option to switch between morning and evening expos
 - UI streamlined
 - Project view is now the default tab
 - Added expo schedule to map view
 - Added short excerpt in the about tab

Administrative User
 - Added ability to upload projects via CSV
 - Changed color theme
 - Enabled toggle between morning and afternoon expos
 - Added ability for admins to manually add projects to the map view

Known Bugs
 - Issue with API where sometimes projects will disappear from list
 - In map view, a bit of the map cuts off into the schedule

###CEVA ver 1.1
29 September 2018
Voter User
 - Home tab removed; replaced with about tab
 - About tab provides basic info about expo such as location and time
 - Expo map is now the what users see when they open the app
 - Added project filter and search bar
 - Added vote confirmation

Administrative User
 - Added admin portal for viewing statistics and logistics
 - Added taskbar 
 - Expo info, expo projects, view results, add map details, dropdown for semester
 - Results tab shows graphs with voting data

###CEVA ver 1.0
9 September 2018
Voter User
 - Added taskbar
 - Home, projects, expo map
 - Added project page with team info in a drop-down menu
 - Added voting and comment skeleton
 - Added basic-featureless map

##Install Guide/Run Instructions
Frontend
There are no prerequisites for our client to run and see the web application. The only thing that is needed is a device that is connected to the internet. Our client will access the following admin link: https://ceva-capestone.firebaseapp.com/admin
The actual web page that the Expo attendees will access will be on the following website: https://ceva-capestone.firebaseapp.com, where the attendees will vote, comment and view all the available projects for the selected exposition.

There are no third-party libraries or any other instructions that the customer or the user needs to access the projects, besides the two provided links

If the customer would like to see the source code of our project, they can access it through our GitHub page https://github.com/jcnguyen1994/CEVA

##Developer Install Guide/Run Instructions
The below libraries are needed to develop and deploy the application
-Git
-Firebase 
-Node /NPM
- Angular CLI

If the customer would like to run and see our source code using a text editor, they would need to have Git installed, where they can follow the instructions on this link for either mac or windows: https://www.atlassian.com/git/tutorials/install-git. After the customer has set up git correctly, they can clone and download the project using the following command on the terminal:
git clone https://github.com/jcnguyen1994/CEVA.git.
The project will be installed and the customer will be able to see a folder named “CEVA” on the directory they called the clone command on.

The Firebase Tools installation can be downloaded using *npm install firebase-tools* which will allow the developer to deploy the application to the hosting url and access of features associated with firebase. The project files are already set-up and developer simply needs to request access to the appropriate firebase console. Insert link

The Angular CLI tool is required to build the application and can be installed using the command *npm install angular/cli*. This tool allows developers to build the application using the ng build command as well as access other features such as local deployment, testing, and automatic code generation.

##Backend API
The below libraries are needed to develop and deploy the application
-Git
-Node /NPM
The customer can clone and download the project using the following command on the terminal:
git clone https://github.com/skwallace36/CEVAapi.git
After this step is completed the customer will see a folder named “CEVAapi” on the directory they called the clone command on.


After the above steps have been completed, the customer will have access to the source code of both our frontend(“CEVA”) and backend(“CEVAapi”). In terms of troubleshooting, the customer won’t have to worry any any issues occuring, because both the admin and attendee views are hosted online using firebase, so the only thing they have to do is access the two provided links. Lastly, if the customer wants to have no issues regarding installation, they should follow the steps that we provided for both our frontend and backend code. This will make sure that our client will have an easy time installing and configuring the finished version of the project.
