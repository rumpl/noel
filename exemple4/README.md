# Exemple 4

Multi-stage build

## Construire l'image

```
$ docker build . -t rumpl/multi-stage
```

## Executer

```
$ docker run -p 8080:80 rumpl/multi-stage
```
