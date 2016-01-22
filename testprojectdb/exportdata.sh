




echo $PATH
OSNAME=`uname -s`
ART_DATA_PATH=/tmp/applifire/db/1WZWHUGVRU305C4VRU9WA/18D01ABF-F632-496A-B379-FC50EDEAB8C0/art/data
AST_DATA_PATH=/tmp/applifire/db/1WZWHUGVRU305C4VRU9WA/18D01ABF-F632-496A-B379-FC50EDEAB8C0/ast/data
DB_NAME=applifire
USER=root
PASSWORD=root
PORT=3306
HOST=localhost
MYSQL=/usr/bin
PROJECT_ID=1WZWHUGVRU305C4VRU9WA
PROJECT_VERSION_ID=1

if [ $OSNAME == "Darwin" ]; then
echo "Setting up MYSQL PATH for OS $OSNAME"
MYSQL=/usr/local/mysql/bin/
fi



echo 'copy ART data from applifire starts....'
echo 'copy ART data from applifire ends....'

