@echo off
REM =========================================
REM TOPAN CELL - Git Upload Helper (Windows)
REM =========================================
echo.
echo ╔════════════════════════════════════╗
echo ║  TOPAN CELL - GitHub Upload Helper ║
echo ╚════════════════════════════════════╝
echo.

REM Setup Git Configuration
echo [1/4] Setting up Git configuration...
git config --global user.name "TOPAN CELL Owner"
git config --global user.email "topancell@email.com"

REM Initialize Repository
echo [2/4] Initializing Git repository...
if not exist .git (
    git init
)

REM Add All Files
echo [3/4] Adding files...
git add .

REM Commit
echo [4/4] Creating commit...
set /p commit_msg="Masukkan pesan commit (default: Update website): "
if "%commit_msg%"=="" set commit_msg=Update website TOPAN CELL
git commit -m "%commit_msg%"

echo.
echo ✅ Done! Sekarang jalankan:
echo.
echo    git remote add origin https://github.com/USERNAME/topan-cell.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo GANTI USERNAME dengan username GitHub Anda!
echo.
pause
