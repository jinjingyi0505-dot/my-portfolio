@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Please install Node.js LTS from https://nodejs.org first.
 pause
 exit /b 1
)
echo Open http://localhost:3000 in your browser.
echo Keep this window open while viewing the website.
node server.mjs
pause
