CALL build.bat
del "E:\Projects\Visual Studio\Category5-Team3489.github.io\docs" /s /f /q
xcopy /s /f /q /y "E:\Projects\Visual Studio\metater.github.io\metater.github.io\build" "E:\Projects\Visual Studio\Category5-Team3489.github.io\docs"