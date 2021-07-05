Wir brauchen eine package.json

npm init:
=> verwenden um die json Datei zu erstellen -> mit Enter durch die Informationen gehen 


npm init -y:
=> erstellt eine Standard package.json

dependencies:
alles was wir für unsere Seite live brauchen!

devDependencies (development)
npm install --save-dev nodemon
=> wird NUR während der entwicklung gebraucht, später NICHT mehr // nur zur local Entwicklung 

Scripts:
können wir Befehle festlegen, die ausgeführt werden sollen


npm rund dev:
=> Liveserver für während der Entwicklung des Projektes! 


.gitignore: 
alles in diese Datei hineinschreiben, was nicht auf GITHUB soll
WICHTIG: 
/node_modules
oder Dinge wie API-KEY und sonstige sensible Daten