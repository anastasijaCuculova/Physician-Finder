# Physician-Finder


1. Симнете и инсталирајте Elasticsearch

https://www.elastic.co/downloads/elasticsearch

2. Копирајте ја содржината од архивата data.rar во директориумот data/ на локацијата каде што е инсталиран
Elasticsearch

3. Во датотеката elasticsearch.yml во config директориумот на инсталацијата на Elasticsearch на крајот додадете
ги следните редови:

http.cors.enabled : true
http.cors.allow-origin : "*"
http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length

4. Стартувајте го Elasticsearch (од bin/service.bat start)

5. Отворете index.html
