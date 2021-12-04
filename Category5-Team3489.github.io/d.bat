CALL build.bat
del "E:\Projects\Visual Studio\Category5-Team3489.github.io\docs" /s /f /q
xcopy /s /f /q /y "E:\Projects\Visual Studio\Category5-Team3489.github.io\Category5-Team3489.github.io\build" "E:\Projects\Visual Studio\Category5-Team3489.github.io\docs"

cd "E:\Projects\Visual Studio\Category5-Team3489.github.io"

git add .
git commit -m "Deploy website"
git push

pause