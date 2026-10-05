@echo off
title Stop Wedding Invitation Server
cd /d "%~dp0"

echo Stopping Wedding Invitation Server...

:: Kill cloudflared process
taskkill /f /im cloudflared.exe >nul 2>&1

:: Kill process listening on port 5173
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do taskkill /f /pid %%a >nul 2>&1

echo.
echo All wedding invitation services have been cleanly stopped.
timeout /t 2 >nul
