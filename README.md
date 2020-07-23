Clone the repo and run `docker-compose up -d`


*apache2*

`curl localhost:8080/server1/api/v1/fake`
`curl localhost:8080/server2/api/v2/fake`

*nginx*

`curl localhost:8181/server1/api/v1/fake`
`curl localhost:8181/server2/api/v2/fake`

*traefik*

`curl localhost:8282/server1/api/v1/fake`
`curl localhost:8282/server2/api/v2/fake`
