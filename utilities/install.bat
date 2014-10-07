@echo off

ECHO.
ECHO   InstallingChocolatey
ECHO

@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

ECHO.
ECHO  Installing Node.JS dependency
ECHO

cinst nodejs.install

ECHO.
ECHO  Installing grunt & grunt-cli dependency.
ECHO

call npm install grunt grunt-cli -g

ECHO.
ECHO  Install node modules
ECHO

call npm install

echo "EXITING IN 2 SECONDS"