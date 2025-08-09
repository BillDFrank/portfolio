@echo off
REM Portfolio Deployment Script for Windows
REM This script helps deploy the portfolio to Vercel + Supabase + Railway/Render

echo 🚀 Portfolio Deployment Script
echo ==============================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed
    pause
    exit /b 1
)

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed
    pause
    exit /b 1
)

echo 📋 All requirements satisfied

:menu
echo.
echo Choose deployment option:
echo 1. Full setup (local + cloud)
echo 2. Local development setup only
echo 3. Deploy to Vercel + Railway
echo 4. Deploy to Vercel + Render
echo 5. Setup Supabase database
echo 6. Exit
echo.

set /p choice=Enter your choice (1-6): 

if "%choice%"=="1" goto full_setup
if "%choice%"=="2" goto local_setup
if "%choice%"=="3" goto deploy_vercel_railway
if "%choice%"=="4" goto deploy_vercel_render
if "%choice%"=="5" goto setup_supabase
if "%choice%"=="6" goto exit
goto menu

:full_setup
call :setup_backend
call :setup_frontend
call :setup_supabase
echo 🎉 Full setup complete!
pause
exit /b

:local_setup
call :setup_backend
call :setup_frontend
echo 🎉 Local development setup complete!
pause
exit /b

:setup_backend
echo 🔧 Setting up backend...
cd backend

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
call venv\Scripts\activate

REM Install dependencies
echo Installing Python dependencies...
pip install -r requirements.txt

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo Creating .env file...
    copy .env.example .env
    echo ⚠️  Please update backend\.env with your actual values
)

cd ..
echo ✅ Backend setup complete
exit /b

:setup_frontend
echo 🔧 Setting up frontend...
cd frontend

REM Install dependencies
echo Installing Node.js dependencies...
call npm install

REM Create .env file if it doesn't exist
if not exist ".env.local" (
    echo Creating .env.local file...
    copy .env.example .env.local
    echo ⚠️  Please update frontend\.env.local with your actual values
)

cd ..
echo ✅ Frontend setup complete
exit /b

:deploy_vercel_railway
echo 🚀 Deploying to Vercel + Railway...
cd frontend
echo Deploying frontend to Vercel...
call npx vercel --prod
cd ..

cd backend
echo Deploying backend to Railway...
call npx @railway/cli deploy
cd ..

echo 🎉 Deployed to Vercel + Railway!
pause
exit /b

:deploy_vercel_render
echo 🚀 Deploying to Vercel + Render...
cd frontend
echo Deploying frontend to Vercel...
call npx vercel --prod
cd ..

echo 🎉 Frontend deployed to Vercel!
echo.
echo For Render backend deployment:
echo 1. Visit https://dashboard.render.com
echo 2. Create a new Web Service
echo 3. Connect your GitHub repository
echo 4. Use render.yaml for configuration
pause
exit /b

:setup_supabase
echo 🗄️  Setting up Supabase...
echo.
echo Please follow these steps:
echo 1. Visit https://supabase.com
echo 2. Create a new project
echo 3. Copy the database URL from Settings ^> Database
echo 4. Run the SQL in backend/supabase.sql in the Supabase SQL editor
echo 5. Update your DATABASE_URL in backend/.env
echo ⚠️  Manual setup required for Supabase
pause
exit /b

:exit
echo Goodbye!
exit /b