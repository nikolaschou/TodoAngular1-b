dir
cd

echo Installing lodash
call  npm install lodash
echo Installing node modules
call npm install -g grunt-cli bower
echo Running gulp
call grunt build
echo %DEPLOYMENT_SOURCE% and %DEPLOYMENT_TARGET%
dir dist
xcopy %DEPLOYMENT_SOURCE%/dist %DEPLOYMENT_TARGET% /Y
dir %DEPLOYMENT_TARGET%


