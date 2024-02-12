
# Commandes

```bash
docker network create elastic-search

docker run -p 9200:9200 -p 9300:9300 -d  --net elastic-search --name=cours-elastic -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:8.12.1

docker exec -it cours-elastic /usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic

docker cp cours-elastic:/usr/share/elasticsearch/config/certs/http_ca.crt .
```