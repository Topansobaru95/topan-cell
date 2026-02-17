@echo off
REM =========================================
REM TOPAN CELL - Local Server (Python)
REM =========================================
echo.
echo ╔═══════════════════════════════════╗
echo ║  TOPAN CELL - Local Server        ║
echo ╚═══════════════════════════════════╝
echo.
echo Jalankan server lokal untuk testing...
echo.
echo Buka browser dan kunjungi: http://localhost:8000
echo Tekan Ctrl+C untuk stop server
echo.

python -m http.server 8000

if errorlevel 1 (
    echo.
    echo Python tidak terinstall!
    echo Download dari: https://www.python.org/downloads/
    echo.
)
pause
