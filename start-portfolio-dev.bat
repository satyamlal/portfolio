@echo off
setlocal EnableDelayedExpansion

:: ============================================================
::  start-portfolio-dev.bat
::
::  Double-click  →  UAC popup  →  auto-setup  →  Next.js :3000
::
::  CHANGE THIS if your WSL project folder is different:
set "PROJECT_PATH=~/portfolio"
:: ============================================================


:: ── Self-elevate: triggers UAC if not already Admin ────────
net session >nul 2>&1
if %errorlevel% neq 0 (
    powershell -Command "Start-Process cmd -ArgumentList '/c \"%~f0\"' -Verb RunAs"
    exit /b
)


cls
echo.
echo  =============================================
echo   Portfolio Dev Launcher
echo  =============================================
echo.


:: ── Step 1: Kill anything on port 3000 inside WSL2 ────────
echo  [1/5]  Killing port 3000 in WSL2...
wsl bash -c "lsof -ti:3000 2>/dev/null | xargs -r kill -9 2>/dev/null; fuser -k 3000/tcp 2>/dev/null; exit 0"
echo         Done.
echo.


:: ── Step 2: Read WSL2 internal IP (changes every restart) ─
echo  [2/5]  Reading WSL2 IP...
for /f "tokens=1" %%i in ('wsl hostname -I') do set "WSL_IP=%%i"
echo         %WSL_IP%
echo.


:: ── Step 3: Refresh portproxy (Windows :3000 → WSL2 :3000)
echo  [3/5]  Port forwarding: Windows :3000 --^> WSL2 :3000...
netsh interface portproxy delete v4tov4 listenport=3000 listenaddress=0.0.0.0 >nul 2>&1
netsh interface portproxy add    v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=%WSL_IP%
echo         Done.
echo.


:: ── Step 4: Refresh inbound firewall rule for port 3000 ───
echo  [4/5]  Updating firewall rule...
netsh advfirewall firewall delete rule name="Portfolio Dev Port 3000" >nul 2>&1
netsh advfirewall firewall add    rule name="Portfolio Dev Port 3000" dir=in action=allow protocol=TCP localport=3000 >nul
echo         Done.
echo.


:: ── Step 5: Get Windows WiFi IP ───────────────────────────
echo  [5/5]  Reading Windows WiFi IP...
powershell -NoProfile -Command "Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '172.*' -and $_.IPAddress -notlike '192.168.56.*' -and $_.IPAddress -notlike '169.254.*' } | Select-Object -First 1 -ExpandProperty IPAddress" > "%TEMP%\dev_winip.txt" 2>nul
set /p WIN_IP=<"%TEMP%\dev_winip.txt"
del "%TEMP%\dev_winip.txt" >nul 2>&1
echo         %WIN_IP%
echo.


:: ── Launch Next.js in a new WSL terminal window ───────────
echo  Launching Next.js dev server...
echo.
start "Portfolio Dev  ^|  yarn dev" wsl bash -c "cd %PROJECT_PATH% ; yarn dev -H 0.0.0.0"


:: ── Wait for Next.js to compile ───────────────────────────
timeout /t 6 /nobreak >nul


:: ── Print URLs ─────────────────────────────────────────────
cls
echo.
echo  =============================================
echo   Dev Server Ready!
echo  =============================================
echo.
echo    Desktop  ^>  http://localhost:3000
echo.
echo    Phone    ^>  http://%WIN_IP%:3000
echo.
echo  =============================================
echo.
echo    Keep the "Portfolio Dev" window open.
echo    Close this one whenever.
echo.
pause
