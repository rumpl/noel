# Exemple 2

## Executer un conteneur en partageant un volume

```
$ docker run -v $(pwd):/usr/share/nginx/html -d -p 8080:80 nginx
```
