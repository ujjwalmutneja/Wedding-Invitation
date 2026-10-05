@echo off
title Divya & Jayank Wedding Invitation Server
cd /d "%~dp0"

echo ===================================================================
echo     Divya & Jayank - Luxury Wedding Invitation Server
echo ===================================================================
echo.

:: Step 1: Build the latest production bundle
echo [1/3] Compiling latest invitation bundle...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed. Please check for errors above.
    pause
    exit /b %errorlevel%
)

:: Step 2: Kill any existing instances on port 5173
echo [2/3] Preparing web server on port 5173...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do taskkill /f /pid %%a >nul 2>&1
timeout /t 1 >nul

:: Step 3: Start the local static server in background
start "Invitation-Web-Server" /min cmd /c "npx -y sirv-cli dist --port 5173 --host 0.0.0.0 --cors --single --dev"
timeout /t 3 >nul

:: Step 4: Start Cloudflare Tunnel
echo [3/3] Launching Cloudflare Tunnel...
echo.
echo ===================================================================
echo   Look below for your shareable public link (https://...trycloudflare.com)
echo   Keep this window OPEN while sharing the invitation with guests!
echo ===================================================================
echo.

cloudflared.exe tunnel --protocol http2 --url http://localhost:5173

echo.
echo Server stopped.
pause
